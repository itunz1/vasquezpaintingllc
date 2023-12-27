"use client"
import React from 'react'
import { Link } from 'react-scroll'

function Footer() {
    return (
        <footer className='relative flex items-center justify-center overflow-hidden lg:pt-[3vw] bg-greenLigth-app'>
            <img className='absolute w-[100%] top-0' src='/white-paint-drops.png' alt='img' />
            <div className='mt-36 px-6 mx-auto lg:px-20 3xl:px-0 max-w-[1440px] flex w-full flex-col gap-14'>
                <div className='flex flex-col items-start gap-[10%] md:flex-row'>
                    <Link className='mb-5 cursor-pointer'
                        to='/'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                    >
                        <img className='w-[220px] h-[80px]' src='/vasquez.png' alt='company logo' />
                    </Link>
                    <div>
                        <div className='flex flex-wrap gap-20 sm:justify-between md:flex-1'>
                            <div className="flex flex-col gap-5">
                                <h4 className="font-bold whitespace-nowrap">Learn More</h4>
                                <ul className="flex flex-col gap-4 regular-14 text-gray-30">
                                    <Link
                                        className='cursor-pointer'
                                        to='about'
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={800}
                                    >
                                        About Vasquespaintingllc
                                    </Link>
                                    <Link
                                        className='cursor-pointer'
                                        to='contact'
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={800}
                                    >
                                        Contact Us
                                    </Link>
                                    <Link
                                        className='cursor-pointer'
                                        to='services'
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={800}
                                    >
                                        Our services
                                    </Link>
                                    <Link
                                        className='cursor-pointer'
                                        to='contact'
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={800}
                                    >
                                        Careers
                                    </Link>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-5">
                                    <h4 className="font-bold whitespace-nowrap">Contact Us</h4>
                                    <div className="flex flex-col gap-4">
                                        <p className='regular-14'>
                                            jm1vasquezpainting@gmail.com
                                        </p>
                                        <p className='regular-14'>
                                            828-337-9938 Msg.Only
                                        </p>
                                        <p className='regular-14'>
                                            828-476-7442 Calls & Msg
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="border bg-gray-20" />
                <p className="w-full mb-12 text-center regular-14 text-gray-30">2023 Vasquezpaintingllc | All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer