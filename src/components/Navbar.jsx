import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#impacto', label: 'Impacto' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#educacion', label: 'Educación' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive('#' + visible[0].target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleClick = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/95 backdrop-blur-sm shadow-lg shadow-black/10' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            handleClick('#top')
          }}
          className="text-white font-bold text-lg tracking-tight"
        >
          Pablo<span className="text-teal-light">.</span>Hurtado
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? 'true' : undefined}
                onClick={(e) => {
                  e.preventDefault()
                  handleClick(link.href)
                }}
                className={`text-sm font-medium transition-colors ${
                  active === link.href
                    ? 'text-teal-light'
                    : 'text-gray-300 hover:text-teal-light'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-ink/98 backdrop-blur-sm ${
          open ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-6 pb-6 gap-4">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? 'true' : undefined}
                onClick={(e) => {
                  e.preventDefault()
                  handleClick(link.href)
                }}
                className={`block font-medium ${
                  active === link.href ? 'text-teal-light' : 'text-gray-200 hover:text-teal-light'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
