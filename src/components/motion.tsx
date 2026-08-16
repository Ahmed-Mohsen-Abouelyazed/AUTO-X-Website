import { motion, type HTMLMotionProps } from 'framer-motion'
import * as React from 'react'

export interface FadeUpProps extends Omit<HTMLMotionProps<'div'>, 'initial' | 'animate' | 'transition' | 'children'> {
  children: React.ReactNode
  delay?: number
  duration?: number
}

export function FadeUp({ children, delay = 0, duration = 0.36, ...props }: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export interface ScalePopProps extends Omit<HTMLMotionProps<'div'>, 'initial' | 'animate' | 'transition' | 'children'> {
  children: React.ReactNode
  delay?: number
  duration?: number
}

export function ScalePop({ children, delay = 0, duration = 0.22, ...props }: ScalePopProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration, ease: [0.34, 1.56, 0.64, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export interface StaggerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  baseDelay?: number
  staggerDelay?: number
  duration?: number
}

export function Stagger({ children, baseDelay = 0, staggerDelay = 60, duration = 0.36, className, ...props }: StaggerProps) {
  const childrenArray = React.Children.toArray(children)

  return (
    <div className={className} {...props}>
      {childrenArray.map((child, index) => {
        if (!React.isValidElement(child)) return child
        return React.cloneElement<React.HTMLAttributes<HTMLDivElement>>(child as React.ReactElement<React.HTMLAttributes<HTMLDivElement>>, {
          style: {
            ...(child.props.style || {}),
            animation: `auplc-fade-up ${duration}s cubic-bezier(0.22, 1, 0.36, 1) both`,
            animationDelay: `${baseDelay + index * staggerDelay}ms`,
          } as React.CSSProperties,
        })
      })}
    </div>
  )
}