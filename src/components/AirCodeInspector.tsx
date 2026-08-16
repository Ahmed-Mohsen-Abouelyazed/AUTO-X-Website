import { useState } from 'react'
import { Code2, Copy, Check, Terminal, Layers } from 'lucide-react'

interface CodeTab {
  id: string
  label: string
  language: string
  badge: string
  description: string
  code: string
}

const TABS: CodeTab[] = [
  {
    id: 'air',
    label: 'AIR Model (YAML)',
    language: 'yaml',
    badge: 'Single Source of Truth',
    description: 'Vendor-neutral Asset Interface Representation capturing ISA-88 control intent and interlocks.',
    code: `module: AgitatorMotorControl
version: 1.0.0
standard: ISA-88 / IEC 61131-3
equipment_hierarchy:
  area: MixingArea_01
  unit: Reactor_01
  equipment_module: EM_Agitator

inputs:
  - name: Cmd_Start
    type: BOOL
    desc: Start command from SCADA/HMI
  - name: Cmd_Stop
    type: BOOL
    desc: Stop command from SCADA/HMI
  - name: Fbk_Running
    type: BOOL
    desc: Contactor aux feedback
  - name: Alrm_ThermalTrip
    type: BOOL
    desc: Thermal overload relay status

interlocks:
  - condition: "Alrm_ThermalTrip == TRUE"
    action: "FORCE_STOP"
    trip_priority: HIGH
    standard_ref: ISA-18.2

outputs:
  - name: Out_Contactor
    type: BOOL
    desc: Digital output to motor contactor`,
  },
  {
    id: 'siemens',
    label: 'Siemens SCL (TIA Portal)',
    language: 'scl',
    badge: 'Validated .NET Bridge',
    description: 'Deterministic IEC 61131-3 Structured Text with strict typing, static instance DB, and error handling.',
    code: `FUNCTION_BLOCK "FB_AgitatorMotorControl"
{ S7_Optimized_Access := 'TRUE' }
VERSION : 0.1
VAR_INPUT
    Cmd_Start : Bool;        // Start command from SCADA/HMI
    Cmd_Stop : Bool;         // Stop command from SCADA/HMI
    Fbk_Running : Bool;      // Contactor aux feedback
    Alrm_ThermalTrip : Bool; // Thermal overload relay status
END_VAR
VAR_OUTPUT
    Out_Contactor : Bool;    // Digital output to motor contactor
    Status_Running : Bool;   // Running status indicator
    Status_Tripped : Bool;   // Trip alarm active
END_VAR
VAR
    statRunningState : Bool;
END_VAR

BEGIN
    // Hard mechanical interlock validation (ISA-18.2 compliance)
    IF #Alrm_ThermalTrip THEN
        #statRunningState := FALSE;
        #Status_Tripped := TRUE;
    ELSE
        #Status_Tripped := FALSE;
        IF #Cmd_Start AND NOT #Cmd_Stop THEN
            #statRunningState := TRUE;
        ELSIF #Cmd_Stop THEN
            #statRunningState := FALSE;
        END_IF;
    END_IF;

    #Out_Contactor := #statRunningState;
    #Status_Running := #Fbk_Running;
END_FUNCTION_BLOCK`,
  },
  {
    id: 'rockwell',
    label: 'Rockwell L5X (Studio 5000)',
    language: 'xml',
    badge: 'Planned L5X Driver',
    description: 'XML Add-On Instruction (AOI) definition with tag dictionaries and logic projection.',
    code: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<RSLogix5000Content SchemaRevision="1.0" SoftwareRevision="34.00" TargetName="AOI_AgitatorMotor" TargetType="AddOnInstructionDefinition">
  <AddOnInstructionDefinition Name="AOI_AgitatorMotor" Revision="1.0" ExecutePrescan="false">
    <Parameters>
      <Parameter Name="Cmd_Start" DataType="BOOL" Usage="Input" Required="true" Visible="true"/>
      <Parameter Name="Cmd_Stop" DataType="BOOL" Usage="Input" Required="true" Visible="true"/>
      <Parameter Name="Fbk_Running" DataType="BOOL" Usage="Input" Required="true" Visible="true"/>
      <Parameter Name="Alrm_ThermalTrip" DataType="BOOL" Usage="Input" Required="true" Visible="true"/>
      <Parameter Name="Out_Contactor" DataType="BOOL" Usage="Output" Required="true" Visible="true"/>
      <Parameter Name="Status_Running" DataType="BOOL" Usage="Output" Required="true" Visible="true"/>
    </Parameters>
    <Routines>
      <Routine Name="Logic" Type="RLL">
        <RLLContent>
          <Rung Number="0" Type="N">
            <Text>[XIC(Cmd_Start), XIO(Cmd_Stop), XIO(Alrm_ThermalTrip)] OTE(Out_Contactor);</Text>
          </Rung>
        </RLLContent>
      </Routine>
    </Routines>
  </AddOnInstructionDefinition>
</RSLogix5000Content>`,
  },
  {
    id: 'security',
    label: 'IEC 62443 Security Meta',
    language: 'json',
    badge: 'Zone & Conduit Rules',
    description: 'Cybersecurity zoning, data conduit mappings, and access level attributes.',
    code: `{
  "asset_id": "EM_Agitator_01",
  "security_standard": "IEC 62443-3-3",
  "zone": "Zone_02_Cell_ProcessArea",
  "conduit": "Conduit_PLC_To_SCADA_01",
  "security_level_target": "SL-T 2",
  "interfaces": [
    {
      "protocol": "OPC_UA",
      "port": 4840,
      "encryption": "Basic256Sha256",
      "authentication": "X509_Certificate"
    }
  ],
  "tag_access_policy": {
    "Cmd_Start": { "role": "OPERATOR_LEVEL_2", "audit_log": true },
    "Alrm_ThermalTrip": { "role": "READ_ONLY_DIAGNOSTIC", "safety_critical": false }
  },
  "artifact_hash": "sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
}`,
  },
  {
    id: 'test',
    label: 'FAT Test Oracle',
    language: 'typescript',
    badge: 'PLCSIM Test Suite',
    description: 'Automated test assertions executed in virtual simulation before physical downloading.',
    code: `describe('EM_Agitator Deterministic Logic Test Suite', () => {
  let virtualPlc: VirtualPlcDriver

  beforeAll(async () => {
    virtualPlc = await initPlcSimInstance('MixerArea_01')
  })

  test('Trip interlock forces immediate contactor shutdown within 1 scan cycle', async () => {
    // 1. Arrange: start the agitator
    await virtualPlc.setTag('Cmd_Start', true)
    await virtualPlc.stepCycles(2)
    expect(await virtualPlc.getTag('Out_Contactor')).toBe(true)

    // 2. Act: trigger thermal overload trip
    await virtualPlc.setTag('Alrm_ThermalTrip', true)
    await virtualPlc.stepCycles(1) // Single scan cycle execution

    // 3. Assert: contactor MUST be de-energized
    expect(await virtualPlc.getTag('Out_Contactor')).toBe(false)
    expect(await virtualPlc.getTag('Status_Tripped')).toBe(true)
  })
})`,
  },
]

export function AirCodeInspector() {
  const [activeTabId, setActiveTabId] = useState('air')
  const [copied, setCopied] = useState(false)

  const activeTab = TABS.find((t) => t.id === activeTabId) || TABS[0]

  const handleCopy = () => {
    navigator.clipboard.writeText(activeTab.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-panel border border-border-standard bg-bg-panel shadow-elevated overflow-hidden">
      {/* Chrome Window Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border-subtle bg-bg-hover px-4 py-3 gap-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 flex-shrink-0" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-circle bg-[#ef4444]/90" />
            <span className="h-2.5 w-2.5 rounded-circle bg-[#f59e0b]/90" />
            <span className="h-2.5 w-2.5 rounded-circle bg-[#10b981]/90" />
          </div>
          <span className="ml-2 font-mono text-xs font-semibold text-text-primary flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-accent-primary" />
            <span>AIR Compiler Projection Engine</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-pill bg-accent-primary/10 text-accent-primary font-mono text-[10px] font-medium border border-accent-border">
            <Layers className="w-3 h-3" />
            <span>1 Specification &rarr; Multi-Vendor Output</span>
          </span>
        </div>
      </div>

      {/* Tab Navigation Strip */}
      <div className="flex items-center gap-1 border-b border-border-subtle bg-bg-elevated px-4 py-2 overflow-x-auto">
        {TABS.map((tab) => {
          const isActive = tab.id === activeTabId
          return (
            <button
              type="button"
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={`px-3 py-1.5 rounded-standard font-mono text-xs font-medium transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                isActive
                  ? 'bg-bg-panel text-accent-primary shadow-sm border border-border-standard font-semibold'
                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-hover'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[9px] px-1.5 py-0.2 rounded-pill font-mono ${
                  isActive
                    ? 'bg-accent-primary/10 text-accent-primary'
                    : 'bg-bg-hover text-text-quaternary'
                }`}
              >
                {tab.language}
              </span>
            </button>
          )
        })}
      </div>

      {/* Tab Context Strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between px-5 py-3 bg-bg-page border-b border-border-subtle gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-xs text-text-primary">
              {activeTab.label}
            </span>
            <span className="px-2 py-0.5 rounded-pill bg-success-bg text-success font-mono text-[10px] font-semibold border border-success/30">
              {activeTab.badge}
            </span>
          </div>
          <p className="text-[11px] text-text-secondary mt-0.5">
            {activeTab.description}
          </p>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-standard bg-bg-panel border border-border-subtle text-xs font-mono text-text-secondary hover:text-text-primary hover:bg-bg-hover hover:border-border-standard transition-all cursor-pointer self-start sm:self-center flex-shrink-0"
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-success" />
              <span className="text-success font-semibold">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-text-tertiary" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Display Area */}
      <div className="p-4 sm:p-6 bg-[#0a0d14] text-[#e2e8f0] font-mono text-xs overflow-x-auto leading-relaxed max-h-[380px] selection:bg-accent-primary/30">
        <pre className="tab-size-2">
          <code>{activeTab.code}</code>
        </pre>
      </div>

      {/* Footer Info Strip */}
      <div className="flex flex-col sm:flex-row items-center justify-between border-t border-border-subtle bg-bg-hover px-5 py-2.5 text-xs font-mono text-text-tertiary gap-2">
        <span className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-accent-primary" />
          <span>AST Deterministic Engine: Zero Syntactic Drift</span>
        </span>
        <span className="text-[11px] text-text-quaternary">
          Projected from Unified AIR Graph
        </span>
      </div>
    </div>
  )
}
