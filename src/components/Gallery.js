"use client"
import React from 'react'
import { data } from '@/data/data';
import { FormattedMessage } from 'react-intl';
import GalleryModal from './GalleryModal';


function Gallery() {


    return (
        <section className='relative py-24 overflow-scroll scrollbar-hide bg-[#f7f7f7]' id='gallery'>
            <div className='max-container'>
                <div className='flex flex-col'>
                    <div>
                        <h1 className='w-max mb-16 ml-3 lg:ml-0 heading-primary bg-cover bg-center bg-no-repeat bg-[url(/Green-Brush-bg.png)]'>
                            <FormattedMessage id='gallery.title' defaultMessage="Gallery" />
                        </h1>
                    </div>

                    <div className='grid grid-cols-2 gap-1 px-3 mt-10 md:grid-cols-4 md:gap-5 md:px-32'>
                        {data?.map((item) => (
                            <GalleryModal key={item.pic} pic={item.pic} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery