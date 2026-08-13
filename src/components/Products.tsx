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
} from 'lucide-react'
import { Card, CardHeader, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const products = [
  {
    id: 'autoplc',
    icon: Cpu,
    name: 'AUTO-PLC',
    tagline: 'PLC Engineering Workflow Automation',
    description:
      'Complete AI-assisted PLC engineering platform from requirements to FAT. Deterministic code generation for IEC 61131-3 languages with standards-encoded validation.',
    status: 'In Development',
    statusVariant: 'accent' as const,
    highlights: [
      '6-Stage Deterministic Pipeline',
      'IEC 61131-3 (IL/ST/LAD/FBD/SFC)',
      'Siemens TIA Portal Integration',
      'Standards Validator (ISA-88, IEC 61511)',
      'Simulation & Verification Gates',
      'Bidirectional PLC Sync',
    ],
    techStack: ['React 19', 'TypeScript', 'Rust WASM', '.NET 8', 'Express'],
    cta: 'View Technical Docs',
    gradient: 'from-accent-primary/20 to-accent-muted/20',
  },
  {
    id: 'autoio',
    icon: Database,
    name: 'AUTO-IO',
    tagline: 'Automatic I/O Allocation & Engineering',
    description:
      'Standalone Python GUI application for automatic I/O allocation, cabinet layout, and termination diagrams. Feature-complete POC ready for productization.',
    status: 'POC Complete',
    statusVariant: 'success' as const,
    highlights: [
      'Automatic I/O Allocation',
      'Cabinet Layout Generation',
      'Termination Diagrams',
      'IO List Management',
      'Scenario Management',
      'Report Generation',
    ],
    techStack: ['Python', 'PyQt/Tkinter', 'openpyxl', 'reportlab'],
    cta: 'Explore POC',
    gradient: 'from-success/20 to-emerald-600/20',
  },
  {
    id: 'platx',
    icon: Layout,
    name: 'PlatX Platform',
    tagline: 'Industrial Engineering Operating System',
    description:
      'Unified platform connecting all AUTO-X modules. Cloud control plane, local execution agents, AIR schema, bidirectional sync, and IIoT/UNS layer.',
    status: 'Architecture Designed',
    statusVariant: 'warning' as const,
    highlights: [
      'Cloud Control Plane',
      'Local Execution Agents',
      'AIR Schema (Asset Info)',
      'Multi-Vendor Drivers',
      'Bidirectional Sync',
      'IIoT / UNS Layer',
    ],
    techStack: ['TypeScript', 'Rust', 'Go', 'PostgreSQL', 'NATS', 'Kubernetes'],
    cta: 'Read Architecture',
    gradient: 'from-warning/20 to-amber-600/20',
  },
]

const futureModules = [
  { name: 'AUTO-DOC', icon: FileCode, desc: 'Engineering Documentation Automation' },
  { name: 'AUTO-HMI', icon: Layout, desc: 'HMI/SCADA Engineering' },
  { name: 'AUTO-IIoT', icon: Network, desc: 'ISA-95 / Unified Namespace' },
  { name: 'AUTO-ICS', icon: Shield, desc: 'OT Cybersecurity Engineering' },
  { name: 'AUTO-PdM', icon: Brain, desc: 'Predictive Maintenance' },
  { name: 'AUTO-SIM', icon: Cpu, desc: 'Industrial Simulation / Digital Twin' },
  { name: 'AUTO-NET', icon: Network, desc: 'Industrial Network Engineering' },
  { name: 'AUTO-CTRL', icon: Brain, desc: 'Control Engineering' },
  { name: 'AUTO-INST', icon: Database, desc: 'Instrumentation Engineering' },
  { name: 'AUTO-ELEC', icon: Zap, desc: 'Electrical Engineering' },
  { name: 'AUTO-FAT', icon: Shield, desc: 'FAT/SAT Engineering & Testing' },
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
            Three core pillars today, with a roadmap of specialized modules for every
            industrial engineering discipline. Each module integrates through the PlatX platform.
          </p>
        </motion.div>

        {/* Current Products */}
        <div className="grid-3 mb-24">
          {products.map((product, index) => (
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

                  <div className="flex flex-wrap gap-1.5 mb-6" role="list" aria-label="Technology stack">
                    {product.techStack.map((tech) => (
                      <span key={tech} className="text-micro text-text-tertiary bg-bg-hover px-2 py-1 rounded-subtle">
                        {tech}
                      </span>
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

        {/* Future Modules */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-section-heading text-text-primary mb-2">Roadmap Modules</h3>
            <p className="text-body text-text-secondary">
              Planned modules for the PlatX platform. Each will be validated through customer discovery before development.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {futureModules.map((module, index) => (
              <motion.div
                key={module.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
              >
                <Card variant="panel" className="h-full text-center py-6">
                  <div className="w-12 h-12 rounded-panel bg-accent-muted flex items-center justify-center mx-auto mb-3">
                    <module.icon className="w-6 h-6 text-accent-primary" aria-hidden="true" />
                  </div>
                  <h4 className="font-semibold text-sub-heading text-text-primary mb-1">{module.name}</h4>
                  <p className="text-body-small text-text-tertiary">{module.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}