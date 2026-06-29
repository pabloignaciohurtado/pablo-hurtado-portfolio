/*
 * Mockups vectoriales 100% originales (no son capturas de sistemas reales).
 * Cada uno usa los colores corporativos de la marca asociada al proyecto:
 *   - Chatbot → Jumbo (verde)
 *   - Speech Analytics → WOM (morado / magenta)
 *   - CRM → Microsoft Dynamics 365 (azul)
 */

const PANEL = '#0b1220'
const PANEL2 = '#0f1729'
const LINE = '#1e293b'
const MUTED = '#64748b'
const TEXT = '#e2e8f0'

// Jumbo
const JG = '#43b02a'
const JG2 = '#7ed957'
// WOM
const WP = '#8b2fc9'
const WM = '#ff2d8e'
// Dynamics 365
const DB = '#2b88d8'
const DB2 = '#5bb1ff'
// Zendesk
const ZG2 = '#2dd4bf'

export function ChatbotMockup({ className = '' }) {
  return (
    <svg viewBox="0 0 300 600" className={className} role="img" aria-label="Mockup ilustrativo de chatbot con IA">
      <rect x="8" y="8" width="284" height="584" rx="40" fill={PANEL} stroke={LINE} strokeWidth="2" />
      <rect x="18" y="18" width="264" height="564" rx="32" fill={PANEL2} />
      <rect x="118" y="26" width="64" height="14" rx="7" fill={PANEL} />

      {/* header */}
      <rect x="18" y="44" width="264" height="60" fill={PANEL} />
      <circle cx="52" cy="74" r="16" fill={JG} />
      <path d="M45 74a7 7 0 0114 0v3a7 7 0 01-14 0z" fill="#fff" opacity="0.9" />
      <circle cx="52" cy="70" r="3.5" fill="#fff" />
      <text x="78" y="70" fill={TEXT} fontSize="14" fontFamily="sans-serif" fontWeight="700">Asistente IA</text>
      <circle cx="80" cy="84" r="3" fill="#22c55e" />
      <text x="90" y="88" fill="#22c55e" fontSize="10" fontFamily="sans-serif">en línea</text>

      {/* bot bubble */}
      <rect x="34" y="124" width="180" height="40" rx="14" fill="#10261a" />
      <text x="48" y="142" fill={TEXT} fontSize="11" fontFamily="sans-serif">Hola 👋 ¿En qué</text>
      <text x="48" y="156" fill={TEXT} fontSize="11" fontFamily="sans-serif">te puedo ayudar?</text>

      {/* quick replies */}
      <rect x="34" y="174" width="92" height="26" rx="13" fill="none" stroke={JG} strokeWidth="1" />
      <text x="48" y="191" fill={JG2} fontSize="10" fontFamily="sans-serif">Mi pedido</text>
      <rect x="132" y="174" width="84" height="26" rx="13" fill="none" stroke={JG} strokeWidth="1" />
      <text x="146" y="191" fill={JG2} fontSize="10" fontFamily="sans-serif">Reclamo</text>

      {/* user bubble */}
      <rect x="118" y="214" width="148" height="34" rx="14" fill="#1f2937" />
      <text x="132" y="235" fill={TEXT} fontSize="11" fontFamily="sans-serif">¿Dónde está mi pedido?</text>

      {/* bot bubble */}
      <rect x="34" y="258" width="172" height="34" rx="14" fill="#10261a" />
      <text x="48" y="279" fill={TEXT} fontSize="11" fontFamily="sans-serif">¡Ya lo reviso! 🚚</text>

      {/* order card */}
      <rect x="34" y="302" width="200" height="70" rx="14" fill={PANEL} stroke={LINE} strokeWidth="1" />
      <text x="48" y="324" fill={MUTED} fontSize="9" fontFamily="sans-serif">PEDIDO #4821</text>
      <text x="48" y="342" fill={TEXT} fontSize="12" fontFamily="sans-serif" fontWeight="700">En reparto</text>
      <rect x="48" y="350" width="172" height="6" rx="3" fill={LINE} />
      <rect x="48" y="350" width="120" height="6" rx="3" fill={JG} />
      <circle cx="210" cy="320" r="10" fill={JG} />
      <path d="M205 320l4 4 6-7" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* resolved badge */}
      <rect x="34" y="384" width="120" height="26" rx="13" fill="rgba(67,176,42,0.15)" />
      <circle cx="50" cy="397" r="4" fill={JG2} />
      <text x="60" y="401" fill={JG2} fontSize="10" fontFamily="sans-serif" fontWeight="600">Resuelto · 1ra vez</text>

      {/* typing */}
      <rect x="34" y="424" width="56" height="26" rx="13" fill="#10261a" />
      <circle cx="50" cy="437" r="3" fill={MUTED} />
      <circle cx="62" cy="437" r="3" fill={MUTED} />
      <circle cx="74" cy="437" r="3" fill={MUTED} />

      {/* input bar */}
      <rect x="26" y="540" width="200" height="34" rx="17" fill={PANEL} stroke={LINE} strokeWidth="1" />
      <text x="42" y="561" fill={MUTED} fontSize="11" fontFamily="sans-serif">Escribe un mensaje…</text>
      <circle cx="252" cy="557" r="18" fill={JG} />
      <path d="M245 557l14-6-6 6 6 6z" fill="#fff" />
    </svg>
  )
}

