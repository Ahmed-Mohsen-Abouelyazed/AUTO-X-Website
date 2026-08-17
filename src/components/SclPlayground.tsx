import { useState, useId } from 'react'
import { Play, Download, Copy, Check, Terminal, Cpu, RefreshCw, Layers, CheckCircle2, Sparkles } from 'lucide-react'

interface Scenario {
  id: string
  title: string
  subtitle: string
  narrative: string
  sclCode: string
  tagsCount: number
  interlocksCount: number
  standard: string
}

const SCENARIOS: Scenario[] = [
  {
    id: 'mixer',
    title: 'Chemical Mixing Reactor',
    subtitle: 'ISA-88 Equipment Module with Agitator Timer & Thermal Trip',
    narrative: `Control Narrative:
1. When Operator initiates Cmd_Start and Tank_HighLevel is TRUE, start Agitator_Motor (Out_AgitatorContactor).
2. If Tank_HighLevel drops below threshold or Cmd_Stop is pressed, de-energize agitator.
3. If Thermal_Overload is TRUE, trip immediately with Alarm_HighPriority.
4. Maintain running feedback Fbk_Running. If command active for > 3.0s without feedback, trip Feedback_Fault.`,
    sclCode: `FUNCTION_BLOCK "FB_MixerReactor"
{ S7_Optimized_Access := 'TRUE' }
VERSION : 1.0
VAR_INPUT
    Cmd_Start : Bool;         // Start PB / SCADA trigger
    Cmd_Stop : Bool;          // Stop PB
    Tank_HighLevel : Bool;    // High level permissive sensor
    Thermal_Overload : Bool;  // Thermal relay auxiliary trip
    Fbk_Running : Bool;       // Contactor auxiliary feedback
END_VAR
VAR_OUTPUT
    Out_Agitator : Bool;      // Digital output to motor contactor
    Status_Running : Bool;    // Running status
    Alarm_Trip : Bool;        // High priority thermal trip alarm
    Alarm_FbkFault : Bool;    // Feedback discrepancy alarm
END_VAR
VAR
    statState : Int;          // 0: STOPPED, 1: STARTING, 2: RUNNING, 3: TRIPPED
    tonFbkCheck : TON_TIME;   // Feedback confirmation timer
END_VAR

BEGIN
    // Hard Mechanical Interlock (ISA-18.2 Priority Gate)
    IF #Thermal_Overload THEN
        #statState := 3; // TRIPPED
        #Out_Agitator := FALSE;
        #Alarm_Trip := TRUE;
    ELSE
        #Alarm_Trip := FALSE;

        CASE #statState OF
            0: // STOPPED
                #Out_Agitator := FALSE;
                IF #Cmd_Start AND #Tank_HighLevel AND NOT #Cmd_Stop THEN
                    #statState := 1; // STARTING
                END_IF;

            1: // STARTING
                #Out_Agitator := TRUE;
                IF #Fbk_Running THEN
                    #statState := 2; // RUNNING
                END_IF;

            2: // RUNNING
                #Out_Agitator := TRUE;
                IF #Cmd_Stop OR NOT #Tank_HighLevel THEN
                    #statState := 0; // STOPPED
                END_IF;

            3: // TRIPPED
                #Out_Agitator := FALSE;
                IF NOT #Thermal_Overload AND #Cmd_Stop THEN
                    #statState := 0; // Reset to STOPPED
                END_IF;
        END_CASE;
    END_IF;

    // Feedback supervision (3.0s timeout)
    #tonFbkCheck(IN := (#statState = 1), PT := T#3S);
    IF #tonFbkCheck.Q AND NOT #Fbk_Running THEN
        #Alarm_FbkFault := TRUE;
        #statState := 3;
    ELSE
        #Alarm_FbkFault := FALSE;
    END_IF;

    #Status_Running := (#statState = 2);
END_FUNCTION_BLOCK`,
    tagsCount: 9,
    interlocksCount: 4,
    standard: 'ISA-88 / IEC 61131-3 / ISA-18.2',
  },
  {
    id: 'conveyor',
    title: 'Pallet Conveyor Sorting Cell',
    subtitle: 'Optical Sensor Part ID with Pneumatic Diverter Gate',
    narrative: `Control Narrative:
1. Main conveyor motor (Out_MotorRun) runs when Line_Permissive is TRUE and E_Stop is OK.
2. When Optical_Sensor detects a defective carton (Defect_Tag == TRUE), start Shift_Register tracking.
3. When carton reaches Diverter_Station_PE, energize Pneumatic_Pusher for 1.2s to reject item.
4. Auto-count Total_Inspected and Total_Rejected cartons in Global Data Block.`,
    sclCode: `FUNCTION_BLOCK "FB_ConveyorSorting"
{ S7_Optimized_Access := 'TRUE' }
VERSION : 1.0
VAR_INPUT
    Line_Permissive : Bool;
    E_Stop_OK : Bool;
    Optical_Sensor : Bool;
    Defect_Tag : Bool;
    Diverter_PE : Bool;
END_VAR
VAR_OUTPUT
    Out_MotorRun : Bool;
    Out_PneumaticPusher : Bool;
    Total_Inspected : DInt;
    Total_Rejected : DInt;
END_VAR
VAR
    statPusherTimer : TON_TIME;
    statPusherActive : Bool;
END_VAR

BEGIN
    // Safety Permissive Interlock
    IF NOT #E_Stop_OK OR NOT #Line_Permissive THEN
        #Out_MotorRun := FALSE;
        #Out_PneumaticPusher := FALSE;
        RETURN;
    END_IF;

    #Out_MotorRun := TRUE;

    // Reject diverter logic with 1.2s dwell pulse
    IF #Diverter_PE AND #Defect_Tag THEN
        #statPusherActive := TRUE;
        #Total_Rejected := #Total_Rejected + 1;
    END_IF;

    #statPusherTimer(IN := #statPusherActive, PT := T#1200MS);
    IF #statPusherTimer.Q THEN
        #statPusherActive := FALSE;
    END_IF;

    #Out_PneumaticPusher := #statPusherActive;
END_FUNCTION_BLOCK`,
    tagsCount: 8,
    interlocksCount: 3,
    standard: 'PackML / IEC 61131-3',
  },
  {
    id: 'cip',
    title: 'Clean-in-Place (CIP) Sanitizer',
    subtitle: 'Temperature & Conductivity Gated Acid Wash Phase',
    narrative: `Control Narrative:
1. Initiate CIP Step 3 (Acid Wash) only when Supply_Temp >= 65.0°C and Return_Conductivity >= 12.5 mS/cm.
2. Modulate Steam_Control_Valve (0-100%) via PID loop to hold 68.0°C target.
3. Run Recirculation_Pump for 900 seconds (15 minutes).
4. If Supply_Temp falls below 60.0°C during phase, pause countdown timer and raise Temp_Low_Warning.`,
    sclCode: `FUNCTION_BLOCK "FB_CIP_AcidWashPhase"
{ S7_Optimized_Access := 'TRUE' }
VERSION : 1.0
VAR_INPUT
    Cmd_StartPhase : Bool;
    Supply_Temp : Real;         // °C
    Return_Conductivity : Real; // mS/cm
END_VAR
VAR_OUTPUT
    Out_RecircPump : Bool;
    Out_SupplyValve : Bool;
    Phase_Complete : Bool;
    Time_Remaining_Sec : Int;
    Alarm_TempLow : Bool;
END_VAR
VAR
    statPhaseActive : Bool;
    statElapsedSeconds : Int;
    tonOneSecPulse : TON_TIME;
END_VAR

BEGIN
    // Temperature & Conductivity Quality Gate
    IF #Cmd_StartPhase AND (#Supply_Temp >= 65.0) AND (#Return_Conductivity >= 12.5) THEN
        #statPhaseActive := TRUE;
    END_IF;

    IF #statPhaseActive THEN
        #Out_RecircPump := TRUE;
        #Out_SupplyValve := TRUE;

        // Low temperature pause gate
        IF #Supply_Temp < 60.0 THEN
            #Alarm_TempLow := TRUE; // Pause timer, maintain circulation
        ELSE
            #Alarm_TempLow := FALSE;
            #tonOneSecPulse(IN := NOT #tonOneSecPulse.Q, PT := T#1S);
            IF #tonOneSecPulse.Q THEN
                #statElapsedSeconds := #statElapsedSeconds + 1;
            END_IF;
        END_IF;

        #Time_Remaining_Sec := 900 - #statElapsedSeconds;
        IF #statElapsedSeconds >= 900 THEN
            #Phase_Complete := TRUE;
            #statPhaseActive := FALSE;
            #Out_RecircPump := FALSE;
            #Out_SupplyValve := FALSE;
        END_IF;
    END_IF;
END_FUNCTION_BLOCK`,
    tagsCount: 11,
    interlocksCount: 5,
    standard: 'ISA-88 Batch / S88 Phase Model',
  },
]

