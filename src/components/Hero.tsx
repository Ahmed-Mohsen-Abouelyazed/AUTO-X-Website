import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { HeroPipeline } from '@/components/HeroPipeline'

const standards = ['IEC 61131-3', 'ISA-88', 'ISA-95', 'ISA-18.2', 'IEC 62443', 'IEC 61511', 'PLCopen']

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
}

const EASE = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft brand glow */}
      <div
        className="absolute -right-40 -top-32 -z-10 h-[460px] w-[460px] rounded-full bg-accent-primary/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-container px-6 pb-24 pt-32 md:px-8 lg:px-12 lg:pb-32 lg:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <motion.h1
              className="mb-6 mt-2 text-display-hero text-text-primary text-balance"
              {...fadeUp}
            >
              The AI-Native Operating System
              <br />
              for Industrial Engineering.
            </motion.h1>

            <motion.p
              className="mb-8 max-w-xl text-body-large text-text-secondary"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
            >
              AI-powered engineering tools that help Industrial Automation teams design, build,
              verify, and operate complex systems — cutting project timelines and reducing errors.
            </motion.p>

            <motion.div
              className="mb-10 flex flex-col gap-4 sm:flex-row"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
            >
              <Button type="button" size="lg" leftIcon={<ArrowRight className="h-5 w-5" />}>
                Join Waitlist
              </Button>
              <Button
                type="button"
                variant="secondary"
                size="lg"
                rightIcon={<ArrowUpRight className="h-5 w-5" />}
              >
                Book a demo
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-x-2 gap-y-2"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
            >
              <span className="text-micro uppercase tracking-wider text-text-quaternary">
                Standards-verified
              </span>
              {standards.map((badge) => (
                <Badge key={badge} variant="accent" size="sm">
                  {badge}
                </Badge>
              ))}
            </motion.div>

            <motion.p
              className="mt-6 max-w-xl text-body-small text-text-tertiary"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.25 }}
            >
              Our mission: make industrial engineering more intelligent, connected, and
              dramatically more productive across the complete automation lifecycle.
            </motion.p>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          >
            <HeroPipeline />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
