import { useState } from 'react'
import { ShieldCheck } from 'lucide-react'

interface Stage {
  id: string
  number: string
  title: string
  status: 'verified' | 'running' | 'pending'
  summary: string
  input: string
  engine: string
  output: string
  rule: string
}

const pipelineStages: Stage[] = [
  {
    id: 'req',
    number: '01',
    title: 'Requirements & Scope',
    status: 'verified',
    summary: 'Extracts functional requirements, interlocks, and I/O tags from customer specifications.',
    input: 'Customer URS / RFQ / Control Narrative text',
    engine: 'Engineering LLM + Industrial RAG (ISO/IEC parsing)',
    output: 'Structured Engineering Intent Model & Tag Catalog',
    rule: 'Completeness check: 100% tags mapped with types & units',
  },
  {
    id: 'design',
    number: '02',
    title: 'Control Design Model',
    status: 'verified',
    summary: 'Builds vendor-neutral ISA-88 equipment hierarchies, state machines, and interlock matrices.',
    input: 'Engineering Intent Model',
    engine: 'Deterministic AIR Graph Engine (Asset Interface Representation)',
    output: 'ISA-88 State Model & Control Module Architecture',
    rule: 'PackML / ISA-88 state transition completeness verification',
  },
  {
    id: 'gen',
    number: '03',
    title: 'Deterministic Code Generation',
    status: 'running',
    summary: 'Emits mathematically reproducible IEC 61131-3 code without hallucinated syntax.',
    input: 'Validated AIR Control Model',
    engine: 'Deterministic AST Emitter (Siemens SCL, DBs, UDTs)',
    output: 'Structured Text (ST/SCL) Function Blocks & Global DBs',
    rule: 'Syntax typing & strict variable scope bounds validation',
  },
  {
    id: 'val',
    number: '04',
    title: 'Standards & Credibility Gate',
    status: 'pending',
    summary: 'Enforces hard mechanical checks across IEC 61131-3, ISA-18.2, and Siemens naming rules.',
    input: 'Generated SCL Code & Data Blocks',
    engine: 'Standards Validator Rule Engine (ISA-18.2 / IEC 61131-3)',
    output: 'Mechanical Compliance Report & Lint Proof',
    rule: 'Zero unmapped variables, zero forbidden recursion, alarm limit parity',
  },
  {
    id: 'sim',
    number: '05',
    title: 'Simulation & Test Oracle',
    status: 'pending',
    summary: 'Executes automated test assertions against virtual PLC runtime before physical download.',
    input: 'Validated Logic & Simulation Spec',
    engine: 'PLCSIM / Virtual Controller Driver',
    output: 'FAT / SAT Test Assertion Matrix & Execution Logs',
    rule: '100% pass on automated state transition & interlock trips',
  },
  {
    id: 'rel',
    number: '06',
    title: 'Release & TIA Openness Bridge',
    status: 'pending',
    summary: 'Packages verified artifacts for direct import into Siemens TIA Portal via Openness API.',
    input: 'Passed Validation & Simulation Packages',
    engine: '.NET 8 TIA Openness Bridge Controller',
    output: 'TIA Portal Project XML / Native PLC Program',
    rule: 'Final human engineer sign-off & cryptographic SHA-256 seal',
  },
]

