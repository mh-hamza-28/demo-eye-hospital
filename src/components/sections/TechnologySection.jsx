import { motion } from 'framer-motion'
import { ScanLine } from 'lucide-react'
import { technologies } from '../../data/hospitalData'
import { fadeUp, stagger } from '../../lib/animationPresets'
import { FloatingParticles } from '../ui/Ambient'
import { SectionHeader } from '../ui/Motion'
import SmartImage from '../ui/SmartImage'

export default function TechnologySection() {
  return (
    <section id="technology" className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white">
      <FloatingParticles dark />
      <SectionHeader
        eyebrow="Advanced technology"
        title="Diagnostics that feel like tomorrow, interpreted by specialists you can trust."
        copy="Our labs connect retinal, corneal, laser, and neurological data into one clinical story before treatment begins."
        tone="dark"
      />
      <motion.div
        className="relative mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
        variants={stagger}
      >
        {technologies.map((tech) => (
          <motion.article
            key={tech.title}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/20 backdrop-blur"
          >
            <div className="relative h-64 overflow-hidden">
              <SmartImage
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                src={tech.image}
                alt={tech.title}
                fallbackLabel={tech.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/50 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100 backdrop-blur">
                <ScanLine size={15} /> {tech.metric}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold">{tech.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{tech.copy}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
