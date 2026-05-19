import { AnimatePresence, motion } from 'framer-motion'
import { CalendarCheck, Send, X } from 'lucide-react'

export default function InquiryModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[95] grid place-items-center bg-slate-950/60 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="consultation-title"
            className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] bg-white shadow-2xl"
            initial={{ y: 40, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 40, scale: 0.96, opacity: 0 }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/80 text-slate-950 shadow-lg"
              aria-label="Close inquiry modal"
            >
              <X size={18} />
            </button>
            <div className="bg-slate-950 p-8 text-white">
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300 text-slate-950">
                <CalendarCheck size={24} />
              </span>
              <h2 id="consultation-title" className="text-3xl font-semibold">Consultation inquiry</h2>
              <p className="mt-3 leading-7 text-slate-300">
                This is a frontend-only placeholder. The booking backend can be connected later.
              </p>
            </div>
            <form className="grid gap-4 p-6 md:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Full name
                <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-400" placeholder="Patient name" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Phone
                <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-400" placeholder="+1 555 0101" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700 md:col-span-2">
                What can we help with?
                <textarea className="min-h-28 rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-400" placeholder="Cataract, LASIK, retina emergency, pediatric eye care..." />
              </label>
              <button
                type="button"
                className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700"
              >
                Send placeholder inquiry <Send size={17} />
              </button>
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
