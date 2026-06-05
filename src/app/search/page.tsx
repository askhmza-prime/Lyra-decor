export default function SearchPage() {
  return (
    <section className="bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <p className="uppercase tracking-[4px] text-gold text-sm">
          Search
        </p>

        <h1 className="font-display text-6xl mt-3 mb-10">
          Find Products
        </h1>

        <input
          type="text"
          placeholder="Search luxury decor..."
          className="w-full bg-white rounded-2xl px-6 py-4 border"
        />

        <div className="mt-10 bg-white rounded-3xl p-10">
          <h2 className="font-display text-3xl">
            Search Results
          </h2>

          <p className="text-lyra-muted mt-4">
            Products matching your search will appear here.
          </p>
        </div>

      </div>
    </section>
  )
}
