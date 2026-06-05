import Link from 'next/link'

export default function ShopPage() {
  const products = [
    {
      name: "Luxury Brass Vase",
      price: "₹4,999",
      category: "Brass Decor",
      slug: "brass-vase",
    },
    {
      name: "Handcrafted Wall Art",
      price: "₹7,499",
      category: "Wall Art",
      slug: "wall-art",
    },
    {
      name: "Premium Candle Holder",
      price: "₹2,999",
      category: "Decor",
      slug: "premium-candle-holder",
    },
    {
      name: "Royal Brass Bowl",
      price: "₹3,499",
      category: "Luxury Collection",
      slug: "royal-brass-bowl",
    },
  ]

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">

      <div className="mb-12">
        <p className="uppercase tracking-[4px] text-gold text-sm">
          Lyra Decor
        </p>

        <h1 className="font-display text-5xl md:text-7xl mt-3">
          Shop Collection
        </h1>

        <p className="text-lyra-muted mt-4 max-w-xl">
          Discover handcrafted brass and metal decor
          pieces designed for luxury interiors.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {products.map((product) => (
          <div
            key={product.name}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
          >
            <div className="h-64 bg-cream2" />

            <div className="p-5">

              <p className="text-xs uppercase tracking-widest text-gold">
                {product.category}
              </p>

              <h3 className="font-display text-2xl mt-2">
                {product.name}
              </h3>

              <div className="flex items-center justify-between mt-5">

                <span className="font-semibold">
                  {product.price}
                </span>

                <Link
                  href={`/product/${product.slug}`}
                  className="bg-dark text-gold3 px-4 py-2 rounded-xl"
                >
                  View
                </Link>

              </div>

            </div>
          </div>
        ))}

      </div>

    </main>
  )
}
