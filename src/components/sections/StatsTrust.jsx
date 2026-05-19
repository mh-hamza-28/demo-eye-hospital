import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Microscope, ShieldCheck, Sparkles, Stethoscope, Workflow } from 'lucide-react'
import { stats, trustPoints } from '../../data/hospitalData'
import { fadeUp, stagger } from '../../lib/animationPresets'
import { Reveal, SectionHeader } from '../ui/Motion'

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        let frame
        const start = performance.now()
        const animate = (now) => {
          const progress = Math.min((now - start) / 1400, 1)
          const eased = 1 - (1 - progress) ** 3
          setCount(value * eased)
          if (progress < 1) frame = requestAnimationFrame(animate)
        }
        frame = requestAnimationFrame(animate)
        observer.disconnect()
        return () => cancelAnimationFrame(frame)
      },
      { threshold: 0.35 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  const formatted = value % 1 === 0 ? Math.round(count).toLocaleString() : count.toFixed(1)

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  )
}

const icons = [Stethoscope, Microscope, ShieldCheck, Workflow, Sparkles]

export function StatsSection() {
  return (
    <section className="relative bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.04}>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
              <p className="text-4xl font-semibold tracking-tight text-cyan-200 md:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm font-medium leading-6 text-slate-300">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function TrustSection() {
  return (
    <section id="trust" className="relative overflow-hidden bg-white px-5 py-24">
      <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-100/70 blur-3xl" />
      <SectionHeader
        eyebrow="Why patients trust us"
        title="Medical precision with the calm of luxury hospitality."
        copy="Every touchpoint is designed to reduce anxiety, improve diagnostic certainty, and make advanced eye care feel understandable."
      />
      <motion.div
        className="relative mx-auto grid max-w-7xl gap-5 md:grid-cols-5"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        {trustPoints.map((point, index) => {
          const Icon = icons[index]
          return (
            <motion.article
              key={point}
              variants={fadeUp}
              whileHover={{ y: -10, rotateX: 4 }}
              className="group relative min-h-56 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-950/[0.04]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-transparent to-teal-50 opacity-0 transition group-hover:opacity-100" />
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="relative">
                <span className="mb-8 grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-cyan-200 shadow-lg shadow-slate-950/20">
                  <Icon size={23} />
                </span>
                <h3 className="text-xl font-semibold leading-tight text-slate-950">{point}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Protocol-led clinical decisions, transparent reports, and senior review at every meaningful step.
                </p>
              </div>
            </motion.article>
          )
        })}
      </motion.div>
    </section>
  )
}
