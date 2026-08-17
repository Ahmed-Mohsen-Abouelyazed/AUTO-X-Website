import { useState, useMemo } from 'react'
import { Search, Filter, Layers, ArrowRight } from 'lucide-react'

interface ModuleItem {
  id: string
  name: string
  phase: number
  phaseName: string
  domain: 'PLC Logic' | 'CAD & Wiring' | 'SCADA & HMI' | 'Data & Cloud' | 'Safety & Testing'
  status: 'Active MVP' | 'Validated POC' | 'Conceptual Design'
  desc: string
  inputArtifact: string
  outputArtifact: string
  protocols: string[]
}

const MODULES: ModuleItem[] = [
  // Phase 1: Define & Scope
  {
    id: 'scope',
    name: 'AUTO-SCOPE',
    phase: 1,
    phaseName: 'Phase 1: Define & Scope',
    domain: 'PLC Logic',
    status: 'Conceptual Design',
    desc: 'AI-Powered Project Intake & RFQ Parser extracting functional scopes, deliverables, and boundary matrices.',
    inputArtifact: 'Customer RFQ / URS PDF',
    outputArtifact: 'Scope Boundary Matrix & Tag Catalog',
    protocols: ['PDF/OCR', 'Markdown'],
  },
  {
    id: 'req',
    name: 'AUTO-REQ',
    phase: 1,
    phaseName: 'Phase 1: Define & Scope',
    domain: 'PLC Logic',
    status: 'Conceptual Design',
    desc: 'Requirements Extraction & Traceability connecting engineering intent to formal ISA-88 test matrices.',
    inputArtifact: 'Engineering Narrative',
    outputArtifact: 'Traceability Matrix',
    protocols: ['JSON-LD', 'AIR Graph'],
  },
  {
    id: 'feed',
    name: 'AUTO-FEED',
    phase: 1,
    phaseName: 'Phase 1: Define & Scope',
    domain: 'CAD & Wiring',
    status: 'Conceptual Design',
    desc: 'Front-End Engineering Design, bill-of-materials estimator, and delivery risk scorer.',
    inputArtifact: 'Project Scope Model',
    outputArtifact: 'FEED Specification & BOM',
    protocols: ['CSV', 'Excel API'],
  },

  // Phase 2: Design Architecture
  {
    id: 'arch',
    name: 'AUTO-ARCH',
    phase: 2,
    phaseName: 'Phase 2: Design Architecture',
    domain: 'PLC Logic',
    status: 'Conceptual Design',
    desc: 'Hardware Architecture & Network Topology Generator selecting PLC racks, fieldbus topologies, and remote drops.',
    inputArtifact: 'I/O Tag Estimate',
    outputArtifact: 'Rack Topology & Fieldbus Map',
    protocols: ['PROFINET', 'EtherNet/IP'],
  },
  {
    id: 'io',
    name: 'AUTO-IO',
    phase: 2,
    phaseName: 'Phase 2: Design Architecture',
    domain: 'CAD & Wiring',
    status: 'Validated POC',
    desc: 'I/O Allocation, Cabinet Layout & Termination Optimizer with bidirectional conflict checks (PyQt6 POC).',
    inputArtifact: 'I/O List CSV / Excel',
    outputArtifact: 'Cabinet Terminal Allocation PDF',
    protocols: ['PyQt6', 'PDF Emitter'],
  },
  {
    id: 'net',
    name: 'AUTO-NET',
    phase: 2,
    phaseName: 'Phase 2: Design Architecture',
    domain: 'Data & Cloud',
    status: 'Conceptual Design',
    desc: 'Industrial Network Bandwidth & IP Address Manager with deterministic cycle time calculations.',
    inputArtifact: 'Hardware List',
    outputArtifact: 'IP Plan & Conformance Matrix',
    protocols: ['PROFINET IRT', 'OPC UA'],
  },

  // Phase 3: Detailed Engineering
  {
    id: 'plc',
    name: 'AUTO-PLC',
    phase: 3,
    phaseName: 'Phase 3: Detailed Engineering',
    domain: 'PLC Logic',
    status: 'Active MVP',
    desc: 'Deterministic PLC Code Generator emitting 100% syntactically valid IEC 61131-3 SCL for Siemens TIA Portal.',
    inputArtifact: 'Validated AIR Control Model',
    outputArtifact: 'SCL Function Blocks & Global DBs',
    protocols: ['TIA Openness API', 'IEC 61131-3'],
  },
  {
    id: 'hmi',
    name: 'AUTO-HMI',
    phase: 3,
    phaseName: 'Phase 3: Detailed Engineering',
    domain: 'SCADA & HMI',
    status: 'Conceptual Design',
    desc: 'HMI Screen & Faceplate Generator adhering to High-Performance HMI (ISA-101) ergonomics.',
    inputArtifact: 'ISA-88 Tag Catalog',
    outputArtifact: 'HMI Faceplates & Tag Bindings',
    protocols: ['WinCC Unified', 'FactoryTalk'],
  },
  {
    id: 'scada',
    name: 'AUTO-SCADA',
    phase: 3,
    phaseName: 'Phase 3: Detailed Engineering',
    domain: 'SCADA & HMI',
    status: 'Conceptual Design',
    desc: 'Plant-Wide Supervision & Historical Tag Archive Configurator with Unified Namespace synchronization.',
    inputArtifact: 'Enterprise Tag Catalog',
    outputArtifact: 'SCADA Project Definition',
    protocols: ['Ignition', 'AVEVA System Platform'],
  },
  {
    id: 'alarm',
    name: 'AUTO-ALARM',
    phase: 3,
    phaseName: 'Phase 3: Detailed Engineering',
    domain: 'PLC Logic',
    status: 'Conceptual Design',
    desc: 'ISA-18.2 Alarm Rationalization & Suppression Rule Engine eliminating nuisance alarms.',
    inputArtifact: 'P&ID Setpoints',
    outputArtifact: 'Rationalized Alarm DB & Guide',
    protocols: ['ISA-18.2', 'IEC 62682'],
  },
  {
    id: 'cad',
    name: 'AUTO-CAD',
    phase: 3,
    phaseName: 'Phase 3: Detailed Engineering',
    domain: 'CAD & Wiring',
    status: 'Conceptual Design',
    desc: 'Electrical Schematic & Terminal Diagram Compiler generating EPLAN/AutoCAD Electrical XML.',
    inputArtifact: 'AUTO-IO Cabinet Allocation',
    outputArtifact: 'Schematic XML & Loop Drawings',
    protocols: ['EPLAN AML', 'DXF'],
  },

  // Phase 4: Verification & Safety
  {
    id: 'lint',
    name: 'AUTO-LINT',
    phase: 4,
    phaseName: 'Phase 4: Verification & Standards',
    domain: 'Safety & Testing',
    status: 'Conceptual Design',
    desc: 'Mechanical Code Standards & AST Validator checking IEC 61131-3 syntax and naming conventions.',
    inputArtifact: 'SCL Code Files',
    outputArtifact: 'Lint Proof & Compliance Score',
    protocols: ['AST Validator', 'Rules Engine'],
  },
  {
    id: 'safe',
    name: 'AUTO-SAFE',
    phase: 4,
    phaseName: 'Phase 4: Verification & Standards',
    domain: 'Safety & Testing',
    status: 'Conceptual Design',
    desc: 'Functional Safety (SIL 1-3) Verification Governance (Strictly Post-MVP, non-AI human sign-off).',
    inputArtifact: 'Safety Requirements Spec (SRS)',
    outputArtifact: 'SIL Verification Dossier',
    protocols: ['IEC 61508', 'IEC 62061'],
  },
  {
    id: 'sec',
    name: 'AUTO-SEC',
    phase: 4,
    phaseName: 'Phase 4: Verification & Standards',
    domain: 'Data & Cloud',
    status: 'Conceptual Design',
    desc: 'IEC 62443 Industrial Cybersecurity Auditor checking Zone & Conduit isolation policies.',
    inputArtifact: 'Network & Tag Topology',
    outputArtifact: 'Cybersecurity Threat Report',
    protocols: ['IEC 62443-3-3', 'OPC UA Security'],
  },

  // Phase 5: Virtual Commissioning & Simulation
  {
    id: 'sim',
    name: 'AUTO-SIM',
    phase: 5,
    phaseName: 'Phase 5: Virtual Commissioning',
    domain: 'Safety & Testing',
    status: 'Conceptual Design',
    desc: 'Physics-Based Plant Dynamic Model Simulator testing control sequences against virtual physics.',
    inputArtifact: 'Mechanical Model & SCL Logic',
    outputArtifact: 'Simulation Telemetry & Logs',
    protocols: ['PLCSIM Advanced', 'FMI/FMU'],
  },
  {
    id: 'twin',
    name: 'AUTO-TWIN',
    phase: 5,
    phaseName: 'Phase 5: Virtual Commissioning',
    domain: 'Safety & Testing',
    status: 'Conceptual Design',
    desc: '3D Kinematic Digital Twin Interface connecting virtual controllers to 3D mechanical simulations.',
    inputArtifact: '3D CAD & PLC Logic',
    outputArtifact: 'Virtual Commissioning Session',
    protocols: ['SIMIT', 'MCD'],
  },

  // Phase 6: Release & Build
  {
    id: 'openness',
    name: 'AUTO-OPENNESS',
    phase: 6,
    phaseName: 'Phase 6: Release & Build',
    domain: 'PLC Logic',
    status: 'Active MVP',
    desc: '.NET 8 Siemens TIA Openness Bridge generating native Siemens TIA Portal projects via Openness API.',
    inputArtifact: 'Validated SCL Blocks & DBs',
    outputArtifact: 'TIA Portal Project XML',
    protocols: ['.NET 8', 'TIA Openness API'],
  },
  {
    id: 'rockwell_bridge',
    name: 'AUTO-LOGIX',
    phase: 6,
    phaseName: 'Phase 6: Release & Build',
    domain: 'PLC Logic',
    status: 'Conceptual Design',
    desc: 'Rockwell Studio 5000 / ControlLogix L5X and L5K project file generator.',
    inputArtifact: 'AIR Model Graph',
    outputArtifact: 'Rockwell L5X AOI Package',
    protocols: ['L5X XML', 'CIP'],
  },

  // Phase 7: Commissioning & Field
  {
    id: 'test',
    name: 'AUTO-TEST',
    phase: 7,
    phaseName: 'Phase 7: Commissioning & Field',
    domain: 'Safety & Testing',
    status: 'Conceptual Design',
    desc: 'Automated FAT / SAT Test Execution Engine recording formal test sign-offs and step results.',
    inputArtifact: 'FAT Test Matrix',
    outputArtifact: 'Signed FAT/SAT Test Dossier',
    protocols: ['Automated Oracle', 'PDF Seal'],
  },
  {
    id: 'diag',
    name: 'AUTO-DIAG',
    phase: 7,
    phaseName: 'Phase 7: Commissioning & Field',
    domain: 'PLC Logic',
    status: 'Conceptual Design',
    desc: 'Field Fault Root-Cause Analyzer parsing PLC diagnostic buffer alarms and sequence trips.',
    inputArtifact: 'Diagnostic Buffer Log',
    outputArtifact: 'Root-Cause Action Guide',
    protocols: ['Syslog', 'ProDiag'],
  },

  // Phase 8: Documentation & Knowledge
  {
    id: 'doc',
    name: 'AUTO-DOC',
    phase: 8,
    phaseName: 'Phase 8: Documentation',
    domain: 'PLC Logic',
    status: 'Conceptual Design',
    desc: 'One-Click Functional Design Specification (FDS) & Software Design Specification (SDS) Generator.',
    inputArtifact: 'SCL Code & Tag Model',
    outputArtifact: 'FDS / SDS / O&M Manuals',
    protocols: ['Markdown', 'PDF / Word'],
  },
  {
    id: 'graph',
    name: 'AUTO-GRAPH',
    phase: 8,
    phaseName: 'Phase 8: Documentation',
    domain: 'Data & Cloud',
    status: 'Conceptual Design',
    desc: 'Engineering Knowledge Graph preserving corporate automation standards and historical project lessons.',
    inputArtifact: 'All Project Artifacts',
    outputArtifact: 'Institutional Knowledge Graph',
    protocols: ['GraphQL', 'Cypher / Neo4j'],
  },

  // Phase 9: Operate & Optimize
  {
    id: 'uns',
    name: 'AUTO-UNS',
    phase: 9,
    phaseName: 'Phase 9: Operate & Optimize',
    domain: 'Data & Cloud',
    status: 'Conceptual Design',
    desc: 'Unified Namespace (UNS) MQTT Sparkplug B Bridge synchronizing edge tags to enterprise analytics.',
    inputArtifact: 'PLC Tag DBs',
    outputArtifact: 'MQTT Sparkplug Topic Tree',
    protocols: ['MQTT', 'Sparkplug B', 'Kafka'],
  },
  {
    id: 'opt',
    name: 'AUTO-OPT',
    phase: 9,
    phaseName: 'Phase 9: Operate & Optimize',
    domain: 'Data & Cloud',
    status: 'Conceptual Design',
    desc: 'Plant Cycle Time & Energy Optimization Engine recommending sequence tuning for OEE gains.',
    inputArtifact: 'Live Telemetry Stream',
    outputArtifact: 'Optimization Recommendations',
    protocols: ['OPC UA PubSub', 'REST API'],
  },
]

