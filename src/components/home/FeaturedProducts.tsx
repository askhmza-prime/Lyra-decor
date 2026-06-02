export default function FeaturedProducts() {
  const products = [
    "Brass Vase",
    "Metal Wall Art",
    "Decor Lamp",
    "Luxury Bowl",
  ]

  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="font-display text-5xl text-center mb-16">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:-translate-y-2 transition duration-300"
            >

              <div className="h-72 bg-cream2" />

              <div className="p-5">

                <h3 className="font-display text-2xl">
                  {item}
                </h3>

                <p className="mt-2 text-lyra-muted">
                  Premium handcrafted decor
                </p>

                <button className="mt-4 w-full bg-dark text-gold3 py-3 rounded-xl">
                  View Product
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}
