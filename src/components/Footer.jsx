import { Mail } from 'lucide-react'
import { LinkedInIcon } from './icons'

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10 py-8">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Pablo Hurtado. Todos los derechos reservados.</p>
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/pablohurtadonunez/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-1.5 text-gray-400 hover:text-teal-light transition-colors"
          >
            <LinkedInIcon size={16} />
            LinkedIn
          </a>
          <a
            href="mailto:pabloignaciohurtado@gmail.com"
            aria-label="Email"
            className="flex items-center gap-1.5 text-gray-400 hover:text-teal-light transition-colors"
          >
            <Mail size={16} />
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
