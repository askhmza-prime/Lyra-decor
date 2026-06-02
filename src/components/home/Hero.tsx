export default function Hero() {
  return (
    <section className="bg-cream">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 overflow-hidden rounded-3xl bg-white shadow-sm">

          {/* Image Side */}
          <div className="relative min-h-[500px] bg-cream2">

            <img
              src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200"
              alt="Luxury Decor"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />

          </div>

          {/* Content Side */}
          <div className="flex flex-col justify-center p-10 lg:p-16">

            <p className="uppercase tracking-[5px] text-gold text-sm mb-4">
              Luxury Collection
            </p>

            <h1 className="font-display text-5xl lg:text-7xl leading-tight">
              Crafted by Nature
              <br />
              Inspired by Earth
            </h1>

            <p className="mt-6 text-lyra-muted text-lg max-w-md">
              Discover handcrafted luxury decor designed
              to elevate modern living spaces with timeless elegance.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="bg-dark text-gold3 px-8 py-4 rounded-xl hover:scale-105 transition">
                Shop Collection
              </button>

              <button className="border border-gold px-8 py-4 rounded-xl hover:bg-cream2 transition">
                Explore More
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