export function PlcShowcase() {
  const [selectedStage, setSelectedStage] = useState<Stage>(pipelineStages[2])

  return (
    <div className="rounded-panel border border-border-standard bg-bg-panel shadow-elevated overflow-hidden">
      {/* Terminal Window Header */}
      <div className="flex items-center justify-between border-b border-border-subtle bg-bg-hover px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-circle bg-error/80" aria-hidden="true" />
          <span className="h-3 w-3 rounded-circle bg-warning/80" aria-hidden="true" />
          <span className="h-3 w-3 rounded-circle bg-success/80" aria-hidden="true" />
          <span className="ml-3 font-mono text-xs font-semibold text-text-primary">
            AUTO-PLC · 6-Stage Deterministic Pipeline
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-pill bg-accent-primary/10 text-accent-primary font-mono text-[11px] font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-primary animate-pulse" />
            Active Pipeline Demo
          </span>
        </div>
      </div>

      <div className="p-6 md:p-8">
        {/* Main Description */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-sub-heading-large text-text-primary font-semibold">
              Deterministic Gate Execution
            </h3>
            <p className="text-xs text-text-secondary">
              Click any stage to inspect the inputs, transformation engine, output artifacts, and validation rules.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-text-tertiary">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-success"></span> Verified
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse"></span> Running
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-text-quaternary"></span> Pending
            </span>
          </div>
        </div>

        {/* 6-Stage Horizontal Interactive Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
          {pipelineStages.map((stage) => {
            const isSelected = selectedStage.id === stage.id
            return (
              <button
                type="button"
                key={stage.id}
                onClick={() => setSelectedStage(stage)}
                className={`p-3 rounded-card text-left transition-all border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-accent-primary/5 border-accent-primary shadow-sm ring-1 ring-accent-primary/30'
                    : 'bg-bg-page border-border-subtle hover:border-border-standard hover:bg-bg-elevated'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold ${isSelected ? 'text-accent-primary' : 'text-text-quaternary'}`}>
                    {stage.number}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${
                    stage.status === 'verified'
                      ? 'bg-success'
                      : stage.status === 'running'
                      ? 'bg-accent-primary animate-pulse'
                      : 'bg-text-quaternary'
                  }`} />
                </div>
                <span className="text-xs font-semibold text-text-primary line-clamp-1">
                  {stage.title}
                </span>
                <span className="text-[10px] font-mono text-text-tertiary capitalize mt-1">
                  {stage.status}
                </span>
              </button>
            )
          })}
        </div>

        {/* Selected Stage Detail Box */}
        <div className="p-6 rounded-card bg-bg-elevated border border-border-standard">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-border-subtle">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-card bg-accent-primary text-white font-mono text-xs font-bold flex items-center justify-center">
                {selectedStage.number}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-text-primary">{selectedStage.title}</h4>
                <p className="text-xs text-text-secondary">{selectedStage.summary}</p>
              </div>
            </div>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-pill font-mono text-xs font-medium self-start md:self-auto ${
              selectedStage.status === 'verified'
                ? 'bg-success/10 text-success border border-success/30'
                : selectedStage.status === 'running'
                ? 'bg-accent-primary/10 text-accent-primary border border-accent-border'
                : 'bg-bg-hover text-text-tertiary border border-border-subtle'
            }`}>
              Status: {selectedStage.status.toUpperCase()}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3 rounded-card bg-bg-panel border border-border-subtle">
              <span className="font-mono text-[10px] uppercase font-semibold text-text-tertiary block mb-1">
                Input Artifact
              </span>
              <p className="text-text-primary font-medium">{selectedStage.input}</p>
            </div>

            <div className="p-3 rounded-card bg-bg-panel border border-border-subtle">
              <span className="font-mono text-[10px] uppercase font-semibold text-accent-primary block mb-1">
                Execution Engine
              </span>
              <p className="text-text-primary font-medium">{selectedStage.engine}</p>
            </div>

            <div className="p-3 rounded-card bg-bg-panel border border-border-subtle">
              <span className="font-mono text-[10px] uppercase font-semibold text-success block mb-1">
                Output Artifact
              </span>
              <p className="text-text-primary font-medium">{selectedStage.output}</p>
            </div>

            <div className="p-3 rounded-card bg-bg-panel border border-border-subtle">
              <span className="font-mono text-[10px] uppercase font-semibold text-warning block mb-1">
                Enforced Verification Gate
              </span>
              <p className="text-text-primary font-medium">{selectedStage.rule}</p>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between border-t border-border-subtle bg-bg-hover px-6 py-3.5 gap-2 text-xs font-mono text-text-tertiary">
        <span className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-success" />
          <span>Core Principle: AI proposes · Engines verify · Engineers approve</span>
        </span>
        <span className="text-[11px] text-text-quaternary">
          Phase 1 Starter MVP Proof Point
        </span>
      </div>
    </div>
  )
}
