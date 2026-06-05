export default function WishlistPage() {
  return (
    <section className="bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <p className="uppercase tracking-[4px] text-gold text-sm">
          Wishlist
        </p>

        <h1 className="font-display text-6xl mt-3 mb-10">
          Saved Items
        </h1>

        <div className="bg-white rounded-3xl p-10">

          <h2 className="font-display text-4xl">
            No Saved Products
          </h2>

          <p className="text-lyra-muted mt-4">
            Products you love will appear here.
          </p>

        </div>

      </div>
    </section>
  )
}
