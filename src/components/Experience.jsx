import { useState } from 'react'
import { ChevronDown, Wifi, ShoppingBag, Headphones, Gem } from 'lucide-react'
import Reveal from './Reveal'

const EXPERIENCE = [
  {
    company: 'WOM Chile',
    role: 'Jefe de Calidad & AI',
    period: '2023 — Presente',
    industry: 'Telecomunicaciones',
    icon: Wifi,
    current: true,
    badges: ['Premio CX WOM', '+400K llamadas analizadas'],
    summary:
      'Lidero la integración de IA en la gestión de calidad y experiencia de cliente, con proyectos de impacto transversal en toda la compañía.',
    details: [
      'Lideré el caso de negocio de Speech Analytics con IA generativa (Gemini) sobre una base de más de 400K llamadas del call center: generación de resúmenes, detección de intención y segmentación de clientes.',
      'Resultados validados: +17 puntos en trazabilidad de contactos, -5 puntos de eficiencia presupuestaria (reducción del presupuesto anual) y -25 puntos porcentuales en el tiempo de gestión de llamada.',
      'Reconocido como referente de Experiencia del Cliente en WOM, activando nuevos modelos de calidad y reduciendo la carga de documentación manual del personal.',
      'Diseño y operación de modelos de gestión de calidad con control en todos los puntos de contacto del customer journey.',
    ],
  },
  {
    company: 'Cencosud',
    role: 'Jefe de Servicio al Cliente Omnicanal',
    period: '2020 — 2023',
    industry: 'Retail',
    icon: ShoppingBag,
    summary:
      'Responsable de la experiencia de cliente integrada a través de todos los canales de atención.',
    details: [
      'Diseño de la estrategia omnicanal unificando tienda física, e-commerce y canales digitales.',
      'Implementación de procesos Lean para reducir tiempos de respuesta y fricción del cliente.',
      'Gestión de equipos de servicio al cliente a gran escala bajo metodologías ágiles.',
      'Definición y seguimiento de indicadores de satisfacción (NPS/CSAT) por canal.',
    ],
  },
  {
    company: 'Oxford',
    role: 'Jefe de Servicio al Cliente',
    period: '2017 — 2020',
    industry: 'Servicios (BPO)',
    icon: Headphones,
    badges: ['Fundador del área', 'NPS 92+', '95% disponibilidad', 'Premiado'],
    summary:
      'Fundé el área de Servicio al Cliente de la compañía y lideré la implementación tecnológica para la cuenta Jumbo, desde la estrategia hasta la ejecución.',
    details: [
      'Fundé el área de Servicio al Cliente desde cero: definí criterios, KPIs y decálogos de servicio, estableciendo el marco de calidad medible que diferenció a la marca en el retail familiar chileno.',
      'Implementé SendDesk como sistema omnicanal de reclamos —pionero en el retail familiar chileno— integrando la experiencia física (tiendas) y digital (web).',
      'Desarrollo end-to-end del primer chatbot con inteligencia artificial de Jumbo: diseño conversacional, reglas de negocio, documentación, base de conocimiento e integración en redes sociales/WhatsApp.',
      'El canal alcanzó 95% de disponibilidad, 85%+ de resolución en primera interacción y NPS de 92+ puntos, con un modelo de detección de fraude y 50% de contención — ganando varios premios de la industria.',
      'Dirigí la implementación de Microsoft Dynamics 365 CRM, simplificando el árbol de tipificaciones de 300 a 200 motivos (-30%) e incrementando en 20% los registros útiles.',
    ],
  },
  {
    company: 'Belcorp',
    role: 'Múltiples roles — Sales & Customer Intelligence',
    period: '2013 — 2017',
    industry: 'Belleza & Cosmética',
    icon: Gem,
    summary:
      'Trayectoria a través de roles comerciales y de inteligencia de cliente en la industria de belleza.',
    details: [
      'Análisis de comportamiento de clientes para optimizar estrategias comerciales y de fuerza de venta.',
      'Desarrollo de modelos de segmentación e inteligencia de cliente para campañas comerciales.',
      'Colaboración cross-funcional entre ventas, marketing e inteligencia de negocio.',
      'Base de la especialización en Customer Intelligence que define su carrera actual.',
    ],
  },
]

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="experiencia" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal">
            Experiencia laboral
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink tracking-tight">
            Una trayectoria entre datos, personas y procesos
          </h2>
          <p className="mt-4 text-lg text-ink-light max-w-2xl mx-auto">
            Haz click en cada experiencia para ver el detalle de cada rol.
          </p>
        </Reveal>

        <div className="mt-14 space-y-4">
          {EXPERIENCE.map((job, i) => {
            const isOpen = openIndex === i
            const Icon = job.icon
            return (
              <Reveal key={job.company} delay={i * 80}>
                <div
                  className={`rounded-2xl border bg-white transition-all duration-300 ${
                    isOpen
                      ? 'border-teal/40 shadow-xl shadow-teal/5'
                      : 'border-gray-200 hover:border-teal/30 hover:shadow-md'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center gap-4 p-5 sm:p-6 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div
                      className={`shrink-0 flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                        isOpen ? 'bg-teal text-white' : 'bg-ink/5 text-ink'
                      }`}
                    >
                      <Icon size={22} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-ink text-lg">{job.company}</h3>
                        {job.current && (
                          <span className="rounded-full bg-teal/10 text-teal text-xs font-semibold px-2.5 py-0.5">
                            Actual
                          </span>
                        )}
                      </div>
                      <p className="text-ink-light font-medium">{job.role}</p>
                      {job.badges && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {job.badges.map((b) => (
                            <span
                              key={b}
                              className="rounded-full bg-teal/5 border border-teal/20 text-teal text-xs font-semibold px-2 py-0.5"
                            >
                              {b}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="hidden sm:block text-sm text-gray-400 font-medium shrink-0">
                      {job.period}
                    </div>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-gray-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-teal' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 sm:px-20">
                        <div className="sm:hidden text-sm text-gray-400 font-medium mb-3">
                          {job.period} · {job.industry}
                        </div>
                        <p className="text-ink-light italic mb-4">{job.summary}</p>
                        <ul className="space-y-2.5">
                          {job.details.map((d) => (
                            <li key={d} className="flex gap-3 text-ink-light leading-relaxed">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal shrink-0" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
