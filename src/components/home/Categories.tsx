export default function Categories() {
const categories = [
{
name: "Brass Decor",
image: "/products/brass-vase.jpg",
},
{
name: "Metal Art",
image: "/products/metal-wall-art.jpg",
},
{
name: "Luxury Lighting",
image: "/products/decor-lamp.jpg",
},
{
name: "Handcrafted Pieces",
image: "/products/luxury-bowl.jpg",
},
]

return (
<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">

    <h2 className="font-display text-5xl text-center mb-16">
      Shop By Category
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {categories.map((item) => (
        <div
          key={item.name}
          className="relative h-64 rounded-2xl overflow-hidden hover:scale-105 transition"
        >
          <img
            src={item.image}
            alt={item.name}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="font-display text-3xl text-white">
              {item.name}
            </h3>
          </div>
        </div>
      ))}

    </div>

  </div>
</section>

)
}
