"use client"
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import { FaRegUser, FaChalkboard, FaAddressBook, FaCode } from 'react-icons/fa';
import { GrGallery } from "react-icons/gr";
import { MdOutlineCleaningServices } from "react-icons/md";
import { useScrollPosition } from '../components/hooks/useScrollPosition';
import { Link } from "react-scroll";
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

function Navbar() {

    const scrollPosition = useScrollPosition();

    return (
        <Popover className={`${classNames(scrollPosition > 0 ? 'shadow' : 'shadow-none','transition-shadow sticky top-0 bg-[#252734] z-20')}`}
        >
            <div className='px-4 mx-auto sm:px-6'>
                <div className='flex items-center justify-between sm:pr-10 sm:pl-5 md:space-x-10 min-h-[80px]'>
                    <div className='flex justify-between lg:flex-1'>
                        <Link to="/"
                            className=''
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={800}>
                            <img className='w-[150px]' src='/vasquez.png' alt='website logo'/>
                        </Link>
                    </div>

                    <div className='-my-2 -mr-2 md:hidden'>
                        <Popover.Button className='flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                            <span className='sr-only text-blue'>Open menu</span>
                            <RxHamburgerMenu className='w-6 h-6' aria-hidden='true' />
                        </Popover.Button>
                    </div>

                    <Popover.Group as='nav' className='hidden space-x-10 md:flex'>
                        <Link to="/"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={800}>
                            <span className='nav-links'>< FaRegUser className='text-sm' />
                                <span><FormattedMessage id="menu.about" defaultMessage="About" /></span>
                            </span>
                        </Link>

                        <Link to="/"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={800}>
                            <span className='nav-links'><MdOutlineCleaningServices className='text-base' />
                               <span><FormattedMessage id="menu.skills" defaultMessage="Service" /></span>
                            </span>
                        </Link>

                        <Link to="/"
                            spy={true}
                            smooth={true}
                            offset={-20}
                            duration={800}>
                            <span className='nav-links'><GrGallery className='text-base' />
                                <FormattedMessage id="menu.proyects" defaultMessage="Gallery" />
                            </span>
                        </Link>

                        <Link to="/"
                            spy={true}
                            smooth={true}
                            offset={-20}
                            duration={800}>
                            <span className='nav-links'> <FaAddressBook className='text-sm' />
                                <FormattedMessage id="menu.contactos" defaultMessage="Contacto" />
                            </span>
                        </Link>
                    </Popover.Group>

                </div>
            </div>

            <Transition
                as={Fragment}
                enter='duration-200 ease-out'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='duration-100 ease-in'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
            >
                <Popover.Panel focus className='absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden'>
                    <div className='bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50'>
                        <div className='px-5 pt-5 pb-6'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <span className='text-blue-500 shadow-[rgb(255 245 157)_0px_0px_10px] font-bold text-2xl cursor-pointer ml-5'>JL</span>
                                </div>
                                <div className='-mr-2'>
                                    <Popover.Button className='inline-flex items-center justify-center p-2 mr-8 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                                        <span className='sr-only'>Close menu</span>
                                        <AiOutlineClose className='w-6 h-6' aria-hidden='true' />
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>


                        <div className='px-5 py-6 space-y-6'>
                            <div className='flex flex-col items-center justify-center gap-8'>
                                <Link to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                >
                                    <Popover.Button>
                                        <span className='inline-flex items-center gap-1 text-lg font-medium text-black cursor-pointer hover:text-blue-400'>< FaRegUser className='text-sm' />
                                            <FormattedMessage id="menu.about" defaultMessage="About" />
                                        </span>
                                    </Popover.Button>
                                </Link>

                                <Link to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}>
                                    <Popover.Button>
                                        <span className='inline-flex items-center gap-1 text-lg font-medium text-black cursor-pointer hover:text-blue-400'><FaCode className='text-base' />
                                            <FormattedMessage id="menu.skills" defaultMessage="Skills" />
                                        </span>
                                    </Popover.Button>
                                </Link>

                                <Link to="proyects"
                                    spy={true}
                                    smooth={true}
                                    offset={-20}
                                    duration={800}>
                                    <Popover.Button>
                                        <span className='inline-flex items-center gap-1 text-lg font-medium text-black cursor-pointer hover:text-blue-400'><FaChalkboard className='text-base' />
                                            <FormattedMessage id="menu.proyects" defaultMessage="Proyects" />
                                        </span>
                                    </Popover.Button>
                                </Link>

                                <Link to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-20}
                                    duration={800}>
                                    <Popover.Button>
                                        <span className='inline-flex items-center gap-1 text-lg font-medium text-black cursor-pointer hover:text-blue-400'> <FaAddressBook className='text-sm' />
                                            <FormattedMessage id="menu.contact" defaultMessage="Contact" />
                                        </span>
                                    </Popover.Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}

export default Navbar