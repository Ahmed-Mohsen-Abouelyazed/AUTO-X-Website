import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react'

const footerLinks = {
  product: [
    { href: '/#products', label: 'AUTO-PLC' },
    { href: '/#products', label: 'AUTO-IO' },
    { href: '/#products', label: 'PlatX Platform' },
    { href: '/docs', label: 'Documentation' },
    { href: '/api', label: 'API Reference' },
  ],
  company: [
    { href: '/#about', label: 'About' },
    { href: '/careers', label: 'Careers' },
    { href: '/blog', label: 'Blog' },
    { href: '/press', label: 'Press' },
    { href: '/#contact', label: 'Contact' },
  ],
  resources: [
    { href: '/community', label: 'Community' },
    { href: '/help', label: 'Help Center' },
    { href: '/status', label: 'Status' },
    { href: '/security', label: 'Security' },
    { href: '/changelog', label: 'Changelog' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy' },
    { href: '/terms', label: 'Terms' },
    { href: '/cookies', label: 'Cookie Policy' },
    { href: '/gdpr', label: 'GDPR' },
  ],
}

const socialLinks = [
  { href: 'https://github.com/auto-x', label: 'GitHub', icon: Github },
  { href: 'https://linkedin.com/company/auto-x', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://twitter.com/auto_x_io', label: 'Twitter', icon: Twitter },
  { href: 'mailto:hello@auto-x.io', label: 'Email', icon: Mail },
]

export function Footer() {
  return (
    <footer className="bg-bg-deepest border-t border-border-subtle" role="contentinfo">
      <div className="max-w-container mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="/" className="brand-link flex items-center gap-3 mb-6" aria-label="AUTO-X Home">
              <img
                src="/AUTO-X_Dark_Theme_Logo_Design_V2-removebg-preview.png"
                alt=""
                className="h-10 w-10 object-contain"
                aria-hidden="true"
                width="32"
                height="32"
              />
              <span className="brand-wordmark font-display font-semibold text-display-large text-text-primary tracking-tight">
                AUTO-X
              </span>
            </a>
            <p className="text-body text-text-secondary max-w-xs mb-6">
              AI-Native Industrial Engineering Operating System. AI-powered tools that help Industrial Automation and Industry 4.0 teams design, build, verify, and operate complex industrial systems.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-standard bg-bg-panel border border-border-subtle text-text-tertiary hover:text-brand hover:border-brand/30 hover:bg-brand/10 transition-colors duration-fast"
                  aria-label={social.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  target={social.href.startsWith('http') || social.href.startsWith('mailto') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') || social.href.startsWith('mailto') ? 'noopener noreferrer' : undefined}
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Product */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            aria-label="Product links"
          >
            <h4 className="font-semibold text-sub-heading text-text-primary mb-4">Product</h4>
            <ul className="space-y-3" role="list">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-body-small text-text-tertiary hover:text-brand transition-colors duration-fast"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Company */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            aria-label="Company links"
          >
            <h4 className="font-semibold text-sub-heading text-text-primary mb-4">Company</h4>
            <ul className="space-y-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-body-small text-text-tertiary hover:text-brand transition-colors duration-fast"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Resources */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            aria-label="Resources links"
          >
            <h4 className="font-semibold text-sub-heading text-text-primary mb-4">Resources</h4>
            <ul className="space-y-3" role="list">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-body-small text-text-tertiary hover:text-brand transition-colors duration-fast"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Get Early Access */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            <h4 className="font-semibold text-sub-heading text-text-primary mb-4">Get Early Access</h4>
            <p className="text-body-small text-text-tertiary mb-4">
              Join the waitlist for PlatX and AUTO-PLC beta and founding-member pricing.
            </p>
            <a
              href="/#contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Join Waitlist
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 md:mt-16 pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="text-body-small text-text-quaternary">
            © {new Date().getFullYear()} AUTO-X. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-body-small text-text-quaternary hover:text-text-secondary transition-colors duration-fast"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-micro text-text-quaternary">
            <span>Built with precision for engineers</span>
            <span className="w-px h-4 bg-border-subtle" aria-hidden="true" />
            <span className="text-brand">PlatX · AUTO-X</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}