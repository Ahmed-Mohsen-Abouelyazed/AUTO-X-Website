import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { AuroraBackground } from '@/components/AuroraBackground'
import { KpiStat } from '@/components/KpiStat'

const stats = [
  { value: 85, label: 'Engineering Effort Reduction', prefix: '', suffix: '%', decimals: 0 },
  { value: 100, label: 'IEC 61131-3 Compliant', prefix: '', suffix: '%', decimals: 0 },
  { value: 0, label: 'Runtime Dependencies', prefix: '', suffix: '', decimals: 0 },
  { value: 99.9, label: 'Deterministic Builds', prefix: '', suffix: '%', decimals: 1 },
]

const trustBadges = [
  'IEC 61131-3',
  'ISA-88',
  'ISA-18.2',
  'IEC 61511',
  'IEC 62443',
  'PLCopen',
]

const pipelineSteps = [
  { step: '01', title: 'Requirements', desc: 'Control narratives, I/O lists, equipment models' },
  { step: '02', title: 'Engineering Model', desc: 'ISA-88 equipment hierarchy, control design' },
  { step: '03', title: 'AUTO-PLC', desc: 'Deterministic code gen, standards verification' },
  { step: '04', title: 'Validated PLC Software', desc: 'TIA-importable, compile-verified, traceable' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Aurora Background */}
      <AuroraBackground />

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-20" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="section-hero relative z-10">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="brand">
            <Zap className="w-3 h-3" aria-hidden="true" />
            AI proposes. Deterministic validates. Engineers decide.
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-display text-display-hero text-text-primary mb-6 text-balance"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Industrial Engineering,
          <br />
          <span className="text-gradient-brand">Reimagined</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-body-large text-text-secondary max-w-2xl mx-auto mb-10 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          AUTO-X builds deterministic PLC engineering software for Industrial Automation
          and Industry 4.0 teams. Starting with workflow automation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Button type="button" size="lg" leftIcon={<ArrowRight className="w-5 h-5" />}>
            Join Waitlist
          </Button>
          <Button type="button" variant="secondary" size="lg">
            View Documentation
          </Button>
        </motion.div>

        {/* Pipeline Strip */}
        <motion.div
          className="mb-16 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            {pipelineSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 p-4 md:p-6 bg-bg-panel/40 border border-border-subtle rounded-card min-w-[200px] md:min-w-[240px] flex-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.08, duration: 0.4 }}
              >
                <div className="font-display font-semibold text-brand text-2xl md:text-3xl w-12 text-center md:w-auto flex-shrink-0">
                  {step.step}
                </div>
                <div className="text-center md:text-left">
                  <div className="font-semibold text-sub-heading text-text-primary mb-1">{step.title}</div>
                  <div className="text-body-small text-text-tertiary">{step.desc}</div>
                </div>
                {index < pipelineSteps.length - 1 && (
                  <div className="w-10 h-px bg-gradient-to-r from-brand to-transparent mx-auto md:mx-0 flex-shrink-0" aria-hidden="true" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats with KpiStat */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 md:p-6 bg-bg-panel/50 border border-border-subtle rounded-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
            >
              <KpiStat
                value={stat.value}
                label={stat.label}
                prefix={stat.prefix}
                suffix={stat.suffix}
                decimals={stat.decimals}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Standards Band */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            <span className="text-micro text-text-quaternary uppercase tracking-wider">Standards-verified</span>
            {trustBadges.map((badge) => (
              <Badge key={badge} variant="brand" size="sm">
                {badge}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.5 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            <span className="text-micro text-text-quaternary uppercase tracking-wider">Module of</span>
            <Badge variant="brand" size="sm">
              PlatX
            </Badge>
            <span className="text-micro text-text-tertiary">Industrial Engineering OS</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-quaternary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
      >
        <span className="text-micro uppercase tracking-wider">Scroll</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}