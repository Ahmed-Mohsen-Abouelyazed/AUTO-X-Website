import { useState } from 'react'
import { Bot, Play, RefreshCw, GitBranch, ShieldCheck } from 'lucide-react'

interface Agent {
  id: string
  name: string
  role: string
  specialization: string
  currentTask: string
  outputToken: string
  status: 'idle' | 'reasoning' | 'verified'
  badgeColor: string
}

const AGENTS: Agent[] = [
  {
    id: 'scope',
    name: 'ScopeParser Agent',
    role: 'Natural Language Intake',
    specialization: 'IEC/ISO Functional Specs & URS Parsing',
    currentTask: 'Extracting I/O tag dictionary, engineering limits, and operating modes from raw customer narrative.',
    outputToken: 'Tag_Catalog_v1.json (14 tags, 4 interlocks)',
    status: 'verified',
    badgeColor: 'text-[#38bdf8] bg-[#38bdf8]/10 border-[#38bdf8]/30',
  },
  {
    id: 'architect',
    name: 'Isa88Architect Agent',
    role: 'Control Hierarchy Modeler',
    specialization: 'ISA-88 Equipment Models & PackML Matrices',
    currentTask: 'Synthesizing vendor-neutral equipment modules (EM), state transition tables, and PackML operating modes.',
    outputToken: 'AIR_State_Matrix.yaml (ISA-88 Model)',
    status: 'verified',
    badgeColor: 'text-[#a855f7] bg-[#a855f7]/10 border-[#a855f7]/30',
  },
  {
    id: 'scl',
    name: 'SclCompiler Agent',
    role: 'Deterministic Code Emitter',
    specialization: 'IEC 61131-3 SCL Structured Text Generation',
    currentTask: 'Generating strongly typed SCL function blocks and static instance data blocks with zero hallucinations.',
    outputToken: 'FB_AgitatorControl.scl (IEC 61131-3 AST)',
    status: 'reasoning',
    badgeColor: 'text-accent-primary bg-accent-primary/10 border-accent-border',
  },
  {
    id: 'linter',
    name: 'StandardsLinter Agent',
    role: 'Mechanical Verification Gate',
    specialization: 'ISA-18.2 Alarms & IEC 61131-3 Syntax Lint',
    currentTask: 'Validating naming conventions, memory scope bounds, and ISA-18.2 alarm priority limits.',
    outputToken: 'Lint_Proof.json (0 warnings, 0 syntax faults)',
    status: 'idle',
    badgeColor: 'text-warning bg-warning/10 border-warning/30',
  },
  {
    id: 'bridge',
    name: 'OpennessBridge Agent',
    role: 'TIA Portal Project Emitter',
    specialization: '.NET 8 Siemens TIA Openness XML Protocol',
    currentTask: 'Packaging validated artifacts into native XML project structure ready for direct Siemens TIA Portal import.',
    outputToken: 'TIA_Project_Export.xml (Native S7-1500)',
    status: 'idle',
    badgeColor: 'text-success bg-success/10 border-success/30',
  },
]

