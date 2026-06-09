import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
  <Navbar />

  {children}

  <a
    href="https://wa.me/917668521105?text=Hello%20Lyra%20Decor%2C%20I%20am%20interested%20in%20your%20products."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
  >
    💬
  </a>

  <Footer />
</body>
    </html>
    )
}
