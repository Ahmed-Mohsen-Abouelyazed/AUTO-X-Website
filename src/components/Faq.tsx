import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'

const faqs = [
  {
    q: 'Who is AUTO-X for?',
    a: 'Industrial Automation teams and system integrators who design, build, and verify industrial systems. We serve global teams starting with the MENA region.',
  },
  {
    q: 'Is it ready to use?',
    a: 'AUTO-PLC is demo-ready and beta access starts Q4 2026 — join the waitlist to get early access.',
  },
  {
    q: 'Does it work with my tools?',
    a: 'AUTO-PLC integrates with Siemens TIA Portal. The full PlatX platform supports multi-vendor workflows across Siemens, Rockwell, Schneider, ABB, and more.',
  },
  {
    q: 'Is my data safe?',
    a: 'Your engineering data belongs to you. We do not train on customer data, and SOC 2 compliance is planned as we move toward general availability.',
  },
  {
    q: 'How do I get started?',
    a: 'Join the waitlist or book a demo — both are free during beta. No credit card, no spam; your feedback directly shapes the roadmap.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="section bg-bg-panel border-y border-border-subtle">
      <div className="mx-auto max-w-container">
        <div className="mb-12 max-w-2xl">
          <Badge variant="accent" className="mb-4">
            FAQ
          </Badge>
          <h2 className="mb-4 text-display-large text-text-primary">
            Answers before you commit.
          </h2>
          <p className="text-body-large text-text-secondary">
            The questions teams ask us at the decision moment — answered plainly.
          </p>
        </div>

        <div className="max-w-3xl divide-y divide-border-subtle border-y border-border-subtle">
          {faqs.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sub-heading-large text-text-primary marker:hidden">
                  {item.q}
                  <span
                    className="text-accent-primary transition-transform duration-fast group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-body text-text-secondary">{item.a}</p>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
