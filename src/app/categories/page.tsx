export default function CategoriesPage() {
  const categories = [
    {
      title: "Brass Decor",
      desc: "Luxury brass handcrafted pieces",
    image: "/products/brass-vase.jpg",
    },
    {
      title: "Metal Wall Art",
      desc: "Premium decorative wall pieces",
      image: "/products/metal-wall-art.jpg",
    },
    {
      title: "Luxury Lighting",
      desc: "Elegant lamps and lighting",
      image: "/products/decor-lamp.jpg",
    },
    {
      title: "Handcrafted Collection",
      desc: "Unique artisan creations",
      image: "/products/luxury-bowl",
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
            <div className="h-40 rounded-2xl overflow-hidden mb-6">
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-full object-cover"
  />
</div>

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
