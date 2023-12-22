import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Service from '@/components/Service'
import Slider1 from '@/components/Slider1'

export default function Home() {
  return (
    <main className="">
      <Slider1 />
      {/* <Hero /> */}
      <Service />
      <Contact />
    </main>
  )
}
