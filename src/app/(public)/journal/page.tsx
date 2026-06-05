export default function JournalPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">

      <p className="uppercase tracking-[4px] text-gold text-sm">
        Lyra Journal
      </p>

      <h1 className="font-display text-6xl mt-4">
        Design Stories & Inspiration
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mt-12">

        {[1,2,3].map((post) => (
          <article
            key={post}
            className="bg-white rounded-3xl overflow-hidden shadow-sm"
          >
            <div className="h-56 bg-cream2" />

            <div className="p-6">
              <h2 className="font-display text-3xl">
                Luxury Brass Craftsmanship
              </h2>

              <p className="mt-3 text-lyra-muted">
                Discover the artistry behind handcrafted
                brass decor collections.
              </p>
            </div>
          </article>
        ))}

      </div>

    </main>
  )
}
