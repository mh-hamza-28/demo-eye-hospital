import { Globe2, Mail, MapPin, MessageCircle, Phone, Send, Share2 } from 'lucide-react'
import { FloatingParticles } from '../ui/Ambient'

const columns = [
  ['Treatments', 'Cataract', 'LASIK & SMILE', 'Retina Care', 'Glaucoma', 'Pediatric Eyes'],
  ['Specialists', 'Cataract Surgeons', 'Retina Team', 'Cornea Unit', 'Neuro-Ophthalmology', 'Emergency Unit'],
  ['Insurance Partners', 'GlobalCare', 'BlueShield', 'MediAssist', 'VisionPlus', 'Embassy Desk'],
]

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#03101c] px-5 py-20 text-white">
      <FloatingParticles dark />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <div className="mb-8 flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-slate-950">
              <span className="h-4 w-8 rounded-[50%] border-2 border-cyan-500" />
            </span>
            <div>
              <h2 className="text-2xl font-semibold">Eye Hospital</h2>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Premium Vision Institute</p>
            </div>
          </div>
          <p className="max-w-xl text-lg leading-8 text-slate-300">
            A luxury futuristic ophthalmology institute combining clinical credibility, digital diagnostics,
            surgical excellence, and patient-first hospitality.
          </p>
          <div className="mt-8 grid gap-3 text-slate-300">
            <p className="flex items-center gap-3"><Phone size={18} className="text-cyan-300" /> Emergency: +1 800 555 0111</p>
            <p className="flex items-center gap-3"><Mail size={18} className="text-cyan-300" /> care@eyehospital.example</p>
            <p className="flex items-center gap-3"><MapPin size={18} className="text-cyan-300" /> 42 Meridian Health District, International City</p>
          </div>
          <div className="mt-8 flex gap-3">
            {[Globe2, Share2, Send, MessageCircle].map((Icon, index) => (
              <a key={index} href="#home" aria-label="Social media" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div className="grid gap-7 md:grid-cols-3">
          {columns.map(([title, ...items]) => (
            <div key={title}>
              <h3 className="mb-4 font-semibold text-cyan-100">{title}</h3>
              <ul className="grid gap-3 text-sm text-slate-300">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="relative mx-auto mt-12 grid max-w-7xl gap-6 border-t border-white/10 pt-8 md:grid-cols-[1fr_24rem]">
        <div>
          <h3 className="font-semibold text-cyan-100">Hospital timings</h3>
          <p className="mt-2 text-slate-300">Mon-Sat: 8:00 AM - 8:00 PM. Emergency ocular trauma: 24/7.</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Map placeholder</p>
          <div className="mt-4 grid h-40 place-items-center rounded-2xl bg-[linear-gradient(135deg,rgba(34,211,238,0.18),rgba(255,255,255,0.05))] text-slate-300">
            Embedded hospital map
          </div>
        </div>
      </div>
      <p className="relative mx-auto mt-10 max-w-7xl text-sm text-slate-500">
        © 2026 Eye Hospital. Demo frontend for showcase use.
      </p>
    </footer>
  )
}
