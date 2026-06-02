import Hero from '@/components/home/Hero'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import Categories from '@/components/home/Categories'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Newsletter from '@/components/home/Newsletter'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <WhyChooseUs />
      <Newsletter />
    </main>
  )
}
