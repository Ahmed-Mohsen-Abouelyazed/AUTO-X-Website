import { useState } from 'react'
import { Cpu, Lock, ShieldCheck, Sparkles, CheckCircle2, ArrowUp, Workflow } from 'lucide-react'

interface LayerData {
  id: string
  name: string
  subtitle: string
  badge: string
  badgeColor: string
  description: string
  capabilities: { title: string; detail: string }[]
}

const LAYERS: LayerData[] = [
  {
    id: 'power',
    name: '01. Engineering Power & Autonomous Capabilities',
    subtitle: 'Unified Higher-Order Control & Workflow Acceleration',
    badge: 'Autonomous Engineering',
    badgeColor: 'text-[#38bdf8] bg-[#38bdf8]/10 border-[#38bdf8]/30',
    description:
      'High-leverage engineering workflows that eliminate months of manual boilerplate, spreadsheet discrepancies, and costly commissioning surprises.',
    capabilities: [
      { title: 'Functional Spec Intake', detail: 'Natural language control narrative parsing into formal ISA-88 state tables.' },
      { title: 'Deterministic SCL Synthesis', detail: 'Structured text emission validated against closed-loop AST verification gates.' },
      { title: 'Automatic I/O Allocation', detail: 'Constraint-based cabinet terminal routing and channel mapping.' },
      { title: 'Virtual FAT Simulation', detail: 'Automated test assertions executed in virtual controllers before plant delivery.' },
      { title: '1-Click Documentation', detail: 'Instant FDS, SDS, and loop sheet generation with zero human discrepancy.' },
    ],
  },
  {
    id: 'intelligence',
    name: '02. AUTO-X Engineering Intelligence Layer',
    subtitle: 'The Universal Operating Layer Above Proprietary IDEs',
    badge: 'Core Enabler',
    badgeColor: 'text-accent-primary bg-accent-primary/10 border-accent-border',
    description:
      'The vendor-neutral intelligence operating system. Translates engineering intent into mathematically verified models and coordinates multi-discipline collaboration.',
    capabilities: [
      { title: 'Unified Data Model (AIR)', detail: 'Vendor-neutral Asset Interface Representation connecting P&ID, PLC, and CAD.' },
      { title: 'Mechanical Standards Gates', detail: 'Hard-coded rules enforcing IEC 61131-3, ISA-88, ISA-18.2, and IEC 62443.' },
      { title: 'Deterministic AST Compiler', detail: 'Mathematical reproducibility: identical requirements yield identical code.' },
      { title: 'Engineering Knowledge Graph', detail: 'Preserves institutional plant standards and prevents tribal knowledge loss.' },
    ],
  },
  {
    id: 'vendor',
    name: '03. Vendor-Locked Hardware & IDE Ecosystems',
    subtitle: 'Target Execution Environments & Proprietary Toolchains',
    badge: 'Hardware Execution',
    badgeColor: 'text-text-tertiary bg-bg-elevated border-border-subtle',
    description:
      'Proprietary engineering software and field controller hardware. AUTO-X projects validated artifacts directly into native vendor project structures.',
    capabilities: [
      { title: 'Siemens TIA Portal', detail: 'Native .NET 8 Openness API bridge for SIMATIC S7-1200 / S7-1500 controllers.' },
      { title: 'Rockwell Studio 5000', detail: 'Native L5X / AOI export for ControlLogix & CompactLogix processors.' },
      { title: 'Schneider EcoStruxure', detail: 'Machine Expert & Control Expert project artifact emission.' },
      { title: 'CODESYS V3.5 / Beckhoff', detail: 'Standardized PLCopen XML interchange across multi-vendor field targets.' },
    ],
  },
]