export function SpeechMockup({ className = '' }) {
  const bars = [10, 22, 14, 30, 18, 38, 26, 44, 20, 34, 16, 28, 40, 24, 12, 32, 18, 36, 22, 14, 26, 42, 20, 30]
  return (
    <svg viewBox="0 0 560 380" className={className} role="img" aria-label="Mockup ilustrativo de dashboard de speech analytics">
      <rect x="2" y="2" width="556" height="376" rx="16" fill={PANEL} stroke={LINE} strokeWidth="2" />
      <rect x="2" y="2" width="556" height="40" rx="16" fill={PANEL2} />
      <rect x="2" y="26" width="556" height="16" fill={PANEL2} />
      <circle cx="26" cy="22" r="5" fill="#ef4444" />
      <circle cx="44" cy="22" r="5" fill="#f59e0b" />
      <circle cx="62" cy="22" r="5" fill="#22c55e" />
      <rect x="200" y="13" width="160" height="18" rx="9" fill={PANEL} />
      <text x="280" y="26" fill={MUTED} fontSize="10" fontFamily="sans-serif" textAnchor="middle">Speech Analytics · WOM</text>

      {/* KPI tiles */}
      {[
        { x: 24, big: 'NPS 92', small: 'Satisfacción' },
        { x: 196, big: '−25%', small: 'Tiempo gestión' },
        { x: 368, big: '+3M', small: 'Llamadas IA' },
      ].map((k) => (
        <g key={k.small}>
          <rect x={k.x} y="58" width="168" height="62" rx="12" fill={PANEL2} stroke={LINE} strokeWidth="1" />
          <text x={k.x + 16} y="88" fill={WM} fontSize="22" fontFamily="monospace" fontWeight="700">{k.big}</text>
          <text x={k.x + 16} y="106" fill={MUTED} fontSize="10" fontFamily="sans-serif">{k.small}</text>
        </g>
      ))}

      {/* waveform panel */}
      <rect x="24" y="136" width="340" height="120" rx="12" fill={PANEL2} stroke={LINE} strokeWidth="1" />
      <text x="40" y="158" fill={TEXT} fontSize="11" fontFamily="sans-serif" fontWeight="600">Análisis de conversación</text>
      {bars.map((hVal, i) => (
        <rect
          key={i}
          x={40 + i * 13}
          y={210 - hVal}
          width="7"
          height={hVal}
          rx="3"
          fill={i % 3 === 0 ? WM : WP}
          opacity={0.55 + (hVal / 110)}
        />
      ))}
      <line x1="40" y1="232" x2="348" y2="232" stroke={LINE} strokeWidth="1" />
      <text x="40" y="248" fill={MUTED} fontSize="9" fontFamily="sans-serif">00:00</text>
      <text x="320" y="248" fill={MUTED} fontSize="9" fontFamily="sans-serif">04:12</text>

      {/* sentiment panel */}
      <rect x="376" y="136" width="160" height="120" rx="12" fill={PANEL2} stroke={LINE} strokeWidth="1" />
      <text x="392" y="158" fill={TEXT} fontSize="11" fontFamily="sans-serif" fontWeight="600">Intención</text>
      {[
        { y: 176, w: 120, c: '#22c55e', t: 'Positiva' },
        { y: 200, w: 76, c: WP, t: 'Neutra' },
        { y: 224, w: 40, c: '#f59e0b', t: 'Riesgo' },
      ].map((s) => (
        <g key={s.t}>
          <text x="392" y={s.y + 4} fill={MUTED} fontSize="9" fontFamily="sans-serif">{s.t}</text>
          <rect x="392" y={s.y + 8} width="128" height="6" rx="3" fill={LINE} />
          <rect x="392" y={s.y + 8} width={s.w} height="6" rx="3" fill={s.c} />
        </g>
      ))}

      {/* trend line */}
      <rect x="24" y="272" width="512" height="86" rx="12" fill={PANEL2} stroke={LINE} strokeWidth="1" />
      <text x="40" y="294" fill={TEXT} fontSize="11" fontFamily="sans-serif" fontWeight="600">Trazabilidad de contactos</text>
      <polyline
        points="40,344 110,336 180,330 250,318 320,322 390,306 460,300 512,290"
        fill="none"
        stroke={WM}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon points="40,344 110,336 180,330 250,318 320,322 390,306 460,300 512,290 512,352 40,352" fill={WP} opacity="0.14" />
    </svg>
  )
}

