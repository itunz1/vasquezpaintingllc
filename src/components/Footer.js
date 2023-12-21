"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer className='relative flex items-center justify-center overflow-hidden bg-green-app'>
            <img className='absolute top-0' src='/white-paint-drops.png' alt='img' />
            <div className='mt-36 px-6 mx-auto lg:px-20 3xl:px-0 max-w-[1440px] flex w-full flex-col gap-14'>
                <div className='flex flex-col items-start gap-[10%] md:flex-row'>
                    <Link href='/'>
                        Logo
                    </Link>
                    <div>
                        <div className='flex flex-wrap gap-20 sm:justify-between md:flex-1'>
                            <div className="flex flex-col gap-5">
                                <h4 className="font-bold whitespace-nowrap">Learn More</h4>
                                <ul className="flex flex-col gap-4 regular-14 text-gray-30">
                                    <Link href='/'>About Vasquespaintingllc</Link>
                                    <Link href='/'>Contact Us</Link>
                                    <Link href='/'>Our services</Link>
                                    <Link href='/'>Careers</Link>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-5">
                                    <h4 className="font-bold whitespace-nowrap">Contact Us</h4>
                                    <div className="flex gap-4 md:flex-col">
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