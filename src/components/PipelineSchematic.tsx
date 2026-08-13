import { motion } from 'framer-motion'
import { Check, Lock, ShieldCheck } from 'lucide-react'

type GateState = 'open' | 'locked' | 'approve'

interface Stage {
  n: string
  title: string
  detail: string
  state: GateState
}

const stages: Stage[] = [
  { n: '01', title: 'Requirements', detail: 'Control intent · I/O · equipment models', state: 'open' },
  { n: '02', title: 'Design Model', detail: 'ISA-88 hierarchy · control design', state: 'open' },
  { n: '03', title: 'Generate', detail: 'Deterministic code emission', state: 'open' },
  { n: '04', title: 'Validate', detail: 'Standards check · compile-verify', state: 'open' },
  { n: '05', title: 'Simulate', detail: 'Deterministic assertions', state: 'locked' },
  { n: '06', title: 'Release', detail: 'Traceable · approved', state: 'approve' },
]

function GateChip({ state }: { state: GateState }) {
  if (state === 'open') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-pill bg-success-bg px-2.5 py-1 text-micro font-medium text-success">
        <Check className="h-3 w-3" aria-hidden="true" />
        GATE · OPEN
      </span>
    )
  }
  if (state === 'locked') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-pill border border-border-subtle px-2.5 py-1 text-micro font-medium text-text-tertiary">
        <Lock className="h-3 w-3" aria-hidden="true" />
        GATE · LOCKED
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-pill bg-accent-muted px-2.5 py-1 text-micro font-medium text-accent-primary">
      <ShieldCheck className="h-3 w-3" aria-hidden="true" />
      GATE · APPROVE
    </span>
  )
}

export function PipelineSchematic() {
  return (
    <div
      className="overflow-hidden rounded-panel border border-border-standard bg-bg-panel shadow-card"
      role="img"
      aria-label="Six-gate engineering pipeline: AI drafts, engines verify, engineers approve. Each gate opens only after deterministic validation."
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-border-subtle bg-bg-hover px-4 py-3">
        <span className="h-3 w-3 rounded-circle bg-error/70" aria-hidden="true" />
        <span className="h-3 w-3 rounded-circle bg-warning/70" aria-hidden="true" />
        <span className="h-3 w-3 rounded-circle bg-success/70" aria-hidden="true" />
        <span className="ml-3 font-mono text-mono-label text-text-tertiary">
          AUTO-PLC · pipeline
        </span>
      </div>

      {/* Stage rail */}
      <ol className="flex flex-col gap-3 p-5 lg:flex-row lg:items-stretch lg:gap-0">
        {stages.map((stage, i) => (
          <li key={stage.n} className="flex flex-1 items-stretch lg:min-w-0">
            <motion.div
              className="flex w-full flex-col rounded-card border border-border-subtle bg-bg-page p-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-mono-label text-text-quaternary">{stage.n}</span>
                <GateChip state={stage.state} />
              </div>
              <h3 className="font-semibold text-sub-heading text-text-primary">{stage.title}</h3>
              <p className="mt-1 text-body-small text-text-secondary">{stage.detail}</p>
            </motion.div>

            {i < stages.length - 1 && (
              <div
                className="flex items-center justify-center text-text-quaternary lg:flex-none lg:px-2"
                aria-hidden="true"
              >
                <svg
                  className="h-4 w-4 lg:hidden"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <svg
                  className="hidden h-4 w-4 lg:block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                </svg>
              </div>
            )}
          </li>
        ))}
      </ol>

      {/* Status footer */}
      <div className="flex items-center justify-between border-t border-border-subtle bg-bg-hover px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-primary" />
          </span>
          <span className="font-mono text-mono-label text-text-tertiary">
            gates: 4 open · release awaits approval
          </span>
        </div>
      </div>
    </div>
  )
}
