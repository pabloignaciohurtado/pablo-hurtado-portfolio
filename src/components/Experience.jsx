import { useState } from 'react'
import { ChevronDown, Wifi, ShoppingBag, Headphones, Gem } from 'lucide-react'
import Reveal from './Reveal'

const EXPERIENCE = [
  {
    company: 'WOM Chile',
    role: 'Jefe de Calidad y Mejora Continua | Customer Care | IA',
    period: 'feb. 2025 — Presente',
    industry: 'Telecomunicaciones',
    icon: Wifi,
    current: true,
    badges: ['Premio CX WOM', '+3M llamadas analizadas'],
    summary:
      'Integro IA en la calidad y la experiencia de cliente para que las decisiones dejen de depender de la intuición. Lo que antes era una muestra de llamadas auditadas a mano, hoy es analítica a gran escala sobre las conversaciones.',
    details: [
      'Lidero el desarrollo de mejoras de procesos con Inteligencia Artificial, visibilidad 360° de clientes, monitoreo de desempeño y calidad de servicio, con diseños automatizados para operaciones ágiles.',
      'Transformación con IA: implementación de soluciones de speech y text analytics con modelos Gemini 2.0 y 2.5 para auditar conversaciones a gran escala (base de +3 millones de llamadas), detectar oportunidades y prevenir riesgos.',
      'Resultados validados: +17 puntos en trazabilidad de contactos, -5 puntos de eficiencia presupuestaria y -25 puntos porcentuales en el tiempo de gestión de llamada.',
      'Dirección de soluciones tecnológicas de eficiencia con procesos lean basados en automatizaciones de Machine Learning y modelado de comportamiento de clientes por segmento.',
      'Liderazgo de equipos de calidad: coordinación y desarrollo de analistas, supervisores y Product Managers. Planes de acción basados en datos para elevar NPS, CSAT, CES, FCR y adherencia.',
    ],
  },
  {
    company: 'Cencosud',
    role: 'Jefe de Servicio al Cliente Omnicanal IA | Supermercados | Retail | Ecommerce',
    period: 'jul. 2022 — feb. 2025',
    industry: 'Retail · Supermercados',
    icon: ShoppingBag,
    badges: ['Equipo +50 personas', 'Microsoft Dynamics CRM', 'NPS 92+'],
    summary:
      'Tomé el servicio al cliente de Jumbo y lo convertí en una operación omnicanal con IA: un Contact Center 360°, un chatbot que resuelve solo y un CRM que por fin ordenó los datos.',
    details: [
      'Lideré el Contact Center 360° y los canales digitales (redes sociales, chatbots y plataformas web), asegurando una experiencia omnicanal consistente y de alta calidad.',
      'Líder de la implementación de Microsoft Dynamics 365 CRM y de ChatGPT-4 Copilot para automatizar canales de atención, simplificando el árbol de tipificaciones de 300 a 200 motivos (-30%) e incrementando en 20% los registros útiles.',
      'Desarrollo del primer chatbot con IA para Jumbo (WhatsApp y redes sociales): 95% de disponibilidad, 85%+ de resolución en primera interacción, NPS de 92+ y un modelo de detección de fraude con 50% de contención.',
      'Supervisión de un equipo de +50 colaboradores externos y un equipo de desarrollo tecnológico de 6 ingenieros, aplicando metodologías ágiles (Scrum).',
      'Manejo de presupuestos y negociación con proveedores, maximizando el ROI de los proyectos de transformación digital. KPIs: NPS, CES y CSAT.',
    ],
  },
  {
    company: 'Oxford',
    role: 'Jefe de Servicio al Cliente | Customer Service | Retail | Ecommerce',
    period: 'jul. 2021 — jul. 2022',
    industry: 'Retail deportivo (Oxford, Cannondale, Kona)',
    icon: Headphones,
    badges: ['Fundador del área', 'Omnicanal', 'Zendesk'],
    summary:
      'Llegué a una compañía sin área de servicio al cliente y la construí desde cero —criterios, KPIs, plataforma y cultura— a nivel nacional para las marcas Oxford, Muvo, Cannondale y Kona.',
    details: [
      'Lideré la experiencia de cliente de 13 tiendas propias de retail, la cadena de talleres de mantención y el ecommerce de las marcas Oxford, Muvo, Cannondale y Kona.',
      'Fundé el área de servicio definiendo criterios, KPIs, decálogos de servicio y protocolos de atención, con un marco de calidad medible desde el inicio.',
      'Responsable de liderar proyectos de lealtad y fidelización de clientes en una estrategia omnicanal.',
      'Estudios de medición: NPS, CSAT, CES, focus y estudios de campo. Optimización de la gestión de reclamos y consultas.',
      'Optimización de plataformas help desk y procesos de back office en Zendesk, y certificación de competencias para los equipos de atención.',
    ],
  },
  {
    company: 'Belcorp',
    role: 'Múltiples roles — Sales Controller & Customer Experience',
    period: '2014 — 2020',
    industry: 'Belleza & Consumo Masivo',
    icon: Gem,
    summary:
      'Mis primeros años en grande: ventas, post venta e inteligencia de cliente en una de las mayores compañías de belleza de la región. La base de todo lo que vino después.',
    details: [
      'Sales Controller (2018–2020): control y seguimiento de venta y resultados comerciales.',
      'Post-Sales Support Manager (2014–2016): mejora continua de los procesos de post venta con foco en fidelización y experiencia.',
      'Diseño de indicadores de gerencia e insights de clientes para la mejora de procesos comerciales.',
      'Implementación de políticas y procesos lean de logística inversa a nivel nacional.',
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
