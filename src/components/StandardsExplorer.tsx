import { useState } from 'react'
import { BookOpen, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react'

interface StandardTab {
  id: string
  name: string
  code: string
  headline: string
  description: string
  keyElements: { title: string; desc: string; badge?: string }[]
  compilerRule: string
}

const STANDARDS_DATA: StandardTab[] = [
  {
    id: 'isa88',
    name: 'ISA-88 / IEC 61512',
    code: 'Batch & Modular Control',
    headline: 'Physical & Procedural Equipment Hierarchy',
    description:
      'ISA-88 separates physical equipment from procedural recipe logic, creating modular and reusable control architectures across batch, continuous, and discrete manufacturing.',
    keyElements: [
      {
        title: 'Physical Hierarchy',
        desc: 'Enterprise → Site → Area → Process Cell → Unit → Equipment Module (EM) → Control Module (CM).',
        badge: '7 Physical Levels',
      },
      {
        title: 'Procedural Hierarchy',
        desc: 'Procedure → Unit Procedure → Operation → Phase (Deterministic SCL execution block).',
        badge: '4 Recipe Layers',
      },
      {
        title: 'Equipment Entities',
        desc: 'Encapsulates actuators, sensors, and state transition logic into self-contained objects.',
        badge: 'Modular FB/UDT',
      },
      {
        title: 'Recipe & Parameter Sets',
        desc: 'Decoupled formula parameters allow instant product grade changes without logic recompiles.',
        badge: 'Zero Code Churn',
      },
    ],
    compilerRule: 'AUTO-PLC Gate 02: Automatically generates ISA-88 Unit and EM hierarchy matrices with strict variable scoping.',
  },
  {
    id: 'packml',
    name: 'PackML / ISA-TR88.00.02',
    code: 'Packaging & Machine States',
    headline: 'Standardized 17-State Machine Model',
    description:
      'PackML provides a universal machine state model and PackTags communications framework, harmonizing operation, alarming, and OEE calculation across multi-vendor packaging lines.',
    keyElements: [
      {
        title: 'Core Acting States',
        desc: 'Starting → Execute → Completing → Complete (Standard production cycle).',
        badge: 'Acting States',
      },
      {
        title: 'Holding & Suspending Modes',
        desc: 'Holding / Held / Unholding (Internal faults) and Suspending / Suspended (Upstream/Downstream starvation).',
        badge: 'Condition Pauses',
      },
      {
        title: 'Stopping & Aborting Modes',
        desc: 'Stopping / Stopped (Normal shutdown) and Aborting / Aborted (Immediate trip state).',
        badge: 'Safe State Gates',
      },
      {
        title: 'Standard PackTags Data Schema',
        desc: 'Command, Status, and Admin tag structures (Line speed, OEE counters, Stop reason codes).',
        badge: 'OPC UA / PackTags',
      },
    ],
    compilerRule: 'AUTO-PLC Gate 02 & 03: Validates that all state transitions follow allowable PackML paths with no illegal jumps.',
  },
  {
    id: 'isa182',
    name: 'ISA-18.2 / IEC 62682',
    code: 'Alarm Management',
    headline: 'Alarm Rationalization & Priority Distribution',
    description:
      'Prevents alarm flooding during plant upsets by establishing strict priority distributions, deadbands, rationalized setpoints, and formal operator action definitions.',
    keyElements: [
      {
        title: 'Target Priority Distribution',
        desc: 'Critical (≤5%), High (≤15%), Medium (~30-40%), Low (~40-50%). Zero unrationalized alarms.',
        badge: 'Strict Ratios',
      },
      {
        title: 'Alarm State Machine',
        desc: 'Normal → Unacknowledged → Acknowledged → RTN (Return to Normal) / Shelved.',
        badge: 'State Transitions',
      },
      {
        title: 'Consequence & Time-to-Respond',
        desc: 'Every alarm requires a documented consequence of inaction and required operator corrective step.',
        badge: 'Actionable Only',
      },
      {
        title: 'Nuisance Alarm Suppression',
        desc: 'Hysteresis deadbands, on-delay timers, and state-based dynamic masking rules.',
        badge: 'Flood Prevention',
      },
    ],
    compilerRule: 'AUTO-PLC Gate 04: Lints alarm configuration tables against ISA-18.2 priority budgets and requires response notes.',
  },
  {
    id: 'iec62443',
    name: 'IEC 62443',
    code: 'Industrial Cybersecurity',
    headline: 'Zone, Conduit & Security Level Segmentation',
    description:
      'The international cybersecurity standard for Operational Technology (OT) and Industrial Automation and Control Systems (IACS).',
    keyElements: [
      {
        title: 'Zones & Conduits (IEC 62443-3-2)',
        desc: 'Logical and physical grouping of cyber assets sharing common security requirements and communication channels.',
        badge: 'Network Boundary',
      },
      {
        title: 'Security Level Targets (SL-T 1-4)',
        desc: 'SL 1 (Casual misuse) to SL 4 (Sophisticated nation-state attack with extended resources).',
        badge: 'SL-T Classification',
      },
      {
        title: 'System Security Requirements (IEC 62443-3-3)',
        desc: 'Access control, use control, data integrity, data confidentiality, and resource availability.',
        badge: 'Access & Ports',
      },
      {
        title: 'Secure Product Lifecycle (IEC 62443-4-1)',
        desc: 'Security by design, cryptographic artifact signing (SHA-256), and vulnerability management.',
        badge: 'Cryptographic Seals',
      },
    ],
    compilerRule: 'PlatX Security Layer: Tags every asset with security zone, conduit, port policies, and SHA-256 proof hashes.',
  },
  {
    id: 'iec61131',
    name: 'IEC 61131-3',
    code: 'Programmable Controllers',
    headline: 'Deterministic Programming Languages & Typing',
    description:
      'Standardizes industrial controller languages: Structured Text (ST/SCL), Function Block Diagram (FBD), Ladder Diagram (LD), Sequential Function Chart (SFC), and Instruction List (IL).',
    keyElements: [
      {
        title: 'Strong Data Typing',
        desc: 'Elementary types (BOOL, INT, DINT, REAL, TIME) and structured User-Defined Types (UDT).',
        badge: 'Strict Typing',
      },
      {
        title: 'Variable Scope Rules',
        desc: 'Explicit separation of VAR_INPUT, VAR_OUTPUT, VAR_IN_OUT, VAR_STATIC, and VAR_TEMP memory.',
        badge: 'Bounded Scopes',
      },
      {
        title: 'Execution Model & Tasks',
        desc: 'Cyclic scan execution, event-driven interrupts (OB30-OB38), and deterministic task priorities.',
        badge: 'Deterministic Scan',
      },
      {
        title: 'Vendor Portability (PLCopen)',
        desc: 'Adherence to PLCopen standardized motion and software guidelines across hardware targets.',
        badge: 'Vendor Portability',
      },
    ],
    compilerRule: 'AUTO-PLC Gate 03: Emits mathematically typed ASTs compliant with IEC 61131-3 with zero illegal recursion.',
  },
]

export function StandardsExplorer() {
  const [activeStandardId, setActiveStandardId] = useState<string>('isa88')

  const activeStandard =
    STANDARDS_DATA.find((s) => s.id === activeStandardId) || STANDARDS_DATA[0]

  return (
    <div className="rounded-panel border border-border-standard bg-bg-panel shadow-elevated overflow-hidden">
      {/* Header */}
      <div className="p-6 md:p-8 border-b border-border-subtle bg-gradient-to-r from-bg-panel via-bg-elevated/40 to-bg-panel">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="w-5 h-5 text-accent-primary" />
          <span className="font-mono text-xs uppercase font-bold text-accent-primary tracking-wider">
            Industrial Standards & Compliance Knowledge Hub
          </span>
        </div>
        <h3 className="text-sub-heading-large font-semibold text-text-primary mb-1">
          Mechanical Standards Encoded as Compiler Verification Gates
        </h3>
        <p className="text-xs text-text-secondary leading-relaxed">
          AUTO-X replaces subjective guidelines with deterministic mathematical rules. Select a standard below to inspect its architecture and compiler enforcement.
        </p>
      </div>

      {/* Tabs Strip */}
      <div className="flex items-center gap-1 border-b border-border-subtle bg-bg-elevated px-4 py-2 overflow-x-auto">
        {STANDARDS_DATA.map((tab) => {
          const isActive = tab.id === activeStandardId
          return (
            <button
              type="button"
              key={tab.id}
              onClick={() => setActiveStandardId(tab.id)}
              className={`px-4 py-2 rounded-standard font-mono text-xs transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                isActive
                  ? 'bg-bg-panel text-accent-primary shadow-sm border border-border-standard font-bold'
                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-hover'
              }`}
            >
              <span>{tab.name}</span>
            </button>
          )
        })}
      </div>

      {/* Standard Detail Body */}
      <div className="p-6 md:p-8">
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2.5 mb-2">
            <h4 className="text-sub-heading font-semibold text-text-primary">
              {activeStandard.name}
            </h4>
            <span className="px-2.5 py-0.5 rounded-pill bg-accent-primary/10 text-accent-primary font-mono text-xs font-semibold border border-accent-border">
              {activeStandard.code}
            </span>
          </div>
          <p className="text-xs font-mono text-accent-primary font-medium mb-3">
            {activeStandard.headline}
          </p>
          <p className="text-xs text-text-secondary leading-relaxed max-w-3xl">
            {activeStandard.description}
          </p>
        </div>

        {/* 4 Key Elements Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {activeStandard.keyElements.map((elem, idx) => (
            <div
              key={idx}
              className="p-4 rounded-card bg-bg-page border border-border-subtle hover:border-border-standard transition-all"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-text-primary flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-success flex-shrink-0" />
                  <span>{elem.title}</span>
                </span>
                {elem.badge && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-pill bg-bg-elevated text-text-tertiary border border-border-subtle">
                    {elem.badge}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-text-secondary leading-relaxed">
                {elem.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Compiler Enforcement Gate Box */}
        <div className="p-4 rounded-card bg-bg-elevated border border-accent-border flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-accent-primary mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-mono text-xs uppercase font-bold text-accent-primary block mb-0.5">
              AUTO-X Compiler Enforcement Rule
            </span>
            <p className="text-xs text-text-secondary leading-relaxed">
              {activeStandard.compilerRule}
            </p>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="p-4 bg-bg-hover border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-text-tertiary gap-2">
        <span>Zero Human Memory Reliance · Formally Verified Industrial Rules</span>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-accent-primary font-semibold hover:underline"
        >
          <span>Request Full Standards Taxonomy Specs</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  )
}
