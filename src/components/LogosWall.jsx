import { siGooglegemini, siZendesk, siWhatsapp } from 'simple-icons'
import { Headset } from 'lucide-react'
import Reveal from './Reveal'

const COMPANIES = [
  { name: 'WOM', sector: 'Telecomunicaciones' },
  { name: 'Cencosud', sector: 'Retail · Supermercados' },
  { name: 'Oxford', sector: 'Retail deportivo' },
  { name: 'Belcorp', sector: 'Belleza & consumo' },
]

function BrandIcon({ icon, className }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d={icon.path} />
    </svg>
  )
}

function MicrosoftMark({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <rect x="1" y="1" width="10" height="10" />
      <rect x="13" y="1" width="10" height="10" />
      <rect x="1" y="13" width="10" height="10" />
      <rect x="13" y="13" width="10" height="10" />
    </svg>
  )
}

const TECH = [
  { name: 'Genesys', sub: 'Contact center · telefonía', render: (c) => <Headset className={c} strokeWidth={1.75} /> },
  { name: 'Google Gemini', sub: 'Speech Analytics', render: (c) => <BrandIcon icon={siGooglegemini} className={c} /> },
  { name: 'Dynamics 365', sub: 'CRM Microsoft', render: (c) => <MicrosoftMark className={c} /> },
  { name: 'Zendesk', sub: 'Help desk omnicanal', render: (c) => <BrandIcon icon={siZendesk} className={c} /> },
  { name: 'WhatsApp Business', sub: 'Canal del chatbot', render: (c) => <BrandIcon icon={siWhatsapp} className={c} /> },
]

export default function LogosWall() {
  return (
    <section id="trayectoria" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal">
            Trayectoria & stack
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink tracking-tight">
            Empresas y tecnologías con las que he trabajado
          </h2>
        </Reveal>

        {/* Companies */}
        <Reveal delay={80}>
          <p className="mt-16 text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-light/60">
            Empresas
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {COMPANIES.map((c) => (
              <div
                key={c.name}
                className="group flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 py-8 transition-all duration-300 hover:border-teal/30 hover:shadow-lg hover:shadow-teal/5 hover:-translate-y-1"
              >
                <span className="text-2xl font-bold tracking-tight text-gray-400 transition-colors group-hover:text-ink">
                  {c.name}
                </span>
                <span className="mt-2 text-xs font-medium text-ink-light/70">{c.sector}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Technologies */}
        <Reveal delay={160}>
          <p className="mt-14 text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-light/60">
            Tecnologías implementadas
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {TECH.map((t) => (
              <div
                key={t.name}
                className="group flex w-[calc(50%-0.5rem)] sm:w-44 flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 py-8 transition-all duration-300 hover:border-teal/30 hover:shadow-lg hover:shadow-teal/5 hover:-translate-y-1"
              >
                {t.render('h-9 w-9 text-gray-400 transition-colors group-hover:text-teal')}
                <span className="mt-4 text-sm font-semibold text-ink">{t.name}</span>
                <span className="mt-1 text-xs font-medium text-ink-light/70">{t.sub}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-ink-light/70">
            + ChatGPT-4 Copilot · Machine Learning · Power Automate · Speech-to-Text
          </p>
        </Reveal>
      </div>
    </section>
  )
}
