"use client"
import About from '@/components/About'
import Contact from '@/components/Contact'
import Gallery from '@/components/Gallery'
import Service from '@/components/Service'
import Slider1 from '@/components/Slider1'
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
    <main className="">
      <Slider1 />
      <About />
      <Service />
      <Gallery />
      <Contact />
    </main>
    </NextUIProvider>
  )
}
