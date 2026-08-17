import { useState } from 'react'
import { Cpu, Lock, ShieldCheck, Sparkles, CheckCircle2, ArrowUp, ArrowDown, Workflow } from 'lucide-react'

interface LayerData {
  id: string
  name: string
  subtitle: string
  badge: string
  description: string
  capabilities: { title: string; detail: string }[]
}

const LAYERS: LayerData[] = [
  {
    id: 'power',
    name: '01. Engineering Power & Autonomous Capabilities',
    subtitle: 'Unified Higher-Order Control & Workflow Acceleration',
    badge: 'Autonomous Engineering',
    description:
      'High-leverage engineering workflows that eliminate months of manual boilerplate, spreadsheet discrepancies, and costly commissioning rework.',
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
      {/* Chrome Window Header */}
      <div className="flex items-center justify-between border-b border-border-subtle bg-bg-hover px-4 py-3 gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex items-center gap-1.5 flex-shrink-0" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-circle bg-[#ef4444]/90" />
            <span className="h-2.5 w-2.5 rounded-circle bg-[#f59e0b]/90" />
            <span className="h-2.5 w-2.5 rounded-circle bg-[#10b981]/90" />
          </div>
          <span className="ml-1.5 font-semibold text-xs text-text-primary flex items-center gap-1.5 truncate">
            <Workflow className="w-3.5 h-3.5 text-accent-primary flex-shrink-0" />
            <span>Engineering Intelligence Architecture</span>
          </span>
        </div>

        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-pill bg-accent-primary/10 text-accent-primary font-mono text-[10px] font-semibold border border-accent-border flex-shrink-0">
          <Sparkles className="w-3 h-3" />
          <span>Universal Enabler</span>
        </span>
      </div>

      {/* 3-Tier Layer Visual Diagram with Matched Colors */}
      <div className="p-4 sm:p-5 bg-gradient-to-b from-bg-panel via-bg-elevated/40 to-bg-panel space-y-2.5">
        
        {/* Tier 1: Engineering Power */}
        <button
          type="button"
          onClick={() => setActiveLayerId('power')}
          className={`w-full p-3.5 rounded-card border text-left transition-all cursor-pointer relative ${
            activeLayerId === 'power'
              ? 'bg-accent-primary/10 border-accent-primary shadow-sm ring-1 ring-accent-primary/50'
              : 'bg-bg-page border-border-subtle hover:border-accent-border hover:bg-bg-hover'
          }`}
        >
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <Cpu className={`w-4 h-4 flex-shrink-0 ${activeLayerId === 'power' ? 'text-accent-primary' : 'text-text-secondary'}`} />
              <span className={`text-xs font-bold ${activeLayerId === 'power' ? 'text-accent-primary' : 'text-text-primary'}`}>
                Engineering Power & Autonomous Capabilities
              </span>
            </div>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-pill border ${
              activeLayerId === 'power'
                ? 'bg-accent-primary text-white font-bold border-accent-primary'
                : 'bg-bg-elevated text-text-tertiary border-border-subtle'
            }`}>
              Tier 01
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 text-[10.5px]">
            <span className="px-2 py-0.5 rounded bg-bg-panel border border-border-subtle text-text-secondary">Spec Intake</span>
            <span className="px-2 py-0.5 rounded bg-bg-panel border border-border-subtle text-text-secondary">SCL Logic</span>
            <span className="px-2 py-0.5 rounded bg-bg-panel border border-border-subtle text-text-secondary">I/O Design</span>
            <span className="px-2 py-0.5 rounded bg-bg-panel border border-border-subtle text-text-secondary">FAT Simulation</span>
            <span className="px-2 py-0.5 rounded bg-bg-panel border border-border-subtle text-text-secondary">Auto Documentation</span>
          </div>
        </button>

        {/* Upward Enabler Connector */}
        <div className="flex items-center justify-center gap-1.5 py-0.5 text-accent-primary">
          <ArrowUp className="w-3 h-3 animate-bounce" />
          <span className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-accent-primary">
            Empowered by the Intelligence Layer
          </span>
          <ArrowUp className="w-3 h-3 animate-bounce" />
        </div>

        {/* Tier 2: AUTO-X Engineering Intelligence Layer (Core Enabler) */}
        <button
          type="button"
          onClick={() => setActiveLayerId('intelligence')}
          className={`w-full p-4 rounded-card border text-left transition-all cursor-pointer relative ${
            activeLayerId === 'intelligence'
              ? 'bg-accent-primary/10 border-accent-primary shadow-elevated ring-2 ring-accent-primary/50'
              : 'bg-bg-page border-accent-border/60 hover:border-accent-primary hover:bg-bg-hover'
          }`}
        >
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded bg-accent-primary text-white flex items-center justify-center font-bold text-[11px] flex-shrink-0 shadow-sm">
                AX
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold text-text-primary block leading-tight">
                  AUTO-X Engineering Intelligence Layer
                </span>
                <span className="text-[10px] font-mono text-accent-primary font-semibold">
                  Universal Deterministic Enabler
                </span>
              </div>
            </div>
            <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-pill border font-bold ${
              activeLayerId === 'intelligence'
                ? 'bg-accent-primary text-white border-accent-primary shadow-sm'
                : 'bg-accent-primary/10 text-accent-primary border-accent-border'
            }`}>
              Tier 02 · Core
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[11px]">
            <div className="p-2 rounded bg-bg-panel border border-accent-border/40">
              <span className="text-accent-primary font-bold block text-[11px]">AIR Schema</span>
              <span className="text-[9.5px] text-text-tertiary">Unified Model</span>
            </div>
            <div className="p-2 rounded bg-bg-panel border border-accent-border/40">
              <span className="text-accent-primary font-bold block text-[11px]">Standards Gates</span>
              <span className="text-[9.5px] text-text-tertiary">IEC / ISA-88</span>
            </div>
            <div className="p-2 rounded bg-bg-panel border border-accent-border/40">
              <span className="text-accent-primary font-bold block text-[11px]">AST Compiler</span>
              <span className="text-[9.5px] text-text-tertiary">0% Hallucination</span>
            </div>
            <div className="p-2 rounded bg-bg-panel border border-accent-border/40">
              <span className="text-accent-primary font-bold block text-[11px]">Knowledge Graph</span>
              <span className="text-[9.5px] text-text-tertiary">Single Truth</span>
            </div>
          </div>
        </button>

        {/* Downward Projector Connector */}
        <div className="flex items-center justify-center gap-1.5 py-0.5 text-accent-primary">
          <ArrowDown className="w-3 h-3 animate-bounce" />
          <span className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-accent-primary">
            Projecting Validated Logic into Vendor Toolchains
          </span>
          <ArrowDown className="w-3 h-3 animate-bounce" />
        </div>

        {/* Tier 3: Vendor-Locked Ecosystems */}
        <button
          type="button"
          onClick={() => setActiveLayerId('vendor')}
          className={`w-full p-3.5 rounded-card border text-left transition-all cursor-pointer ${
            activeLayerId === 'vendor'
              ? 'bg-accent-primary/10 border-accent-primary shadow-sm ring-1 ring-accent-primary/50'
              : 'bg-bg-page border-border-subtle hover:border-accent-border hover:bg-bg-hover'
          }`}
        >
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <Lock className={`w-4 h-4 flex-shrink-0 ${activeLayerId === 'vendor' ? 'text-accent-primary' : 'text-text-secondary'}`} />
              <span className={`text-xs font-bold ${activeLayerId === 'vendor' ? 'text-accent-primary' : 'text-text-primary'}`}>
                Vendor-Locked Software & Field Hardware
              </span>
            </div>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-pill border ${
              activeLayerId === 'vendor'
                ? 'bg-accent-primary text-white font-bold border-accent-primary'
                : 'bg-bg-elevated text-text-tertiary border-border-subtle'
            }`}>
              Tier 03
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 text-[10.5px]">
            <span className="px-2 py-0.5 rounded bg-bg-panel border border-border-subtle text-text-secondary">Siemens TIA Portal</span>
            <span className="px-2 py-0.5 rounded bg-bg-panel border border-border-subtle text-text-secondary">Rockwell Studio 5000</span>
            <span className="px-2 py-0.5 rounded bg-bg-panel border border-border-subtle text-text-secondary">Schneider EcoStruxure</span>
            <span className="px-2 py-0.5 rounded bg-bg-panel border border-border-subtle text-text-secondary">CODESYS V3</span>
            <span className="px-2 py-0.5 rounded bg-bg-panel border border-border-subtle text-text-secondary">Beckhoff TwinCAT</span>
          </div>
        </button>

      </div>

      {/* Matched Layer Detail Inspector Callout */}
      <div className="p-4 sm:p-5 border-t border-border-subtle bg-bg-elevated">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="text-xs font-bold text-text-primary">
            {activeLayer.name}
          </span>
          <span className="px-2.5 py-0.5 rounded-pill font-mono text-[9.5px] font-semibold bg-accent-primary/10 text-accent-primary border border-accent-border">
            {activeLayer.badge}
          </span>
        </div>
        <p className="text-xs text-text-secondary leading-relaxed mb-3">
          {activeLayer.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {activeLayer.capabilities.map((cap, idx) => (
            <div key={idx} className="p-2 rounded bg-bg-panel border border-border-subtle flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent-primary mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-xs font-semibold text-text-primary block">{cap.title}</span>
                <span className="text-[10.5px] text-text-secondary leading-tight">{cap.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 bg-bg-hover border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-text-tertiary gap-1.5">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-accent-primary flex-shrink-0" />
          <span>Vendor Neutral: Eliminates lock-in without modifying plant field standards</span>
        </span>
        <span className="text-accent-primary font-semibold">
          PlatX Core
        </span>
      </div>
    </div>
  )
}
