'use client'

import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'

export default function Navbar() {
  const cart = useCartStore((state) => state.cart)

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

            <Link href="/search">
              🔍
            </Link>

            <Link href="/wishlist">
              ♡
            </Link>

            <Link
              href="/cart"
              className="relative"
            >
              🛒

              {cart.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>

          </div>

        </div>
      </div>
    </header>
  )
}
