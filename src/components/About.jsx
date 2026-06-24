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
                Soy <strong className="text-ink">Pablo Hurtado</strong>, con más de 10 años de
                experiencia en liderazgo de equipos y estrategias de experiencia del cliente.
                Actualmente lidero equipos como{' '}
                <strong className="text-ink">Jefe de Calidad y Mejora Continua en WOM Chile</strong>,
                combinando inteligencia artificial, automatización y el rediseño de procesos para
                optimizar el servicio al cliente y garantizar una experiencia superior en cada
                punto de contacto.
              </p>
              <p>
                He implementado soluciones innovadoras como la integración de herramientas de{' '}
                <strong className="text-ink">IA y automatización</strong>, mejorando indicadores
                críticos como el <strong className="text-ink">NPS y CSAT</strong>. Mi misión es
                transformar la experiencia del cliente mediante estrategias disruptivas,
                impulsando el crecimiento sostenible y la eficiencia operativa en la era digital.
              </p>
              <p>
                He construido mi carrera en industrias tan distintas como telecomunicaciones,
                retail, consumo masivo y belleza, siempre con un mismo foco: entender al cliente
                para rediseñar la operación a su alrededor.
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
