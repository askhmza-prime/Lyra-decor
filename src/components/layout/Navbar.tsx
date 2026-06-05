import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-black/5">

      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          <Link
            href="/"
            className="font-display text-3xl text-gold"
          >
            Lyra Decor
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">

            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/journal">Journal</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>

          </nav>

          <div className="flex items-center gap-4 text-xl">

            <button className="hover:scale-110 transition">
              <Link href="/search">
  🔍
</Link>
            </button>

            <button className="hover:scale-110 transition">
              <Link href="/wishlist">
  ♡
</Link>
            </button>

            <button className="hover:scale-110 transition">
              <Link href="/cart">
              🛒
              </Link>
            </button>

          </div>

        </div>

      </div>

    </header>
  )
}
