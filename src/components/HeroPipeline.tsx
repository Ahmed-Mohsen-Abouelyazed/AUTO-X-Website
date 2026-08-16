import { useState, useEffect } from 'react'
import { ShieldCheck, Cpu } from 'lucide-react'

interface Stage {
  n: string
  name: string
  desc: string
  activeTitle: string
  activeDesc: string
  activeBadge: string
}

const STAGES: Stage[] = [
  {
    n: '01',
    name: 'Requirements',
    desc: 'URS / Scope',
    activeTitle: 'Stage 01 Active: Requirements & Scope Extraction',
    activeDesc: 'Extracting I/O tags, control narratives, and functional interlocks from customer specifications.',
    activeBadge: 'Intake Parsing',
  },
  {
    n: '02',
    name: 'Design',
    desc: 'ISA-88 Model',
    activeTitle: 'Stage 02 Active: ISA-88 Control Architecture Modeling',
    activeDesc: 'Building equipment hierarchies, state machines, and PackML operating modes.',
    activeBadge: 'Gate 01 Passed',
  },
  {
    n: '03',
    name: 'Build',
    desc: 'SCL Emitter',
    activeTitle: 'Stage 03 Active: Structured Text (SCL) AST Synthesis',
    activeDesc: 'Enforcing IEC 61131-3 type checking and ISA-88 state transition matrices.',
    activeBadge: 'Gates 01 & 02 Passed',
  },
  {
    n: '04',
    name: 'Verify',
    desc: 'Standards Lint',
    activeTitle: 'Stage 04 Active: Deterministic Standards Validator',
    activeDesc: 'Validating against IEC 61131-3, ISA-18.2 alarm limits, and naming rules.',
    activeBadge: 'Gates 01–03 Passed',
  },
  {
    n: '05',
    name: 'Simulate',
    desc: 'PLCSIM Test',
    activeTitle: 'Stage 05 Active: Virtual Controller Simulation',
    activeDesc: 'Executing automated test assertions against virtual PLC runtime environment.',
    activeBadge: 'Gates 01–04 Passed',
  },
  {
    n: '06',
    name: 'Release',
    desc: 'TIA Openness',
    activeTitle: 'Stage 06 Active: Release & Openness Bridge',
    activeDesc: 'Packaging verified project artifacts for direct Siemens TIA Portal XML import.',
    activeBadge: 'All 6 Gates Passed',
  },
]

