import Link from 'next/link'

export default function Header(){
  return (
    <header className="bg-black bg-opacity-60 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Livelook" className="w-10 h-10" />
          <Link href="/"><a className="text-xl font-semibold">Livelook</a></Link>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="/"><a className="text-sm text-gray-200">Ana Sayfa</a></Link>
          <Link href="/products"><a className="text-sm text-gray-200">Ürünler</a></Link>
          <Link href="/about"><a className="text-sm text-gray-200">Hakkında</a></Link>
          <Link href="/contact"><a className="text-sm text-gray-200">İletişim</a></Link>
        </nav>
      </div>
    </header>
  )
}
