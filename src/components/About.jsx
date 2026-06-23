import Reveal from './Reveal'

const STATS = [
  { value: '10+', label: 'Años de experiencia' },
  { value: '4', label: 'Industrias transformadas' },
  { value: '3', label: 'Disciplinas: IA, CX & Operaciones' },
  { value: '360°', label: 'Visión end-to-end del cliente' },
]

export default function About() {
  return (
    <section id="sobre-mi" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <Reveal className="lg:col-span-3">
            <span className="text-sm font-semibold uppercase tracking-wider text-teal">
              Sobre mí
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink tracking-tight">
              Inteligencia de cliente al servicio de la operación
            </h2>
            <div className="mt-6 space-y-5 text-lg text-ink-light leading-relaxed">
              <p>
                Soy <strong className="text-ink">Pablo Hurtado</strong>, profesional con más
                de una década liderando la intersección entre{' '}
                <strong className="text-ink">Inteligencia Artificial</strong>,{' '}
                <strong className="text-ink">Customer Experience</strong> y{' '}
                <strong className="text-ink">transformación de procesos</strong>. He construido
                mi carrera en industrias tan distintas como telecomunicaciones, retail,
                servicios y belleza, siempre con un mismo foco: entender al cliente para
                rediseñar la operación a su alrededor.
              </p>
              <p>
                Hoy, como Jefe de Calidad &amp; AI en WOM Chile, lidero la integración de
                modelos de inteligencia artificial en la gestión de calidad y experiencia,
                combinando metodologías Lean con analítica avanzada para escalar decisiones
                que antes dependían solo de la intuición.
              </p>
              <p>
                Creo en equipos pequeños con criterio, en datos que se convierten en
                acción, y en que la mejor tecnología es la que vuelve invisible la
                fricción del cliente.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-5">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all hover:border-teal/30 hover:shadow-lg hover:shadow-teal/5 hover:-translate-y-1"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold text-teal">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-medium text-ink-light">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
