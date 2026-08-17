import { useState } from 'react'
import { ChevronRight, RotateCcw, ShieldCheck, ArrowRight, Activity } from 'lucide-react'

interface Question {
  id: number
  title: string
  subtitle: string
  options: { text: string; points: number; note: string }[]
}

const AUDIT_QUESTIONS: Question[] = [
  {
    id: 1,
    title: 'How does your engineering team generate PLC logic for new projects?',
    subtitle: 'Assessing code generation methodology and reuse maturity',
    options: [
      { text: 'Copy-paste from prior project with manual find-and-replace', points: 10, note: 'High defect rate from missed tags and copy-paste drift' },
      { text: 'Internal boilerplate library of Function Blocks manually instantiated', points: 25, note: 'Moderate standardization, but variable execution across engineers' },
      { text: 'Model-driven scripts or Excel macros exporting basic DBs/tags', points: 40, note: 'Scripted acceleration without closed-loop AST verification' },
      { text: 'Deterministic compiler verifying ISA-88 hierarchy & standards mechanically', points: 50, note: 'Next-gen autonomous engineering: 0% syntax hallucinations' },
    ],
  },
  {
    id: 2,
    title: 'How are customer requirements, I/O lists, and P&ID changes synchronized?',
    subtitle: 'Assessing change management and cross-discipline data friction',
    options: [
      { text: 'Manual tracking in Excel spreadsheets and customer email threads', points: 10, note: 'Severe margin leak: frequent rework when upstream specs change' },
      { text: 'Centralized engineering Excel register shared across the team', points: 25, note: 'Single register but no automated diffing into PLC/CAD projects' },
      { text: 'Database-backed tag management with manual import into TIA Portal/Studio 5000', points: 40, note: 'Structured data layer with semi-manual import friction' },
      { text: 'Unified Engineering Knowledge Graph with real-time cross-discipline diff tracking', points: 50, note: 'Single source of truth: changes propagate deterministically' },
    ],
  },
  {
    id: 3,
    title: 'What is your testing & validation procedure prior to on-site commissioning?',
    subtitle: 'Assessing simulation maturity and commissioning risk prevention',
    options: [
      { text: 'No virtual simulation; primary testing happens on the physical plant floor', points: 10, note: 'Critical failure point: commissioning costs up to 50× more to fix errors' },
      { text: 'Manual dry-run testing using PLCSIM toggling bits by hand', points: 25, note: 'Labor-intensive testing covering only basic happy-path routines' },
      { text: 'Scripted sequence simulation testing critical interlocks in virtual controller', points: 40, note: 'Strong pre-site validation covering major trip scenarios' },
      { text: 'Automated test oracles running 100% boundary assertions & digital twin validation', points: 50, note: 'Zero-fault commissioning guarantee: all gates proven before download' },
    ],
  },
  {
    id: 4,
    title: 'How are alarm limits, setpoints, and suppression rules rationalized?',
    subtitle: 'Assessing ISA-18.2 compliance and alarm flood prevention',
    options: [
      { text: 'Ad-hoc alarming created during commissioning without strict limits', points: 10, note: 'High alarm flooding risk and operator fatigue on plant start-up' },
      { text: 'Standard alarm list template with manual priority assignment', points: 25, note: 'Basic structure, but no mechanical flood suppression rules' },
      { text: 'Formally documented alarm philosophy following ISA-18.2 guidelines', points: 40, note: 'Good compliance, but requires extensive manual documentation upkeep' },
      { text: 'Mechanical compiler enforcement of ISA-18.2 priority budgets & suppression logic', points: 50, note: 'Zero unrationalized alarms: flood prevention built into SCL' },
    ],
  },
]

