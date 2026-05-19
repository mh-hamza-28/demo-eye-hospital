import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <motion.div
      className="fixed left-0 top-0 z-[80] h-1 origin-left bg-cyan-400"
      style={{ scaleX, width: '100%' }}
    />
  )
}

export function CursorGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] hidden opacity-70 mix-blend-screen lg:block"
    >
      <motion.div
        className="h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl"
        animate={{ x: ['15vw', '70vw', '42vw', '15vw'], y: ['12vh', '32vh', '72vh', '12vh'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

export function FloatingParticles({ dark = false }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 26 }).map((_, index) => (
        <motion.span
          key={index}
          className={`absolute h-1 w-1 rounded-full ${
            dark ? 'bg-cyan-200/50' : 'bg-cyan-500/25'
          }`}
          style={{
            left: `${(index * 37) % 100}%`,
            top: `${(index * 23) % 100}%`,
          }}
          animate={{ y: [0, -26, 0], opacity: [0.2, 0.8, 0.2], scale: [1, 1.8, 1] }}
          transition={{ duration: 4 + (index % 6), repeat: Infinity, delay: index * 0.12 }}
        />
      ))}
    </div>
  )
}

export function MagneticButton({ children, className = '', onClick, href }) {
  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      type={href ? undefined : 'button'}
      onClick={onClick}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-xl shadow-cyan-950/10 transition focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 ${className}`}
    >
      {children}
    </Component>
  )
}
