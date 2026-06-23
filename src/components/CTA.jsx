import { Mail, MapPin } from 'lucide-react'
import Reveal from './Reveal'

const EMAIL = 'pabloignaciohurtado@gmail.com'

export default function CTA() {
  return (
    <section id="contacto" className="relative bg-ink py-24 sm:py-32 overflow-hidden">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-teal/15 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-light/30 bg-teal-light/10 px-4 py-1.5 text-sm font-medium text-teal-light">
            <MapPin size={14} />
            Santiago, Chile
          </span>

          <h2 className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            ¿Conversamos sobre tu próximo desafío?
          </h2>
          <p className="mt-5 text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            Siempre abierto a conversar sobre inteligencia artificial, experiencia de
            cliente y transformación de operaciones.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2.5 rounded-lg bg-teal px-8 py-4 font-semibold text-white text-lg shadow-lg shadow-teal/30 transition-all hover:bg-teal-light hover:shadow-teal-light/40 hover:-translate-y-0.5"
            >
              <Mail size={20} />
              Contacta conmigo
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="text-gray-400 hover:text-teal-light transition-colors"
            >
              {EMAIL}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