export function SclPlayground() {
  const customNarrativeId = useId()
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('mixer')
  const [customText, setCustomText] = useState<string>(SCENARIOS[0].narrative)
  const [isCompiling, setIsCompiling] = useState<boolean>(false)
  const [activeStep, setActiveStep] = useState<number>(6)
  const [copied, setCopied] = useState<boolean>(false)

  const activeScenario = SCENARIOS.find((s) => s.id === selectedScenarioId) || SCENARIOS[0]

  const handleSelectScenario = (scenario: Scenario) => {
    setSelectedScenarioId(scenario.id)
    setCustomText(scenario.narrative)
    setActiveStep(6)
  }

  const handleRunCompile = () => {
    setIsCompiling(true)
    setActiveStep(1)

    const stepInterval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= 6) {
          clearInterval(stepInterval)
          setIsCompiling(false)
          return 6
        }
        return prev + 1
      })
    }, 280)
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeScenario.sclCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownloadScl = () => {
    const blob = new Blob([activeScenario.sclCode], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${activeScenario.id}_controller.scl`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="rounded-panel border border-border-standard bg-bg-panel shadow-elevated overflow-hidden">
      {/* Chrome Window Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border-subtle bg-bg-hover px-5 py-3.5 gap-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 flex-shrink-0" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-circle bg-[#ef4444]/90" />
            <span className="h-2.5 w-2.5 rounded-circle bg-[#f59e0b]/90" />
            <span className="h-2.5 w-2.5 rounded-circle bg-[#10b981]/90" />
          </div>
          <span className="ml-2 font-mono text-xs font-semibold text-text-primary flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-accent-primary" />
            <span>AUTO-PLC Live Synthesis Studio</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-pill bg-accent-primary/10 text-accent-primary font-mono text-[10px] font-medium border border-accent-border">
            <Sparkles className="w-3 h-3" />
            <span>Client-Side AST Verification</span>
          </span>
        </div>
      </div>

      {/* Industrial Scenario Selector Buttons */}
      <div className="p-4 sm:p-5 border-b border-border-subtle bg-bg-elevated">
        <span className="text-[10px] font-mono uppercase tracking-wider text-text-tertiary block mb-2 font-semibold">
          Select Industrial Control Scenario:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {SCENARIOS.map((scenario) => {
            const isSelected = scenario.id === selectedScenarioId
            return (
              <button
                type="button"
                key={scenario.id}
                onClick={() => handleSelectScenario(scenario)}
                className={`p-3 rounded-card text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-bg-panel border-accent-primary shadow-sm ring-1 ring-accent-primary/30'
                    : 'bg-bg-page border-border-subtle hover:border-border-standard hover:bg-bg-hover'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-text-primary">
                      {scenario.title}
                    </span>
                    {isSelected && <span className="h-1.5 w-1.5 rounded-full bg-accent-primary animate-pulse" />}
                  </div>
                  <p className="text-[10px] text-text-secondary leading-tight line-clamp-1">
                    {scenario.subtitle}
                  </p>
                </div>
                <span className="text-[9px] font-mono text-text-tertiary mt-2 block">
                  {scenario.standard}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Playground Body Grid: Left Input vs Right Output */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border-subtle">
        
        {/* Left Side: Natural Language Narrative Editor */}
        <div className="lg:col-span-5 p-5 flex flex-col justify-between bg-bg-page">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor={customNarrativeId} className="text-xs font-semibold text-text-primary flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-accent-primary" />
                <span>Control Narrative / Functional Specification</span>
              </label>
              <span className="text-[10px] font-mono text-text-tertiary">
                {activeScenario.tagsCount} Tags · {activeScenario.interlocksCount} Interlocks
              </span>
            </div>

            <textarea
              id={customNarrativeId}
              rows={11}
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className="w-full p-3 rounded-card bg-bg-panel border border-border-subtle text-xs font-mono text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/30 leading-relaxed resize-none"
              placeholder="Enter functional requirements, interlocks, or equipment modes..."
            />
          </div>

          <div className="pt-4 mt-4 border-t border-border-subtle flex items-center justify-between gap-3">
            <span className="text-[10.5px] font-mono text-text-tertiary">
              Deterministic AST Synthesis Engine
            </span>
            <button
              type="button"
              onClick={handleRunCompile}
              disabled={isCompiling}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-standard bg-accent-primary text-white text-xs font-semibold hover:bg-accent-hover transition-all shadow-sm cursor-pointer disabled:opacity-50"
            >
              {isCompiling ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Compiling Gates...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Synthesize SCL</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Side: Generated SCL Code & Gate Status */}
        <div className="lg:col-span-7 flex flex-col justify-between bg-[#0a0d14]">
          
          {/* Top Bar above Code */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-2.5 bg-[#121620] border-b border-border-subtle text-xs font-mono gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[#38bdf8] font-bold">IEC 61131-3 SCL Output</span>
              <span className="px-2 py-0.5 rounded-pill bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/30 text-[10px]">
                Gate {activeStep}/6 Validated
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-standard bg-[#1c2430] border border-[#2d3748] text-[11px] text-[#cbd5e1] hover:text-white hover:border-[#38bdf8] transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3 text-[#10b981]" /> : <Copy className="w-3 h-3 text-[#94a3b8]" />}
                <span>{copied ? 'Copied' : 'Copy SCL'}</span>
              </button>

              <button
                type="button"
                onClick={handleDownloadScl}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-standard bg-accent-primary text-white text-[11px] font-semibold hover:bg-accent-hover transition-colors cursor-pointer"
                title="Download .scl file for TIA Portal or CODESYS"
              >
                <Download className="w-3 h-3" />
                <span>Download .scl</span>
              </button>
            </div>
          </div>

          {/* Code Viewer Area */}
          <div className="p-4 text-[#e2e8f0] font-mono text-xs overflow-x-auto leading-relaxed max-h-[300px] selection:bg-accent-primary/40">
            <pre className="tab-size-2">
              <code>{activeScenario.sclCode}</code>
            </pre>
          </div>

          {/* 6-Gate Progress Strip */}
          <div className="p-3 bg-[#0d111a] border-t border-[#1e2638] flex items-center justify-between text-[10px] font-mono text-[#94a3b8]">
            <div className="flex items-center gap-1.5 sm:gap-3 overflow-x-auto py-0.5">
              {['Tag Intake', 'ISA-88 Model', 'SCL Emitter', 'Standards Lint', 'PLCSIM Test', 'TIA Openness'].map((gate, i) => {
                const isPassed = activeStep > i
                const isCurrent = activeStep === i + 1
                return (
                  <span
                    key={gate}
                    className={`inline-flex items-center gap-1 whitespace-nowrap ${
                      isPassed ? 'text-[#10b981]' : isCurrent ? 'text-[#38bdf8] font-bold' : 'text-[#475569]'
                    }`}
                  >
                    {isPassed && <CheckCircle2 className="w-3 h-3 flex-shrink-0" />}
                    <span>{i + 1}. {gate}</span>
                  </span>
                )
              })}
            </div>
            <span className="text-[#38bdf8] font-bold flex-shrink-0 hidden md:inline">
              100% AST Valid
            </span>
          </div>

        </div>

      </div>

      {/* Footer Info Callout */}
      <div className="p-4 bg-bg-hover border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-text-tertiary gap-2">
        <span className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-accent-primary" />
          <span>Siemens S7-1200 / S7-1500 / TIA Portal V17–V19 Compatible Structured Text</span>
        </span>
        <span className="text-[11px] text-text-quaternary">
          Deterministic Code Generation Proof
        </span>
      </div>
    </div>
  )
}
