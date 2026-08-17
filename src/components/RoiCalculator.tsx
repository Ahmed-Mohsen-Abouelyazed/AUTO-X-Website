import { useState, useId } from 'react'
import { Calculator, Clock, Users, ArrowRight, Sparkles, TrendingUp, Zap, Info } from 'lucide-react'

export function RoiCalculator() {
  const teamSizeId = useId()
  const projectsCountId = useId()
  const projectDurationId = useId()

  const [teamSize, setTeamSize] = useState<number>(5)
  const [projectsCount, setProjectsCount] = useState<number>(6)
  const [projectDuration, setProjectDuration] = useState<number>(4) // in months

  // Reactive Multi-Variable Industrial Capacity Model:
  // 1. Team capacity pool (total available engineering hours per year)
  const teamTotalAnnualCapacity = teamSize * 12 * 160

  // 2. Workload per project (engineers assigned per project * months * 140 hrs/month)
  const avgEngineersPerProject = Math.max(1, Math.min(teamSize, Math.round((teamSize * 1.2) / Math.max(1, projectsCount * 0.3))))
  const hoursPerProject = projectDuration * 140 * avgEngineersPerProject

  // 3. Total active project delivery workload across the year
  const totalProjectWorkloadHours = Math.round(
    Math.min(teamTotalAnnualCapacity * 1.3, projectsCount * hoursPerProject)
  )

  // 4. Repetitive boilerplate tasks (I/O mapping, tag tables, SCL scaffolding, alarm lists, test manuals) ~42%
  const repetitiveHours = Math.round(totalProjectWorkloadHours * 0.42)

  // 5. Reclaimed hours with AUTO-PLC compiler automation (~75% reduction of repetitive boilerplate)
  const hoursSaved = Math.round(repetitiveHours * 0.75)
  const weeksSaved = Math.max(1, Math.round(hoursSaved / 40))

  // 6. Project duration acceleration (months shaved off per project)
  const monthsSavedPerProject = Math.max(0.4, Number((projectDuration * 0.32).toFixed(1)))

  // 7. Financial value equivalent (@ $75/hr average automation engineering rate)
  const financialValue = Math.round(hoursSaved * 75)

  // Visual percentage for comparison bar
  const manualPercent = 100
  const autoXPercent = Math.max(25, Math.round(((totalProjectWorkloadHours - hoursSaved) / totalProjectWorkloadHours) * 100))

  const applyPreset = (engineers: number, projects: number, duration: number) => {
    setTeamSize(engineers)
    setProjectsCount(projects)
    setProjectDuration(duration)
  }

  return (
    <div className="rounded-panel border border-border-standard bg-bg-panel shadow-card overflow-hidden">
      {/* Header */}
      <div className="p-6 md:p-8 border-b border-border-subtle bg-gradient-to-r from-bg-panel via-bg-elevated/40 to-bg-panel">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Calculator className="w-5 h-5 text-accent-primary" />
              <span className="font-mono text-xs uppercase font-bold text-accent-primary tracking-wider">
                Engineering Capacity & Impact Estimator (Rough Estimate Model)
              </span>
            </div>
            <h3 className="text-sub-heading-large font-semibold text-text-primary mb-1">
              Calculate Your Engineering Time Reclaimed
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              Move the sliders or select a preset below to estimate potential engineering throughput gains based on benchmark assumptions.
            </p>
          </div>

          {/* Quick Preset Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 flex-shrink-0">
            <span className="text-[10px] font-mono uppercase text-text-tertiary mr-1 flex items-center gap-1">
              <Zap className="w-3 h-3 text-accent-primary" />
              <span>Presets:</span>
            </span>
            <button
              type="button"
              onClick={() => applyPreset(3, 4, 3)}
              className="px-2.5 py-1 rounded-pill bg-bg-page border border-border-subtle hover:border-accent-border text-[11px] font-mono text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
            >
              Small SI (3 Eng)
            </button>
            <button
              type="button"
              onClick={() => applyPreset(8, 12, 5)}
              className="px-2.5 py-1 rounded-pill bg-bg-page border border-border-subtle hover:border-accent-border text-[11px] font-mono text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
            >
              Mid SI (8 Eng)
            </button>
            <button
              type="button"
              onClick={() => applyPreset(20, 24, 7)}
              className="px-2.5 py-1 rounded-pill bg-bg-page border border-border-subtle hover:border-accent-border text-[11px] font-mono text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
            >
              Enterprise OEM (20 Eng)
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Sliders */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Slider 1: Team Size */}
            <div className="p-4 rounded-card bg-bg-page border border-border-subtle">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor={teamSizeId} className="text-xs font-semibold text-text-primary flex items-center gap-2">
                  <Users className="w-4 h-4 text-accent-primary" />
                  <span>Automation Engineers in Team</span>
                </label>
                <span className="font-mono text-base font-bold text-accent-primary bg-accent-primary/10 px-2.5 py-0.5 rounded-pill border border-accent-border">
                  {teamSize} Engineers
                </span>
              </div>
              <input
                id={teamSizeId}
                type="range"
                min="1"
                max="50"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                onInput={(e) => setTeamSize(Number((e.target as HTMLInputElement).value))}
                className="w-full accent-accent-primary cursor-pointer h-2 bg-bg-elevated rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-text-tertiary font-mono mt-1">
                <span>1 solo engineer</span>
                <span>25 engineers</span>
                <span>50+ enterprise</span>
              </div>
            </div>

            {/* Slider 2: Annual Projects Count */}
            <div className="p-4 rounded-card bg-bg-page border border-border-subtle">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor={projectsCountId} className="text-xs font-semibold text-text-primary flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent-primary" />
                  <span>Projects Delivered per Year</span>
                </label>
                <span className="font-mono text-base font-bold text-accent-primary bg-accent-primary/10 px-2.5 py-0.5 rounded-pill border border-accent-border">
                  {projectsCount} Projects
                </span>
              </div>
              <input
                id={projectsCountId}
                type="range"
                min="1"
                max="30"
                value={projectsCount}
                onChange={(e) => setProjectsCount(Number(e.target.value))}
                onInput={(e) => setProjectsCount(Number((e.target as HTMLInputElement).value))}
                className="w-full accent-accent-primary cursor-pointer h-2 bg-bg-elevated rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-text-tertiary font-mono mt-1">
                <span>1 project</span>
                <span>15 projects</span>
                <span>30 projects</span>
              </div>
            </div>

            {/* Slider 3: Average Project Duration */}
            <div className="p-4 rounded-card bg-bg-page border border-border-subtle">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor={projectDurationId} className="text-xs font-semibold text-text-primary flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-accent-primary" />
                  <span>Avg Project Duration</span>
                </label>
                <span className="font-mono text-base font-bold text-accent-primary bg-accent-primary/10 px-2.5 py-0.5 rounded-pill border border-accent-border">
                  {projectDuration} Months
                </span>
              </div>
              <input
                id={projectDurationId}
                type="range"
                min="1"
                max="12"
                value={projectDuration}
                onChange={(e) => setProjectDuration(Number(e.target.value))}
                onInput={(e) => setProjectDuration(Number((e.target as HTMLInputElement).value))}
                className="w-full accent-accent-primary cursor-pointer h-2 bg-bg-elevated rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-text-tertiary font-mono mt-1">
                <span>1 month (fast machine)</span>
                <span>6 months</span>
                <span>12 months (large plant)</span>
              </div>
            </div>

            {/* Visual Engineering Effort Comparison Bar */}
            <div className="p-4 rounded-card bg-bg-elevated border border-border-subtle space-y-3">
              <span className="text-xs font-semibold text-text-primary block">
                Engineering Delivery Time Comparison (Relative Effort)
              </span>
              
              {/* Traditional Bar */}
              <div>
                <div className="flex justify-between text-[11px] font-mono text-text-tertiary mb-1">
                  <span>Traditional Manual Engineering:</span>
                  <span className="font-bold text-text-primary">{manualPercent}% Effort</span>
                </div>
                <div className="h-3 w-full rounded-full bg-border-standard overflow-hidden">
                  <div className="h-full bg-text-tertiary/70 rounded-full w-full" />
                </div>
              </div>

              {/* AUTO-X Bar */}
              <div>
                <div className="flex justify-between text-[11px] font-mono text-accent-primary mb-1">
                  <span className="font-bold flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-accent-primary" />
                    <span>With AUTO-X Deterministic Pipeline:</span>
                  </span>
                  <span className="font-bold">{autoXPercent}% Effort</span>
                </div>
                <div className="h-3 w-full rounded-full bg-bg-panel overflow-hidden border border-accent-border/40">
                  <div
                    className="h-full bg-gradient-to-r from-accent-primary to-[#00d2ff] rounded-full transition-all duration-300"
                    style={{ width: `${autoXPercent}%` }}
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Output Metrics Cards & Breakdown */}
          <div className="lg:col-span-6 p-6 rounded-panel bg-bg-elevated border border-border-standard flex flex-col justify-between">
            
            <div>
              <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-border-subtle">
                <span className="font-mono text-xs font-semibold uppercase text-text-tertiary">
                  Estimated Team Impact
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-pill bg-success-bg text-success font-mono text-xs font-bold border border-success/30">
                  <span>Capacity Unlocked</span>
                </span>
              </div>

              {/* Two Primary Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-standard bg-bg-panel border border-border-subtle">
                  <span className="text-2xl md:text-3xl font-mono font-bold text-accent-primary block mb-1">
                    ~{hoursSaved.toLocaleString()}
                  </span>
                  <span className="text-xs font-medium text-text-primary block">Hours Reclaimed / Year</span>
                  <span className="text-[10px] text-text-tertiary font-mono">From manual boilerplate</span>
                </div>

                <div className="p-4 rounded-standard bg-bg-panel border border-border-subtle">
                  <span className="text-2xl md:text-3xl font-mono font-bold text-success block mb-1">
                    ~{weeksSaved}
                  </span>
                  <span className="text-xs font-medium text-text-primary block">Engineering Weeks Saved</span>
                  <span className="text-[10px] text-text-tertiary font-mono">Equivalent capacity boost</span>
                </div>
              </div>

              {/* Secondary Breakdown Rows */}
              <div className="space-y-3 mb-6 bg-bg-panel p-4 rounded-standard border border-border-subtle">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-border-subtle">
                  <span className="text-text-secondary">Annual Project Workload Baseline:</span>
                  <span className="font-mono font-semibold text-text-primary">{totalProjectWorkloadHours.toLocaleString()} hrs</span>
                </div>
                <div className="flex items-center justify-between text-xs pb-2 border-b border-border-subtle">
                  <span className="text-text-secondary">Delivery Acceleration:</span>
                  <span className="font-mono font-semibold text-success">~{monthsSavedPerProject} months faster / project</span>
                </div>
                <div className="flex items-center justify-between text-xs pb-2 border-b border-border-subtle">
                  <span className="text-text-secondary">Engineering Capacity Value (@ $75/hr):</span>
                  <span className="font-mono font-semibold text-accent-primary">~${financialValue.toLocaleString()} / year</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-text-secondary">Commissioning Risk Mitigation:</span>
                  <span className="font-mono font-semibold text-success">Deterministic Verification</span>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-standard bg-accent-primary text-white text-xs font-semibold shadow-card hover:bg-accent-hover transition-all"
            >
              <span>Validate Impact in Pilot Program</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Rough Estimate Model & Assumptions Disclosure */}
        <div className="mt-6 p-4 rounded-card bg-bg-elevated border border-border-standard flex items-start gap-3 text-xs text-text-tertiary">
          <Info className="w-4 h-4 text-accent-primary mt-0.5 flex-shrink-0" />
          <div className="space-y-1">
            <span className="font-semibold text-text-secondary block">
              Estimation Model & Key Assumptions Disclosure:
            </span>
            <p className="text-[11px] leading-relaxed text-text-tertiary">
              This estimator is a rough mathematical model based on Level 2 Engineering Value Hypotheses and industry project averages:
              (1) Baseline assumption of 1,920 productive engineering hours/year per engineer;
              (2) ~42% of total project cycle spent on manual I/O mapping, tag register bookkeeping, boilerplate SCL scaffolding, and manual test documentation;
              (3) Estimated ~75% reduction on repetitive tasks through deterministic compiler automation;
              (4) Standard $75/hour blended engineering cost rate.
              Actual time reclaimed depends on project complexity, software reuse, and target hardware architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
