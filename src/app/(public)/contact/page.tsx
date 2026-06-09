</div>

      {/* Contact Form */}

      <div className="mt-16 bg-white p-8 md:p-10 rounded-3xl shadow-sm">

        <h2 className="font-display text-4xl mb-8">
          Send an Inquiry
        </h2>

        <form className="space-y-6">

          <div>
            <label className="block mb-2 text-sm">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-gold"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-gold"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-gold"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">
              Message
            </label>

            <textarea
              rows={5}
              placeholder="Tell us about your requirements..."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-gold resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-dark text-gold3 px-8 py-4 rounded-xl hover:scale-105 transition"
          >
            Send Inquiry
          </button>

        </form>

      </div>

    </main>
