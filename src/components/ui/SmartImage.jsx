import { useState } from 'react'
import { ImageOff } from 'lucide-react'

export default function SmartImage({
  src,
  alt,
  className = '',
  fallbackLabel = 'Eye Hospital',
  fallbackSrc = '/demo-images/hospital-demo.svg',
  ...props
}) {
  const [currentSrc, setCurrentSrc] = useState(src || fallbackSrc)
  const [fallbackFailed, setFallbackFailed] = useState(false)

  if (fallbackFailed) {
    return (
      <div
        className={`grid place-items-center bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.35),transparent_32%),linear-gradient(135deg,#dff8fb,#f8fdff_48%,#dbeafe)] text-slate-800 ${className}`}
        role={alt ? 'img' : undefined}
        aria-label={alt || fallbackLabel}
      >
        <div className="mx-6 text-center">
          <span className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-white/75 text-cyan-700 shadow-lg">
            <ImageOff size={22} />
          </span>
          <span className="text-sm font-bold uppercase tracking-[0.22em] text-slate-700">
            {fallbackLabel}
          </span>
        </div>
      </div>
    )
  }

  return (
    <img
      className={className}
      src={currentSrc}
      alt={alt}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc)
          return
        }
        setFallbackFailed(true)
      }}
      {...props}
    />
  )
}
