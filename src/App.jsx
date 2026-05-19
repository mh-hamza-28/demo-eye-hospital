import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import CTASection from './components/sections/CTASection'
import DoctorsSection from './components/sections/DoctorsSection'
import Hero from './components/sections/Hero'
import IntroLoader from './components/sections/IntroLoader'
import StoriesSection from './components/sections/StoriesSection'
import { TrustSection } from './components/sections/StatsTrust'
import TechnologySection from './components/sections/TechnologySection'
import TreatmentsSection from './components/sections/TreatmentsSection'
import { CursorGlow, ScrollProgress } from './components/ui/Ambient'
import InquiryModal from './components/ui/InquiryModal'

function HomePage() {
  const [loading, setLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 2800)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      <IntroLoader isVisible={loading} />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <TreatmentsSection />
        <TechnologySection />
        <DoctorsSection />
        <TrustSection />
        <StoriesSection />
        <CTASection onOpenModal={() => setModalOpen(true)} />
      </main>
      <Footer />
      <InquiryModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}