export function ModuleExplorer() {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedDomain, setSelectedDomain] = useState<string>('All')
  const [selectedModule, setSelectedModule] = useState<ModuleItem>(MODULES[6]) // Default to AUTO-PLC

  const domains = ['All', 'PLC Logic', 'CAD & Wiring', 'SCADA & HMI', 'Data & Cloud', 'Safety & Testing']

  const filteredModules = useMemo(() => {
    return MODULES.filter((m) => {
      const matchesSearch =
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.phaseName.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesDomain = selectedDomain === 'All' || m.domain === selectedDomain

      return matchesSearch && matchesDomain
    })
  }, [searchQuery, selectedDomain])

  return (
    <div className="rounded-panel border border-border-standard bg-bg-panel shadow-elevated overflow-hidden">
      {/* Header */}
      <div className="p-6 md:p-8 border-b border-border-subtle bg-gradient-to-r from-bg-panel via-bg-elevated/40 to-bg-panel">
        <div className="flex items-center gap-2 mb-2">
          <Layers className="w-5 h-5 text-accent-primary" />
          <span className="font-mono text-xs uppercase font-bold text-accent-primary tracking-wider">
            PlatX 30+ Module Ecosystem Explorer
          </span>
        </div>
        <h3 className="text-sub-heading-large font-semibold text-text-primary mb-1">
          Explore the Full 9-Phase Lifecycle Architecture
        </h3>
        <p className="text-xs text-text-secondary leading-relaxed">
          Search and filter across all 30+ modular engineering capabilities within the PlatX industrial operating system.
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="p-4 sm:p-5 border-b border-border-subtle bg-bg-elevated flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-text-tertiary absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search module (e.g. SCL, IO, Safety, TIA)..."
            className="w-full pl-9 pr-3 py-2 rounded-standard bg-bg-page border border-border-subtle text-xs text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/30"
          />
        </div>

        {/* Domain Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1">
          <span className="text-[10px] font-mono uppercase text-text-tertiary mr-1 flex items-center gap-1 flex-shrink-0">
            <Filter className="w-3 h-3 text-accent-primary" />
            <span>Domain:</span>
          </span>
          {domains.map((dom) => (
            <button
              type="button"
              key={dom}
              onClick={() => setSelectedDomain(dom)}
              className={`px-2.5 py-1 rounded-pill text-[11px] font-mono transition-colors whitespace-nowrap cursor-pointer ${
                selectedDomain === dom
                  ? 'bg-accent-primary text-white font-semibold'
                  : 'bg-bg-page text-text-secondary hover:text-text-primary border border-border-subtle'
              }`}
            >
              {dom}
            </button>
          ))}
        </div>

      </div>

      {/* Main Grid: Left Module List vs Right Detail Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border-subtle">
        
        {/* Left Side: Scrollable Module Cards Grid */}
        <div className="lg:col-span-7 p-4 sm:p-5 max-h-[500px] overflow-y-auto space-y-2.5 bg-bg-page">
          <div className="flex items-center justify-between text-[11px] font-mono text-text-tertiary pb-2 mb-1 border-b border-border-subtle">
            <span>Showing {filteredModules.length} of {MODULES.length} Modules</span>
            <span>Click any module to inspect</span>
          </div>

          {filteredModules.length === 0 ? (
            <div className="py-12 text-center text-text-tertiary text-xs font-mono">
              No modules match your search criteria. Try clearing filters.
            </div>
          ) : (
            filteredModules.map((mod) => {
              const isSelected = selectedModule.id === mod.id
              return (
                <button
                  type="button"
                  key={mod.id}
                  onClick={() => setSelectedModule(mod)}
                  className={`w-full p-3.5 rounded-card text-left transition-all border flex items-center justify-between gap-3 cursor-pointer ${
                    isSelected
                      ? 'bg-bg-panel border-accent-primary shadow-sm ring-1 ring-accent-primary/30'
                      : 'bg-bg-panel border-border-subtle hover:border-border-standard hover:bg-bg-elevated'
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs font-bold text-text-primary">
                        {mod.name}
                      </span>
                      <span className="text-[10px] font-mono text-text-tertiary">
                        {mod.phaseName.split(':')[0]}
                      </span>
                    </div>
                    <p className="text-[11px] text-text-secondary leading-snug line-clamp-1">
                      {mod.desc}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <span
                      className={`text-[9px] font-mono px-2 py-0.5 rounded-pill font-semibold border ${
                        mod.status === 'Active MVP'
                          ? 'bg-success-bg text-success border-success/30'
                          : mod.status === 'Validated POC'
                          ? 'bg-accent-primary/10 text-accent-primary border-accent-border'
                          : 'bg-bg-elevated text-text-tertiary border-border-subtle'
                      }`}
                    >
                      {mod.status}
                    </span>
                    <span className="text-[9px] font-mono text-text-quaternary">
                      {mod.domain}
                    </span>
                  </div>
                </button>
              )
            })
          )}
        </div>

        {/* Right Side: Detailed Module Inspector Panel */}
        <div className="lg:col-span-5 p-6 bg-bg-elevated flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="font-mono text-xs font-semibold text-accent-primary">
                {selectedModule.phaseName}
              </span>
              <span
                className={`text-[10px] font-mono px-2.5 py-0.5 rounded-pill font-bold border ${
                  selectedModule.status === 'Active MVP'
                    ? 'bg-success-bg text-success border-success/30'
                    : selectedModule.status === 'Validated POC'
                    ? 'bg-accent-primary/10 text-accent-primary border-accent-border'
                    : 'bg-bg-panel text-text-tertiary border-border-subtle'
                }`}
              >
                {selectedModule.status}
              </span>
            </div>

            <h4 className="text-sub-heading font-semibold text-text-primary mb-2">
              {selectedModule.name}
            </h4>
            <p className="text-xs text-text-secondary leading-relaxed mb-6">
              {selectedModule.desc}
            </p>

            <div className="space-y-3.5 mb-6">
              <div className="p-3 rounded-card bg-bg-panel border border-border-subtle">
                <span className="text-[10px] font-mono uppercase font-semibold text-text-tertiary block mb-1">
                  Primary Input Artifact
                </span>
                <span className="text-xs font-mono font-medium text-text-primary block">
                  {selectedModule.inputArtifact}
                </span>
              </div>

              <div className="p-3 rounded-card bg-bg-panel border border-border-subtle">
                <span className="text-[10px] font-mono uppercase font-semibold text-accent-primary block mb-1">
                  Generated Output Artifact
                </span>
                <span className="text-xs font-mono font-medium text-text-primary block">
                  {selectedModule.outputArtifact}
                </span>
              </div>

              <div className="p-3 rounded-card bg-bg-panel border border-border-subtle">
                <span className="text-[10px] font-mono uppercase font-semibold text-text-tertiary block mb-1">
                  Supported Protocols / Standards
                </span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {selectedModule.protocols.map((p) => (
                    <span
                      key={p}
                      className="px-2 py-0.5 rounded-standard bg-bg-page text-text-primary font-mono text-[10px] border border-border-subtle"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-standard bg-accent-primary text-white text-xs font-semibold hover:bg-accent-hover transition-all shadow-sm"
          >
            <span>Inquire About {selectedModule.name} in Pilot</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Footer Governance Note */}
      <div className="p-4 bg-bg-hover border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-text-tertiary gap-2">
        <span>FIS Governance: ACTIVE implementations currently centered on AUTO-PLC (MVP) & AUTO-IO (POC).</span>
        <span className="text-[11px] text-text-quaternary">
          PlatX Vision Architecture
        </span>
      </div>
    </div>
  )
}