export function CRMMockup({ className = '' }) {
  const rows = [
    { t: 'Atención en tienda', c: '#22c55e', s: 'Resuelto' },
    { t: 'Despacho ecommerce', c: DB2, s: 'En curso' },
    { t: 'Reclamo facturación', c: '#f59e0b', s: 'Pendiente' },
    { t: 'Garantía producto', c: '#22c55e', s: 'Resuelto' },
  ]
  return (
    <svg viewBox="0 0 560 380" className={className} role="img" aria-label="Mockup ilustrativo de CRM">
      <rect x="2" y="2" width="556" height="376" rx="16" fill={PANEL} stroke={LINE} strokeWidth="2" />
      <rect x="2" y="2" width="556" height="40" rx="16" fill={PANEL2} />
      <rect x="2" y="26" width="556" height="16" fill={PANEL2} />
      <circle cx="26" cy="22" r="5" fill="#ef4444" />
      <circle cx="44" cy="22" r="5" fill="#f59e0b" />
      <circle cx="62" cy="22" r="5" fill="#22c55e" />
      <rect x="200" y="13" width="160" height="18" rx="9" fill={PANEL} />
      <text x="280" y="26" fill={MUTED} fontSize="10" fontFamily="sans-serif" textAnchor="middle">CRM · Dynamics 365</text>

      {/* KPI */}
      {[
        { x: 24, big: '+20%', small: 'Registros útiles' },
        { x: 196, big: '300→200', small: 'Tipologías' },
        { x: 368, big: '100%', small: 'Trazabilidad' },
      ].map((k) => (
        <g key={k.small}>
          <rect x={k.x} y="58" width="168" height="62" rx="12" fill={PANEL2} stroke={LINE} strokeWidth="1" />
          <text x={k.x + 16} y="88" fill={DB2} fontSize="20" fontFamily="monospace" fontWeight="700">{k.big}</text>
          <text x={k.x + 16} y="106" fill={MUTED} fontSize="10" fontFamily="sans-serif">{k.small}</text>
        </g>
      ))}

      {/* table */}
      <rect x="24" y="136" width="340" height="222" rx="12" fill={PANEL2} stroke={LINE} strokeWidth="1" />
      <text x="40" y="160" fill={TEXT} fontSize="11" fontFamily="sans-serif" fontWeight="600">Casos por tipificación</text>
      {rows.map((r, i) => (
        <g key={r.t}>
          <rect x="40" y={176 + i * 42} width="308" height="34" rx="8" fill={PANEL} />
          <circle cx="58" cy={193 + i * 42} r="5" fill={r.c} />
          <text x="74" y={197 + i * 42} fill={TEXT} fontSize="11" fontFamily="sans-serif">{r.t}</text>
          <rect x="262" y={183 + i * 42} width="74" height="20" rx="10" fill="rgba(43,136,216,0.16)" />
          <text x="299" y={197 + i * 42} fill={DB2} fontSize="9" fontFamily="sans-serif" textAnchor="middle">{r.s}</text>
        </g>
      ))}

      {/* donut */}
      <rect x="376" y="136" width="160" height="222" rx="12" fill={PANEL2} stroke={LINE} strokeWidth="1" />
      <text x="392" y="160" fill={TEXT} fontSize="11" fontFamily="sans-serif" fontWeight="600">Calidad del dato</text>
      <circle cx="456" cy="232" r="46" fill="none" stroke={LINE} strokeWidth="14" />
      <circle
        cx="456"
        cy="232"
        r="46"
        fill="none"
        stroke={DB}
        strokeWidth="14"
        strokeDasharray="231 58"
        strokeDashoffset="72"
        strokeLinecap="round"
        transform="rotate(-90 456 232)"
      />
      <text x="456" y="236" fill={TEXT} fontSize="18" fontFamily="monospace" fontWeight="700" textAnchor="middle">80%</text>
      <text x="456" y="300" fill={MUTED} fontSize="9" fontFamily="sans-serif" textAnchor="middle">registros consistentes</text>
    </svg>
  )
}

