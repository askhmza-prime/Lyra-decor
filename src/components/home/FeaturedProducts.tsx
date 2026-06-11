'use client'

import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'

export default function FeaturedProducts() {
  const addToCart = useCartStore((state) => state.addToCart)

  const products = [
    {
      id: '1',
      name: 'Brass Vase',
      price: '₹4,999',
      slug: 'brass-vase',
      image: '/products/brass-vase.jpg',
    },
    {
      id: '2',
      name: 'Metal Wall Art',
      price: '₹7,999',
      slug: 'wall-art',
      image: '/products/metal-wall-art.jpg',
    },
    {
      id: '3',
      name: 'Decor Lamp',
      price: '₹5,499',
      slug: 'decor-lamp',
      image: '/products/decor-lamp.jpg',
    },
    {
      id: '4',
      name: 'Luxury Bowl',
      price: '₹3,999',
      slug: 'luxury-bowl',
      image: '/products/luxury-bowl.jpg',
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
              key={item.id}
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
                  {item.price}
                </p>

                <div className="mt-4 flex flex-col gap-3">

                  <button
                    onClick={() => {
  alert("ADDING")
  addToCart(item)
}}
                    className="w-full bg-black text-white py-3 rounded-xl"
                  >
                    Add To Cart
                  </button>

                  <Link
                    href={`/product/${item.slug}`}
                    className="w-full border border-black py-3 rounded-xl text-center"
                  >
                    View Product
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}
