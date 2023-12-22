import About from '@/components/About'
import Contact from '@/components/Contact'
import Gallery from '@/components/Gallery'
import Service from '@/components/Service'
import Slider1 from '@/components/Slider1'

export default function Home() {
  return (
    <main className="">
      <Slider1 />
      <About />
      <Service />
      <Gallery />
      <Contact />
    </main>
  )
}
