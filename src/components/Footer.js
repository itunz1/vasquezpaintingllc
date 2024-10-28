"use client"
import React from 'react'
import { Link } from 'react-scroll'

function Footer() {
    return (
        <footer className='relative flex items-center justify-center overflow-hidden lg:pt-[3vw] bg-black'>
            {/* <img className='absolute w-[100%] top-0' src='/white-paint-drops.png' alt='img' /> */}
            <div className='px-6 mx-auto lg:px-20 lg:mt-5 3xl:px-0 max-w-[1440px] flex w-full flex-col gap-14 mt-10'>
                <div className='flex flex-col items-start gap-[10%] md:flex-row'>
                    <Link className='mb-5 cursor-pointer'
                        to='/'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                    >
                        <img className='w-[220px] h-[150px] items-center' src='/AGUILAR-PAINTING.png' alt='company logo' />
                    </Link>
                    <div>
                        <div className='flex flex-wrap gap-20 sm:justify-between md:flex-1'>
                            <div className="flex flex-col gap-5">
                                <h2 className="font-bold text-white whitespace-nowrap">Learn More</h2>
                                <ul className="flex flex-col gap-4 regular-14 text-gray-30">
                                    <Link
                                        className='text-white cursor-pointer'
                                        to='about'
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={800}
                                    >
                                        About
                                    </Link>
                                    <Link
                                        className='text-white cursor-pointer'
                                        to='contact'
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={800}
                                    >
                                        Contact
                                    </Link>
                                    <Link
                                        className='text-white cursor-pointer'
                                        to='services'
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={800}
                                    >
                                        Our services
                                    </Link>
                                    {/* <Link
                                        className='text-white cursor-pointer'
                                        to='contact'
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={800}
                                    >
                                        Careers
                                    </Link> */}
                                </ul>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-5">
                                    <h2 className="font-bold text-white whitespace-nowrap">Contact Us</h2>
                                    <div className="flex flex-col gap-4">
                                        <p className='mb-[-15px] text-white regular-14'>
                                            Marvin Aguilar
                                        </p>
                                        <p className='italic text-white regular-14'>
                                            Aguilarpainting100@gmail.com
                                        </p>
                                        <p className='text-white regular-14'>
                                            (828) 273-1848
                                        </p>
                                        {/* <p className='text-white regular-14'>
                                            828-476-7442 Calls & Msgs
                                        </p> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="border bg-gray-20" />
                <p className="w-full mb-12 text-center text-white regular-14">2024 AguilarpaintingservicesLLC | All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer