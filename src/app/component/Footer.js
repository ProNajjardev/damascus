"use client";
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* القسم الأول: صورة */}
                <div className="flex flex-col items-center">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Logo"
                        className="w-24 h-24 mb-4"
                    />
                    
                </div>

                {/* القسم الثاني: القائمة الأولى */}
                <div className="px-4">
                    <h4 className="text-lg font-bold mb-4">روابط هامة</h4>
                    <ul>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-white">
                                من نحن
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-white">
                                خدماتنا
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-white">
                                سياسة الخصوصية
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-white">
                                الشروط والأحكام
                            </a>
                        </li>
                    </ul>
                </div>

                {/* القسم الثالث: القائمة الثانية */}
                <div className="px-4">
                    <h4 className="text-lg font-bold mb-4">الأقسام</h4>
                    <ul>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-white">
                                الأخبار
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-white">
                                المدونة
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-white">
                                معرض الصور
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-white">
                                الأسئلة الشائعة
                            </a>
                        </li>
                    </ul>
                </div>

                {/* القسم الرابع: القائمة الثالثة */}
                <div className="px-4">
                    <h4 className="text-lg font-bold mb-4">تواصل معنا</h4>
                    <ul>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-white">
                                فيسبوك
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-white">
                                تويتر
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-white">
                                إنستغرام
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-white">
                                يوتيوب
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
                <p className="text-center text-gray-400 pt-6">
                        © 2024 اسم الموقع. جميع الحقوق محفوظة.
                    </p>
        </footer>
    );
}
