import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'

const painPoints = [
  {
    k: 'Fragmented Tools',
    d: 'Engineers juggle schematics, PLC code, HMI designs, and documentation across disconnected software — each project starts from scratch.',
  },
  {
    k: 'Repetitive Work',
    d: 'Requirements gathering, documentation creation, design tasks, and coding are rewritten on every project instead of reused.',
  },
  {
    k: 'Knowledge Silos',
    d: 'Tribal standards, inconsistent conventions, and lost institutional knowledge become permanent technical debt across teams.',
  },
]

const lifecyclePains = [
  'Requirements & scoping',
  'Documentation creation',
  'Repetitive design tasks',
  'PLC coding & HMI development',
  'FAT/SAT preparation',
  'Commissioning troubleshooting',
  'Knowledge transfer',
]

const orgPains = [
  'Engineering labor shortages',
  'Long project schedules',
  'Cost overruns & human errors',
  'Poor standardization',
  'Vendor lock-in',
]

export function Problem() {
  return (
    <section id="problem" className="section bg-bg-page">
      <div className="mx-auto max-w-container">
        <div className="mb-12 max-w-2xl">
          <Badge variant="accent" className="mb-4">
            The Problem
          </Badge>
          <h2 className="mb-4 text-display-large text-text-primary">
            Industrial automation engineering is still built by hand.
          </h2>
          <p className="text-body-large text-text-secondary">
            The workflow from concept to commissioning remains highly fragmented.
            Engineers spend significant effort on tasks that should be solved once and
            reused across every project.
          </p>
        </div>

        {/* Core pain points */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {painPoints.map((stat, i) => (
            <motion.div
              key={stat.k}
              className="border-l border-border-standard pl-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="mb-2 font-mono text-mono-body text-text-primary">{stat.k}</div>
              <p className="text-body-small text-text-secondary">{stat.d}</p>
            </motion.div>
          ))}
        </div>

        {/* Lifecycle + Org pain detail */}
        <motion.div
          className="my-10 grid gap-6 md:grid-cols-2 rounded-panel border border-border-subtle bg-bg-panel p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h4 className="text-sub-heading text-text-primary mb-3">Engineers spend effort on</h4>
            <ul className="space-y-2" role="list">
              {lifecyclePains.map((item) => (
                <li key={item} className="flex items-center gap-2 text-body-small text-text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-primary flex-shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sub-heading text-text-primary mb-3">Organizations suffer from</h4>
            <ul className="space-y-2" role="list">
              {orgPains.map((item) => (
                <li key={item} className="flex items-center gap-2 text-body-small text-text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-warning flex-shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Agitate */}
        <motion.div
          className="my-10 rounded-panel border border-border-subtle bg-bg-panel p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-body-large text-text-primary">
            The cost stays hidden until <span className="text-accent-primary">commissioning</span> —
            the most expensive place in a project to find a bug, and where fragmented tools
            and tribal standards harden into permanent technical debt.
          </p>
        </motion.div>

        {/* After */}
        <motion.div
          className="rounded-panel border border-accent-border bg-accent-primary/[0.06] p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-body-large text-text-primary">
            AUTO-X connects the entire lifecycle into one AI-native platform:{' '}
            <span className="text-accent-primary">AI proposes</span>, engineering knowledge
            validates, automation reduces repetition, and engineers keep control of every
            critical decision.
          </p>
        </motion.div>

        <p className="mt-10 font-mono text-caption text-text-quaternary">
          {'// problem space — quantified claims are hypotheses pending customer validation'}
        </p>
      </div>
    </section>
  )
}
