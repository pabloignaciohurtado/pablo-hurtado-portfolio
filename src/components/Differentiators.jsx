import { Rocket, TrendingUp, Route } from 'lucide-react'
import Reveal from './Reveal'

const DIFFERENTIATORS = [
  {
    icon: Rocket,
    title: 'IA en producción, no en PowerPoint',
    text: 'Mientras gran parte del mercado todavía pilotea, yo ya tengo IA generativa operando a escala real: speech analytics sobre +3M llamadas, chatbots que resuelven solos y modelos de detección de fraude en vivo.',
  },
  {
    icon: TrendingUp,
    title: 'IA traducida a números de negocio',
    text: 'No hablo de "innovación", hablo de resultados: NPS 92+, −25% en tiempo de gestión, +17 puntos de trazabilidad y −30% de tipologías. La unión de criterio técnico y financiero que un board necesita.',
  },
  {
    icon: Route,
    title: 'De la primera línea a la estrategia',
    text: 'Empecé en ventas, post venta y reclamos, y llegué a dirigir calidad y CX. Esa credibilidad operacional me permite rediseñar la operación entendiendo de verdad lo que vive el cliente.',
  },
]

export default function Differentiators() {
  return (
    <section id="diferenciadores" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal">
            Diferenciadores
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink tracking-tight">
            Por qué mi perfil <span className="text-gradient">marca la diferencia</span>
          </h2>
          <p className="mt-4 text-lg text-ink-light max-w-2xl mx-auto">
            Tres cosas que son difíciles de construir y que ya tengo.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {DIFFERENTIATORS.map((d, i) => {
            const Icon = d.icon
            return (
              <Reveal key={d.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-teal/30 hover:shadow-xl hover:shadow-teal/5 hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-ink">{d.title}</h3>
                  <p className="mt-3 text-ink-light leading-relaxed">{d.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
