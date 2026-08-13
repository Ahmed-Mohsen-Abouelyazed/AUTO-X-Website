import { motion, useReducedMotion, MotionConfig } from 'framer-motion'

const STAGES = ['Requirements', 'Design', 'Build', 'Verify', 'Simulate', 'Release']

const W = 520
const H = 300
const Y = 150

const xAt = (i: number) => 50 + i * ((W - 100) / (STAGES.length - 1))

const EASE = [0.22, 1, 0.36, 1] as const

export function HeroPipeline() {
  const reduce = useReducedMotion() ?? false
  const count = STAGES.length

  return (
    <MotionConfig reducedMotion="user">
    <div
      className="overflow-hidden rounded-panel border border-border-standard bg-bg-panel shadow-card"
      role="img"
      aria-label="AUTO-X deterministic pipeline: six stages from requirements to release, where AI proposes, engines validate, and engineers approve."
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-border-subtle bg-bg-hover px-4 py-3">
        <span className="h-3 w-3 rounded-circle bg-error/70" aria-hidden="true" />
        <span className="h-3 w-3 rounded-circle bg-warning/70" aria-hidden="true" />
        <span className="h-3 w-3 rounded-circle bg-success/70" aria-hidden="true" />
        <span className="ml-3 font-mono text-mono-label text-text-tertiary">AUTO-X · pipeline</span>
      </div>

      <div className="p-5">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" aria-hidden="true">
          {/* Conduits */}
          {Array.from({ length: count - 1 }).map((_, i) => (
            <motion.line
              key={`c-${i}`}
              x1={xAt(i) + 24}
              y1={Y}
              x2={xAt(i + 1) - 24}
              y2={Y}
              stroke="#2F80FF"
              strokeWidth={2}
              strokeLinecap="round"
              initial={reduce ? false : { pathLength: 0, opacity: 0 }}
              whileInView={reduce ? undefined : { pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.45, ease: EASE }}
            />
          ))}

          {STAGES.map((stage, i) => {
            const cx = xAt(i)
            const isLast = i === count - 1
            return (
              <g key={stage}>
                <motion.rect
                  x={cx - 24}
                  y={Y - 24}
                  width={48}
                  height={48}
                  rx={12}
                  fill="#f8fafc"
                  stroke={isLast ? '#2F80FF' : '#e2e8f0'}
                  strokeWidth={1.5}
                  initial={reduce ? false : { opacity: 0, y: Y - 14 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: Y - 24 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.45, ease: EASE }}
                />
                {/* One-time verify glow */}
                <motion.circle
                  cx={cx}
                  cy={Y}
                  r={26}
                  fill="none"
                  stroke="#2F80FF"
                  strokeWidth={1.5}
                  style={{ opacity: reduce ? 0 : undefined, transformOrigin: `${cx}px ${Y}px` }}
                  initial={reduce ? false : { opacity: 0, scale: 0.8 }}
                  whileInView={
                    reduce
                      ? undefined
                      : { opacity: [0, 0.3, 0], scale: [0.8, 1.15, 1.45] }
                  }
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.35 + i * 0.45, times: [0, 0.5, 1], ease: 'easeOut' }}
                />
                <text
                  x={cx}
                  y={Y + 4}
                  textAnchor="middle"
                  fontSize={11}
                  style={{ fontFamily: 'var(--font-mono)', fill: isLast ? '#2F80FF' : '#94a3b8' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </text>
                {/* Status dot: gray -> running(blue) -> verified(green) */}
                <motion.circle
                  cx={cx + 15}
                  cy={Y - 15}
                  r={4}
                  fill={reduce ? '#10b981' : undefined}
                  initial={reduce ? false : { fill: '#94a3b8' }}
                  whileInView={
                    reduce ? undefined : { fill: ['#94a3b8', '#2F80FF', '#10b981'] }
                  }
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.45, times: [0, 0.4, 1], ease: 'easeInOut' }}
                />
                <text
                  x={cx}
                  y={Y + 44}
                  textAnchor="middle"
                  fontSize={10}
                  style={{ fontFamily: 'var(--font-mono)', fill: '#94a3b8' }}
                >
                  {stage}
                </text>
              </g>
            )
          })}
        </svg>
      </div>

      {/* Status footer */}
      <div className="flex items-center justify-between border-t border-border-subtle bg-bg-hover px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-primary" />
          </span>
          <span className="font-mono text-mono-label text-text-tertiary">
            AI proposes · Engines validate · Engineers approve
          </span>
        </div>
        <span className="font-mono text-mono-label text-success">
          Release ready
        </span>
      </div>
    </div>
    </MotionConfig>
  )
}