export function ZendeskMockup({ className = '' }) {
  const tickets = [
    { ch: 'Tienda', subj: 'Cambio de producto', c: '#22c55e', s: 'Resuelto' },
    { ch: 'Web', subj: 'Estado de despacho', c: ZG2, s: 'Abierto' },
    { ch: 'WhatsApp', subj: 'Consulta de garantía', c: ZG2, s: 'Abierto' },
    { ch: 'Teléfono', subj: 'Reclamo facturación', c: '#f59e0b', s: 'Pendiente' },
  ]
  const channels = ['Tienda', 'Ecommerce', 'WhatsApp', 'Teléfono']
  return (
    <svg viewBox="0 0 560 380" className={className} role="img" aria-label="Mockup ilustrativo de mesa de ayuda omnicanal">
      <rect x="2" y="2" width="556" height="376" rx="16" fill={PANEL} stroke={LINE} strokeWidth="2" />
      <rect x="2" y="2" width="556" height="40" rx="16" fill={PANEL2} />
      <rect x="2" y="26" width="556" height="16" fill={PANEL2} />
      <circle cx="26" cy="22" r="5" fill="#ef4444" />
      <circle cx="44" cy="22" r="5" fill="#f59e0b" />
      <circle cx="62" cy="22" r="5" fill="#22c55e" />
      <rect x="200" y="13" width="160" height="18" rx="9" fill={PANEL} />
      <text x="280" y="26" fill={MUTED} fontSize="10" fontFamily="sans-serif" textAnchor="middle">Service · Zendesk</text>

      {/* KPI */}
      {[
        { x: 24, big: 'CSAT 94%', small: 'Satisfacción' },
        { x: 196, big: '−32%', small: 'Tiempo respuesta' },
        { x: 368, big: '13', small: 'Tiendas + ecommerce' },
      ].map((k) => (
        <g key={k.small}>
          <rect x={k.x} y="58" width="168" height="62" rx="12" fill={PANEL2} stroke={LINE} strokeWidth="1" />
          <text x={k.x + 16} y="88" fill={ZG2} fontSize="20" fontFamily="monospace" fontWeight="700">{k.big}</text>
          <text x={k.x + 16} y="106" fill={MUTED} fontSize="10" fontFamily="sans-serif">{k.small}</text>
        </g>
      ))}

      {/* ticket list */}
      <rect x="24" y="136" width="340" height="222" rx="12" fill={PANEL2} stroke={LINE} strokeWidth="1" />
      <text x="40" y="160" fill={TEXT} fontSize="11" fontFamily="sans-serif" fontWeight="600">Tickets omnicanal</text>
      {tickets.map((t, i) => (
        <g key={t.subj}>
          <rect x="40" y={176 + i * 42} width="308" height="34" rx="8" fill={PANEL} />
          <circle cx="58" cy={193 + i * 42} r="5" fill={t.c} />
          <text x="74" y={190 + i * 42} fill={TEXT} fontSize="10.5" fontFamily="sans-serif">{t.subj}</text>
          <text x="74" y={202 + i * 42} fill={MUTED} fontSize="8" fontFamily="sans-serif">{t.ch}</text>
          <rect x="266" y={183 + i * 42} width="70" height="20" rx="10" fill="rgba(45,212,191,0.14)" />
          <text x="301" y={197 + i * 42} fill={ZG2} fontSize="9" fontFamily="sans-serif" textAnchor="middle">{t.s}</text>
        </g>
      ))}

      {/* channels panel */}
      <rect x="376" y="136" width="160" height="222" rx="12" fill={PANEL2} stroke={LINE} strokeWidth="1" />
      <text x="392" y="160" fill={TEXT} fontSize="11" fontFamily="sans-serif" fontWeight="600">Canales unificados</text>
      {channels.map((c, i) => (
        <g key={c}>
          <rect x="392" y={176 + i * 30} width="128" height="22" rx="11" fill={PANEL} stroke={LINE} strokeWidth="1" />
          <circle cx="406" cy={187 + i * 30} r="4" fill={ZG2} />
          <text x="418" y={191 + i * 30} fill={TEXT} fontSize="9.5" fontFamily="sans-serif">{c}</text>
        </g>
      ))}
      <text x="392" y="316" fill={MUTED} fontSize="9" fontFamily="sans-serif">Experiencia consistente</text>
      <rect x="392" y="324" width="128" height="6" rx="3" fill={LINE} />
      <rect x="392" y="324" width="112" height="6" rx="3" fill={ZG2} />
    </svg>
  )
}
