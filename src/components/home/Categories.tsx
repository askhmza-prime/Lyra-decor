export default function Categories() {
  const categories = [
    "Brass Decor",
    "Metal Art",
    "Luxury Lighting",
    "Handcrafted Pieces",
  ]

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="font-display text-5xl text-center mb-16">
          Shop By Category
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((item) => (
            <div
              key={item}
              className="h-64 bg-cream2 rounded-2xl flex items-end p-6 hover:scale-105 transition"
            >
              <h3 className="font-display text-3xl">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}
