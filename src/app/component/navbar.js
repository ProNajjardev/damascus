"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../../images/logo.png'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className="bg-gradient-to-r from-[#f5b945] to-[#497b3b] text-white">
            <nav className="container flex items-center justify-between p-4 mx-auto">
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-between'>
                        <Image className='scale-125' src={logo} alt="logo" width={100} height={100} />
                        <div className='text-right'>
                            <h1 className="text-xl font-bold mx-4">محافظة دمشق</h1>
                            <h1 className="text-xl font-bold mx-4">الجمهورية العربية السورية</h1>
                        </div>
                    </div>
                    <div className='hidden md:flex justify-center md:justify-between'>
                        <ul className="flex gap-4">
                            <li>
                                <Link href="/" className="hover:underline">
                                    الرئيسية
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:underline">
                                    عن المحافظة
                                </Link>
                            </li>
                            <li>
                                <Link href="/news" className="hover:underline">
                                    اخر الاخبار
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="hover:underline">
                                    مشاريع المحافظة
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:underline">
                                    الخدمات
                                </Link>
                            </li>
                            <li>
                                <Link href="/decisions" className="hover:underline">
                                    القرارات
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:underline">
                                    تواصل معنا
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <ul className='hidden md:flex justify-center md:justify-between'>
                    <li>
                        <Link href="/login" className="hover:underline bg-gradient-to-t from-[#497b3b] to-[#8bc27b] p-3 rounded-lg border-l-yellow-300">
                            تسجيل الدخول
                        </Link>
                    </li>
                </ul>
                {/* Burger Icon (only visible on mobile) */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white text-2xl">
                        {isMenuOpen ? 'X' : '☰'}
                    </button>
                </div>
            </nav>
            {/* Mobile Menu (visible only on mobile) */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col items-center gap-4 p-4 bg-gradient-to-r from-[#f5b945] to-[#497b3b]">
                    <li>
                        <Link href="/" className="hover:underline">الرئيسية</Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:underline">عن المحافظة</Link>
                    </li>
                    <li>
                        <Link href="/news" className="hover:underline">اخر الاخبار</Link>
                    </li>
                    <li>
                        <Link href="/projects" className="hover:underline">مشاريع المحافظة</Link>
                    </li>
                    <li>
                        <Link href="/services" className="hover:underline">الخدمات</Link>
                    </li>
                    <li>
                        <Link href="/decisions" className="hover:underline">القرارات</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:underline">تواصل معنا</Link>
                    </li>
                    <li>
                        <Link href="/login" className="hover:underline">تسجيل الدخول</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