export function AgentOrchestrator() {
  const [activeAgentIndex, setActiveAgentIndex] = useState<number>(2) // Default to SclCompiler
  const [isRunning, setIsRunning] = useState<boolean>(false)

  const handleSimulateCycle = () => {
    setIsRunning(true)
    let idx = 0
    const interval = setInterval(() => {
      setActiveAgentIndex(idx)
      idx++
      if (idx >= AGENTS.length) {
        clearInterval(interval)
        setIsRunning(false)
        setActiveAgentIndex(2)
      }
    }, 900)
  }

  const selectedAgent = AGENTS[activeAgentIndex]

  return (
    <div className="rounded-panel border border-border-standard bg-bg-panel shadow-elevated overflow-hidden">
      {/* Header */}
      <div className="p-6 md:p-8 border-b border-border-subtle bg-gradient-to-r from-bg-panel via-bg-elevated/40 to-bg-panel">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Bot className="w-5 h-5 text-accent-primary" />
              <span className="font-mono text-xs uppercase font-bold text-accent-primary tracking-wider">
                Multi-Agent Engineering Team Architecture
              </span>
            </div>
            <h3 className="text-sub-heading-large font-semibold text-text-primary mb-1">
              Collaborative Autonomous Agent Swarm
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              Five specialized subagents pass typed engineering artifacts through deterministic verification gates.
            </p>
          </div>

          <button
            type="button"
            onClick={handleSimulateCycle}
            disabled={isRunning}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-standard bg-accent-primary text-white text-xs font-semibold hover:bg-accent-hover transition-all shadow-sm cursor-pointer disabled:opacity-50 flex-shrink-0 self-start sm:self-auto"
          >
            {isRunning ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Simulating Swarm...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Simulate Agent Cycle</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 5-Agent Interactive Horizontal Pipeline */}
      <div className="p-6 md:p-8 border-b border-border-subtle bg-bg-elevated">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {AGENTS.map((agent, idx) => {
            const isActive = idx === activeAgentIndex
            const isCompleted = idx < activeAgentIndex
            return (
              <button
                type="button"
                key={agent.id}
                onClick={() => setActiveAgentIndex(idx)}
                className={`p-3.5 rounded-card text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-bg-panel border-accent-primary shadow-sm ring-1 ring-accent-primary/30 scale-[1.02]'
                    : 'bg-bg-page border-border-subtle hover:border-border-standard hover:bg-bg-hover'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-text-primary">
                      0{idx + 1}
                    </span>
                    <span
                      className={`h-2 w-2 rounded-full ${
                        isCompleted
                          ? 'bg-success'
                          : isActive
                          ? 'bg-accent-primary animate-pulse'
                          : 'bg-text-quaternary'
                      }`}
                    />
                  </div>
                  <h4 className="text-xs font-bold text-text-primary mb-1">
                    {agent.name.replace(' Agent', '')}
                  </h4>
                  <p className="text-[10px] text-text-secondary leading-snug line-clamp-1">
                    {agent.role}
                  </p>
                </div>

                <div className="pt-2 border-t border-border-subtle mt-3">
                  <span
                    className={`font-mono text-[9px] uppercase font-bold ${
                      isCompleted
                        ? 'text-success'
                        : isActive
                        ? 'text-accent-primary'
                        : 'text-text-tertiary'
                    }`}
                  >
                    {isCompleted ? 'VERIFIED' : isActive ? 'REASONING' : 'IDLE'}
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Selected Agent Live Reasoning Log */}
      <div className="p-6 md:p-8 bg-bg-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-card bg-accent-primary/10 border border-accent-border flex items-center justify-center text-accent-primary font-mono text-xs font-bold flex-shrink-0">
                0{activeAgentIndex + 1}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-semibold text-text-primary">
                    {selectedAgent.name}
                  </h4>
                  <span className={`px-2 py-0.5 rounded-pill font-mono text-[10px] border ${selectedAgent.badgeColor}`}>
                    {selectedAgent.role}
                  </span>
                </div>
                <span className="text-xs font-mono text-text-secondary">
                  Specialization: {selectedAgent.specialization}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-card bg-bg-panel border border-border-subtle">
              <span className="font-mono text-[10px] uppercase font-semibold text-text-tertiary block mb-1">
                Active Execution Narrative
              </span>
              <p className="text-xs text-text-primary leading-relaxed">
                {selectedAgent.currentTask}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 p-4 rounded-card bg-bg-panel border border-border-subtle space-y-3">
            <span className="font-mono text-[10px] uppercase font-semibold text-accent-primary block">
              Emitted Verification Artifact
            </span>
            <div className="p-3 rounded-standard bg-[#0a0d14] text-[#38bdf8] font-mono text-xs border border-[#1e293b]">
              <code>{selectedAgent.outputToken}</code>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-text-tertiary">
              <ShieldCheck className="w-3.5 h-3.5 text-success" />
              <span>Gate Passed: Deterministic AST Proof Verified</span>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="p-4 bg-bg-hover border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-text-tertiary gap-2">
        <span className="flex items-center gap-2">
          <GitBranch className="w-4 h-4 text-accent-primary" />
          <span>Multi-Agent Swarm Orchestration: No Single Point of Failure</span>
        </span>
        <span className="text-[11px] text-text-quaternary">
          PlatX Agent Layer
        </span>
      </div>
    </div>
  )
}
