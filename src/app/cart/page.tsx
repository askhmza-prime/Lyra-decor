export default function CartPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">

      <p className="uppercase tracking-[4px] text-gold text-sm">
        Shopping Cart
      </p>

      <h1 className="font-display text-6xl mt-3">
        Your Cart
      </h1>

      <div className="mt-12 bg-white rounded-3xl p-8">

        <h2 className="font-display text-3xl">
          Cart Empty
        </h2>

        <p className="mt-4 text-lyra-muted">
          Add products to continue shopping.
        </p>

      </div>

    </main>
  )
}
