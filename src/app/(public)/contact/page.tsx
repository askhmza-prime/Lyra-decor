export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">

      <p className="uppercase tracking-[4px] text-gold text-sm">
        Contact
      </p>

      <h1 className="font-display text-6xl mt-4">
        Let's Work Together
      </h1>

      <p className="mt-6 text-lg max-w-xl">
        Looking for premium handcrafted brass and metal decor?
        Get in touch with us.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-12">

        <div className="bg-white p-8 rounded-3xl">
          <h3 className="font-display text-3xl mb-4">
            Contact Information
          </h3>

          <p>Email: hello@lyradecor.com</p>
          <p className="mt-2">Phone: +91 76685 21105</p>
          <p className="mt-2">Moradabad, India</p>
        </div>

        <div className="bg-white p-8 rounded-3xl">
          <h3 className="font-display text-3xl mb-4">
            Business Hours
          </h3>

          <p>Monday - Saturday</p>
          <p className="mt-2">9:00 AM - 6:00 PM</p>
        </div>

      </div>

      <div className="mt-16 bg-white p-8 md:p-10 rounded-3xl shadow-sm">

        <h2 className="font-display text-4xl mb-8">
          Send an Inquiry
        </h2>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-200 rounded-xl px-4 py-3"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-200 rounded-xl px-4 py-3"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-200 rounded-xl px-4 py-3"
          />

          <textarea
            rows={5}
            placeholder="Tell us about your requirements..."
            className="w-full border border-gray-200 rounded-xl px-4 py-3 resize-none"
          />

          <button
            type="submit"
            className="bg-dark text-gold3 px-8 py-4 rounded-xl hover:scale-105 transition"
          >
            Send Inquiry
          </button>

        </form>

      </div>

    </main>
  )
}
