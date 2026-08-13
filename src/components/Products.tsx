import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import {
  Cpu,
  Database,
  Layout,
  Network,
  Shield,
  Zap,
  Brain,
  ArrowRight,
  CheckCircle,
  FileCode,
  Settings,
  BarChart3,
  Wrench,
  ClipboardList,
  Radio,
  Monitor,
  Workflow,
  TrendingUp,
} from 'lucide-react'
import { Card, CardHeader, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const PlcShowcase = lazy(async () => ({
  default: (await import('@/components/PlcShowcase')).PlcShowcase,
}))

const flagshipProducts = [
  {
    id: 'platx',
    icon: Layout,
    name: 'PlatX',
    tagline: 'AI-Native Industrial Engineering Operating System',
    description:
      'The unified platform connecting the entire industrial automation lifecycle. AI agents, encoded engineering knowledge, and a single data model turn fragmented workflows into one intelligent system.',
    status: 'In Development',
    statusVariant: 'accent' as const,
    highlights: [
      'AI agents for every engineering discipline',
      'Single source of truth across the lifecycle',
      'Engineering standards encoded as rules',
      'Integrated simulation & validation',
      'Version control & change management',
      'Multi-vendor integration (Siemens, Rockwell, ABB)',
    ],
    cta: 'Learn more',
    gradient: 'from-accent-primary/20 to-accent-muted/20',
  },
  {
    id: 'autoplc',
    icon: Cpu,
    name: 'AUTO-PLC',
    tagline: 'PLC Engineering Automation',
    description:
      'The first PlatX module — a proven proof point. Transforms the PLC engineering workflow from requirements to release through a deterministic, AI-assisted pipeline.',
    status: 'Demo Ready',
    statusVariant: 'accent' as const,
    highlights: [
      '6-stage gated engineering pipeline',
      'AI drafts · engines verify · engineers approve',
      'Standards-encoded validation',
      'Siemens TIA Portal integration',
      'Deterministic, reproducible output',
    ],
    cta: 'Book a demo',
    gradient: 'from-accent-primary/15 to-accent-muted/10',
  },
  {
    id: 'autoio',
    icon: Database,
    name: 'AUTO-IO',
    tagline: 'Automatic I/O Allocation',
    description:
      'Automates I/O allocation, cabinet layout, and termination diagrams — eliminating hours of manual spreadsheet work.',
    status: 'Ready for Integration',
    statusVariant: 'success' as const,
    highlights: [
      'Automatic I/O allocation',
      'Cabinet layout generation',
      'Termination diagram output',
      'Scenario comparison',
      'Report automation',
    ],
    cta: 'Learn more',
    gradient: 'from-success/15 to-accent-muted/10',
  },
]

const lifecycleModules = [
  {
    phase: 'Phase 1: Define & Scope',
    modules: [
      { name: 'AUTO-SCOPE', icon: ClipboardList, desc: 'AI-Powered Project Intake' },
      { name: 'AUTO-REQ', icon: FileCode, desc: 'Requirements Engineering' },
      { name: 'AUTO-FEED', icon: BarChart3, desc: 'Front-End Engineering Design' },
    ],
  },
  {
    phase: 'Phase 2: Engineering Design',
    modules: [
      { name: 'AUTO-PD', icon: Workflow, desc: 'Process Design' },
      { name: 'AUTO-INST', icon: Settings, desc: 'Instrumentation Design' },
      { name: 'AUTO-IO', icon: Database, desc: 'I/O Design' },
      { name: 'AUTO-ELEC', icon: Zap, desc: 'Electrical Design' },
      { name: 'AUTO-NET', icon: Network, desc: 'Industrial Network Design' },
      { name: 'AUTO-SAFE', icon: Shield, desc: 'Functional Safety Engineering' },
      { name: 'AUTO-ICS/OT', icon: Shield, desc: 'Industrial Cybersecurity' },
    ],
  },
  {
    phase: 'Phase 3: Control System Development',
    modules: [
      { name: 'AUTO-PLC', icon: Cpu, desc: 'PLC Software Engineering' },
      { name: 'AUTO-HMI', icon: Monitor, desc: 'HMI Engineering' },
      { name: 'AUTO-SCADA', icon: Layout, desc: 'SCADA Engineering' },
      { name: 'AUTO-MES', icon: BarChart3, desc: 'MES Integration' },
      { name: 'AUTO-IIOT', icon: Radio, desc: 'Unified Namespace Platform' },
    ],
  },
  {
    phase: 'Phase 4: Documentation',
    modules: [
      { name: 'AUTO-DOC', icon: FileCode, desc: 'Documentation Automation' },
      { name: 'AUTO-TEST', icon: CheckCircle, desc: 'Testing Automation' },
    ],
  },
  {
    phase: 'Phase 5: Simulation & Validation',
    modules: [
      { name: 'AUTO-SIM', icon: Cpu, desc: 'Simulation Platform' },
      { name: 'AUTO-DT', icon: Monitor, desc: 'Digital Twin Platform' },
    ],
  },
  {
    phase: 'Phase 6: Commissioning',
    modules: [
      { name: 'AUTO-COMM', icon: Settings, desc: 'Commissioning Assistant' },
      { name: 'AUTO-MIGRATE', icon: ArrowRight, desc: 'Migration Platform' },
    ],
  },
  {
    phase: 'Phase 7: Operations',
    modules: [
      { name: 'AUTO-OPS', icon: BarChart3, desc: 'Operations Excellence' },
      { name: 'AUTO-PERF', icon: TrendingUp, desc: 'Performance Optimization' },
    ],
  },
  {
    phase: 'Phase 8: Maintenance',
    modules: [
      { name: 'AUTO-CM', icon: Wrench, desc: 'Condition Monitoring' },
      { name: 'AUTO-PDM', icon: Brain, desc: 'Predictive Maintenance' },
    ],
  },
  {
    phase: 'Phase 9: Continuous Learning',
    modules: [
      { name: 'AUTO-KG', icon: Brain, desc: 'Engineering Knowledge Graph' },
      { name: 'AUTO-LEARN', icon: Brain, desc: 'Continuous Learning Platform' },
    ],
  },
]

export function Products() {
  return (
    <section id="products" className="section bg-bg-page">
      <div className="max-w-container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="accent" className="mb-4">
            Product Portfolio
          </Badge>
          <h2 className="text-display-large text-text-primary mb-4">
            The AUTO-X Ecosystem
          </h2>
          <p className="text-body-large text-text-secondary">
            PlatX is the AI-Native Industrial Engineering Operating System. AUTO-X modules
            are specialized AI agents that plug into PlatX — starting with PLC engineering
            automation and expanding toward the complete industrial automation lifecycle.
          </p>
        </motion.div>

        {/* Flagship Products */}
        <div className="grid-3 mb-24">
          {flagshipProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
            >
              <Card variant="elevated" hover className="h-full flex flex-col relative overflow-hidden">
                {/* Gradient Accent Border */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r"
                  style={{ background: product.gradient }}
                  aria-hidden="true"
                />

                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-14 h-14 rounded-panel bg-gradient-to-br flex items-center justify-center" style={{ background: product.gradient }}>
                      <product.icon className="w-7 h-7 text-accent-primary" aria-hidden="true" />
                    </div>
                    <Badge variant={product.statusVariant} size="sm">
                      {product.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-sub-heading-large text-text-primary">{product.name}</span>
                  </div>
                  <CardDescription className="text-text-secondary">{product.tagline}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <p className="text-body text-text-secondary mb-6">{product.description}</p>

                  <div className="space-y-3 mb-6" role="list">
                    {product.highlights.map((highlight) => (
                      <motion.div
                        key={highlight}
                        className="flex items-center gap-2 text-body-small text-text-secondary"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CheckCircle className="w-4 h-4 text-success flex-shrink-0" aria-hidden="true" />
                        {highlight}
                      </motion.div>
                    ))}
                  </div>

                  </CardContent>

                <CardFooter>
                  <Button type="button" variant="secondary" className="w-full justify-between">
                    {product.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* AUTO-PLC in action — pipeline preview */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge variant="accent" className="mb-4">
              Live Preview
            </Badge>
            <h3 className="text-section-heading text-text-primary mb-2">AUTO-PLC, in action</h3>
            <p className="text-body text-text-secondary">
              The deterministic pipeline: AI proposes, engines verify, engineers approve.
            </p>
          </div>

          <Suspense
            fallback={
              <div className="h-[460px] rounded-panel border border-border-subtle bg-bg-panel animate-pulse" />
            }
          >
            <PlcShowcase />
          </Suspense>
        </motion.div>

        {/* Full Lifecycle Modules */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-section-heading text-text-primary mb-2">Full Lifecycle Coverage</h3>
            <p className="text-body text-text-secondary max-w-2xl mx-auto">
              From initial concepts to continuous improvement — 30+ specialized AI agents working
              together through the PlatX platform.
            </p>
          </div>

          <div className="space-y-8">
            {lifecycleModules.map((group, gi) => (
              <motion.div
                key={group.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.05, duration: 0.4 }}
              >
                <h4 className="font-mono text-mono-label text-accent-primary mb-4">{group.phase}</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {group.modules.map((mod) => (
                    <Card key={mod.name} variant="panel" className="h-full text-center py-5">
                      <div className="w-10 h-10 rounded-panel bg-accent-muted flex items-center justify-center mx-auto mb-3">
                        <mod.icon className="w-5 h-5 text-accent-primary" aria-hidden="true" />
                      </div>
                      <h5 className="font-semibold text-sub-heading text-text-primary mb-1">{mod.name}</h5>
                      <p className="text-body-small text-text-tertiary">{mod.desc}</p>
                    </Card>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
