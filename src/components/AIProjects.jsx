import { Bot, AudioLines, ShieldAlert, BrainCircuit, Award } from 'lucide-react'
import Reveal from './Reveal'
import { ChatbotMockup, SpeechMockup } from './ProjectMockups'

const CHATBOT_STATS = [
  { value: '95%', label: 'Disponibilidad del canal' },
  { value: '85%+', label: 'Resolución 1ra interacción' },
  { value: '92+', label: 'NPS' },
  { value: '50%', label: 'Contención (pionero en Chile)' },
]

const CHATBOT_FEATURES = [
  'Segmentación de clientes',
  'Ofertas diferenciadas por segmento',
  'Compensaciones personalizadas',
  'Árboles de clasificación simplificados',
]

const CHATBOT_IMPROVEMENTS = [
  'Reducción de documentación requerida para el personal',
  'Bases de conocimiento y plataformas de aprendizaje efectivas',
  'Menor rotación de personal por simplificación del trabajo',
  'Canal de WhatsApp con los mejores resultados de la compañía',
]

const SPEECH_FEATURES = [
  'Procesamiento automático de audios',
  'Generación de resúmenes y transcripciones',
  'Detección de intenciones y patrones',
  'Segmentación de clientes',
]

const SPEECH_IMPACT = [
  'Líderes en Experiencia del Cliente — premio importante en WOM',
  'Activación de nuevos modelos de calidad',
  'Reducción del estrés operacional: personal liberado de documentación manual',
  'Sostenibilidad mediante reinversión de los ahorros generados',
]

const SPEECH_STATS = [
  { value: '+3M', label: 'Llamadas procesadas' },
  { value: '+17 pts', label: 'Trazabilidad de contactos' },
  { value: '-5 pts', label: 'Eficiencia presupuestaria anual' },
  { value: '-25 pts', label: 'Tiempo de gestión por llamada' },
]

export default function AIProjects() {
  return (
    <section id="proyectos-ia" className="relative bg-ink py-24 sm:py-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-light/30 bg-teal-light/10 px-4 py-1.5 text-sm font-medium text-teal-light">
            <BrainCircuit size={14} />
            Proyectos de IA
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Inteligencia artificial aplicada a resultados de negocio
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Dos casos reales donde llevé la IA del piloto a la operación, con impacto medible.
          </p>
        </Reveal>

        <div className="mt-16 space-y-10">
          {/* Chatbot Jumbo */}
          <Reveal id="ia-chatbot-jumbo" className="scroll-mt-24">
            <div className="card-glow rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
              <div className="flex items-start gap-4">
                <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal text-white">
                  <Bot size={26} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-light">
                    Cencosud · Jumbo
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    Chatbot con IA — primer canal conversacional de Jumbo
                  </h3>
                </div>
              </div>

              <p className="mt-6 text-gray-300 leading-relaxed">
                Desarrollo end-to-end del primer chatbot con inteligencia artificial de Jumbo:
                diseño conversacional, reglas de negocio, documentación y alimentación de la
                base de conocimiento, integrado en la plataforma de WhatsApp y redes sociales.
              </p>

              <div className="mt-8 flex justify-center">
                <ChatbotMockup className="w-full max-w-[260px] drop-shadow-2xl" />
              </div>
              <p className="mt-2 text-center text-xs text-gray-500">
                Representación ilustrativa · no es una captura del sistema real
              </p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {CHATBOT_STATS.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold text-teal-light font-mono">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs text-gray-400 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-white mb-3">
                    Funcionalidades de IA implementadas
                  </h4>
                  <ul className="space-y-2">
                    {CHATBOT_FEATURES.map((f) => (
                      <li key={f} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-light shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-3">Mejoras sistémicas</h4>
                  <ul className="space-y-2">
                    {CHATBOT_IMPROVEMENTS.map((f) => (
                      <li key={f} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-light shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-5 flex items-start gap-4">
                <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/15 text-amber-300">
                  <ShieldAlert size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Modelo de detección de fraude</h4>
                  <p className="mt-1 text-sm text-gray-300 leading-relaxed">
                    Implementado dentro del chatbot para identificar patrones de riesgo en
                    tiempo real, reduciendo significativamente la exposición a fraude del canal.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-teal-light">
                <Award size={16} />
                Ganador de varios premios de la industria
              </div>
            </div>
          </Reveal>

          {/* Speech Analytics */}
          <Reveal id="ia-speech-analytics" className="scroll-mt-24">
            <div className="card-glow rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
              <div className="flex items-start gap-4">
                <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal text-white">
                  <AudioLines size={26} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-light">
                    WOM Chile
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    Speech Analytics con IA generativa (Gemini)
                  </h3>
                </div>
              </div>

              <p className="mt-6 text-gray-300 leading-relaxed">
                Solución de IA generativa que escucha y analiza los audios de las llamadas del
                call center sobre una base de más de 3 millones de llamadas, generando resúmenes,
                detectando intención y segmentando clientes para accionar mejoras operativas en
                toda la compañía.
              </p>

              <div className="mt-8">
                <SpeechMockup className="w-full drop-shadow-2xl" />
              </div>
              <p className="mt-2 text-center text-xs text-gray-500">
                Representación ilustrativa · no es una captura del sistema real
              </p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {SPEECH_STATS.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold text-teal-light font-mono">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs text-gray-400 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-white mb-3">Funcionalidades de IA</h4>
                  <ul className="space-y-2">
                    {SPEECH_FEATURES.map((f) => (
                      <li key={f} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-light shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-3">Impacto organizacional</h4>
                  <ul className="space-y-2">
                    {SPEECH_IMPACT.map((f) => (
                      <li key={f} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-light shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal/10 border border-teal/30 text-teal-light text-sm font-semibold px-3 py-1">
                Caso de negocio 360° con ROI claro
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
