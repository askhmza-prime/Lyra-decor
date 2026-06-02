export default function Newsletter() {
  return (
    <section className="py-24 bg-dark text-white">

      <div className="max-w-3xl mx-auto px-6 text-center">

        <h2 className="font-display text-5xl mb-6">
          Join Our Newsletter
        </h2>

        <p className="mb-8 text-gray-300">
          Get updates on new collections and exclusive offers.
        </p>

        <div className="flex flex-col md:flex-row gap-4">

          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-4 rounded-xl text-black"
          />

          <button className="bg-gold text-black px-8 py-4 rounded-xl">
            Subscribe
          </button>

        </div>

      </div>

    </section>
  )
}
