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
                Empecé entendiendo al cliente desde la primera línea —ventas, post venta,
                reclamos— y nunca dejé de hacerlo. Esa cercanía con lo que realmente le pasa a
                las personas es la que hoy me permite rediseñar operaciones completas. Más de{' '}
                <strong className="text-ink">10 años</strong> después, sigo creyendo que las
                mejores decisiones de negocio nacen de escuchar bien.
              </p>
              <p>
                Hoy, como <strong className="text-ink">Jefe de Calidad y Mejora Continua en WOM
                Chile</strong>, integro <strong className="text-ink">inteligencia artificial</strong>,
                automatización y procesos lean para que la calidad deje de depender de la
                intuición y pase a basarse en datos. He llevado speech analytics a más de{' '}
                <strong className="text-ink">3 millones de llamadas</strong>, implementado CRM y
                chatbots con IA, y movido indicadores como <strong className="text-ink">NPS,
                CSAT, CES y FCR</strong> en operaciones de gran escala.
              </p>
              <p>
                Creo en los equipos con criterio por sobre los procesos rígidos, en los datos
                que se convierten en acción, y en que la mejor tecnología es la que vuelve
                invisible la fricción del cliente. Si algo no mejora la experiencia de una
                persona real, no me interesa.
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
                  <div className="text-3xl sm:text-4xl font-extrabold text-teal font-mono">
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
