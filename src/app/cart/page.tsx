'use client'

import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'

export default function CartPage() {
  const cart = useCartStore((state) => state.cart)

  const removeFromCart = useCartStore(
    (state) => state.removeFromCart
  )

  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price.replace(/[₹,]/g, '')),
    0
  )

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">

      <p className="uppercase tracking-[4px] text-gold text-sm">
        Shopping Cart
      </p>

      <h1 className="font-display text-6xl mt-3">
        Your Cart
      </h1>

      <div className="mt-12 bg-white rounded-3xl p-8">

        {cart.length === 0 ? (
          <>
            <h2 className="font-display text-3xl">
              Cart Empty
            </h2>

            <p className="mt-4 text-lyra-muted">
              Add products to continue shopping.
            </p>
          </>
        ) : (
          <>
            <h2 className="font-display text-3xl mb-8">
              Cart Items
            </h2>

            <div className="space-y-4">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div>
                    <h3 className="font-medium">
                      {item.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">

                    <div className="font-semibold">
                      {item.price}
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500"
                    >
                      Remove
                    </button>

                  </div>

                </div>
              ))}

            </div>

            <div className="mt-8 border-t pt-6">

              <div className="flex justify-between text-xl font-semibold">
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>

              <Link
                href="/checkout"
                className="mt-6 block text-center bg-dark text-gold3 py-4 rounded-xl"
              >
                Proceed To Checkout
              </Link>

            </div>

          </>
        )}

      </div>

    </main>
  )
}
