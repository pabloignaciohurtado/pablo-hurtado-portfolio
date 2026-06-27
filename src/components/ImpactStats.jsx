import { Bot, AudioLines, ShieldAlert, Database, UsersRound, Gauge } from 'lucide-react'
import Reveal from './Reveal'
import { useCountUp } from '../hooks/useCountUp'

const METRICS = [
  {
    prefix: '',
    to: 92,
    suffix: '+',
    label: 'NPS',
    context: 'Chatbot IA — Jumbo (Cencosud)',
    icon: Bot,
    featured: true,
  },
  {
    prefix: '',
    to: 3,
    suffix: 'M+',
    label: 'Llamadas analizadas con IA',
    context: 'Speech Analytics — WOM',
    icon: AudioLines,
    featured: true,
  },
  {
    prefix: '',
    to: 95,
    suffix: '%',
    label: 'Disponibilidad de canal',
    context: 'Chatbot IA — Jumbo',
    icon: Bot,
  },
  {
    prefix: '−',
    to: 25,
    suffix: '%',
    label: 'Tiempo de gestión',
    context: 'Speech Analytics — WOM',
    icon: AudioLines,
  },
  {
    prefix: '',
    to: 50,
    suffix: '%',
    label: 'Contención + detección de fraude',
    context: 'Modelos de IA — Jumbo',
    icon: ShieldAlert,
  },
  {
    prefix: '+',
    to: 20,
    suffix: '%',
    label: 'Registros útiles',
    context: 'CRM Dynamics 365 — Cencosud',
    icon: Database,
  },
  {
    prefix: '−',
    to: 30,
    suffix: '%',
    label: 'Tipologías (300 → 200)',
    context: 'CRM Dynamics 365 — Cencosud',
    icon: Database,
  },
  {
    prefix: '+',
    to: 50,
    suffix: '',
    label: 'Personas lideradas',
    context: 'Cencosud · equipos + ingeniería',
    icon: UsersRound,
  },
]

function MetricValue({ prefix, to, suffix }) {
  const [ref, value] = useCountUp(to)
  return (
    <span ref={ref} className="font-mono">
      {prefix}
      {Math.round(value).toLocaleString('es-CL')}
      {suffix}
    </span>
  )
}

export default function ImpactStats() {
  return (
    <section id="impacto" className="relative bg-ink py-24 sm:py-32 overflow-hidden">
      {/* animated aurora glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[32rem] h-[32rem] rounded-full bg-teal/20 blur-3xl animate-aurora" />
        <div
          className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] rounded-full bg-teal-light/10 blur-3xl animate-aurora"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-light/30 bg-teal-light/10 px-4 py-1.5 text-sm font-medium text-teal-light">
            <Gauge size={14} />
            Impacto medible
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Resultados que <span className="text-gradient">hablan</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Números reales de proyectos de IA y transformación que lideré end-to-end.
          </p>
        </Reveal>

        {/* bento grid */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {METRICS.map((m, i) => {
            const Icon = m.icon
            return (
              <Reveal
                key={m.label}
                delay={i * 60}
                className={m.featured ? 'col-span-2' : ''}
              >
                <div
                  className={`card-glow group h-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-1 ${
                    m.featured ? 'sm:p-8' : ''
                  }`}
                >
                  <div className="flex items-center gap-2 text-teal-light">
                    <Icon size={18} />
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      {m.context}
                    </span>
                  </div>
                  <div
                    className={`mt-4 font-extrabold text-gradient leading-none ${
                      m.featured ? 'text-5xl sm:text-6xl' : 'text-4xl sm:text-5xl'
                    }`}
                  >
                    <MetricValue prefix={m.prefix} to={m.to} suffix={m.suffix} />
                  </div>
                  <div className="mt-3 text-sm font-medium text-gray-300">{m.label}</div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
