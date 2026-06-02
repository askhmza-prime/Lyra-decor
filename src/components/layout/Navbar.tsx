export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <h1 className="font-display text-3xl">
          Lyra <span className="text-gold">Decor</span>
        </h1>

        <div className="hidden md:flex gap-8 text-sm">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/categories">Categories</a>
          <a href="/journal">Journal</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <button className="bg-dark text-gold3 px-4 py-2">
          Cart
        </button>
      </div>
    </nav>
  )
}
