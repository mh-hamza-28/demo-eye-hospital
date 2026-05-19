import { motion } from 'framer-motion'
import {
  Activity,
  Baby,
  Brain,
  Eye,
  Glasses,
  HeartPulse,
  Microscope,
  Orbit,
  ScanEye,
  ShieldAlert,
  Sparkles,
  Stethoscope,
  Sun,
  Syringe,
  TabletSmartphone,
  Waves,
} from 'lucide-react'
import { treatments } from '../../data/hospitalData'
import { fadeUp, stagger } from '../../lib/animationPresets'
import { SectionHeader } from '../ui/Motion'

const treatmentIcons = [
  Eye,
  Glasses,
  ScanEye,
  Baby,
  Activity,
  Orbit,
  Waves,
  ShieldAlert,
  Brain,
  HeartPulse,
  Syringe,
  Stethoscope,
  Sparkles,
  Microscope,
  TabletSmartphone,
  Sun,
]

export default function TreatmentsSection() {
  return (
    <section id="treatments" className="relative overflow-hidden bg-[#f7fbfc] px-5 py-24">
      <div className="absolute -left-28 top-24 h-80 w-80 rounded-full bg-cyan-100/80 blur-3xl" />
      <div className="absolute -right-24 bottom-24 h-80 w-80 rounded-full bg-teal-100/70 blur-3xl" />

      <SectionHeader
        eyebrow="Treatments"
        title="Complete eye disease care, organized around real patient needs."
        copy="From routine screening to complex surgery, Eye Hospital covers every major ophthalmology pathway with specialist-led protocols."
      />

      <motion.div
        className="relative mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.08 }}
        variants={stagger}
      >
        {treatments.map((treatment, index) => {
          const Icon = treatmentIcons[index % treatmentIcons.length]

          return (
            <motion.article
              key={treatment.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group relative min-h-64 overflow-hidden rounded-[1.5rem] border border-cyan-100 bg-white p-5 shadow-xl shadow-cyan-950/[0.05]"
            >
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-100 opacity-0 blur-2xl transition group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-cyan-200 shadow-lg shadow-slate-950/15">
                    <Icon size={23} />
                  </span>
                  <span className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-cyan-800">
                    {treatment.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold leading-tight text-slate-950">
                  {treatment.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{treatment.copy}</p>
              </div>
            </motion.article>
          )
        })}
      </motion.div>
    </section>
  )
}
