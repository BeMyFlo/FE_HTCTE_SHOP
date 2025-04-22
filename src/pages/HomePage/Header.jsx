// import React from "react";
import { FaUser, FaKey, FaShoppingCart, FaSearch } from "react-icons/fa";
import logo from "../../assets/logo.png"; // Make sure to replace with your actual logo path

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-[#2c002e] to-[#001e3c] text-white text-sm font-light 
        flex items-center justify-center gap-8 fixed top-0 left-0 w-full z-50 shadow-lg bg-[#2c002e]/80 backdrop-blur-md">
            {/* Logo */}
            <div className="flex items-center gap-2 w-1/10">
                <img src={logo} alt="logo" className="w-70 h-70" />
                {/* <div className="leading-4">
                        <div className="text-xs">FASHION</div>
                        <div className="text-lg font-semibold tracking-wide">FLATSHOP</div>
                    </div> */}
            </div>
            <div className="flex flex-col">
                {/* Top bar */}
                <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between gap-56">
                    <div className="flex gap-6 text-red-400 text-sm relative z-10">
                        {/* Language Dropdown */}
                        <div className="group relative cursor-pointer">
                            <div className="hover:text-white">ENG ▾</div>
                            <ul className="absolute left-0 mt-2 w-24 bg-white text-gray-800 rounded shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Eng</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Vns</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Fer</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Gem</li>
                            </ul>
                        </div>

                        {/* Currency Dropdown */}
                        <div className="group relative cursor-pointer">
                            <div className="hover:text-white">USD ▾</div>
                            <ul className="absolute left-0 mt-2 w-24 bg-white text-gray-800 rounded shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">USD</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">UKD</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">FER</li>
                            </ul>
                        </div>
                    </div>
                    {/* Top right menu */}
                    <div className="flex items-center gap-6 text-sm">
                        <div className="hidden md:flex gap-3 text-white/80">
                            <a href="#" className="hover:text-white">About Us</a>
                            <span>|</span>
                            <a href="#" className="hover:text-white">News</a>
                            <span>|</span>
                            <a href="#" className="hover:text-white">Service</a>
                            <span>|</span>
                            <a href="#" className="hover:text-white">Recruitment</a>
                            <span>|</span>
                            <a href="#" className="hover:text-white">Media</a>
                            <span>|</span>
                            <a href="#" className="hover:text-white">Support</a>
                        </div>

                        <div className="flex items-center gap-4">
                            <a href="#" className="flex items-center gap-1 hover:text-white">
                                <FaUser className="text-base" />
                                Login
                            </a>
                            <a href="#" className="flex items-center gap-1 hover:text-white">
                                <FaKey className="text-base" />
                                Register
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom nav */}
                <div className="border-t border-white/10 mt-1">
                    <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
                        {/* Menu nav */}
                        <div className="flex flex-wrap gap-1 font-medium tracking-wide text-sm uppercase">
                            <div className="p-3 rounded-2xl border border-transparent hover:border-white cursor-pointer">
                                Home
                            </div>
                            <div className="p-3 rounded-2xl border border-transparent hover:border-white cursor-pointer">Men</div>
                            <div className="p-3 rounded-2xl border border-transparent hover:border-white cursor-pointer">Women</div>
                            <div className="p-3 rounded-2xl border border-transparent hover:border-white cursor-pointer">Fashion</div>
                            <div className="p-3 rounded-2xl border border-transparent hover:border-white cursor-pointer">Gift</div>
                            <div className="p-3 rounded-2xl border border-transparent hover:border-white cursor-pointer">Kids</div>
                            <div className="p-3 rounded-2xl border border-transparent hover:border-white cursor-pointer">Blog</div>
                            <div className="p-3 rounded-2xl border border-transparent hover:border-white cursor-pointer">Jewelry</div>
                            <div className="p-3 rounded-2xl border border-transparent hover:border-white cursor-pointer">Contact Us</div>
                        </div>

                        {/* Search + Cart */}
                        <div className="flex items-center gap-4">
                            <button className="bg-white/10 p-2 rounded hover:bg-white/20">
                                <FaSearch />
                            </button>
                            <div className="relative">
                                <button className="bg-white/10 p-2 rounded hover:bg-white/20 flex items-center gap-2">
                                    <FaShoppingCart />
                                    <span>02</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;
