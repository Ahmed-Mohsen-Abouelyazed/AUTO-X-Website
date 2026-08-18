import { useState } from 'react'
import { FileText, Cpu, Box, Code2, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react'

interface FlowPhase {
  id: string
  step: string
  title: string
  subtitle: string
  icon: typeof FileText
  badge: string
  description: string
  inputs: string
  outputs: string
  guarantee: string
}

const PHASES: FlowPhase[] = [
  {
    id: 'narrative',
    step: 'Phase 01',
    title: 'Control Narrative Intake',
    subtitle: 'Extract Functional Intent & Boundary Conditions',
    icon: FileText,
    badge: 'Intent Extraction',
    description:
      'The engineering process begins with customer functional requirements, P&ID sensor registers, and equipment interlock descriptions.',
    inputs: 'Functional Specification, P&ID tag list, equipment operating modes',
    outputs: 'Structured requirement constraints & signal dictionary',
    guarantee: 'Zero hallucinated I/O tags; all signals matched to hardware inventory',
  },
  {
    id: 'model',
    step: 'Phase 02',
    title: 'Engineering Model Synthesis',
    subtitle: 'Vendor-Neutral ISA-88 & PackML Hierarchy',
    icon: Cpu,
    badge: 'State Machine',
    description:
      'Translates narrative constraints into structured equipment modules (EM), control modules (CM), and standard PackML state transition matrices.',
    inputs: 'Signal dictionary & operating sequence constraints',
    outputs: 'Vendor-neutral Asset Interface Representation (AIR) state graph',
    guarantee: 'Formally verified state transitions with zero illegal deadlocks',
  },
  {
    id: 'units',
    step: 'Phase 03',
    title: 'Software Unit Architecture',
    subtitle: 'Type Boundaries & Memory Allocation',
    icon: Box,
    badge: 'Scoping & Types',
    description:
      'Structures the control logic into deterministic Function Blocks (FB), User-Defined Types (UDT), and static instance Data Blocks (DB).',
    inputs: 'AIR state model & equipment definitions',
    outputs: 'Strictly bounded variable scopes (VAR_INPUT, VAR_OUTPUT, VAR_STAT)',
    guarantee: 'Deterministic memory boundaries with zero uninitialized registers',
  },
  {
    id: 'codegen',
    step: 'Phase 04',
    title: 'Deterministic Code Generation',
    subtitle: 'IEC 61131-3 SCL Emission for Target Controller',
    icon: Code2,
    badge: 'AST Emission',
    description:
      'Emits mathematically verified Structured Text (SCL) conforming to the target PLC dialect (Siemens TIA Portal S7-1200/S7-1500 or Rockwell L5X).',
    inputs: 'Typed software unit abstract syntax tree (AST)',
    outputs: 'Native IEC 61131-3 SCL / ST code blocks and instance DBs',
    guarantee: '100% syntactically valid code ready for direct compiler loading',
  },
  {
    id: 'verify',
    step: 'Phase 05',
    title: 'Verification & Simulation Gates',
    subtitle: 'Standards Linter & Automated PLCSIM Test Oracles',
    icon: ShieldCheck,
    badge: 'Mechanical Gates',
    description:
      'The code is linted against ISA-18.2 alarm budgets, IEC 62443 security rules, and simulated against boundary test oracles before human sign-off.',
    inputs: 'Generated SCL code & test suite assertions',
    outputs: 'Verification certificate & native TIA Portal XML import package',
    guarantee: 'Zero syntax faults, zero alarm floods, certified human approval gate',
  },
]

export function DeterministicFlow() {
  const [activePhaseId, setActivePhaseId] = useState<string>('narrative')

  const activePhase = PHASES.find((p) => p.id === activePhaseId) || PHASES[0]

  return (
    <div className="rounded-panel border border-border-standard bg-bg-panel shadow-elevated overflow-hidden">
      {/* Header */}
      <div className="p-6 md:p-8 border-b border-border-subtle bg-gradient-to-r from-bg-panel via-bg-elevated/40 to-bg-panel">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="w-5 h-5 text-accent-primary" />
          <span className="font-mono text-xs uppercase font-bold text-accent-primary tracking-wider">
            Deterministic Engineering Methodology
          </span>
        </div>
        <h3 className="text-sub-heading-large font-semibold text-text-primary mb-1">
          5-Phase Closed-Loop PLC Engineering Flow
        </h3>
        <p className="text-xs text-text-secondary leading-relaxed">
          AUTO-PLC operates strictly through a closed-loop compiler pipeline: AI proposes models, deterministic engines verify rules, and certified engineers approve release.
        </p>
      </div>

      {/* 5-Step Horizontal Navigation Bar */}
      <div
        role="tablist"
        aria-label="Deterministic PLC Engineering phases"
        className="grid grid-cols-2 sm:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-border-subtle bg-bg-elevated border-b border-border-subtle"
      >
        {PHASES.map((phase) => {
          const isActive = phase.id === activePhaseId
          const Icon = phase.icon
          return (
            <button
              type="button"
              key={phase.id}
              id={`flow-tab-${phase.id}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`flow-panel-${phase.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActivePhaseId(phase.id)}
              className={`p-3.5 text-left transition-all cursor-pointer flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary ${
                isActive
                  ? 'bg-bg-panel shadow-sm border-b-2 border-b-accent-primary'
                  : 'hover:bg-bg-hover text-text-secondary'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[10px] uppercase font-bold text-accent-primary">
                  {phase.step}
                </span>
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-accent-primary' : 'text-text-tertiary'}`} />
              </div>
              <span className={`text-xs font-bold ${isActive ? 'text-text-primary' : 'text-text-secondary'}`}>
                {phase.title.replace(' Intake', '').replace(' Synthesis', '').replace(' Architecture', '').replace(' Generation', '').replace(' & Simulation Gates', '')}
              </span>
            </button>
          )
        })}
      </div>

      {/* Active Phase Details */}
      <div
        id={`flow-panel-${activePhase.id}`}
        role="tabpanel"
        aria-labelledby={`flow-tab-${activePhase.id}`}
        className="p-6 md:p-8 bg-bg-page"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs font-semibold text-accent-primary uppercase">
                  {activePhase.step} Execution
                </span>
                <span className="px-2 py-0.5 rounded-pill bg-accent-primary/10 text-accent-primary font-mono text-[10px] border border-accent-border">
                  {activePhase.badge}
                </span>
              </div>
              <h4 className="text-sub-heading font-semibold text-text-primary">
                {activePhase.title}
              </h4>
              <p className="text-xs font-mono text-text-tertiary mt-0.5">
                {activePhase.subtitle}
              </p>
            </div>

            <p className="text-xs text-text-secondary leading-relaxed">
              {activePhase.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-card bg-bg-panel border border-border-subtle">
                <span className="text-[10px] font-mono uppercase text-text-tertiary block mb-1 font-semibold">
                  Required Inputs
                </span>
                <span className="text-xs text-text-primary block leading-snug">
                  {activePhase.inputs}
                </span>
              </div>

              <div className="p-3 rounded-card bg-bg-panel border border-border-subtle">
                <span className="text-[10px] font-mono uppercase text-accent-primary block mb-1 font-semibold">
                  Generated Artifacts
                </span>
                <span className="text-xs text-text-primary block leading-snug">
                  {activePhase.outputs}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-5 rounded-panel bg-bg-panel border border-accent-border/60 shadow-sm space-y-3">
            <span className="font-mono text-xs uppercase font-bold text-accent-primary block">
              Deterministic Quality Guarantee
            </span>
            <div className="flex items-start gap-2.5 text-xs text-text-primary">
              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span className="leading-relaxed font-medium">{activePhase.guarantee}</span>
            </div>
            <div className="pt-3 border-t border-border-subtle text-[11px] font-mono text-text-tertiary">
              Human-in-the-Loop Governance: Certified automation engineers review and approve every artifact before release.
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="p-4 bg-bg-hover border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-text-tertiary gap-2">
        <span>Control Narrative &rarr; Engineering Model &rarr; Software Units &rarr; Code Gen &rarr; Verification</span>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-accent-primary font-semibold hover:underline"
        >
          <span>Request Technical Workflow Whitepaper</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  )
}
