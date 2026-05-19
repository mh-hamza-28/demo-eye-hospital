import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertCircle, ArrowRight, Menu, PhoneCall, Search, X } from 'lucide-react'
import { navLinks } from '../../data/hospitalData'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [searchMessage, setSearchMessage] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 28)
      const current = navLinks.findLast((link) => {
        const el = document.getElementById(link.id)
        return el && el.getBoundingClientRect().top < 180
      })
      if (current) setActive(current.id)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
    setSearchOpen(false)
  }

  const runSearch = (event) => {
    event.preventDefault()

    const term = query.trim().toLowerCase()
    if (!term) {
      setSearchResults([])
      setSearchMessage('Type something to search across the hospital page.')
      return
    }

    const results = navLinks
      .map((link) => {
        const section = document.getElementById(link.id)
        return {
          ...link,
          text: section?.innerText || '',
        }
      })
      .filter((item) => item.text.toLowerCase().includes(term) || item.label.toLowerCase().includes(term))

    setSearchResults(results)

    if (!results.length) {
      setSearchMessage(`No results found for "${query.trim()}".`)
      return
    }

    setSearchMessage(`${results.length} result${results.length > 1 ? 's' : ''} found.`)
    document.getElementById(results[0].id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed inset-x-0 top-4 z-[70] px-4">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 md:px-5 ${
          scrolled
            ? 'border-white/70 bg-white/80 shadow-2xl shadow-slate-950/10 backdrop-blur-2xl'
            : 'border-white/50 bg-white/45 shadow-xl shadow-cyan-950/5 backdrop-blur-xl'
        }`}
      >
        <button
          type="button"
          onClick={() => scrollTo('home')}
          className="flex items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label="Go to home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-white shadow-lg shadow-cyan-950/20">
            <span className="h-4 w-7 rounded-[50%] border-2 border-cyan-300" />
          </span>
          <span className="text-left">
            <span className="block text-base font-bold leading-4 text-slate-950">Eye Hospital</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-700">
              Vision Institute
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollTo(link.id)}
              className="relative rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              {link.label}
              {active === link.id ? (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-cyan-500"
                />
              ) : null}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setSearchOpen(true)
              setSearchMessage('')
              setSearchResults([])
            }}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/70 text-slate-800 transition hover:border-cyan-300 hover:text-cyan-700"
            aria-label="Search"
          >
            <Search size={18} />
          </button>
          <a
            href="#book-consultation"
            onClick={(event) => {
              event.preventDefault()
              scrollTo('book-consultation')
            }}
            className="hidden items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-950/20 transition hover:bg-cyan-700 md:flex"
          >
            Book Appointment <PhoneCall size={16} />
            
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/70 text-slate-950 lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[90] bg-slate-950/40 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.aside
              className="absolute right-3 top-3 w-[min(23rem,calc(100vw-1.5rem))] rounded-[2rem] bg-white p-5 shadow-2xl"
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 80, opacity: 0 }}
            >
              <div className="mb-6 flex items-center justify-between">
                <strong className="text-lg text-slate-950">Eye Hospital</strong>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full bg-slate-100"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="grid gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className="rounded-2xl px-4 py-3 text-left text-base font-semibold text-slate-700 hover:bg-cyan-50 hover:text-cyan-800"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {searchOpen ? (
          <motion.div
            className="fixed inset-0 z-[95] grid place-items-start bg-slate-950/45 px-4 pt-24 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="mx-auto w-full max-w-2xl overflow-hidden rounded-[2rem] bg-white shadow-2xl"
              initial={{ y: -24, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -24, opacity: 0, scale: 0.98 }}
            >
              <div className="flex items-center justify-between border-b border-slate-100 p-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700">Site search</p>
                  <h2 className="text-xl font-semibold text-slate-950">Search Eye Hospital</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-800"
                  aria-label="Close search"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={runSearch} className="flex gap-3 p-5">
                <label className="sr-only" htmlFor="site-search">Search page content</label>
                <input
                  id="site-search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="min-w-0 flex-1 rounded-full border border-slate-200 px-5 py-3 text-slate-950 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                  placeholder="Search treatments, doctors, glaucoma, LASIK..."
                  autoFocus
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-cyan-700"
                >
                  Search <Search size={17} />
                </button>
              </form>

              <div className="px-5 pb-5">
                {searchMessage ? (
                  <div
                    className={`mb-4 flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold ${
                      searchResults.length
                        ? 'bg-cyan-50 text-cyan-800'
                        : 'bg-rose-50 text-rose-700'
                    }`}
                  >
                    {!searchResults.length ? <AlertCircle size={17} /> : <Search size={17} />}
                    {searchMessage}
                  </div>
                ) : null}

                {searchResults.length ? (
                  <div className="grid gap-2">
                    {searchResults.map((result) => (
                      <button
                        key={result.id}
                        type="button"
                        onClick={() => scrollTo(result.id)}
                        className="flex items-center justify-between rounded-2xl border border-slate-100 px-4 py-3 text-left font-semibold text-slate-800 transition hover:border-cyan-200 hover:bg-cyan-50"
                      >
                        {result.label}
                        <ArrowRight size={17} className="text-cyan-700" />
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
