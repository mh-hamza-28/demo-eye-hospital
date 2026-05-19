# Eye Hospital

A cinematic React + Vite frontend for a premium ophthalmology hospital.

## Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- Swiper
- React Router DOM
- Lucide React

## Folder Structure

```text
src/
  components/
    layout/      Navigation and footer
    sections/    Homepage sections, one section per file
    ui/          Reusable visual primitives and modal components
  data/          Hospital content and image references
  lib/           Shared animation presets and small utilities
```

## Scripts

```bash
npm run dev
npm run lint
npm run build
```

Images are loaded through `SmartImage`, which keeps the layout polished even if a remote demo photo fails to load.
