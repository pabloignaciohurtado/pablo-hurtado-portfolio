import {
  UsersRound,
  Target,
  RefreshCw,
  Cpu,
  Brain,
  Bot,
  Database,
  Rocket,
  Workflow,
  Users,
  Gauge,
} from 'lucide-react'
import Reveal from './Reveal'

const CATEGORIES = [
  {
    name: 'Liderazgo',
    icon: UsersRound,
    skills: [
      'Dirección de equipos',
      'Gestión de proyectos',
      'Equipos multidisciplinarios',
      'Gestión del cambio',
    ],
  },
  {
    name: 'Tecnología',
    icon: Cpu,
    skills: [
      'Inteligencia Artificial',
      'Machine Learning',
      'Automatización de procesos',
      'Chatbots & NLP',
      'CRM (Microsoft Dynamics 365)',
    ],
  },
  {
    name: 'Negocio',
    icon: Rocket,
    skills: [
      'Transformación digital',
      'Optimización de procesos',
      'Customer Experience (CX)',
      'NPS / CSAT',
      'Customer Intelligence',
      'Lean Processes',
    ],
  },
]

const SKILL_ICONS = {
  'Dirección de equipos': UsersRound,
  'Gestión de proyectos': Target,
  'Equipos multidisciplinarios': Users,
  'Gestión del cambio': RefreshCw,
  'Inteligencia Artificial': Brain,
  'Machine Learning': Cpu,
  'Automatización de procesos': Workflow,
  'Chatbots & NLP': Bot,
  'CRM (Microsoft Dynamics 365)': Database,
  'Transformación digital': Rocket,
  'Optimización de procesos': Workflow,
  'Customer Experience (CX)': Users,
  'NPS / CSAT': Gauge,
  'Customer Intelligence': Brain,
  'Lean Processes': Target,
}

export default function Expertise() {
  return (
    <section id="expertise" className="relative bg-ink py-24 sm:py-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal-light">
            Expertise
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Donde se cruzan la tecnología y el cliente
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, ci) => {
            const CatIcon = cat.icon
            return (
              <Reveal key={cat.name} delay={ci * 120}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/15 text-teal-light">
                      <CatIcon size={20} />
                    </div>
                    <h3 className="font-bold text-white text-lg">{cat.name}</h3>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {cat.skills.map((skill) => {
                      const SkillIcon = SKILL_ICONS[skill]
                      return (
                        <li
                          key={skill}
                          className="group flex items-center gap-2.5 text-gray-300 transition-colors hover:text-white"
                        >
                          {SkillIcon && (
                            <SkillIcon
                              size={16}
                              className="text-teal-light shrink-0 transition-transform group-hover:scale-110"
                            />
                          )}
                          <span className="text-sm font-medium">{skill}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
