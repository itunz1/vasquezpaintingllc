"use client"
import React from 'react'
import { FormattedMessage } from 'react-intl';

function Service() {
    return (
        <section className="flex-col items-center justify-center py-24 overflow-hidden" id='services'>
            <div className="relative flex w-full max-container padding-container">
                <div className="z-20 flex w-full flex-col lg:w-[100%]  bg-no-repeat bg-center">
                    <div className="relative">
                        <img className='w-[450px] h-[150px]' src='brush-image.png' alt='brush image'/>
                        <h2 className="absolute top-12 heading-secondary">
                            <FormattedMessage id='service.title' defaultMessage="Our Features"/>
                        </h2>
                    </div>
                    <ul className="grid gap-10 mt-10 md:grid-cols-2 lg:mt-20 lg:gap-10">
                        <li className="flex flex-col items-start flex-1 w-full">
                            <div className="">
                                <img className='md:w-[300px] md:h-[300px] rounded-[15px]' src='/InteriorExterior.jpg' alt='Interior and Exterior block image' />
                            </div>
                            <h2 className="mt-5 capitalize bold-20 lg:bold-32">
                                <FormattedMessage id='service.subTitle1' defaultMessage="exterior and interior"/>
                            </h2>
                            <p className="regular-18 mt-5 text-gray-30 lg:mt-[30px] lg:bg-none">
                                <FormattedMessage id='service.subTitle1-description' defaultMessage="description"/>
                            </p>
                        </li>
                        <li className="flex flex-col items-start flex-1 w-full">
                            <div className="">
                                <img className='md:w-[300px] md:h-[300px] rounded-[15px]' src='PressureWash.jpg' alt='Pressure wash block image' />
                            </div>
                            <h2 className="mt-5 capitalize bold-20 lg:bold-32">
                                <FormattedMessage id='service.subTitle2' defaultMessage="Pressure Wash"/>
                            </h2>
                            <p className="regular-18 mt-5 text-gray-30 lg:mt-[30px] lg:bg-none">
                                <FormattedMessage id='service.subTitle2-description' defaultMessage="description 2"/>
                            </p>
                        </li>
                        <li className="flex flex-col items-start flex-1 w-full">
                            <div className="">
                                <img className='md:w-[300px] md:h-[300px] rounded-[15px]' src='New-Repaint.jpg' alt='New and repaint wash block image' />
                            </div>
                            <h2 className="mt-5 capitalize bold-20 lg:bold-32">
                                <FormattedMessage id='service.subTitle3' defaultMessage="New and repaint"/>
                            </h2>
                            <p className="regular-18 mt-5 text-gray-30 lg:mt-[30px] lg:bg-none">
                                <FormattedMessage id='service.subTitle3-description' defaultMessage="description 3"/>
                            </p>
                        </li>
                        <li className="flex flex-col items-start flex-1 w-full">
                            <div className="">
                            <img className='md:w-[300px] md:h-[300px] rounded-[15px]' src='/Drywall.jpg' alt='Drywall block image' />
                            </div>
                            <h2 className="mt-5 capitalize bold-20 lg:bold-32">
                                <FormattedMessage id='service.subTitle4' defaultMessage="Drywall & Trim"/>
                            </h2>
                            <p className="regular-18 mt-5 text-gray-30 lg:mt-[30px] lg:bg-none">
                                <FormattedMessage id='service.subTitle4-description' defaultMessage="description 4"/>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Service