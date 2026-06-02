import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="font-display text-3xl tracking-wide"
        >
          Lyra <span className="text-gold">Decor</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
          <Link href="/">Home</Link>
          <Link href="/collections">Shop</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4 text-lg">
          <button className="hover:scale-110 transition">
            🔍
          </button>

          <button className="hover:scale-110 transition">
            ♡
          </button>

          <button className="hover:scale-110 transition">
            🛒
          </button>
        </div>

      </div>
    </header>
  )
}
