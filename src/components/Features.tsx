import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import {
  Brain,
  Zap,
  Shield,
  Code,
  GitBranch,
  Layers,
  Cpu,
  Database,
  CheckCircle,
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

const features = [
  {
    icon: Brain,
    title: 'AI-Assisted Engineering',
    description:
      'AI generates proposals for control logic, I/O allocation, tag structures, and documentation. Every proposal is reviewed and approved by engineers before emission.',
    highlights: ['Requirements to Model', 'Control Design', 'Code Generation', 'Documentation'],
    category: 'AI',
  },
  {
    icon: Shield,
    title: 'Deterministic Validation',
    description:
      'Non-stochastic emission engines ensure identical inputs produce identical outputs. Mechanical compile-verify gates catch errors before they reach the PLC.',
    highlights: ['Schema Validation', 'Type Checking', 'Standards Compliance', 'Compile Verification'],
    category: 'Verification',
  },
  {
    icon: Zap,
    title: '80-90% Effort Reduction',
    description:
      'Automate repetitive PLC engineering tasks: I/O allocation, tag creation, UDT/DB scaffolding, block generation, naming, and cross-referencing.',
    highlights: ['I/O Allocation', 'Tag Structures', 'UDT/DB Scaffolding', 'Naming Standards'],
    category: 'Productivity',
  },
  {
    icon: Code,
    title: 'Multi-Vendor Support',
    description:
      'Single engineering model emits to Siemens SCL, Rockwell L5X, Schneider, CODESYS, and Beckhoff. Vendor projections from a vendor-neutral IR.',
    highlights: ['Siemens TIA Portal', 'Rockwell Studio 5000', 'Schneider EcoStruxure', 'CODESYS'],
    category: 'Interop',
  },
  {
    icon: GitBranch,
    title: 'Standards as Code',
    description:
      'ISA-88, ISA-18.2, IEC 61131-3/61511/62443, PLCopen encoded as deterministic validators. No tribal knowledge required - standards are executable.',
    highlights: ['ISA-88 Equipment Models', 'ISA-18.2 Alarm Philosophy', 'IEC 61131-3 Languages', 'PLCopen Compliance'],
    category: 'Standards',
  },
  {
    icon: Cpu,
    title: 'Local-First Execution',
    description:
      'Air-gap ready with local Ollama models. Zero data leaves your environment in offline mode. Hybrid cloud/on-prem for enterprise deployments.',
    highlights: ['Offline AI (Ollama)', 'Air-Gap Support', 'Local Execution', 'Data Sovereignty'],
    category: 'Security',
  },
  {
    icon: Layers,
    title: 'Digital Thread',
    description:
      'End-to-end traceability from requirements through commissioning to operations. Bidirectional sync with PLC runtime for living documentation.',
    highlights: ['Requirements Traceability', 'Change Impact Analysis', 'Bidirectional Sync', 'Living Documentation'],
    category: 'Traceability',
  },
  {
    icon: Database,
    title: 'Engineering Knowledge Graph',
    description:
      'Continuously learning from approved projects. Company-specific patterns, templates, and conventions encoded for reuse across projects.',
    highlights: ['Pattern Learning', 'Template Library', 'Convention Encoding', 'Knowledge Reuse'],
    category: 'Intelligence',
  },
]

const categories = [
  { id: 'AI', label: 'AI', color: 'accent' },
  { id: 'Verification', label: 'Verification', color: 'success' },
  { id: 'Productivity', label: 'Productivity', color: 'accent' },
  { id: 'Interop', label: 'Interop', color: 'success' },
  { id: 'Standards', label: 'Standards', color: 'accent' },
  { id: 'Security', label: 'Security', color: 'success' },
  { id: 'Traceability', label: 'Traceability', color: 'accent' },
  { id: 'Intelligence', label: 'Intelligence', color: 'success' },
]

export function Features() {
  return (
    <section id="features" className="section bg-bg-page">
      <div className="max-w-container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="accent" className="mb-4">
            Core Capabilities
          </Badge>
          <h2 className="text-display-large text-text-primary mb-4">
            Built for Industrial Engineering
          </h2>
          <p className="text-body-large text-text-secondary">
            Eight foundational capabilities that transform how automation engineers work.
            Each capability is engineered with deterministic validation at its core.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          role="group"
          aria-label="Filter features by category"
        >
          {categories.map((cat) => (
            <button
              type="button"
              key={cat.id}
              className={cn(
                'btn-pill',
                cat.color === 'accent' ? 'btn-pill-accent' : 'btn-pill-success'
              )}
              aria-pressed="false"
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
            >
              <Card variant="panel" hover>
                <CardHeader>
                  <div className="w-12 h-12 rounded-panel bg-accent-muted flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-accent-primary" aria-hidden="true" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={feature.category === 'AI' || feature.category === 'Productivity' || feature.category === 'Standards' || feature.category === 'Traceability' ? 'accent' : 'success'} size="sm">
                      {feature.category}
                    </Badge>
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                  <ul className="mt-6 space-y-2" role="list">
                    {feature.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-body-small text-text-secondary">
                        <CheckCircle className="w-4 h-4 text-success flex-shrink-0" aria-hidden="true" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}