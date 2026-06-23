export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10 py-8">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Pablo Hurtado. Todos los derechos reservados.</p>
        <p className="text-gray-600">IA · Customer Intelligence · Transformación Digital</p>
      </div>
    </footer>
  )
}
