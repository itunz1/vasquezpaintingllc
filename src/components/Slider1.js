"use client"
import React from 'react'
import Slider from "react-slick";
import { Link } from "react-scroll";
import Image from "next/image";
import { FormattedMessage } from 'react-intl';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Slider1() {

    const settings = {
        className: "w-[100%] h-[100%]",
        dots: false,
        fade: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 0,
                    infinite: false,
                    dots: false,
                    autoplay: false,
                },
            }
        ]
    }

    return (
        <section className='min-h-[70vh] mx-auto' id="/" >
            <Slider {...settings}>
                <div className='pt-[3rem] pb-[6rem] hero-img items-center min-h-[70vh]'>
                    <div className='px-5 lg:w-[90rem] grid grid-cols-1 lg:grid-cols-2 gap-[6rem] items-center mx-auto mt-12'>
                        <div className=''>
                            <h1 className='text-4xl text-center text-white lg:text-left heading-primary'>
                                <FormattedMessage id='hero.title' defaultMessage='Title' />
                            </h1>
                            <p className='mb-12 text-xl leading-tight text-center text-gray-200 lg:text-left'>
                                <FormattedMessage id='hero.subTitle' defaultMessage="subTitle" />
                            </p>
                            <div className="flex flex-col justify-center gap-5 px-16 lg:px-0 md:flex-row lg:justify-start">
                                <Link
                                    className='relative z-50 flex justify-center px-8 py-3 text-xl text-white cursor-pointer md:inline-block lg:mr-4 rounded-xl font-customm bg-green-app hover:bg-greenLigth-app'
                                    to='contact'
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                >
                                    <FormattedMessage id='hero.link1' defaultMessage="Get our services" />
                                </Link>
                                <Link
                                    className='relative z-50 flex justify-center px-8 py-3 text-xl text-white cursor-pointer md:inline-block rounded-xl font-customm bg-yellow-app hover:bg-yellowLigth-app'
                                    to='services'
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                >
                                    <FormattedMessage id='hero.link2' defaultMessage="Learn more" /> &darr;
                                </Link>
                            </div>
                            <div className="flex flex-wrap gap-5 my-11">
                                <div className="flex items-center gap-2">
                                    {Array(5).fill(1).map((_, index) => (
                                        <Image src="/star.svg" alt="star" key={index} width={24} height={24} />
                                    ))}
                                </div>
                                <p className="text-white lg:text-xl bold-16 lg:font-semibold text-blue-70">
                                    <FormattedMessage id='hero.review' defaultMessage="Excellent Reviews" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="min-h-[70vh]">
                    <Image src='/banner-slider-1.jpg' alt='banner logo' fill />
                </div>

                <div className="min-h-[70vh]">
                    <Image src='/banner-slider-2.jpg' alt='banner logo 2' fill />
                </div>
            </Slider>
        </section >
    )
}

export default Slider1