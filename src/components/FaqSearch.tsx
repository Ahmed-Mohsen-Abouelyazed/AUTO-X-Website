import { useState, useMemo } from 'react'
import { Search, ChevronDown, Filter } from 'lucide-react'

interface FaqItem {
  id: string
  category: 'Technical & Compiler' | 'Standards & Safety' | 'Pilot & Integration' | 'Founder & Vision'
  question: string
  answer: string
}

const FAQ_ITEMS: FaqItem[] = [
  // Technical & Compiler
  {
    id: 'f1',
    category: 'Technical & Compiler',
    question: 'How is AUTO-PLC different from generic AI like ChatGPT or GitHub Copilot?',
    answer:
      'Consumer LLMs are probabilistic text predictors that hallucinate invalid PLC dialect syntax and non-deterministic logic. AUTO-PLC combines domain-tuned LLMs solely for intent parsing with a strict, non-stochastic AST compiler. Every emitted line of Structured Text (SCL) is verified against mechanical schema gates, standards rules, and type boundaries before reaching the engineer.',
  },
  {
    id: 'f2',
    category: 'Technical & Compiler',
    question: 'How does the Siemens TIA Portal integration work?',
    answer:
      'AUTO-PLC utilizes a dedicated .NET 8 bridge communicating with the Siemens TIA Portal Openness API. Validated Structured Text (ST/SCL) function blocks, User-Defined Types (UDTs), Global DBs, and tag tables are compiled directly into native TIA Portal XML project artifacts for direct, error-free import into TIA Portal V17, V18, and V19.',
  },
  {
    id: 'f3',
    category: 'Technical & Compiler',
    question: 'What PLC hardware platforms and languages will be supported?',
    answer:
      'AUTO-PLC starter MVP supports Siemens SIMATIC S7-1200 and S7-1500 controllers in IEC 61131-3 Structured Text (SCL). The vendor-neutral AIR (Asset Interface Representation) schema roadmap includes drivers for Rockwell Studio 5000 (L5X / AOI), CODESYS V3.5, and Schneider EcoStruxure Machine Expert.',
  },
  {
    id: 'f4',
    category: 'Technical & Compiler',
    question: 'Can AUTO-X run completely offline in air-gapped industrial facilities?',
    answer:
      'Yes. AUTO-X is architected with a local-first deployment option utilizing offline Ollama models. In air-gapped plant environments, all intent parsing, compiler checks, and code generation execute entirely on local engineering workstations or on-premise appliances with zero outbound internet telemetry.',
  },

  // Standards & Safety
  {
    id: 'f5',
    category: 'Standards & Safety',
    question: 'How does AUTO-X handle Functional Safety (SIL 1–3 / IEC 61508)?',
    answer:
      'Under the AUTO-X constitution, Functional Safety (AUTO-SAFE) is an explicitly designated Post-MVP module under strict independent human governance. Life-critical safety interlocks, Emergency Stop routines, and SIL validations are NEVER automated by generative AI. Safety logic requires certified human engineer authoring and sign-off.',
  },
  {
    id: 'f6',
    category: 'Standards & Safety',
    question: 'Which industrial standards are mechanically encoded in the platform?',
    answer:
      'The platform enforces hard compiler rules from IEC 61131-3 (Structured Text & typing), ISA-88 / IEC 61512 (Batch & equipment hierarchies), PackML / ISA-TR88.00.02 (17 standard machine states), ISA-18.2 / IEC 62682 (Alarm rationalization & flood suppression), and IEC 62443 (OT Cybersecurity Zones & Conduits).',
  },
  {
    id: 'f7',
    category: 'Standards & Safety',
    question: 'Is customer proprietary logic or tag registers used to train public AI models?',
    answer:
      'Never. All customer engineering data, P&IDs, tag registers, and control code remain strictly isolated under data sovereignty policies. Enterprise workspaces execute with strict zero-retention policies and local embeddings that never leave the customer boundary.',
  },

  // Pilot & Integration
  {
    id: 'f8',
    category: 'Pilot & Integration',
    question: 'When does the early access Beta Pilot Program launch?',
    answer:
      'Beta pilot trials begin in Q4 2026 for qualifying System Integrators, machine builders (OEMs), and enterprise automation teams. Beta access is free for selected pilot partners during the validation phase.',
  },
  {
    id: 'f9',
    category: 'Pilot & Integration',
    question: 'What is required for a System Integrator to participate in the pilot?',
    answer:
      'Qualifying pilot teams should deliver at least 2–4 automation projects per year utilizing Siemens S7-1200/S7-1500 controllers or Rockwell Studio 5000. Pilot partners provide anonymous control narratives or past project scopes to benchmark turnaround time savings against manual baselines.',
  },
  {
    id: 'f10',
    category: 'Pilot & Integration',
    question: 'What deliverables are provided during a pilot project trial?',
    answer:
      'Pilot teams receive generated IEC 61131-3 SCL blocks, instance DBs, tag catalogs, ISA-88 state transition matrices, automated FAT simulation test suites, and direct TIA Portal import packages.',
  },

  // Founder & Vision
  {
    id: 'f11',
    category: 'Founder & Vision',
    question: 'Who is building AUTO-X and what is the founding background?',
    answer:
      'AUTO-X was founded by Ahmed Mohsen Abouelyazed, an Electrical Power & Control Engineer, Siemens TIA-PRO1 Certified automation practitioner, and Information Technology Institute (ITI) Industrial Automation alum with hands-on project delivery experience across diverse industrial manufacturing sectors.',
  },
  {
    id: 'f12',
    category: 'Founder & Vision',
    question: 'What is the long-term vision for the PlatX Operating System?',
    answer:
      'PlatX aims to become the Unified Industrial Engineering Operating System — bridging PLC automation, electrical CAD, SCADA/supervision, Git-native version control, domain AI, and industrial data intelligence into a seamless, interconnected platform.',
  },
]

