// import React from "react";
import { FaUser, FaKey, FaShoppingCart, FaSearch } from "react-icons/fa";
import logo from "../../assets/logo.png"; // Make sure to replace with your actual logo path
import { useContext, useEffect, useState } from "react";
import { getAllCategory } from "../../api/Category/CategoryApi";
import { CategoryContext } from "../../context/CategoryContext";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';



const Header = () => {

    const [listCategory, setListCategory] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const navigate = useNavigate();

    const { setIdCategory } = useContext(CategoryContext);


    useEffect(() => {
        fetchAllCategory()
    }, [])

    const fetchAllCategory = async () => {
        let data = await getAllCategory()
        if (data && data.code === 0) {
            setListCategory(data.data)
        }
    }
    const handleNavigate = (name) => {
        if (name === 'home') {
            setSelectedIndex('home')
            navigate(`/`)
        }
        else if (name === 'contact') {
            setSelectedIndex('contact')
        }
        else {
            setSelectedIndex(name)
            setIdCategory(name)
            navigate(`/product-page?category=${name}`)
        }
    }

    // const [showCart, setShowCart] = useState(false);

    // const cartItems = [
    //     {
    //         id: 1,
    //         name: 'Lincoln chair',
    //         size: 'One size',
    //         quantity: 1,
    //         price: 30.0,
    //         image: '/images/products/thum/products-01.png',
    //     },
    //     {
    //         id: 2,
    //         name: 'Lincoln chair',
    //         size: 'One size',
    //         quantity: 1,
    //         price: 30.0,
    //         image: '/images/products/thum/products-02.png',
    //     },
    // ];

    const cartItems = useSelector(state => state.cartProducts.items);
    console.log("cartItems: ", cartItems)
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);



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
                            <div
                                onClick={() => handleNavigate('home')}
                                className={`p-3 rounded-2xl border border-transparent 
                                             ${selectedIndex === 'home' ? "border-white" : "border-transparent"}
                                hover:border-white cursor-pointer`}>
                                Home
                            </div>
                            {
                                listCategory && listCategory.length > 0 &&
                                listCategory.map((item, index) => {
                                    return (
                                        <div key={index}
                                            onClick={() => handleNavigate(item._id)}
                                            className={`p-3 rounded-2xl border border-transparent 
                                             ${selectedIndex === item._id ? "border-white" : "border-transparent"}
                                            hover:border-white cursor-pointer`}>{item.name}</div>
                                    )
                                })
                            }
                            {/* <div className="p-3 rounded-2xl border border-transparent hover:border-white cursor-pointer">Men</div>
                            <div className="p-3 rounded-2xl border border-transparent hover:border-white cursor-pointer">Women</div>
                            <div className="p-3 rounded-2xl border border-transparent hover:border-white cursor-pointer">Fashion</div>
                            <div className="p-3 rounded-2xl border border-transparent hover:border-white cursor-pointer">Gift</div>
                            <div className="p-3 rounded-2xl border border-transparent hover:border-white cursor-pointer">Kids</div>
                            <div className="p-3 rounded-2xl border border-transparent hover:border-white cursor-pointer">Blog</div>
                            <div className="p-3 rounded-2xl border border-transparent hover:border-white cursor-pointer">Jewelry</div> */}
                            <div
                                onClick={() => handleNavigate('contact')}
                                className={`p-3 rounded-2xl border border-transparent 
                                             ${selectedIndex === 'contact' ? "border-white" : "border-transparent"}
                                hover:border-white cursor-pointer`}>Contact Us</div>
                        </div>

                        {/* Search + Cart */}
                        <div className="flex items-center gap-4">
                            <button className="bg-white/10 p-2 rounded hover:bg-white/20">
                                <FaSearch />
                            </button>
                            <div className="relative">
                                {/* <button className="bg-white/10 p-2 rounded hover:bg-white/20 flex items-center gap-2">
                                    <FaShoppingCart />
                                    <span>02</span>
                                </button> */}
                                <ul className="flex items-center gap-6">
                                    <li className="relative group">
                                        <div className="cart-icon text-sm font-medium cursor-pointer bg-white/10 p-1 rounded hover:bg-white/20 flex items-center gap-2">
                                            Cart <FaShoppingCart /> <span className="cart_no bg-red-500 text-white rounded-full px-2 py-0.5 ml-1">{cartItems.length}</span>
                                        </div>
                                        <ul className="absolute right-0 mt-2 w-80 bg-white shadow-lg border rounded-lg z-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                                            {cartItems.map((item) => (
                                                <li key={item.id} className="flex p-4 border-b last:border-none">
                                                    <div className="w-16 h-16 mr-4">
                                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                    </div>
                                                    <div className="flex-1 text-sm text-gray-700">
                                                        <p className="font-medium mb-1">{item.name}</p>
                                                        <p className="text-gray-500">
                                                            Size: <span className="text-red-500">{item.size}</span> <br />
                                                            Quantity: <span className="text-red-500">{item.quantity}</span>
                                                        </p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-red-500 font-semibold">${item.price.toFixed(2)}</p>
                                                        <button className="text-gray-400 hover:text-red-500 mt-2 text-sm">Remove</button>
                                                    </div>
                                                </li>
                                            ))}
                                            <li className="p-4 border-t">
                                                <span className="text-gray-700 text-sm">Total </span>
                                                <strong className="text-red-500 ml-2">${total.toFixed(2)}</strong>
                                                <button
                                                    onClick={() => alert('Đi đến trang checkout')}
                                                    className="block w-full mt-4 bg-red-500 text-white text-sm py-2 rounded hover:bg-red-600"
                                                >
                                                    CheckOut
                                                </button>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;
