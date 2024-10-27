"use client"
import { Fragment, useContext } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import { FaRegUser, FaAddressBook, FaPhoneAlt } from 'react-icons/fa';
import { GrGallery } from "react-icons/gr";
import { MdOutlineCleaningServices } from "react-icons/md";
import { useScrollPosition } from '../components/hooks/useScrollPosition';
import { Link } from "react-scroll";
import { FormattedMessage } from 'react-intl';
import { langContext } from './context/langContext';



function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

function Navbar() {

    const scrollPosition = useScrollPosition();
    const languaje = useContext(langContext);

    const handleSelect = (e) => {
        languaje.changeLang(e.target.value)
    }


    return (
        <Popover className={`${classNames(scrollPosition > 0 ? 'shadow' : 'shadow-none', 'transition-shadow sticky top-0 bg-[#252734] z-50')}`}
        >
            <div className='px-4 mx-auto sm:px-6'>
                <div className='flex items-center md:justify-between sm:pr-10 sm:pl-5 min-h-[80px]'>
                    <div className='flex justify-between flex-1'>
                        <Link to="/"
                            className=''
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={800}>
                            <img className='w-[150px] cursor-pointer' src='/AGUILAR-PAINTING.png' alt='website logo' />
                        </Link>
                    </div>

                    <select onClick={e => handleSelect(e)} className='mr-5 text-xs rounded-md h-7'>
                        <option value='en-US' className='text-xs'>
                            en-US
                        </option>
                        <option value='es-MX' className='text-xs'>
                            es-MX
                        </option>
                    </select>

                    <div className='-my-2 -mr-2 md:hidden'>
                        <Popover.Button className='flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                            <span className='sr-only text-blue'>Open menu</span>
                            <RxHamburgerMenu className='w-6 h-6' aria-hidden='true' />
                        </Popover.Button>
                    </div>

                    <Popover.Group as='nav' className='items-center hidden space-x-5 md:flex'>
                        <Link to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={800}>
                            <span className='nav-links'>< FaRegUser className='text-sm' />
                                <span><FormattedMessage id="menu.about" defaultMessage="About" /></span>
                            </span>
                        </Link>

                        <Link to="services"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={800}>
                            <span className='nav-links'><MdOutlineCleaningServices className='text-base' />
                                <span><FormattedMessage id="menu.services" defaultMessage="Services" /></span>
                            </span>
                        </Link>

                        <Link to="gallery"
                            spy={true}
                            smooth={true}
                            offset={-20}
                            duration={800}>
                            <span className='nav-links'><GrGallery className='text-base' />
                                <FormattedMessage id="menu.gallery" defaultMessage="Gallery" />
                            </span>
                        </Link>

                        <Link to="contact"
                            spy={true}
                            smooth={true}
                            offset={-20}
                            duration={800}>
                            <span className='nav-links'> <FaAddressBook className='text-sm' />
                                <FormattedMessage id="menu.contact" defaultMessage="Contact" />
                            </span>
                        </Link>
                        <Link to="contact"
                            spy={true}
                            smooth={true}
                            offset={-20}
                            duration={800}>
                            <span className='inline-block px-5 py-2 mr-1 text-xl text-white bg-red-600 hover:text-white nav-links rounded-xl font-customm hover:bg-red-500'>
                                <FormattedMessage id="menu.estimated" defaultMessage="Get Free Estimated" />
                            </span>
                        </Link>
                        <span><FaPhoneAlt className='text-sm text-white' /></span>
                        <span className='font-bold text-white'>+1-828-273-1848</span>
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
                                    {/* <span className='text-blue-500 shadow-[rgb(255 245 157)_0px_0px_10px] font-bold text-2xl cursor-pointer ml-5'>JL</span> */}
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

                                <Link to="services"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}>
                                    <Popover.Button>
                                        <span className='inline-flex items-center gap-1 text-lg font-medium text-black cursor-pointer hover:text-blue-400'><MdOutlineCleaningServices className='text-base' />
                                            <FormattedMessage id="menu.services" defaultMessage="Services" />
                                        </span>
                                    </Popover.Button>
                                </Link>

                                <Link to="gallery"
                                    spy={true}
                                    smooth={true}
                                    offset={-20}
                                    duration={800}>
                                    <Popover.Button>
                                        <span className='inline-flex items-center gap-1 text-lg font-medium text-black cursor-pointer hover:text-blue-400'><GrGallery className='text-base' />
                                            <FormattedMessage id="menu.gallery" defaultMessage="Gallery" />
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