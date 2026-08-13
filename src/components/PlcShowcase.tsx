import { motion } from 'framer-motion'
import { Badge } from './ui/Badge'

const pipelineStages = [
  { n: '01', title: 'Requirements', status: 'verified' },
  { n: '02', title: 'Design Model', status: 'running' },
  { n: '03', title: 'Generate', status: 'pending' },
  { n: '04', title: 'Validate', status: 'pending' },
  { n: '05', title: 'Simulate', status: 'pending' },
  { n: '06', title: 'Release', status: 'pending' },
]

export function PlcShowcase() {
  return (
    <div className="rounded-panel border border-border-standard bg-bg-panel shadow-card overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-border-subtle bg-bg-hover px-4 py-3">
        <span className="h-3 w-3 rounded-circle bg-error/70" aria-hidden="true" />
        <span className="h-3 w-3 rounded-circle bg-warning/70" aria-hidden="true" />
        <span className="h-3 w-3 rounded-circle bg-success/70" aria-hidden="true" />
        <span className="ml-3 font-mono text-mono-label text-text-tertiary">AUTO-X · preview</span>
      </div>

      <div className="p-6 md:p-8">
        <div className="mb-6">
          <Badge variant="accent" size="sm">
            Live Preview
          </Badge>
          <h3 className="text-section-heading text-text-primary mb-2">
            Deterministic pipeline in action
          </h3>
          <p className="text-body text-text-secondary">
            Six gates. AI proposes, engines verify, engineers approve.
          </p>
        </div>

        <div className="space-y-3">
          {pipelineStages.map((stage, i) => {
             const statusColors = {
               verified: 'bg-success text-success',
               running: 'bg-accent-primary text-white',
               pending: 'bg-bg-hover text-text-tertiary',
             }
             return (
              <motion.div
                key={stage.n}
                className="flex items-center gap-4 rounded-card border bg-bg-page px-4 py-3"
                style={{
                  borderColor: stage.status === 'verified' ? 'var(--success)' : stage.status === 'running' ? 'var(--brand)' : 'var(--border-subtle)',
                  border: stage.status === 'verified' ? '1px solid var(--success)' : stage.status === 'running' ? '1px solid var(--brand)' : '1px solid var(--border-subtle)',
                }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
              >
                <span className="font-mono text-mono-label text-text-quaternary w-10">
                  {stage.n}
                </span>
                <span className="flex-1 text-body text-text-primary">{stage.title}</span>
                <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-micro font-medium ${statusColors[stage.status as keyof typeof statusColors]}`}>
                  <span className="h-1.5 w-1.5 rounded-full" aria-hidden="true" />
                  {stage.status}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border-subtle bg-bg-hover px-5 py-3">
        <span className="font-mono text-mono-label text-text-tertiary">
          sample output — illustrative, not a customer deliverable
        </span>
      </div>
    </div>
  )
}
