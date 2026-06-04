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
          <p className="mt-2">Phone: +91 XXXXX XXXXX</p>
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

    </main>
  )
}
