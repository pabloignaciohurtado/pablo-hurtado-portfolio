import { ArrowDown, Sparkles } from 'lucide-react'

const HERO_STATS = [
  { value: 'NPS 92+', label: 'Chatbot IA Jumbo', href: '#ia-chatbot-jumbo' },
  { value: '95%', label: 'Disponibilidad de canal', href: '#ia-chatbot-jumbo' },
  { value: '-25%', label: 'Tiempo de gestión (Speech Analytics)', href: '#ia-speech-analytics' },
  { value: '+20%', label: 'Registros útiles (CRM)', href: '#proyectos' },
]

export default function Hero() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center bg-ink text-white overflow-hidden"
    >
      {/* decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-teal/20 blur-3xl animate-float" />
        <div className="absolute bottom-0 -left-24 w-96 h-96 rounded-full bg-teal-light/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-light/30 bg-teal-light/10 px-4 py-1.5 text-sm font-medium text-teal-light">
            <Sparkles size={14} />
            Head of Quality &amp; AI · WOM Chile
          </span>

          <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight max-w-4xl">
            Transformo operaciones desde la{' '}
            <span className="text-teal-light">inteligencia del cliente</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-gray-300 leading-relaxed">
            Soy Pablo Hurtado. Llevo más de 10 años liderando equipos de Experiencia de
            Cliente y Calidad, y hoy dirijo la adopción de inteligencia artificial en WOM
            Chile. Mi obsesión es la misma desde el primer día: convertir lo que el cliente
            vive y dice en decisiones que cambian cómo opera el negocio.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo('#contacto')}
              className="rounded-lg bg-teal px-6 py-3 font-semibold text-white shadow-lg shadow-teal/30 transition-all hover:bg-teal-light hover:shadow-teal-light/40 hover:-translate-y-0.5"
            >
              Contacta conmigo
            </button>
            <button
              onClick={() => scrollTo('#proyectos')}
              className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-all hover:bg-white/10 hover:-translate-y-0.5"
            >
              Ver proyectos
            </button>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
            {HERO_STATS.map((stat) => (
              <button
                key={stat.label}
                onClick={() => scrollTo(stat.href)}
                className="text-left rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-teal-light/40 hover:bg-white/10 hover:-translate-y-0.5"
              >
                <div className="text-xl sm:text-2xl font-extrabold text-teal-light">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-gray-400 font-medium leading-snug">
                  {stat.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo('#sobre-mi')}
        aria-label="Bajar a la siguiente sección"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-teal-light transition-colors animate-bounce"
      >
        <ArrowDown size={28} />
      </button>
    </section>
  )
}
