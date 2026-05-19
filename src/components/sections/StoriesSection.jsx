import { PlayCircle } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { stories } from '../../data/hospitalData'
import { SectionHeader } from '../ui/Motion'
import SmartImage from '../ui/SmartImage'

import 'swiper/css'
import 'swiper/css/pagination'

export default function StoriesSection() {
  return (
    <section id="stories" className="overflow-hidden bg-slate-950 px-5 py-24 text-white">
      <SectionHeader
        eyebrow="Patient success stories"
        title="The outcome is clinical. The memory is human."
        tone="dark"
      />
      <div className="mx-auto max-w-6xl">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          autoplay={{ delay: 4200 }}
          pagination={{ clickable: true }}
          className="story-swiper pb-12"
        >
          {stories.map((story) => (
            <SwiperSlide key={story.name}>
              <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] md:grid-cols-[0.75fr_1.25fr]">
                <div className="relative min-h-96">
                  <SmartImage
                    className="absolute inset-0 h-full w-full object-cover"
                    src={story.image}
                    alt={story.name}
                    fallbackLabel={story.name}
                  />
                  <div className="absolute left-5 top-5 rounded-full bg-slate-950/70 px-4 py-2 text-sm font-bold backdrop-blur">
                    Before / After Story
                  </div>
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <PlayCircle className="mb-8 text-cyan-300" size={42} />
                  <p className="text-3xl font-semibold leading-tight md:text-5xl">"{story.quote}"</p>
                  <div className="mt-8 border-l-2 border-cyan-300 pl-5">
                    <p className="font-semibold text-white">{story.name}</p>
                    <p className="text-slate-300">{story.title}</p>
                    <p className="mt-3 text-cyan-200">{story.metric}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
