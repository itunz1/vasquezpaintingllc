import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <section className='pt-[3rem] pb-[6rem] hero-img items-center min-h-[70vh]'>
      <div className='w-[81rem] px-[2rem] grid grid-cols-2 gap-[6rem] items-center mx-auto'>
        <div className=''>
          <h1 className='text-white heading-primary'>Vasquezpaintingllc Delivering Immaculate Finishes, Every Time </h1>
          <p className='mb-12 text-xl leading-tight text-gray-200'>With more than 10 years of experience we make look your house brand new. Painting More Than Just Walls we
            offer Pressure Wash, drywall & trim
          </p>
          <Link className='inline-block px-8 py-3 mr-4 text-xl text-white rounded-xl font-customm bg-green-app hover:bg-greenLigth-app' href='/'>Get our services</Link>
          <Link className='inline-block px-8 py-3 text-xl text-white rounded-xl font-customm bg-yellow-app hover:bg-yellowLigth-app' href='/'>Learn more &darr;</Link>
          <div className="flex flex-wrap gap-5 my-11">
            <div className="flex items-center gap-2">
              {Array(5).fill(1).map((_, index) => (
                <Image src="/star.svg" alt="star" key={index} width={24} height={24} />
              ))}
            </div>
            <p className="text-white lg:text-xl bold-16 lg:font-semibold text-blue-70">
              Excellent Reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero