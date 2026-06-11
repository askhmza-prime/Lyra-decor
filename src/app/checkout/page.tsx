'use client'

import { useCartStore } from '@/store/cartStore'

export default function CheckoutPage() {
  const cart = useCartStore((state) => state.cart)

  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price.replace(/[₹,]/g, '')),
    0
  )

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">

      <p className="uppercase tracking-[4px] text-gold text-sm">
        Checkout
      </p>

      <h1 className="font-display text-6xl mt-3 mb-12">
        Complete Order
      </h1>

      <div className="grid lg:grid-cols-2 gap-8">

        <div className="bg-white rounded-3xl p-8">

          <div className="grid gap-6">

            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-xl p-4"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border rounded-xl p-4"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="border rounded-xl p-4"
            />

            <input
              type="text"
              placeholder="Address"
              className="border rounded-xl p-4"
            />

            <input
              type="text"
              placeholder="City"
              className="border rounded-xl p-4"
            />

            <input
              type="text"
              placeholder="Pincode"
              className="border rounded-xl p-4"
            />

            <button
              className="bg-dark text-gold3 py-4 rounded-xl"
            >
              Place Order
            </button>

          </div>

        </div>

        <div className="bg-white rounded-3xl p-8 h-fit">

          <h2 className="font-display text-3xl mb-6">
            Order Summary
          </h2>

          <div className="space-y-4">

            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between"
              >
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
            ))}

            <div className="border-t pt-4 flex justify-between font-semibold text-xl">
              <span>Total</span>
              <span>
                ₹{total.toLocaleString()}
              </span>
            </div>

          </div>

        </div>

      </div>

    </main>
  )
}
