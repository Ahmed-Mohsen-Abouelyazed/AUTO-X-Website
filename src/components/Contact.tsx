import React, { useState } from 'react'
import {
  Mail,
  Send,
  CheckCircle2,
  MapPin,
  ShieldCheck,
} from 'lucide-react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    interest: 'autoplc',
    notes: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 bg-bg-page relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-accent-primary/10 border border-accent-border text-accent-primary text-xs font-mono font-medium mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Join the Waitlist & Connect</span>
          </div>
          <h2 className="text-display-medium md:text-display-large text-text-primary tracking-tight font-semibold mb-4">
            Get Early Access to AUTO-X & PlatX
          </h2>
          <p className="text-body-large text-text-secondary leading-relaxed">
            Register for early beta access, book a technical discovery session for your engineering team, or explore partnership opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-panel bg-bg-panel border border-border-standard shadow-sm">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-circle bg-success-bg text-success flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-sub-heading-large text-text-primary font-semibold mb-2">
                    Thank you for joining the waitlist!
                  </h3>
                  <p className="text-sm text-text-secondary max-w-md mb-6 leading-relaxed">
                    We have received your registration. Our engineering team will reach out with early access invitations and technical onboarding details for Q4 2026 pilots.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-standard bg-bg-elevated border border-border-standard text-xs font-semibold text-text-primary hover:bg-bg-hover transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
                    <div>
                      <h3 className="text-sub-heading text-text-primary font-semibold">
                        Early Access Application
                      </h3>
                      <p className="text-xs text-text-tertiary">
                        Beta access is free for qualifying engineering teams during testing.
                      </p>
                    </div>
                    <span className="font-mono text-[10px] uppercase text-accent-primary font-semibold px-2 py-1 bg-accent-primary/10 rounded-pill">
                      Pilot Program
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-xs font-medium text-text-secondary mb-1.5"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Ahmed"
                        className="w-full px-3.5 py-2.5 rounded-standard bg-bg-page border border-border-subtle text-xs text-text-primary focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-xs font-medium text-text-secondary mb-1.5"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Mohsen"
                        className="w-full px-3.5 py-2.5 rounded-standard bg-bg-page border border-border-subtle text-xs text-text-primary focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium text-text-secondary mb-1.5"
                      >
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="engineer@company.com"
                        className="w-full px-3.5 py-2.5 rounded-standard bg-bg-page border border-border-subtle text-xs text-text-primary focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-xs font-medium text-text-secondary mb-1.5"
                      >
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="System Integration Co."
                        className="w-full px-3.5 py-2.5 rounded-standard bg-bg-page border border-border-subtle text-xs text-text-primary focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="role"
                        className="block text-xs font-medium text-text-secondary mb-1.5"
                      >
                        Your Role *
                      </label>
                      <select
                        id="role"
                        name="role"
                        required
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-standard bg-bg-page border border-border-subtle text-xs text-text-primary focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20"
                      >
                        <option value="" disabled>Select your role</option>
                        <option value="system_integrator">System Integrator (SI)</option>
                        <option value="automation_engineer">Automation / Control Engineer</option>
                        <option value="engineering_lead">Engineering Manager / Lead</option>
                        <option value="oem_machine_builder">OEM / Machine Builder</option>
                        <option value="executive">CTO / VP Engineering / Plant Director</option>
                        <option value="academic">Researcher / Academic</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="interest"
                        className="block text-xs font-medium text-text-secondary mb-1.5"
                      >
                        Primary Interest *
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        required
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-standard bg-bg-page border border-border-subtle text-xs text-text-primary focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20"
                      >
                        <option value="autoplc">AUTO-PLC (PLC Code Automation Demo)</option>
                        <option value="autoio">AUTO-IO (I/O Allocation & Cabinet Design)</option>
                        <option value="platx">PlatX Platform (Full Lifecycle OS)</option>
                        <option value="pilot">Join Q4 2026 Beta Pilot Program</option>
                        <option value="partnership">Vendor / Technical Partnership</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="notes"
                      className="block text-xs font-medium text-text-secondary mb-1.5"
                    >
                      Project Notes / Target PLC Environment (Optional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="e.g. Siemens TIA Portal V18, S7-1500, batch process with ISA-88..."
                      className="w-full px-3.5 py-2.5 rounded-standard bg-bg-page border border-border-subtle text-xs text-text-primary focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-standard bg-accent-primary text-white text-xs font-semibold shadow-card hover:bg-accent-hover transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Early Access Request</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-text-tertiary">
                    <ShieldCheck className="w-3.5 h-3.5 text-success" />
                    <span>Zero spam · No credit card required · Data privacy protected</span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Info & Channels Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Headquarters Card */}
            <div className="p-6 rounded-panel bg-bg-panel border border-border-standard shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-card bg-accent-primary/10 border border-accent-border flex items-center justify-center text-accent-primary flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-1">
                    Headquarters & Regional Focus
                  </h4>
                  <p className="text-xs text-text-secondary mb-2">
                    Cairo, Egypt — Serving System Integrators across the MENA region & global industrial automation teams.
                  </p>
                  <span className="font-mono text-[11px] text-accent-primary font-medium">
                    Egypt / MENA / Global
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="p-6 rounded-panel bg-bg-panel border border-border-standard shadow-sm">
              <h4 className="text-xs font-mono uppercase tracking-wider text-text-tertiary mb-4">
                Direct Communication Channels
              </h4>

              <div className="space-y-3">
                <a
                  href="mailto:hello@auto-x.io"
                  className="flex items-center justify-between p-3 rounded-card bg-bg-page border border-border-subtle hover:border-border-standard hover:bg-bg-elevated transition-colors text-xs"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-accent-primary" />
                    <span className="text-text-primary font-medium">hello@auto-x.io</span>
                  </div>
                  <span className="text-[11px] text-text-tertiary font-mono">Email Us</span>
                </a>

                <a
                  href="https://github.com/Ahmed-Mohsen-Abouelyazed/AUTO-X-Website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-card bg-bg-page border border-border-subtle hover:border-border-standard hover:bg-bg-elevated transition-colors text-xs"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-xs text-text-primary">GH</span>
                    <span className="text-text-primary font-medium">GitHub Repository</span>
                  </div>
                  <span className="text-[11px] text-text-tertiary font-mono">Codebase</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-card bg-bg-page border border-border-subtle hover:border-border-standard hover:bg-bg-elevated transition-colors text-xs"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-xs text-accent-primary">IN</span>
                    <span className="text-text-primary font-medium">LinkedIn Network</span>
                  </div>
                  <span className="text-[11px] text-text-tertiary font-mono">Company</span>
                </a>
              </div>
            </div>

            {/* Pre-Seed / Pilot Callout */}
            <div className="p-5 rounded-panel bg-bg-elevated border border-border-subtle">
              <span className="text-[10px] font-mono uppercase tracking-widest text-text-tertiary block mb-1">
                Development Stage
              </span>
              <p className="text-xs text-text-secondary leading-relaxed">
                AUTO-X is currently in pre-seed validation. We are conducting deep technical interviews and structuring pilot trials with automation leaders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}