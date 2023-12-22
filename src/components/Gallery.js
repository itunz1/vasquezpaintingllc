"use client"
import React from 'react'
import { data } from '@/data/data';

function Gallery() {


  return (
    <section className='py-24 bg-gradient-to-tr from-green-app to-greenLigth-app'>
        <div className='flex flex-col'>
            <div>
                <h1 className='heading-primary'>Gallery</h1>
            </div>

            <div className='grid grid-cols-4 gap-1 md:gap-5 md:px-32'>
                {data?.map((item) => (
                    <div className='shadow-xl rounded-[15px]'>
                        <img className='rounded-[15px]' src={item.pic} alt='gallery image'/>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Gallery