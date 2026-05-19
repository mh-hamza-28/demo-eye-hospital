import { ArrowUpRight } from 'lucide-react'
import { images } from '../../data/hospitalData'
import { MagneticButton } from '../ui/Ambient'
import { Reveal } from '../ui/Motion'
import SmartImage from '../ui/SmartImage'

export default function CTASection({ onOpenModal }) {
  return (
    <section id="book-consultation" className="relative overflow-hidden px-5 py-24">
      <div className="absolute inset-0">
        <SmartImage
          className="h-full w-full object-cover"
          src={images.cta}
          alt=""
          fallbackLabel="Preventive vision care"
        />
        <div className="absolute inset-0 bg-slate-950/65" />
      </div>
      <Reveal className="relative mx-auto max-w-5xl text-center text-white">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-cyan-200">
          Preventive vision care
        </p>
        <h2 className="text-5xl font-semibold leading-none md:text-7xl">
          Protect Your Vision Before Problems Begin
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-200">
          Early diagnostics can reveal silent retinal, glaucoma, corneal, and refractive risks long before daily life is affected.
        </p>
        <MagneticButton onClick={onOpenModal} className="mt-9 bg-cyan-300 text-slate-950 hover:bg-white">
          Book Consultation <ArrowUpRight size={18} />
        </MagneticButton>
      </Reveal>
    </section>
  )
}
