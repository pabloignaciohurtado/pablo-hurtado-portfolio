import { BarChart3, Award, GraduationCap, BookOpen, Briefcase } from 'lucide-react'
import Reveal from './Reveal'

const EDUCATION = [
  {
    year: '2005 — 2007',
    title: 'Piloto Comercial',
    org: 'Universidad Técnica Federico Santa María',
    icon: Briefcase,
  },
  {
    year: '',
    title: 'Administración y Gestión de Empresas',
    org: 'Universidad Diego Portales',
    icon: BookOpen,
  },
  {
    year: '2015',
    title: 'Diplomado en Customer Intelligence and Data Mining',
    org: 'Universidad de Chile',
    icon: BarChart3,
  },
  {
    year: '2020',
    title: 'Scrum Master & Product Owner · Experto en Agilidad Empresarial',
    org: 'Universidad Diego Portales',
    icon: Award,
  },
  {
    year: '2020 — 2021',
    title: 'Máster en Dirección de E-commerce y Marketing Digital',
    org: 'Universitat de Barcelona',
    icon: GraduationCap,
  },
]

export default function Education() {
  return (
    <section id="educacion" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal">
            Educación
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink tracking-tight">
            Formación continua, criterio en evolución
          </h2>
        </Reveal>

        <div className="mt-16 relative">
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gray-200 sm:-translate-x-1/2" />

          <div className="space-y-12">
            {EDUCATION.map((item, i) => {
              const Icon = item.icon
              const alignRight = i % 2 === 1
              return (
                <Reveal key={item.title} delay={i * 120}>
                  <div
                    className={`relative flex items-start sm:items-center gap-6 ${
                      alignRight ? 'sm:flex-row-reverse' : ''
                    }`}
                  >
                    <div
                      className={`hidden sm:block flex-1 ${
                        alignRight ? 'text-left' : 'text-right'
                      }`}
                    >
                      <EduCard item={item} />
                    </div>

                    <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-teal text-white shadow-lg shadow-teal/30 ring-4 ring-white z-10">
                      <Icon size={20} />
                    </div>

                    <div className="hidden sm:block flex-1" />

                    <div className="sm:hidden pl-16 w-full">
                      <EduCard item={item} />
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function EduCard({ item }) {
  return (
    <div className="inline-block rounded-2xl border border-gray-100 bg-gray-50 px-6 py-4 transition-all hover:border-teal/30 hover:shadow-md">
      {item.year && <span className="text-sm font-bold text-teal">{item.year}</span>}
      <h3 className="mt-1 font-bold text-ink text-lg">{item.title}</h3>
      <p className="text-ink-light">{item.org}</p>
    </div>
  )
}
