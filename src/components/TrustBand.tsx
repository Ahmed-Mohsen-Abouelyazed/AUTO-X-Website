import { Badge } from '@/components/ui/Badge'

const credentials = [
  'Built by automation engineers',
  'Industrial standards validated',
  'Oil & Gas · Manufacturing · Infrastructure',
  'Deterministic · Safety-first',
]

export function TrustBand() {
  return (
    <section id="trust" className="border-y border-border-subtle bg-bg-panel">
      <div className="mx-auto max-w-container px-6 md:px-8 lg:px-12 py-8 md:py-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="text-body text-text-secondary">
              <span className="font-semibold text-text-primary">Built by automation engineers,</span>{' '}
              every design choice comes from real engineering experience — not marketing theory.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3" role="list">
            {credentials.map((item) => (
              <span
                key={item}
                className="text-body-small bg-bg-elevated px-3 py-1.5 rounded-standard text-text-tertiary border border-border-subtle"
                role="listitem"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

          <div className="mt-6 flex items-center gap-3 border-t border-border-subtle pt-4">
          <Badge variant="accent" size="sm">
            Pre-seed
          </Badge>
          <span className="text-micro uppercase tracking-wider text-text-quaternary">
            Building in public · MENA-first · Your feedback shapes the roadmap
          </span>
        </div>
      </div>
    </section>
  )
}
