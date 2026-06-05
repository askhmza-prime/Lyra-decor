import Link from 'next/link'

  export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const products = [
  {
    id: 'brass-vase',
    name: 'Brass Vase',
    price: '₹4,999',
    description:
      'Luxury handcrafted brass vase designed for premium interiors.',
  },

  {
    id: 'wall-art',
    name: 'Metal Wall Art',
    price: '₹7,499',
    description:
      'Elegant handcrafted metal wall art for modern living spaces.',
  },

  {
    id: 'decor-lamp',
    name: 'Decor Lamp',
    price: '₹5,999',
    description:
      'Premium decorative lamp crafted to elevate luxury interiors.',
  },

  {
    id: 'luxury-bowl',
    name: 'Luxury Bowl',
    price: '₹3,499',
    image: '/products/luxury-bowl.jpg',
    description:
      'Handcrafted brass bowl with timeless luxury aesthetics.',
  },
]

const product =
  products.find((item) => item.id === id) || products[0]

  return (
    <section className="bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Product Image */}
          <div className="bg-cream2 rounded-3xl h-[500px] flex items-center justify-center">
            <span className="text-lyra-muted text-lg">
              Product Image
            </span>
          </div>

          {/* Product Info */}
          <div>

            <p className="uppercase tracking-[4px] text-gold text-sm mb-4">
              Lyra Decor
            </p>

            <h1 className="font-display text-5xl mb-6">
              {product.name}
            </h1>

            <p className="text-3xl font-semibold mb-6">
              {product.price}
            </p>

            <p className="text-lyra-muted text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="flex gap-4">

              <button className="bg-dark text-gold3 px-8 py-4 rounded-xl hover:scale-105 transition">
                Add To Cart
              </button>

              <button className="border border-gold px-8 py-4 rounded-xl hover:bg-cream2 transition">
                Buy Now
              </button>

            </div>

          </div>

        </div>

        {/* Related Products */}

<div className="mt-24">

  <h2 className="font-display text-4xl mb-10">
    Related Products
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    {[
      {
        name: "Brass Vase",
        slug: "brass-vase",
      },
      {
        name: "Wall Art",
        slug: "wall-art",
      },
      {
        name: "Luxury Bowl",
        slug: "luxury-bowl",
      },
    ].map((item) => (
      <div
        key={item.slug}
        className="bg-white rounded-3xl overflow-hidden shadow-sm"
      >
        <div className="h-56 bg-cream2" />

        <div className="p-6">

          <h3 className="font-display text-2xl">
            {item.name}
          </h3>

          <p className="mt-2 text-lyra-muted">
            Premium handcrafted decor
          </p>

          <Link
            href={`/product/${item.slug}`}
            className="mt-4 inline-block bg-dark text-gold3 px-5 py-2 rounded-lg"
          >
            View
          </Link>

        </div>

      </div>
    ))}

  </div>

</div>
        
  </div>  
</section>

)
  }
