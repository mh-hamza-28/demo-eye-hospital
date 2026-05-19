import { Camera } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import { facilities } from '../../data/hospitalData'
import { Reveal, SectionHeader } from '../ui/Motion'
import SmartImage from '../ui/SmartImage'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="overflow-hidden bg-white px-5 py-24">
      <SectionHeader
        eyebrow="Immersive facility tour"
        title="A hospital designed to make precision feel peaceful."
      />
      <div className="mx-auto max-w-7xl">
        <Swiper
          modules={[Autoplay, EffectCoverflow, Pagination]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          autoplay={{ delay: 2600, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          coverflowEffect={{ rotate: 12, stretch: 0, depth: 120, modifier: 1.2, slideShadows: false }}
          breakpoints={{ 0: { slidesPerView: 1.08 }, 768: { slidesPerView: 2.2 }, 1100: { slidesPerView: 3 } }}
          className="facility-swiper pb-12"
        >
          {facilities.map((facility) => (
            <SwiperSlide key={facility.title}>
              <div className="group relative h-[28rem] overflow-hidden rounded-[2rem]">
                <SmartImage
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  src={facility.image}
                  alt={facility.title}
                  fallbackLabel={facility.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/20 bg-white/15 p-4 text-white backdrop-blur">
                  <strong>{facility.title}</strong>
                  <Camera size={18} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {facilities.slice(0, 6).map((facility, index) => (
            <Reveal key={facility.title} delay={index * 0.03}>
              <div className="group relative h-64 overflow-hidden rounded-[1.5rem]">
                <SmartImage
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  src={facility.image}
                  alt=""
                  fallbackLabel={facility.title}
                />
                <div className="absolute inset-0 bg-slate-950/20 transition group-hover:bg-slate-950/45" />
                <p className="absolute bottom-4 left-4 font-semibold text-white">{facility.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