export function EngineeringIntelligenceLayer() {
  const [activeLayerId, setActiveLayerId] = useState<string>('intelligence')

  const activeLayer = LAYERS.find((l) => l.id === activeLayerId) || LAYERS[1]

  return (
    <div className="w-full overflow-hidden rounded-panel border border-border-standard bg-bg-panel shadow-elevated">
      {/* Chrome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border-subtle bg-bg-hover px-5 py-3 gap-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 flex-shrink-0" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-circle bg-[#ef4444]/90" />
            <span className="h-2.5 w-2.5 rounded-circle bg-[#f59e0b]/90" />
            <span className="h-2.5 w-2.5 rounded-circle bg-[#10b981]/90" />
          </div>
          <span className="ml-2 font-mono text-xs font-semibold text-text-primary flex items-center gap-1.5">
            <Workflow className="w-3.5 h-3.5 text-accent-primary" />
            <span>AUTO-X Architecture: The Engineering Intelligence Layer</span>
          </span>
        </div>

        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-pill bg-accent-primary/10 text-accent-primary font-mono text-[10px] font-medium border border-accent-border self-start sm:self-auto">
          <Sparkles className="w-3 h-3" />
          <span>Universal Vendor Enabler</span>
        </span>
      </div>

      {/* 3-Tier Layer Visual Diagram */}
      <div className="p-5 sm:p-6 bg-gradient-to-b from-bg-panel via-bg-elevated/30 to-bg-panel">
        <div className="space-y-3">
          
          {/* Top Layer: Engineering Power */}
          <button
            type="button"
            onClick={() => setActiveLayerId('power')}
            className={`w-full p-4 rounded-card border text-left transition-all cursor-pointer relative overflow-hidden group ${
              activeLayerId === 'power'
                ? 'bg-bg-panel border-[#38bdf8] shadow-md ring-1 ring-[#38bdf8]/40'
                : 'bg-bg-page/70 border-border-subtle hover:border-border-standard hover:bg-bg-elevated'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#38bdf8]" />
                <span className="text-xs font-bold text-text-primary">
                  Engineering Power & Autonomous Capabilities
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-pill bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/30 self-start sm:self-auto">
                Higher-Order Workflows
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-[11px] font-mono text-text-secondary mt-3">
              <span className="p-1.5 rounded-standard bg-bg-panel border border-border-subtle text-center line-clamp-1">Spec Intake</span>
              <span className="p-1.5 rounded-standard bg-bg-panel border border-border-subtle text-center line-clamp-1">SCL Logic</span>
              <span className="p-1.5 rounded-standard bg-bg-panel border border-border-subtle text-center line-clamp-1">I/O Design</span>
              <span className="p-1.5 rounded-standard bg-bg-panel border border-border-subtle text-center line-clamp-1">FAT Testing</span>
              <span className="p-1.5 rounded-standard bg-bg-panel border border-border-subtle text-center line-clamp-1 col-span-2 sm:col-span-1">FDS Manuals</span>
            </div>
          </button>

          {/* Enabler Connector Arrows */}
          <div className="flex items-center justify-center gap-2 py-0.5 text-accent-primary">
            <ArrowUp className="w-3.5 h-3.5 animate-bounce" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-accent-primary">
              Empowered by the Intelligence Layer
            </span>
            <ArrowUp className="w-3.5 h-3.5 animate-bounce" />
          </div>

          {/* Core Middle Layer: AUTO-X Engineering Intelligence Layer */}
          <button
            type="button"
            onClick={() => setActiveLayerId('intelligence')}
            className={`w-full p-5 rounded-card border text-left transition-all cursor-pointer relative overflow-hidden ${
              activeLayerId === 'intelligence'
                ? 'bg-accent-primary/10 border-accent-primary shadow-elevated ring-2 ring-accent-primary/50'
                : 'bg-bg-elevated border-accent-border/50 hover:border-accent-primary'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-standard bg-accent-primary text-white flex items-center justify-center font-bold text-xs">
                  AX
                </div>
                <div>
                  <span className="text-sm font-bold text-text-primary block">
                    AUTO-X Engineering Intelligence Layer
                  </span>
                  <span className="text-[10px] font-mono text-accent-primary font-semibold">
                    The Universal Deterministic Enabler
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-pill bg-accent-primary text-white font-bold self-start sm:self-auto shadow-sm">
                Active Core Layer
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono mt-3">
              <div className="p-2 rounded-standard bg-bg-panel border border-accent-border/40 text-text-primary">
                <span className="text-accent-primary font-bold block mb-0.5">AIR Schema</span>
                <span className="text-[10px] text-text-tertiary">Unified Data Model</span>
              </div>
              <div className="p-2 rounded-standard bg-bg-panel border border-accent-border/40 text-text-primary">
                <span className="text-accent-primary font-bold block mb-0.5">Standards Gates</span>
                <span className="text-[10px] text-text-tertiary">IEC / ISA-88 / ISA-18.2</span>
              </div>
              <div className="p-2 rounded-standard bg-bg-panel border border-accent-border/40 text-text-primary">
                <span className="text-accent-primary font-bold block mb-0.5">AST Compiler</span>
                <span className="text-[10px] text-text-tertiary">0% Hallucinations</span>
              </div>
              <div className="p-2 rounded-standard bg-bg-panel border border-accent-border/40 text-text-primary">
                <span className="text-accent-primary font-bold block mb-0.5">Knowledge Graph</span>
                <span className="text-[10px] text-text-tertiary">Single Truth Source</span>
              </div>
            </div>
          </button>

          {/* Downward Projector Connector */}
          <div className="flex items-center justify-center gap-2 py-0.5 text-text-tertiary">
            <span className="font-mono text-[10px] uppercase tracking-wider">
              Projecting Validated Artifacts into Native Vendor Toolchains
            </span>
          </div>

          {/* Bottom Layer: Vendor-Locked Ecosystems */}
          <button
            type="button"
            onClick={() => setActiveLayerId('vendor')}
            className={`w-full p-4 rounded-card border text-left transition-all cursor-pointer ${
              activeLayerId === 'vendor'
                ? 'bg-bg-panel border-border-standard shadow-sm ring-1 ring-border-strong'
                : 'bg-bg-page/70 border-border-subtle hover:border-border-standard hover:bg-bg-elevated'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-text-tertiary" />
                <span className="text-xs font-semibold text-text-primary">
                  Vendor-Locked Software & Field Hardware
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-pill bg-bg-elevated text-text-tertiary border border-border-subtle self-start sm:self-auto">
                Target Projections
              </span>
            </div>

            <div className="flex flex-wrap gap-2 text-[11px] font-mono text-text-secondary mt-2">
              <span className="px-2 py-1 rounded-standard bg-bg-panel border border-border-subtle">Siemens TIA Portal</span>
              <span className="px-2 py-1 rounded-standard bg-bg-panel border border-border-subtle">Rockwell Studio 5000</span>
              <span className="px-2 py-1 rounded-standard bg-bg-panel border border-border-subtle">Schneider EcoStruxure</span>
              <span className="px-2 py-1 rounded-standard bg-bg-panel border border-border-subtle">CODESYS V3</span>
              <span className="px-2 py-1 rounded-standard bg-bg-panel border border-border-subtle">Beckhoff TwinCAT</span>
            </div>
          </button>

        </div>
      </div>

      {/* Layer Detail Inspector Callout */}
      <div className="p-5 border-t border-border-subtle bg-bg-elevated">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="font-mono text-xs font-bold text-text-primary">
            {activeLayer.name}
          </span>
          <span className={`px-2 py-0.5 rounded-pill font-mono text-[10px] border ${activeLayer.badgeColor}`}>
            {activeLayer.badge}
          </span>
        </div>
        <p className="text-xs text-text-secondary leading-relaxed mb-4">
          {activeLayer.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {activeLayer.capabilities.map((cap, idx) => (
            <div key={idx} className="p-2.5 rounded-card bg-bg-panel border border-border-subtle flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-success mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-xs font-semibold text-text-primary block">{cap.title}</span>
                <span className="text-[11px] text-text-secondary leading-snug">{cap.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-3.5 bg-bg-hover border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-text-tertiary gap-2">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-success" />
          <span>Vendor Neutral: Eliminates vendor lock-in without modifying plant field standards</span>
        </span>
        <span className="text-[11px] text-text-quaternary">
          PlatX Core Architecture
        </span>
      </div>
    </div>
  )
}