export function HeroPipeline() {
  const [activeIndex, setActiveIndex] = useState(2) // Default to stage 03

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % STAGES.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const currentStage = STAGES[activeIndex]

  return (
    <div
      className="w-full overflow-hidden rounded-panel border border-border-standard bg-bg-panel shadow-elevated"
      role="region"
      aria-label="AUTO-X deterministic 6-stage compiler pipeline"
    >
      {/* Window Chrome Header */}
      <div className="flex items-center justify-between border-b border-border-subtle bg-bg-hover px-4 py-3 gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex items-center gap-1.5 flex-shrink-0" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-circle bg-[#ef4444]/90" />
            <span className="h-2.5 w-2.5 rounded-circle bg-[#f59e0b]/90" />
            <span className="h-2.5 w-2.5 rounded-circle bg-[#10b981]/90" />
          </div>
          <span className="ml-1.5 font-mono text-xs font-semibold text-text-primary">
            AUTO-X · deterministic_pipeline_v1.0
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-pill bg-accent-primary/10 text-accent-primary font-mono text-[10px] font-medium border border-accent-border flex-shrink-0">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-primary animate-pulse" />
          Active Gates
        </span>
      </div>

      {/* Pipeline Visual Container */}
      <div className="p-4 sm:p-5 bg-gradient-to-b from-bg-panel via-bg-elevated/40 to-bg-panel">
        
        {/* Top Header inside card */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-border-subtle gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <Cpu className="w-4 h-4 text-accent-primary flex-shrink-0" />
            <span className="font-mono text-[11px] sm:text-xs uppercase font-bold text-text-primary">
              6-Stage Deterministic Verification Engine
            </span>
          </div>
          <span className="font-mono text-[10px] sm:text-xs text-text-tertiary flex-shrink-0">
            Zero Hallucinated Syntax
          </span>
        </div>

        {/* 6 Stage Chips Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 sm:gap-2">
          {STAGES.map((stage, idx) => {
            const isVerified = idx < activeIndex
            const isRunning = idx === activeIndex

            return (
              <button
                type="button"
                key={stage.n}
                onClick={() => setActiveIndex(idx)}
                className={`min-w-0 px-1.5 py-2.5 sm:px-2 sm:py-3 min-h-[110px] sm:min-h-[118px] rounded-card border transition-all flex flex-col justify-between items-center text-center cursor-pointer ${
                  isRunning
                    ? 'bg-accent-primary/15 border-accent-primary shadow-sm ring-2 ring-accent-primary/30 scale-[1.02]'
                    : isVerified
                    ? 'bg-bg-page border-success/40 hover:border-success/60'
                    : 'bg-bg-page border-border-standard hover:border-border-strong opacity-80 hover:opacity-100'
                }`}
              >
                {/* Number & Indicator Dot */}
                <div className="w-full flex items-center justify-between mb-1 px-1">
                  <span
                    className={`font-mono text-[11px] sm:text-xs font-bold ${
                      isRunning
                        ? 'text-accent-primary'
                        : isVerified
                        ? 'text-success'
                        : 'text-text-tertiary'
                    }`}
                  >
                    {stage.n}
                  </span>
                  <span
                    className={`inline-flex h-2 w-2 rounded-full ${
                      isVerified
                        ? 'bg-success shadow-[0_0_6px_#10b981]'
                        : isRunning
                        ? 'bg-accent-primary animate-pulse shadow-[0_0_8px_#2F80FF]'
                        : 'bg-border-strong'
                    }`}
                    aria-hidden="true"
                  />
                </div>

                {/* Full Un-truncated Title & Secondary label */}
                <div className="w-full my-auto py-1 flex flex-col items-center justify-center">
                  <h4 className="text-[10px] sm:text-[10.5px] font-bold text-text-primary leading-tight tracking-tight px-0.5 break-words">
                    {stage.name}
                  </h4>
                  <p className="text-[8.5px] sm:text-[9px] font-mono text-text-tertiary leading-tight mt-1 px-0.5 break-words">
                    {stage.desc}
                  </p>
                </div>

                {/* Status Label */}
                <div className="w-full pt-1.5 border-t border-border-subtle mt-1 flex items-center justify-center">
                  <span
                    className={`font-mono text-[8px] sm:text-[8.5px] uppercase font-bold tracking-wider ${
                      isVerified
                        ? 'text-success'
                        : isRunning
                        ? 'text-accent-primary'
                        : 'text-text-quaternary'
                    }`}
                  >
                    {isVerified ? 'VERIFIED' : isRunning ? 'RUNNING' : 'PENDING'}
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Dynamic Active Stage Callout Panel */}
        <div className="mt-5 p-4 rounded-card bg-bg-page border border-accent-border shadow-sm transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="flex items-start gap-2.5">
                <span className="h-2 w-2 rounded-full bg-accent-primary animate-pulse mt-1 flex-shrink-0" />
                <div className="min-w-0">
                  <h5 className="text-xs font-bold text-text-primary leading-snug">
                    <span className="text-accent-primary font-mono mr-1.5">
                      Stage {currentStage.n} Active:
                    </span>
                    {currentStage.activeTitle.replace(`Stage ${currentStage.n} Active: `, '')}
                  </h5>
                  <p className="text-[11px] font-mono text-text-tertiary mt-1 leading-normal">
                    {currentStage.activeDesc}
                  </p>
                </div>
              </div>
            </div>

            <span className="inline-flex items-center self-start sm:self-center px-2.5 py-1 rounded-pill bg-success-bg text-success font-mono text-[10px] font-bold border border-success/30 flex-shrink-0 tracking-wide">
              {currentStage.activeBadge}
            </span>
          </div>
        </div>

      </div>

      {/* Status Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between border-t border-border-subtle bg-bg-hover px-4 sm:px-5 py-3 gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <ShieldCheck className="w-4 h-4 text-success flex-shrink-0" />
          <span className="font-mono text-[11px] sm:text-xs font-medium text-text-secondary whitespace-normal">
            AI proposes · Engines verify · Engineers approve
          </span>
        </div>
        <span className="font-mono text-[10px] sm:text-xs font-bold text-accent-primary flex-shrink-0">
          Deterministic Mode: ON (5s Cycle)
        </span>
      </div>
    </div>
  )
}
