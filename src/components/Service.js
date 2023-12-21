import Image from 'next/image'
import React from 'react'

function Service() {
    return (
        <section className="flex-col items-center justify-center py-24 overflow-hidden">
            <div className="relative flex w-full max-container padding-container">
                {/* <div className="flex flex-1 lg:min-h-[900px]"> */}
                    {/* <Image src="/phone.png" alt="phone" width={440} height={1000} className="feature-phone" /> */}
                    {/* <p className='absolute top-[13%] z-10 hidden max-w-[1500px] rotate-[15deg] md:-left-16 lg:flex 3xl:left-20'>asdasdasdasdasd</p> */}
                {/* </div> */}

                <div className="z-20 flex w-full flex-col lg:w-[100%]  bg-no-repeat bg-center">
                    <div className="relative">
                        <img className='w-[450px] h-[150px]' src='brush-image.png' alt='brush image'/>
                        <h2 className="absolute top-12 heading-secondary">
                            Our Features
                        </h2>
                    </div>
                    <ul className="grid gap-10 mt-10 md:grid-cols-2 lg:mt-20 lg:gap-10">
                        <li className="flex flex-col items-start flex-1 w-full">
                            <div className="">
                                <img className='w-[300px] h-[300px] rounded-[15px]' src='/InteriorExterior.jpg' alt='Interior and Exterior block image' />
                            </div>
                            <h2 className="mt-5 capitalize bold-20 lg:bold-32">
                                exterior and interior
                            </h2>
                            <p className="regular-18 mt-5 text-gray-30 lg:mt-[30px] lg:bg-none">
                                A fresh coat of paint to the exterior or interior of your home can make a dramatic difference.
                                will provide the highest quality results for your home.
                            </p>
                        </li>
                        <li className="flex flex-col items-start flex-1 w-full">
                            <div className="">
                                <img className='w-[300px] h-[300px] rounded-[15px]' src='PressureWash.jpg' alt='Pressure wash block image' />
                            </div>
                            <h2 className="mt-5 capitalize bold-20 lg:bold-32">
                                Pressure Wash
                            </h2>
                            <p className="regular-18 mt-5 text-gray-30 lg:mt-[30px] lg:bg-none">
                                Pressure wash is a vital step in painting the exterior of your home. We uses the process to
                                remove mold, oil and old paint so new paint absorbs into your surface better.
                            </p>
                        </li>
                        <li className="flex flex-col items-start flex-1 w-full">
                            <div className="">
                                <img className='w-[300px] h-[300px] rounded-[15px]' src='New-Repaint.jpg' alt='New and repaint wash block image' />
                            </div>
                            <h2 className="mt-5 capitalize bold-20 lg:bold-32">
                                New and repaint
                            </h2>
                            <p className="regular-18 mt-5 text-gray-30 lg:mt-[30px] lg:bg-none">
                                we take pride in our level of attention to detail. We understand the importance of a job well done,
                                so we give our full commitment to every project from start to finish.
                            </p>
                        </li>
                        <li className="flex flex-col items-start flex-1 w-full">
                            <div className="">
                            <img className='w-[300px] h-[300px] rounded-[15px]' src='/Drywall.jpg' alt='Drywall block image' />
                            </div>
                            <h2 className="mt-5 capitalize bold-20 lg:bold-32">
                                Drywall & Trim
                            </h2>
                            <p className="regular-18 mt-5 text-gray-30 lg:mt-[30px] lg:bg-none">
                                Whether your home has holes or requieres drywall repair, we will patch to create a flawless surface to paint on.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Service