export function MaturityAudit() {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [answers, setAnswers] = useState<number[]>([0, 0, 0, 0])
  const [isCompleted, setIsCompleted] = useState<boolean>(false)

  const handleSelectOption = (points: number) => {
    const nextAnswers = [...answers]
    nextAnswers[currentStep] = points
    setAnswers(nextAnswers)

    if (currentStep < AUDIT_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setIsCompleted(true)
    }
  }

  const handleReset = () => {
    setCurrentStep(0)
    setAnswers([0, 0, 0, 0])
    setIsCompleted(false)
  }

  // Calculate total score (out of 200 points scaled to 100%)
  const totalScore = Math.round(
    (answers.reduce((acc, curr) => acc + curr, 0) / (AUDIT_QUESTIONS.length * 50)) * 100
  )

  const getTier = (score: number) => {
    if (score < 40) {
      return {
        level: 'Level 1: Ad-Hoc / Copy-Paste Engineering',
        risk: 'High Margin Erosion & Commissioning Overrun Risk',
        badge: 'High Risk',
        badgeColor: 'bg-error-bg text-error border-error/30',
        recommendation:
          'Your team spends ~50-60% of project time on manual boilerplate and on-site troubleshooting. Introducing AUTO-PLC will automate repetitive SCL scaffolding and eliminate copy-paste defects before plant delivery.',
      }
    }
    if (score < 70) {
      return {
        level: 'Level 2: Standardized Templates / Semi-Manual',
        risk: 'Moderate Manual Friction & Knowledge Silos',
        badge: 'Moderate Risk',
        badgeColor: 'bg-warning-bg text-warning border-warning/30',
        recommendation:
          'You have good internal standards, but syncing changes between I/O registers and PLC logic remains manual. AUTO-PLC can automate direct TIA Portal import and virtual test assertions.',
      }
    }
    return {
      level: 'Level 3+: Advanced Model-Driven Engineering',
      risk: 'Optimized Workflow Ready for Autonomous Compilers',
      badge: 'High Maturity',
      badgeColor: 'bg-success-bg text-success border-success/30',
      recommendation:
        'Your team is well-structured for next-generation automation. Joining the Q4 2026 pilot program will allow you to deploy full multi-agent collaborative engineering across multi-vendor targets.',
    }
  }

  const tier = getTier(totalScore)

  return (
    <div className="rounded-panel border border-border-standard bg-bg-panel shadow-card overflow-hidden">
      {/* Header */}
      <div className="p-6 md:p-8 border-b border-border-subtle bg-gradient-to-r from-bg-panel via-bg-elevated/40 to-bg-panel">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-5 h-5 text-accent-primary" />
              <span className="font-mono text-xs uppercase font-bold text-accent-primary tracking-wider">
                System Integrator Diagnostic Tool
              </span>
            </div>
            <h3 className="text-sub-heading-large font-semibold text-text-primary mb-1">
              Industrial Automation Maturity Diagnostic
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              Take this 4-question self-assessment to benchmark your engineering team delivery efficiency and identify margin-risk bottlenecks.
            </p>
          </div>

          {!isCompleted && (
            <span className="font-mono text-xs text-text-tertiary px-3 py-1 rounded-pill bg-bg-page border border-border-subtle flex-shrink-0">
              Question {currentStep + 1} of {AUDIT_QUESTIONS.length}
            </span>
          )}
        </div>
      </div>

      <div className="p-6 md:p-8">
        {!isCompleted ? (
          <div>
            {/* Question Card */}
            <div className="mb-6">
              <span className="font-mono text-xs text-accent-primary font-semibold block mb-1">
                Diagnostic Vector {currentStep + 1}:
              </span>
              <h4 className="text-sub-heading font-semibold text-text-primary mb-1">
                {AUDIT_QUESTIONS[currentStep].title}
              </h4>
              <p className="text-xs text-text-secondary">
                {AUDIT_QUESTIONS[currentStep].subtitle}
              </p>
            </div>

            {/* 4 Selectable Option Buttons */}
            <div className="space-y-3">
              {AUDIT_QUESTIONS[currentStep].options.map((opt, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => handleSelectOption(opt.points)}
                  className="w-full p-4 rounded-card bg-bg-page border border-border-subtle hover:border-accent-border hover:bg-bg-elevated transition-all text-left flex items-center justify-between gap-4 cursor-pointer group"
                >
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-semibold text-text-primary group-hover:text-accent-primary transition-colors block mb-1">
                      {opt.text}
                    </span>
                    <span className="text-[11px] font-mono text-text-tertiary leading-snug block">
                      {opt.note}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-text-tertiary group-hover:text-accent-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Assessment Results Dashboard */
          <div className="p-6 rounded-panel bg-bg-elevated border border-border-standard">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-border-subtle">
              <div>
                <span className="font-mono text-xs uppercase font-semibold text-text-tertiary block mb-1">
                  Your Engineering Maturity Diagnostic Result
                </span>
                <h4 className="text-sub-heading-large font-bold text-text-primary">
                  {tier.level}
                </h4>
                <p className="text-xs font-mono text-accent-primary font-medium mt-1">
                  Risk Profile: {tier.risk}
                </p>
              </div>

              <div className="flex items-center gap-3 self-start md:self-auto">
                <div className="text-right">
                  <span className="text-3xl font-mono font-bold text-accent-primary block">
                    {totalScore}%
                  </span>
                  <span className="text-[10px] font-mono text-text-tertiary">Maturity Score</span>
                </div>
                <span className={`px-3 py-1.5 rounded-pill font-mono text-xs font-bold border ${tier.badgeColor}`}>
                  {tier.badge}
                </span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-card bg-bg-panel border border-border-subtle">
                <span className="font-mono text-xs font-bold text-text-primary block mb-1">
                  Tailored Optimization Recommendation:
                </span>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {tier.recommendation}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-standard bg-bg-panel border border-border-standard text-xs font-semibold text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-colors cursor-pointer w-full sm:w-auto justify-center"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Diagnostic</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-standard bg-accent-primary text-white text-xs font-semibold hover:bg-accent-hover transition-all shadow-sm w-full sm:w-auto justify-center"
              >
                <span>Discuss Pilot Onboarding for Your Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 bg-bg-hover border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-text-tertiary gap-2">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-success" />
          <span>Diagnostic benchmarked against 100+ industrial automation projects</span>
        </span>
        <span className="text-[11px] text-text-quaternary">
          Zero Data Collection
        </span>
      </div>
    </div>
  )
}
