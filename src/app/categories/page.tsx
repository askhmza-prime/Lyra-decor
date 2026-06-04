export default function CategoriesPage() {
  const categories = [
    {
      title: "Brass Decor",
      desc: "Luxury brass handcrafted pieces",
    },
    {
      title: "Metal Wall Art",
      desc: "Premium decorative wall pieces",
    },
    {
      title: "Luxury Lighting",
      desc: "Elegant lamps and lighting",
    },
    {
      title: "Handcrafted Collection",
      desc: "Unique artisan creations",
    },
  ]

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">

      <p className="uppercase tracking-[4px] text-gold text-sm">
        Categories
      </p>

      <h1 className="font-display text-6xl mt-4">
        Browse Collections
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mt-12">

        {categories.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-3xl p-10 shadow-sm hover:-translate-y-1 transition"
          >
            <div className="h-40 bg-cream2 rounded-2xl mb-6" />

            <h2 className="font-display text-4xl">
              {item.title}
            </h2>

            <p className="mt-3 text-lyra-muted">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </main>
  )
}
