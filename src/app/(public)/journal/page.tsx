export default function JournalPage() {
  const posts = [
    {
      title: "Luxury Brass Craftsmanship",
      image: "/products/brass-vase.jpg",
      description:
        "Discover the artistry behind handcrafted brass decor collections.",
    },
    {
      title: "Modern Metal Wall Art",
      image: "/products/metal-wall-art.jpg",
      description:
        "Explore elegant wall art pieces designed for luxury interiors.",
    },
    {
      title: "Lighting That Elevates Spaces",
      image: "/products/decor-lamp.jpg",
      description:
        "How premium lighting transforms the atmosphere of your home.",
    },
  ]

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">

      <p className="uppercase tracking-[4px] text-gold text-sm">
        Lyra Journal
      </p>

      <h1 className="font-display text-6xl mt-4">
        Design Stories & Inspiration
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mt-12">

        {posts.map((post) => (
          <article
            key={post.title}
            className="bg-white rounded-3xl overflow-hidden shadow-sm"
          >

            <div className="h-56 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">

              <h2 className="font-display text-3xl">
                {post.title}
              </h2>

              <p className="mt-3 text-lyra-muted">
                {post.description}
              </p>

            </div>

          </article>
        ))}

      </div>

    </main>
  )
}
