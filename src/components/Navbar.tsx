import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Havuz Bakım
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Ana Sayfa
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600">
              Hizmetler
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 