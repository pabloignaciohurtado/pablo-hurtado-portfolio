import { useState } from 'react'
import { ChevronDown, Bot, AudioLines, Database, ShieldCheck, Building2, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

const PROJECTS = [
  {
    name: 'Chatbot IA — Jumbo',
    company: 'Cencosud',
    icon: Bot,
    description:
      'Primer chatbot con inteligencia artificial de Jumbo, desarrollado end-to-end e integrado en WhatsApp y redes sociales.',
    tech: ['IA Conversacional', 'NLP', 'WhatsApp Business', 'Detección de Fraude'],
    results: ['95% disponibilidad', 'NPS 92+'],
    details: [
      'Desarrollo completo del flujo conversacional: diálogos, reglas de negocio, documentación y alimentación de la base de conocimiento.',
      '95% de disponibilidad del canal, 85%+ de resolución en primera interacción y NPS de 92+ puntos.',
      'Segmentación de clientes, ofertas diferenciadas y compensaciones personalizadas operadas por el bot.',
      'Modelo de detección de fraude y un modelo de contención que alcanzó 50%, pionero en el mercado chileno en ese momento.',
    ],
    cta: { label: 'Ver caso completo de IA', href: '#ia-chatbot-jumbo' },
  },
  {
    name: 'Speech Analytics — WOM',
    company: 'WOM Chile',
    icon: AudioLines,
    description:
      'IA generativa (Gemini) sobre una base de +400K llamadas del call center: resúmenes automáticos, detección de intención y segmentación de clientes.',
    tech: ['Gemini', 'Speech-to-Text', 'NLP'],
    results: ['+17 pts trazabilidad', '-25% tiempo de gestión'],
    details: [
      'Procesamiento automático de audios sobre una base de más de 400K llamadas del call center.',
      'Resultados validados: +17 puntos en trazabilidad de contactos, -5 puntos de eficiencia presupuestaria y -25 puntos porcentuales en el tiempo de gestión de llamada.',
      'Generación automática de resúmenes y transcripciones, detección de intenciones y patrones, y segmentación de clientes.',
      'Reconocimiento como referente de Experiencia del Cliente en WOM; eficiencias reinvertidas en mejoras y reducción del estrés operacional del personal.',
      'Caso de negocio 360° con ROI claro.',
    ],
    cta: { label: 'Ver caso completo de IA', href: '#ia-speech-analytics' },
  },
  {
    name: 'Fundación del Área de Servicio al Cliente — Oxford',
    company: 'Oxford',
    icon: Building2,
    description:
      'Creación desde cero del área de Servicio al Cliente: filosofía, KPIs y operación omnicanal sobre Zendesk para las marcas Oxford, Muvo, Cannondale y Kona.',
    tech: ['Zendesk', 'Omnicanalidad', 'Customer Service Ops', 'Decálogos de Servicio'],
    results: ['Fundador del área', 'Diferenciación competitiva'],
    details: [
      'Definí criterios, KPIs y decálogos de servicio, estableciendo el marco de calidad medible del área a nivel nacional.',
      'Implementé y optimicé Zendesk como plataforma de help desk y back office, integrando la experiencia física (13 tiendas y talleres) y digital (ecommerce).',
      'Construí reportería ejecutiva, control de auditoría de prácticas de venta e indicadores de gestión por reclamo, tienda y ejecutivo.',
      'Diseñé estudios de satisfacción (NPS, CSAT, CES, focus y estudios de campo), incluyendo segmentos como clientes de talleres de bicicletas.',
      'Lideré proyectos de lealtad y fidelización, sentando las bases culturales de calidad y servicio del área.',
    ],
  },
  {
    name: 'CRM Microsoft Dynamics 365',
    company: 'Cencosud',
    icon: Database,
    description:
      'Transformación de procesos internos: datos centralizados, trazabilidad y gobierno de la información, con Microsoft Dynamics 365 y ChatGPT-4 Copilot.',
    tech: ['Microsoft Dynamics 365', 'ChatGPT-4 Copilot', 'Gestión del Cambio', 'Gobierno de Datos'],
    results: ['+20% registros útiles', '-30% tipologías'],
    details: [
      'Simplificación del árbol de tipificaciones y motivos: de 300 a 200 categorías (-30%).',
      'Migración desde planillas Excel a un CRM integrado, con roles y responsabilidades definidos para crear tipificaciones.',
      'Integración de ChatGPT-4 Copilot para la automatización de canales de atención, mejorando la eficiencia operativa.',
      'Incremento de 20% en registros útiles y mejor control, monitoreo y confianza en los procesos internos.',
      'Gestión de cambio organizacional compleja pero exitosa, asegurando procesos trazables y auditables.',
    ],
  },
  {
    name: 'Gestión de Calidad & Mejora Continua — WOM',
    company: 'WOM Chile',
    icon: ShieldCheck,
    description:
      'Modelos de gestión de calidad con control en todos los puntos de contacto del customer journey.',
    tech: ['Quality Management', 'Customer Journey', 'Mejora Continua'],
    results: ['Premios de industria', 'Mejora multicanal'],
    details: [
      'Diseño de modelos de gestión de calidad con control en cada punto de contacto del customer journey.',
      'Mejora continua aplicada de forma consistente en todos los canales de atención.',
      'Contribución directa a reconocimientos y premios de la industria.',
    ],
  },
]

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="proyectos" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal">
            Proyectos destacados
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink tracking-tight">
            Resultados reales, no solo títulos
          </h2>
          <p className="mt-4 text-lg text-ink-light max-w-2xl mx-auto">
            Haz click en cada proyecto para ver el detalle de ejecución y resultados.
          </p>
        </Reveal>

        <div className="mt-14 space-y-4">
          {PROJECTS.map((project, i) => {
            const isOpen = openIndex === i
            const Icon = project.icon
            return (
              <Reveal key={project.name} delay={i * 80}>
                <div
                  className={`rounded-2xl border bg-white transition-all duration-300 ${
                    isOpen
                      ? 'border-teal/40 shadow-xl shadow-teal/5'
                      : 'border-gray-200 hover:border-teal/30 hover:shadow-md'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-start sm:items-center gap-4 p-5 sm:p-6 text-left cursor-pointer"
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
                      {project.company && (
                        <span className="text-xs font-semibold uppercase tracking-wider text-teal">
                          {project.company}
                        </span>
                      )}
                      <h3 className="font-bold text-ink text-lg">{project.name}</h3>
                      <p className="text-ink-light mt-0.5">{project.description}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-gray-100 text-ink-light text-xs font-medium px-2.5 py-1"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {project.results.map((r) => (
                          <span
                            key={r}
                            className="rounded-full bg-teal/5 border border-teal/20 text-teal text-xs font-semibold px-2 py-0.5"
                          >
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 mt-2 text-gray-400 transition-transform duration-300 ${
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
                        <ul className="space-y-2.5">
                          {project.details.map((d) => (
                            <li key={d} className="flex gap-3 text-ink-light leading-relaxed">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal shrink-0" />
                              {d}
                            </li>
                          ))}
                        </ul>
                        {project.cta && (
                          <a
                            href={project.cta.href}
                            className="mt-5 inline-flex items-center gap-1.5 font-semibold text-teal hover:text-teal-light transition-colors"
                          >
                            {project.cta.label}
                            <ArrowRight size={16} />
                          </a>
                        )}
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
