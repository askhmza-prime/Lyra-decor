export default function Footer() {
  return (
    <footer className="mt-24 bg-white border-t border-black/5">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h2 className="font-display text-4xl text-gold">
              Lyra Decor
            </h2>

            <p className="mt-4 text-lyra-muted">
              Premium handcrafted brass and metal decor
              for luxury interiors.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Company
            </h3>

            <ul className="space-y-2">
              <li>About</li>
              <li>Journal</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Collections
            </h3>

            <ul className="space-y-2">
              <li>Brass Decor</li>
              <li>Wall Art</li>
              <li>Lighting</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t text-center text-sm text-lyra-muted">
          © 2026 Lyra Decor. All rights reserved.
        </div>

      </div>

    </footer>
  )
}
