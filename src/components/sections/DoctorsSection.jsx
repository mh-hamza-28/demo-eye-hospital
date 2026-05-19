import { motion } from 'framer-motion'
import { doctors } from '../../data/hospitalData'
import { Reveal, SectionHeader } from '../ui/Motion'
import SmartImage from '../ui/SmartImage'

export default function DoctorsSection() {
  return (
    <section id="specialists" className="bg-[#eef8fa] px-5 py-24">
      <SectionHeader eyebrow="Specialists" title="Led by subspecialists, not general promises." />
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
        {doctors.map((doctor, index) => (
          <Reveal key={doctor.name} delay={index * 0.04}>
            <motion.article
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-[1.75rem] border border-white bg-white shadow-2xl shadow-slate-950/8"
            >
              <div className="h-80 overflow-hidden">
                <SmartImage
                  className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-110"
                  src={doctor.image}
                  alt={doctor.name}
                  fallbackLabel={doctor.name}
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">
                  {doctor.credentials}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-950">{doctor.name}</h3>
                <p className="mt-1 font-medium text-slate-600">{doctor.role}</p>
                <p className="mt-4 text-sm leading-6 text-slate-600">{doctor.specialty}</p>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
