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

      {/* 3-Tier Layer Visual Diagram with Matched Colors & Fixed Geometry */}
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
            <div className="flex items-center gap-2 min-w-0">
              <Cpu className={`w-4 h-4 flex-shrink-0 ${activeLayerId === 'power' ? 'text-accent-primary' : 'text-text-secondary'}`} />
              <span className={`text-xs font-bold truncate ${activeLayerId === 'power' ? 'text-accent-primary' : 'text-text-primary'}`}>
                Engineering Power & Autonomous Capabilities
              </span>
            </div>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-pill border flex-shrink-0 ${
              activeLayerId === 'power'
                ? 'bg-accent-primary text-white font-bold border-accent-primary'
                : 'bg-bg-elevated text-text-tertiary border-border-subtle'
            }`}>
              Tier 01
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[11px]">
            <div className="p-2 rounded bg-bg-panel border border-border-subtle">
              <span className="font-semibold block text-[11px] text-text-primary truncate">Spec Intake</span>
              <span className="text-[9.5px] text-text-tertiary block truncate">ISA-88 Parsing</span>
            </div>
            <div className="p-2 rounded bg-bg-panel border border-border-subtle">
              <span className="font-semibold block text-[11px] text-text-primary truncate">SCL Logic</span>
              <span className="text-[9.5px] text-text-tertiary block truncate">Closed-Loop AST</span>
            </div>
            <div className="p-2 rounded bg-bg-panel border border-border-subtle">
              <span className="font-semibold block text-[11px] text-text-primary truncate">I/O Design</span>
              <span className="text-[9.5px] text-text-tertiary block truncate">Cabinet Routing</span>
            </div>
            <div className="p-2 rounded bg-bg-panel border border-border-subtle">
              <span className="font-semibold block text-[11px] text-text-primary truncate">FAT Simulation</span>
              <span className="text-[9.5px] text-text-tertiary block truncate">Virtual Oracles</span>
            </div>
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
          className={`w-full p-3.5 rounded-card border text-left transition-all cursor-pointer relative ${
            activeLayerId === 'intelligence'
              ? 'bg-accent-primary/10 border-accent-primary shadow-sm ring-1 ring-accent-primary/50'
              : 'bg-bg-page border-border-subtle hover:border-accent-border hover:bg-bg-hover'
          }`}
        >
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-4 h-4 rounded bg-accent-primary text-white flex items-center justify-center font-bold text-[9px] flex-shrink-0">
                AX
              </div>
              <span className={`text-xs font-bold truncate ${activeLayerId === 'intelligence' ? 'text-accent-primary' : 'text-text-primary'}`}>
                AUTO-X Engineering Intelligence Layer
              </span>
            </div>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-pill border flex-shrink-0 ${
              activeLayerId === 'intelligence'
                ? 'bg-accent-primary text-white font-bold border-accent-primary'
                : 'bg-bg-elevated text-text-tertiary border-border-subtle'
            }`}>
              Tier 02 · Core
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[11px]">
            <div className="p-2 rounded bg-bg-panel border border-accent-border/40">
              <span className="text-accent-primary font-bold block text-[11px] truncate">AIR Schema</span>
              <span className="text-[9.5px] text-text-tertiary block truncate">Unified Model</span>
            </div>
            <div className="p-2 rounded bg-bg-panel border border-accent-border/40">
              <span className="text-accent-primary font-bold block text-[11px] truncate">Standards Gates</span>
              <span className="text-[9.5px] text-text-tertiary block truncate">IEC / ISA-88</span>
            </div>
            <div className="p-2 rounded bg-bg-panel border border-accent-border/40">
              <span className="text-accent-primary font-bold block text-[11px] truncate">AST Compiler</span>
              <span className="text-[9.5px] text-text-tertiary block truncate">0% Hallucination</span>
            </div>
            <div className="p-2 rounded bg-bg-panel border border-accent-border/40">
              <span className="text-accent-primary font-bold block text-[11px] truncate">Knowledge Graph</span>
              <span className="text-[9.5px] text-text-tertiary block truncate">Single Truth</span>
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
          className={`w-full p-3.5 rounded-card border text-left transition-all cursor-pointer relative ${
            activeLayerId === 'vendor'
              ? 'bg-accent-primary/10 border-accent-primary shadow-sm ring-1 ring-accent-primary/50'
              : 'bg-bg-page border-border-subtle hover:border-accent-border hover:bg-bg-hover'
          }`}
        >
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2 min-w-0">
              <Lock className={`w-4 h-4 flex-shrink-0 ${activeLayerId === 'vendor' ? 'text-accent-primary' : 'text-text-secondary'}`} />
              <span className={`text-xs font-bold truncate ${activeLayerId === 'vendor' ? 'text-accent-primary' : 'text-text-primary'}`}>
                Vendor-Locked Software & Field Hardware
              </span>
            </div>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-pill border flex-shrink-0 ${
              activeLayerId === 'vendor'
                ? 'bg-accent-primary text-white font-bold border-accent-primary'
                : 'bg-bg-elevated text-text-tertiary border-border-subtle'
            }`}>
              Tier 03
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[11px]">
            <div className="p-2 rounded bg-bg-panel border border-border-subtle">
              <span className="font-semibold block text-[11px] text-text-primary truncate">Siemens TIA</span>
              <span className="text-[9.5px] text-text-tertiary block truncate">S7-1200 / 1500</span>
            </div>
            <div className="p-2 rounded bg-bg-panel border border-border-subtle">
              <span className="font-semibold block text-[11px] text-text-primary truncate">Rockwell</span>
              <span className="text-[9.5px] text-text-tertiary block truncate">Studio 5000</span>
            </div>
            <div className="p-2 rounded bg-bg-panel border border-border-subtle">
              <span className="font-semibold block text-[11px] text-text-primary truncate">Schneider</span>
              <span className="text-[9.5px] text-text-tertiary block truncate">EcoStruxure</span>
            </div>
            <div className="p-2 rounded bg-bg-panel border border-border-subtle">
              <span className="font-semibold block text-[11px] text-text-primary truncate">CODESYS</span>
              <span className="text-[9.5px] text-text-tertiary block truncate">TwinCAT / PLCopen</span>
            </div>
          </div>
        </button>

      </div>

      {/* Matched Layer Detail Inspector Callout with Constant Height */}
      <div className="p-4 sm:p-5 border-t border-border-subtle bg-bg-elevated min-h-[224px] flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-xs font-bold text-text-primary truncate">
              {activeLayer.name}
            </span>
            <span className="px-2.5 py-0.5 rounded-pill font-mono text-[9.5px] font-semibold bg-accent-primary/10 text-accent-primary border border-accent-border flex-shrink-0">
              {activeLayer.badge}
            </span>
          </div>
          <p className="text-xs text-text-secondary leading-relaxed mb-3">
            {activeLayer.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {activeLayer.capabilities.map((cap, idx) => (
              <div key={idx} className="p-2.5 rounded bg-bg-panel border border-border-subtle flex items-start gap-2 min-h-[60px]">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-primary mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <span className="text-xs font-semibold text-text-primary block truncate">{cap.title}</span>
                  <span className="text-[10.5px] text-text-secondary leading-tight block">{cap.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 bg-bg-hover border-t border-border-subtle flex items-center justify-between text-[11px] font-mono text-text-tertiary gap-2">
        <span className="flex items-center gap-1.5 min-w-0">
          <ShieldCheck className="w-3.5 h-3.5 text-accent-primary flex-shrink-0" />
          <span className="truncate">Vendor Neutral: Eliminates lock-in without modifying plant field standards</span>
        </span>
        <span className="text-accent-primary font-semibold flex-shrink-0">
          PlatX Core
        </span>
      </div>
    </div>
  )
}
