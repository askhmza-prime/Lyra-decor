export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">

      <p className="uppercase tracking-[4px] text-gold text-sm">
        About Lyra Decor
      </p>

      <h1 className="font-display text-6xl mt-4">
        Crafted With Passion
      </h1>

      <p className="mt-8 text-lg leading-relaxed text-lyra-muted">
        Lyra Decor specializes in handcrafted brass and
        metal decor pieces that blend timeless artistry
        with modern luxury. Every piece is designed to
        elevate homes, hotels, and premium interiors.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-16">

        <div className="bg-white p-8 rounded-3xl">
          <h3 className="font-display text-3xl mb-3">
            Handmade
          </h3>
          <p>
            Crafted with attention to detail.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl">
          <h3 className="font-display text-3xl mb-3">
            Premium Quality
          </h3>
          <p>
            Built using quality materials.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl">
          <h3 className="font-display text-3xl mb-3">
            Timeless Design
          </h3>
          <p>
            Designed for elegant interiors.
          </p>
        </div>

      </div>

    </main>
  )
}
