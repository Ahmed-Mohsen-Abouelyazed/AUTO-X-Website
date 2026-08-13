import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'

type StageStatus = 'verified' | 'running' | 'pending'

const pipelineStages = [
  { label: 'REQUIREMENTS', status: 'verified' as StageStatus },
  { label: 'DESIGN', status: 'running' as StageStatus },
  { label: 'BUILD', status: 'running' as StageStatus },
  { label: 'VERIFY', status: 'pending' as StageStatus },
  { label: 'SIMULATE', status: 'pending' as StageStatus },
  { label: 'RELEASE', status: 'pending' as StageStatus },
]

const statusDot: Record<StageStatus, string> = {
  verified: 'bg-success',
  running: 'bg-accent-primary',
  pending: 'bg-warning',
}

export function PlatXStory() {
  return (
    <section id="story" className="section border-y border-border-subtle bg-bg-panel">
      <div className="mx-auto max-w-container">
        <div className="mb-12 max-w-2xl">
          <Badge variant="accent" className="mb-4">
            The PlatX Story
          </Badge>
          <h2 className="mb-4 text-display-large text-text-primary">
            Industrial engineering runs on pipelines.
          </h2>
          <p className="text-body-large text-text-secondary">
            Every automation project follows the same deterministic path — from requirements to
            release — yet each phase is handled by disconnected software, tribal knowledge, and
            manual handoffs. AUTO-X encodes that pipeline into a living platform where AI drafts,
            engines verify, and engineers approve at every gate.
          </p>
        </div>

        <motion.div
          className="relative mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-1 md:gap-2 mb-2">
            {pipelineStages.map((stage, i) => (
              <span
                key={stage.label}
                className="font-mono text-mono-caption text-text-tertiary uppercase"
                style={{ letterSpacing: '0.05em' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
            ))}
          </div>

          <div className="flex items-center">
            {pipelineStages.map((stage, i) => {
              const isLast = i === pipelineStages.length - 1
              return (
                <div key={stage.label} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`
                        relative flex h-6 w-6 items-center justify-center rounded-full
                        border-2 border-border-standard
                        ${statusDot[stage.status]}
                      `}
                      aria-hidden="true"
                    >
                      {stage.status === 'verified' && (
                        <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M6 10.2l4-4 1.4 1.4L6.4 13.2z" />
                        </svg>
                      )}
                      {stage.status === 'running' && (
                        <div className="h-2 w-2 animate-pulse rounded-full bg-white" />
                      )}
                    </div>
                    <span className="mt-2 font-mono text-mono-caption text-text-tertiary">
                      {stage.label.slice(0, 4)}
                      <br />
                      {stage.label.slice(4)}
                    </span>
                  </div>
                  {!isLast && (
                    <div
                      className="h-0.5 w-8 md:w-12 bg-border-standard"
                      aria-hidden="true"
                    />
                  )}
                </div>
              )
            })}
          </div>

          <div className="mt-4 flex justify-center gap-6 font-mono text-mono-label text-text-tertiary">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-success" /> Verified
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-accent-primary animate-pulse" /> Running
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-text-quaternary" /> Pending
            </span>
          </div>
        </motion.div>

        <motion.div
          className="rounded-panel border border-accent-border bg-accent-primary/[0.06] p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-body-large text-text-primary">
            AUTO-X is the operating system that turns one-off engineering effort into reusable
            engineering intelligence — so teams ship faster, commission with confidence, and
            build on every success rather than starting over.
          </p>
        </motion.div>

        <p className="mt-8 font-mono text-caption text-text-quaternary">
          {'// deterministic pipeline — REQ-01-06, status-coded per ANSI standards'}
        </p>
      </div>
    </section>
  )
}
