import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { heroSlides } from '../../data/hospitalData'
import { FloatingParticles, MagneticButton } from '../ui/Ambient'
import { Reveal } from '../ui/Motion'
import SmartImage from '../ui/SmartImage'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden bg-slate-950">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        loop
        speed={1200}
        autoplay={{ delay: 4200, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="hero-swiper absolute inset-0 h-full w-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={slide.title}>
            <motion.div
              className="absolute inset-0 h-screen w-screen"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 4.4, ease: 'easeOut' }}
            >
              <SmartImage
                className="h-screen w-screen object-cover"
                src={slide.image}
                alt={slide.title}
                fallbackLabel={slide.title}
                fallbackSrc={slide.fallbackImage}
              />
            </motion.div>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.90),rgba(2,6,23,0.58)_42%,rgba(2,6,23,0.22)),linear-gradient(0deg,rgba(2,6,23,0.82),transparent_45%)]" />
            <motion.div
              className="absolute bottom-8 right-5 hidden max-w-sm rounded-[1.5rem] border border-white/15 bg-white/10 p-5 text-white shadow-2xl backdrop-blur-xl lg:block"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">
                0{index + 1} / 07
              </p>
              <h3 className="text-2xl font-semibold">{slide.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-200">{slide.subtitle}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <FloatingParticles dark />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-slate-950/70 to-transparent" />
      <motion.div
        className="absolute left-0 top-[22%] h-px w-full bg-gradient-to-r from-transparent via-cyan-200/80 to-transparent"
        animate={{ x: ['-40%', '40%', '-40%'], opacity: [0.15, 0.65, 0.15] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-24 left-0 h-px w-full bg-gradient-to-r from-transparent via-teal-200/70 to-transparent"
        animate={{ x: ['35%', '-35%', '35%'], opacity: [0.1, 0.55, 0.1] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-32 md:pt-40">
        <Reveal className="max-w-4xl text-white">

          <h1 className="text-balance text-5xl font-semibold leading-[0.99] md:text-7xl lg:text-8xl">
            Precision Vision Care For The Future
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
            Eye Hospital combines fellowship-trained eye specialists, advanced diagnostics,
            robotic cataract systems, and luxury patient coordination to protect sight with
            calm, precise, deeply personal care.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <MagneticButton
              href="#treatments"
              className="bg-cyan-300 text-slate-950 hover:bg-white"
            >
              Explore Treatments <ArrowRight size={17} />
            </MagneticButton>
            <MagneticButton
              href="#technology"
              className="border border-white/20 bg-white/10 text-white backdrop-blur hover:border-cyan-200 hover:bg-white/15"
            >
              <Play size={17} /> View Technology
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
