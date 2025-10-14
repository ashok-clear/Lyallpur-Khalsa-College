'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
                    {/* Logo and College Name */}
                    <div className="flex items-center min-w-0 flex-1">
                        <div className="flex-shrink-0 flex items-center">
                            <div className="max-w-[200px]">
                                <Image src="/Images/logo.png" alt="College-logo" width={235} height={48} className='w-full h-full object-cover' />
                            </div>
                            <div className="ml-2 sm:ml-3 min-w-0">
                                <h1 className="text-lg sm:text-xl font-bold text-gray-900 truncate">
                                    Lyallpur Khalsa College
                                </h1>
                                {/* <p className="text-xs sm:text-sm text-gray-600 truncate">Excellence in Education</p> */}
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex space-x-4 xl:space-x-6">
                        <Link
                            href="/"
                            className="text-gray-700 hover:text-blue-600 px-2 xl:px-3 py-2 text-sm xl:text-base font-medium transition-colors duration-200 whitespace-nowrap"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="text-gray-700 hover:text-blue-600 px-2 xl:px-3 py-2 text-sm xl:text-base font-medium transition-colors duration-200 whitespace-nowrap"
                        >
                            About Us
                        </Link>
                        <Link
                            href="/academics"
                            className="text-gray-700 hover:text-blue-600 px-2 xl:px-3 py-2 text-sm xl:text-base font-medium transition-colors duration-200 whitespace-nowrap"
                        >
                            Academics
                        </Link>
                        <Link
                            href="/admissions"
                            className="text-gray-700 hover:text-blue-600 px-2 xl:px-3 py-2 text-sm xl:text-base font-medium transition-colors duration-200 whitespace-nowrap"
                        >
                            Admissions
                        </Link>
                       
                        <Link
                            href="/Student-Support"
                            className="text-gray-700 hover:text-blue-600 px-2 xl:px-3 py-2 text-sm xl:text-base font-medium transition-colors duration-200 whitespace-nowrap"
                        >
                       Student Support
                        </Link>
                       
                    </nav>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex-shrink-0">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2 -mr-2"
                            aria-label="Toggle menu"
                        >
                            <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden border-t border-gray-200 bg-white">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link
                                href="/"
                                className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-3 py-3 text-base font-medium transition-colors duration-200 rounded-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                             <Link
                                 href="/about"
                                 className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-3 py-3 text-base font-medium transition-colors duration-200 rounded-md"
                                 onClick={() => setIsMenuOpen(false)}
                             >
                                 About Us
                             </Link>
                             <Link
                                 href="/academics"
                                 className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-3 py-3 text-base font-medium transition-colors duration-200 rounded-md"
                                 onClick={() => setIsMenuOpen(false)}
                             >
                                 Academics
                             </Link>
                             <Link
                                 href="/admissions"
                                 className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-3 py-3 text-base font-medium transition-colors duration-200 rounded-md"
                                 onClick={() => setIsMenuOpen(false)}
                             >
                                 Admissions
                             </Link>
                             <Link
                                 href="/Student-Support"
                                 className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 block px-3 py-3 text-base font-medium transition-colors duration-200 rounded-md"
                                 onClick={() => setIsMenuOpen(false)}
                             >
                                 Student Support
                             </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
