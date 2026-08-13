import { motion } from 'framer-motion'
import {
  Users,
  Target,
  Shield,
  Lightbulb,
  BookOpen,
  Rocket,
  Brain,
  Database,
  Cpu,
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

const values = [
  {
    icon: Target,
    title: 'Engineering Intent First',
    description:
      'We start with real engineering requirements — not vague prompts. The model becomes the single source of truth for everything that follows.',
  },
  {
    icon: Users,
    title: 'Amplification, Not Replacement',
    description:
      'AUTO-X amplifies engineer productivity, never replaces them. Human engineers retain authority over every critical decision.',
  },
  {
    icon: Shield,
    title: 'Deterministic & Safe',
    description:
      'Same input always produces the same output. AI proposes, humans approve — at every gate. No surprises at commissioning.',
  },
  {
    icon: Lightbulb,
    title: 'Standards as Hard Rules',
    description:
      'ISA-88, IEC 61131, IEC 62443, and vendor-specific standards are encoded as validators — not opinions.',
  },
  {
    icon: BookOpen,
    title: 'Verification First',
    description:
      'Getting it right is more valuable than moving fast. Every output is mechanically validated before it ships.',
  },
  {
    icon: Rocket,
    title: 'Evidence-Driven',
    description:
      'Claims require validation. No false precision. Customer evidence drives every product decision.',
  },
  {
    icon: Brain,
    title: 'Engineering Knowledge',
    description:
      'AI combined with deep domain expertise in industrial automation. Knowledge is encoded, not learned from scratch.',
  },
  {
    icon: Database,
    title: 'Unified Data',
    description:
      'One data model connects requirements, designs, and assets — eliminating the fragmentation that costs projects millions.',
  },
  {
    icon: Cpu,
    title: 'Continuous Learning',
    description:
      'Every project feeds back knowledge that improves the next one. The platform gets smarter with every deployment.',
  },
]

const team = [
  {
    name: 'Ahmed Mohsen Abouelyazed',
    role: 'Founder / CEO-CTO',
    bio: 'Electrical Power & Control Engineer, Siemens TIA-PRO1 Certified, ITI Industrial Automation Track graduate. Multi-industry automation project experience across oil & gas, manufacturing, and infrastructure.',
    linkedin: '#',
    github: '#',
  },
]

const milestones = [
  { date: '2026-08', title: 'Company Founded', description: 'AUTO-X established with mission to transform industrial engineering' },
  { date: '2026-08', title: 'PlatX Architecture', description: 'AI-Native Industrial Engineering Operating System — 5 layers, 30+ modules defined' },
  { date: '2026-08', title: 'AUTO-PLC Architecture', description: '6-stage deterministic engine architecture defined (A4 principle)' },
  { date: '2026-08', title: 'Frontend Scaffolded', description: 'React 19 + Vite + Tailwind v4 + ISA-101 dark theme established' },
  { date: '2026-Q3', title: 'AUTO-PLC MVP', description: 'Complete platform demo (URS to FAT with logic generation)' },
  { date: '2026-Q4', title: 'First Pilots', description: 'MENA System Integrator pilots with validation gate E4' },
  { date: '2027-H1', title: 'PlatX Alpha', description: 'Cloud control plane + local agents + multi-vendor drivers' },
  { date: '2027-H2', title: 'Module Expansion', description: 'Additional lifecycle modules (Design, Documentation, Simulation)' },
  { date: '2028', title: 'Series A', description: 'Scale to global engineering organizations' },
]

export function About() {
  return (
    <section id="about" className="section bg-bg-panel border-y border-border-subtle">
      <div className="max-w-container mx-auto">
        {/* Section Header */}
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="accent" className="mb-4">
            Why AUTO-X
          </Badge>
          <h2 className="text-display-large text-text-primary mb-4">
            Built by an automation engineer, for automation engineers.
          </h2>
          <p className="text-body-large text-text-secondary">
            AUTO-X is the software infrastructure for the next generation of industrial
            engineering — built by a founder who spent years commissioning the kind of
            systems this platform is designed to transform.
          </p>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          className="mb-16 rounded-panel border border-accent-border bg-accent-primary/[0.06] p-6 md:p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <p className="text-body-large text-text-primary text-center">
            The vision: become{' '}
            <span className="text-accent-primary font-semibold">
              the Siemens + EPLAN + AVEVA + GitHub + ChatGPT + Palantir for Industrial
              Automation Engineering
            </span>{' '}
            — an AI-native platform where requirements generate designs, designs generate
            software, software generates simulations, and operations generate knowledge
            that improves future projects.
          </p>
        </motion.div>

        {/* Founder (lede) */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="accent" className="mb-4">Founder</Badge>
              <h3 className="text-display-medium text-text-primary mb-4">Ahmed Mohsen Abouelyazed</h3>
              <p className="text-body-large text-text-secondary mb-6">
                Founder, CEO & CTO. Electrical Power & Control Engineer with deep experience across oil & gas,
                manufacturing, and infrastructure. Ships the full AUTO-X platform end to end.
              </p>
              <p className="text-body text-text-secondary mb-6">
                Background spans ISA-88, IEC 61131-3/61511/62443, PLCopen, and Siemens TIA Portal —
                built through years of hands-on automation project delivery.
              </p>
              <div className="flex items-center gap-4">
                <a href={team[0].linkedin} className="btn-pill-accent" aria-label="LinkedIn">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
                <a href={team[0].github} className="btn-pill" aria-label="GitHub">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
              </div>
            </div>
            <div className="bg-bg-elevated rounded-panel p-8 border border-border-standard">
              <h4 className="text-sub-heading-large text-text-primary mb-4">Background</h4>
              <p className="text-body text-text-secondary">
                {team[0].bio}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
            >
              <Card variant="default" hover className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-panel bg-accent-muted flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-accent-primary" aria-hidden="true" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <Badge variant="accent" className="mb-4">Journey</Badge>
            <h3 className="text-display-medium text-text-primary mb-2">Our Timeline</h3>
            <p className="text-body-large text-text-secondary">From foundation to AI-Native Industrial Engineering OS</p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border-standard" aria-hidden="true" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={`${milestone.date}-${index}`}
                  className="relative pl-20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
                >
                  <div className="absolute left-0 top-1 flex items-center justify-center w-14 h-14 bg-bg-page border border-border-standard rounded-circle z-10">
                    <div className="w-3 h-3 rounded-circle bg-accent-primary" />
                  </div>
                  <div className="bg-bg-elevated border border-border-subtle rounded-panel p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-mono-label text-accent-primary font-medium">{milestone.date}</span>
                      <span className="w-px h-6 bg-border-subtle" aria-hidden="true" />
                      <h4 className="font-semibold text-sub-heading text-text-primary">{milestone.title}</h4>
                    </div>
                    <p className="text-body-small text-text-tertiary">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
