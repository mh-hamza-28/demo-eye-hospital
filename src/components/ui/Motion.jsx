import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/animationPresets'

export function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
      variants={{
        hidden: fadeUp.hidden,
        show: {
          ...fadeUp.show,
          transition: { ...fadeUp.show.transition, delay },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeader({ eyebrow, title, copy, align = 'center', tone = 'light' }) {
  const isDark = tone === 'dark'

  return (
    <Reveal
      className={`mx-auto mb-12 max-w-4xl ${
        align === 'left' ? 'text-left' : 'text-center'
      }`}
    >
      <p className={`mb-4 text-sm font-semibold uppercase tracking-[0.28em] ${isDark ? 'text-cyan-200' : 'text-cyan-600'}`}>
        {eyebrow}
      </p>
      <h2 className={`text-balance text-4xl font-semibold leading-[1.03] md:text-6xl ${isDark ? 'text-white' : 'text-slate-950'}`}>
        {title}
      </h2>
      {copy ? (
        <p className={`mx-auto mt-5 max-w-2xl text-lg leading-8 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          {copy}
        </p>
      ) : null}
    </Reveal>
  )
}