export function FaqSearch() {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ f1: true, f5: true, f8: true })

  const categories = ['All', 'Technical & Compiler', 'Standards & Safety', 'Pilot & Integration', 'Founder & Vision']

  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory

      return matchesSearch && matchesCat
    })
  }, [searchQuery, selectedCategory])

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="space-y-6">
      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between p-4 rounded-panel bg-bg-panel border border-border-standard shadow-sm">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-text-tertiary absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs (e.g. SCL, Safety, Pilot, TIA)..."
            className="w-full pl-9 pr-3 py-2 rounded-standard bg-bg-page border border-border-subtle text-xs text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/30"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto py-1">
          <span className="text-[10px] font-mono uppercase text-text-tertiary mr-1 flex items-center gap-1 flex-shrink-0">
            <Filter className="w-3 h-3 text-accent-primary" />
            <span>Category:</span>
          </span>
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-pill text-[11px] font-mono transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-accent-primary text-white font-semibold'
                  : 'bg-bg-page text-text-secondary hover:text-text-primary border border-border-subtle'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="py-12 text-center text-text-tertiary text-xs font-mono p-8 rounded-panel bg-bg-panel border border-border-subtle">
            No matching questions found. Try searching another keyword.
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = Boolean(openIds[faq.id])
            return (
              <div
                key={faq.id}
                className="rounded-panel border border-border-standard bg-bg-panel shadow-sm transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-bg-hover/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-card bg-accent-primary/10 border border-accent-border flex items-center justify-center text-accent-primary font-mono text-xs font-bold flex-shrink-0">
                      ?
                    </span>
                    <div>
                      <span className="text-xs font-semibold text-text-primary block">
                        {faq.question}
                      </span>
                      <span className="text-[10px] font-mono text-accent-primary block mt-0.5">
                        {faq.category}
                      </span>
                    </div>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 text-text-tertiary transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-accent-primary' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-text-secondary leading-relaxed border-t border-border-subtle bg-bg-page/50">
                    <p className="pt-2">{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
