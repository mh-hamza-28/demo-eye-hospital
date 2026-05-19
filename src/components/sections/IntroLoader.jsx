import { AnimatePresence, motion } from 'framer-motion'
import { FloatingParticles } from '../ui/Ambient'

export default function IntroLoader({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#020813]"
          exit={{ opacity: 0, filter: 'blur(18px)' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <FloatingParticles dark />
          <motion.div
            className="absolute h-[34rem] w-[34rem] rounded-full bg-cyan-500/10 blur-3xl"
            animate={{ scale: [0.75, 1.05, 0.9], opacity: [0.25, 0.7, 0.35] }}
            transition={{ duration: 2.4, repeat: Infinity }}
          />
          <div className="relative h-72 w-72">
            <motion.div
              className="absolute inset-7 rounded-full border border-cyan-200/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-0 rounded-[52%] bg-[radial-gradient(circle_at_50%_50%,#03111f_0_16%,#0ea5e9_17%_26%,#0f766e_27%_38%,#164e63_39%_50%,#e8fbff_51%_56%,transparent_57%)] shadow-[0_0_90px_rgba(34,211,238,0.45)]"
              initial={{ scaleY: 0.05, opacity: 0, filter: 'blur(16px)' }}
              animate={{ scaleY: 1, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.div
              className="absolute left-8 top-1/2 h-[2px] w-56 bg-gradient-to-r from-transparent via-cyan-100 to-transparent shadow-[0_0_28px_rgba(125,249,255,0.9)]"
              animate={{ y: [-58, 58, -58], opacity: [0.1, 1, 0.1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute inset-16 rounded-full border border-cyan-100/50"
              animate={{ scale: [0.85, 1.15, 0.85], opacity: [0.2, 0.9, 0.2] }}
              transition={{ duration: 1.7, repeat: Infinity }}
            />
            {['OCT', 'RETINA', 'SCAN MAP', '20/20'].map((label, index) => (
              <motion.div
                key={label}
                className="absolute rounded-xl border border-cyan-100/20 bg-white/10 px-3 py-2 text-xs font-semibold tracking-[0.22em] text-cyan-50 backdrop-blur-md"
                style={{
                  left: index % 2 ? '62%' : '-8%',
                  top: `${16 + index * 18}%`,
                }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: [0.3, 1, 0.3], y: 0 }}
                transition={{ delay: 0.35 + index * 0.14, duration: 1.8, repeat: Infinity }}
              >
                {label}
              </motion.div>
            ))}
          </div>
          <motion.p
            className="absolute bottom-16 text-sm font-semibold uppercase tracking-[0.36em] text-cyan-100/80"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            Eye Hospital Vision Systems
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
