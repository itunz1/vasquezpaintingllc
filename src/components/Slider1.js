"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";


function Slider1() {

    const settings = {
        className: "w-[100%] h-[100%]",
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
    };

    return (
        <section className='min-h-[70vh] mx-auto pb-24'>
            <Slider {...settings}>
                <div className='pt-[3rem] pb-[6rem] hero-img items-center min-h-[70vh]'>
                    <div className='lg:w-[90rem] grid grid-cols-1 lg:grid-cols-2 gap-[6rem] items-center mx-auto mt-12'>
                        <div className=''>
                            <h1 className='text-4xl text-center text-white heading-primary'>Vasquezpaintingllc Delivering Immaculate Finishes, Every Time </h1>
                            <p className='mb-12 text-xl leading-tight text-center text-gray-200 lg:text-left'>With more than 10 years of experience we make look your house brand new. Painting More Than Just Walls we
                                offer Pressure Wash, drywall & trim
                            </p>
                            <div className="flex flex-col gap-5 px-16">
                                <Link className='relative z-50 inline-block px-8 py-3 text-xl text-white lg:mr-4 rounded-xl font-customm bg-green-app hover:bg-greenLigth-app' href='/'>Get our services</Link>
                                <Link className='relative z-50 inline-block px-8 py-3 text-xl text-white rounded-xl font-customm bg-yellow-app hover:bg-yellowLigth-app' href='/'>Learn more &darr;</Link>
                            </div>
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
                </div>
                <div className="bg-[url(/banner-slider-1.jpg)] bg-no-repeat bg-cover bg-center min-h-[70vh]">

                </div>

                <div className="bg-[url(/banner-slider-2.jpg)] bg-no-repeat bg-cover bg-center min-h-[70vh]">

                </div>
            </Slider>
        </section>
    )
}

export default Slider1