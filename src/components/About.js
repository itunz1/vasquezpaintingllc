"use client"
import React from 'react'
import { LuPaintbrush2 } from "react-icons/lu";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { BiBuildingHouse } from "react-icons/bi";
import { FormattedMessage } from 'react-intl';
import { Link } from "react-scroll";

function About() {
    return (
        <section className='py-24  bg-[#f7f7f7]' id='about'>
            <div className='flex flex-col md:flex-row max-container pading-container'>
                <div className='md:w-[65%] p-7 md:p-0 md:mr-16'>
                    <div className='pl-4 border-l-8 border-solid md:pr-48 border-yellow-app'>
                        <div>
                            <h1 className='text-4xl md:text-7xl mb-[1rem] tracking-tighter font-customb'>
                                <FormattedMessage id='about.title' defaultMessage="Title" />
                            </h1>
                        </div>
                    </div>
                    <div className='py-4 mb-4 text-[18px] md:text-[22px]'>
                        <div >
                            <FormattedMessage id='about.description' defaultMessage="Description" />
                        </div>
                    </div>
                    <div>
                        <Link className='inline-block px-8 py-3 text-base tracking-widest text-white font-customm bg-yellow-app hover:bg-yellowLigth-app' 
                        to='gallery'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                        >
                            <FormattedMessage id='about.link' defaultMessage="VIEW OUR WORK"/>
                        </Link>
                    </div>
                </div>

                <div className='md:w-[35%] p-7'>
                    <div>
                        <h2 className='regular-32 leading-tight mb-[2rem] font-bold font-customb mt-14 md:mt-0'>
                            <FormattedMessage id='about.subTitle' defaultMessage="Key Aspects"/>
                        </h2>
                    </div>

                    <div>
                        <ul>
                            <li className='flex mb-6'>
                                <div>
                                    <span>
                                        <BiBuildingHouse className='w-[100%] h-auto text-[150px] text-yellow-app' />
                                    </span>
                                </div>
                                <div className='pl-4'>
                                    <h4 className='pb-1 regular-20 font-customm'>
                                        <FormattedMessage id='about.h4-1' defaultMessage="Quality of products and services"/>
                                    </h4>
                                    <p className='text-[15px]'>
                                        <FormattedMessage id='about.h4-1-description' defaultMessage="We offer high-quality products and services that meet the highest standards."/>
                                    </p>
                                </div>
                            </li>

                            <li className='flex mb-6'>
                                <div>
                                    <span>
                                        <HiOutlineWrenchScrewdriver className='w-[100%] h-auto text-[150px] text-yellow-app' />
                                    </span>
                                </div>
                                <div className='pl-4'>
                                    <h4 className='pb-1 regular-20 font-customm'>
                                        <FormattedMessage id='about.h4-2' defaultMessage="Experience and professionalism"/>
                                    </h4>
                                    <p className='text-[15px]'>
                                        <FormattedMessage id='about.h4-2-description' defaultMessage="Our team has extensive experience in the industry and is committed to customer satisfaction."/>
                                    </p>
                                </div>
                            </li>

                            <li className='flex'>
                                <div className=''>
                                    <span className=''>
                                        <LuPaintbrush2 className='w-[100%] h-auto text-[150px] text-yellow-app ' />
                                    </span>
                                </div>
                                <div className='pl-4'>
                                    <h4 className='pb-1 regular-20 font-customm'>
                                        <FormattedMessage id='about.h4-3' defaultMessage="Attention to detail"/>
                                    </h4>
                                    <p className='text-[15px]'>
                                        <FormattedMessage id='about.h4-3-description' defaultMessage="We care about the details and strive to offer impeccable work."/>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>


            </div>
        </section>
    )
}

export default About