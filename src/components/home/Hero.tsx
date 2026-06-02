export default function Hero() {
  return (
    <section className="bg-red-500 min-h-screen">

      <div className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <div className="bg-yellow-400 h-[500px] rounded-3xl flex items-center justify-center text-4xl font-bold">
              IMAGE
            </div>
          </div>

          <div>

            <p className="uppercase tracking-[6px] text-white text-sm mb-4">
              Luxury Metal Handicrafts
            </p>

            <h1 className="text-6xl lg:text-8xl font-bold text-white">
              Lyra Decor
            </h1>

            <p className="text-xl text-white mt-6 max-w-lg">
              Handcrafted brass and metal decor pieces designed
              for luxury homes and elegant interiors.
            </p>

            <div className="mt-8 flex gap-4">

              <button className="bg-black text-white px-8 py-4 rounded-xl">
                Shop Now
              </button>

              <button className="bg-white text-black px-8 py-4 rounded-xl">
                Explore
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
