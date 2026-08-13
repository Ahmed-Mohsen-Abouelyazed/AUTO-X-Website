import { motion } from 'framer-motion'
import { Mail, MessageSquare, Github, Linkedin, Twitter, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'For partnerships, press, and general inquiries',
    action: 'hello@auto-x.io',
    href: 'mailto:hello@auto-x.io',
  },
  {
    icon: MessageSquare,
    title: 'Discord Community',
    description: 'Join engineers discussing industrial automation',
    action: 'Join Discord',
    href: '#discord',
  },
  {
    icon: Github,
    title: 'GitHub',
    description: 'Follow development, report issues, contribute',
    action: 'github.com/auto-x',
    href: '#github',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    description: 'Company updates and engineering insights',
    action: 'Follow AUTO-X',
    href: '#linkedin',
  },
  {
    icon: Twitter,
    title: 'Twitter / X',
    description: 'Real-time updates and technical threads',
    action: '@auto_x_io',
    href: '#twitter',
  },
]

export function Contact() {
  return (
    <section id="contact" className="section bg-bg-page relative overflow-hidden">
      <div className="max-w-container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="accent" className="mb-4">Get Involved</Badge>
          <h2 className="text-display-large text-text-primary mb-4">
            Join the Waitlist
          </h2>
              <p className="text-body-large text-text-secondary">
                Early access to PlatX and AUTO-PLC beta. Technical deep-dives. Founding member pricing.
              </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Waitlist Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card variant="elevated" className="p-8 md:p-10">
              <div className="mb-8">
                <h3 className="text-section-heading text-text-primary mb-2">Join the Waitlist</h3>
              <p className="text-body text-text-secondary">
                Get early access to PlatX and AUTO-PLC beta, technical deep-dives, and founding member pricing.
              </p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label="First Name"
                    placeholder="Ahmed"
                    required
                    autoComplete="given-name"
                  />
                  <Input
                    label="Last Name"
                    placeholder="Mohsen"
                    required
                    autoComplete="family-name"
                  />
                </div>
                <Input
                  label="Email"
                  type="email"
                  placeholder="ahmed@company.com"
                  required
                  autoComplete="email"
                  leftIcon={<Mail className="w-5 h-5" aria-hidden="true" />}
                />
                <Input
                  label="Company / Organization"
                  placeholder="System Integrator Co."
                  autoComplete="organization"
                />
                <div>
                  <label htmlFor="role-select" className="block text-ui-label text-text-secondary mb-2 font-medium">
                    Role
                  </label>
                  <select
                    id="role-select"
                    className="input"
                    autoComplete="off"
                  >
                    <option value="" disabled>Select your role</option>
                    <option value="system-integrator">System Integrator</option>
                    <option value="automation-engineer">Automation Engineer</option>
                    <option value="engineering-manager">Engineering Manager</option>
                    <option value="cto">CTO / VP Engineering</option>
                    <option value="investor">Investor</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="interest-select" className="block text-ui-label text-text-secondary mb-2 font-medium">
                    Primary Interest
                  </label>
                  <select id="interest-select" className="input" autoComplete="off">
                    <option value="" disabled>What interests you most?</option>
                    <option value="platx">PlatX Platform</option>
                    <option value="autoplc">AUTO-PLC (PLC Engineering)</option>
                    <option value="partnership">Partnership / Integration</option>
                    <option value="investment">Investment Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <Button type="submit" className="w-full" size="lg" leftIcon={<ArrowRight className="w-5 h-5" />}>
                  Join Waitlist
                </Button>
                <p className="text-micro text-text-quaternary text-center">
                  No spam. Unsubscribe anytime. <a href="/privacy" className="text-accent-primary hover:underline">Privacy Policy</a>
                </p>
              </form>

              {/* Benefits */}
              <div className="mt-8 pt-8 border-t border-border-subtle">
                <h4 className="font-semibold text-sub-heading text-text-primary mb-4">Waitlist Benefits</h4>
                <ul className="space-y-3" role="list">
                   {[
                     'Beta access to PlatX and AUTO-PLC',
                     'Founding member pricing (lifetime)',
                     'Direct line to the engineering team',
                     'Exclusive technical deep-dives',
                     'Priority support & onboarding',
                     'Community access',
                   ].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-body-small text-text-secondary">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="space-y-6">
              <h3 className="text-section-heading text-text-primary">Other Ways to Connect</h3>
              <p className="text-body text-text-secondary">
                Prefer a different channel? We&apos;re active across multiple platforms.
              </p>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.href}
                    className="card flex items-center gap-4 group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
                    whileHover={{ x: 4 }}
                    target={method.href.startsWith('http') || method.href.startsWith('mailto') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') || method.href.startsWith('mailto') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="w-12 h-12 rounded-panel bg-accent-muted flex items-center justify-center flex-shrink-0 group-hover:bg-accent-primary/20 transition-colors">
                      <method.icon className="w-6 h-6 text-accent-primary group-hover:text-accent-hover transition-colors" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sub-heading text-text-primary">{method.title}</h4>
                      <p className="text-body-small text-text-tertiary">{method.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-medium text-ui-label text-text-secondary group-hover:text-brand transition-colors">
                        {method.action}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Office Location */}
              <Card variant="panel" className="mt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-panel bg-accent-muted flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sub-heading text-text-primary">Headquarters</h4>
                    <p className="text-body-small text-text-tertiary">Cairo, Egypt</p>
                    <p className="text-body-small text-text-tertiary">Serving MENA & Global</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="max-w-xl mx-auto p-8 md:p-12 bg-bg-elevated border border-border-standard rounded-panel relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-primary to-accent-hover" aria-hidden="true" />
          <h3 className="text-display-medium text-text-primary mb-4">Get Early Access to PlatX</h3>
          <p className="text-body-large text-text-secondary mb-8">
            Join automation engineers on the waitlist. Early access starts Q4 2026.
          </p>
          <p className="mb-8 font-mono text-caption text-text-quaternary">
            {'// pre-seed · validating with MENA system integrators · no customers yet — your feedback shapes the roadmap'}
          </p>
          <p className="mb-6 text-body text-text-secondary">
            Free during beta · No credit card · No spam — your feedback shapes the roadmap.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button type="button" size="lg" leftIcon={<ArrowRight className="w-5 h-5" />}>
              Join Waitlist Now
            </Button>
            <Button type="button" variant="secondary" size="lg">
              Schedule a Demo
            </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}