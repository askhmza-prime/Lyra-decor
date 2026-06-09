import Link from 'next/link'

export default function FeaturedProducts() {
  const products = [
  {
    name: "Brass Vase",
    slug: "brass-vase",
    image: "/products/brass-vase.jpg",
  },
  {
    name: "Metal Wall Art",
    slug: "wall-art",
    image: "/products/metal-wall-art.jpg",
  },
  {
    name: "Decor Lamp",
    slug: "decor-lamp",
    image: "/products/decor-lamp.jpg",
  },
  {
    name: "Luxury Bowl",
    slug: "luxury-bowl",
    image: "/products/luxury-bowl.jpg",
  },
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
              key={item.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:-translate-y-2 transition duration-300"
            >

              <div className="h-72 overflow-hidden">
  <img
    src={item.image}
    alt={item.name}
    className="w-full h-full object-cover"
  />
</div>

              <div className="p-5">

                <h3 className="font-display text-2xl">
                  {item.name}
                </h3>

                <p className="mt-2 text-lyra-muted">
                  Premium handcrafted decor
                </p>

                <Link
                  href={`/product/${item.slug}`}
                  className="mt-4 w-full bg-dark text-gold3 py-3 rounded-xl block text-center"
                >
                  View Product
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}
