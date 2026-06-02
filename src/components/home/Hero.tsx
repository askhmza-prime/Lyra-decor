export default function Hero() {
  return (
    <section className="bg-cream min-h-[90vh]">

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <div className="w-full h-[500px] bg-cream2 rounded-xl" />
        </div>

        <div>
          <p className="uppercase tracking-[4px] text-gold text-sm">
            Luxury Collection
          </p>

          <h1 className="font-display text-6xl mt-4">
            Crafted by Nature
            <br />
            Inspired by Earth
          </h1>

          <p className="mt-6 text-lyra-muted">
            Explore handcrafted decor designed to elevate
            modern spaces.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-dark text-gold3 px-6 py-3">
              Shop Now
            </button>

            <button className="border px-6 py-3">
              Collections
            </button>
          </div>
        </div>

      </div>

    </section>
  )
}
