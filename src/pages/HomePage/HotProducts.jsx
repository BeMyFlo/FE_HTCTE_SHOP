import { FaExchangeAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import logo from '../../assets/logo.png'
import { featuredProducts, hotProducts } from "../../api/Product/ProductApi";
import ModalCart from "../ModalCart/ModalCart";
import { useDispatch } from "react-redux";
import { addToCart } from '../../redux/cartSlice';
import DetailProduct from "../Product/DetailProduct";
import { useNavigate } from "react-router-dom";

const slides = [
    {
        title: "COLLECTION FOR WINTER",
        subtitle: "PARIS SHOW 2014",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: 'https://media.tinmoi.vn/2015/01/05/can-canh-nhan-sac-my-nhan-co-khuon-mat-dep-nhat-the-gioi7.png'
    },
    {
        title: "COLLECTION FOR WINTER",
        subtitle: "PARIS SHOW 2014",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "https://png.pngtree.com/png-clipart/20240830/original/pngtree-fashional-model-women-with-moden-cloth-transparent-free-download-png-image_15883648.png",
    },
    {
        title: "NEW FASHION OF 2013",
        subtitle: "PARIS SHOW 2014",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "https://png.pngtree.com/png-clipart/20240828/original/pngtree-a-lovely-model-in-stunning-white-dress-against-clear-background-beautiful-png-image_15869993.png",
    },
];

const products = [
    {
        id: 1,
        name: "Iphone 5s Gold 32 Gb 2013",
        price: 451,
        img: "https://down-vn.img.susercontent.com/file/sg-11134201-7qvfr-lh7bjmuspcy3a0.webp",
        badge: "-%20",
    },
    {
        id: 2,
        name: "Iphone 5s Gold 32 Gb 2013",
        price: 451,
        img: "https://leika.vn/wp-content/uploads/2024/04/So-mi-DT-tre-vai-hoa-tiet-3-768x1152.jpg",
    },
    {
        id: 3,
        name: "Iphone 5s Gold 32 Gb 2013",
        price: 451,
        img: "https://leika.vn/wp-content/uploads/2024/02/Ao-so-mi-suong-DT-co-luon-1-768x1152.jpg",
        badge: "New",
    },
    {
        id: 4,
        name: "Iphone 5s Gold 32 Gb 2013",
        price: 451,
        img: "https://leika.vn/wp-content/uploads/2023/05/ao-so-mi-tui-op-phoi-le-2-768x1152.jpg",
    },
];

export default function HotProducts() {

    const [listHotProducts, setListHotProducts] = useState([]);
    const [listFeaturedProducts, setListFeaturedProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [cart, setCart] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const openProductModal = (product) => {
        setSelectedProduct(product)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    console.log("cart: ", cart)

    // const addToCart = (product) => {
    //     setCart((prevCart) => {
    //         // Check if product already exists in cart
    //         const existingItemIndex = prevCart.findIndex((item) => item.id === product.id)

    //         if (existingItemIndex >= 0) {
    //             // Update quantity if product exists
    //             const updatedCart = [...prevCart]
    //             updatedCart[existingItemIndex].quantity += product.quantity
    //             return updatedCart
    //         } else {
    //             // Add new product to cart
    //             return [...prevCart, product]
    //         }
    //     })
    //     alert(`Đã thêm ${product.quantity} sản phẩm "${product.name}" vào giỏ hàng!`)
    // }

    const handleAddToCart = (product) => {
        // dispatch luôn product cần thêm vào cart
        dispatch(addToCart({ ...product, quantity: product.quantity }));

        alert(`Đã thêm 1 sản phẩm "${product.name}" vào giỏ hàng!`);
    };


    useEffect(() => {
        fetchListProducts();
        fetchListFeatured();
    }, [])


    const fetchListProducts = async () => {
        let data = await hotProducts();
        if (data && data.success === true) {
            setListHotProducts(data.data)
        }
    }

    const fetchListFeatured = async () => {
        let data = await featuredProducts();
        if (data && data.success === true) {
            setListFeaturedProducts(data.data)
        }
    }

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="w-full bg-gradient-to-r from-purple-700 to-blue-500 text-white">
                <Swiper
                    // modules={[Navigation, Autoplay, EffectFade]}
                    // navigation
                    // autoplay={{ delay: 5 }}
                    // effect="fade"
                    // loop
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="h-[500px] relative"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex items-center justify-center h-full px-8 relative">
                                <div className="text-center max-w-xl z-10">
                                    <h3 className="text-xl uppercase">{slide.subtitle}</h3>
                                    <h1 className="text-4xl font-bold mt-2">{slide.title}</h1>
                                    <p className="mt-4 text-sm">{slide.description}</p>
                                    <p className="text-sm">{slide.description}</p>
                                    <button className="mt-6 px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition">
                                        More Details
                                    </button>
                                </div>
                                <div className="absolute bottom-0 right-0 h-full hidden md:block">
                                    <img
                                        src={slide.image}
                                        // src={logo}
                                        alt="Slide"
                                        className="h-full object-contain"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Banner dưới */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-8 bg-[#1e1e2f] flex justify-items-center items-center">
                    <img src={logo} alt="Banner 1" className="rounded-lg shadow-md" />
                    <img src={logo} alt="Banner 2" className="rounded-lg shadow-md" />
                    <img src={logo} alt="Banner 3" className="rounded-lg shadow-md" />
                </div>
            </div>
            <div className="p-6 w-5/6">
                <h3 className="text-2xl font-semibold mb-6">
                    <span className="text-red-500">Hot</span> Products
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {listHotProducts && listHotProducts.length > 0 &&
                        listHotProducts.map((listHotProducts) => (
                            <div
                                key={listHotProducts.id}
                                className="relative border rounded-xl p-4 text-center shadow hover:shadow-lg transition"
                                onClick={() => navigate('/detail-product', { state: { product: listHotProducts } })}
                            >
                                {listHotProducts.badge && (
                                    <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                        {listHotProducts.badge}
                                    </div>
                                )}
                                <img
                                    src={listHotProducts.image}
                                    alt={listHotProducts.name}
                                    className="w-full h-48 object-contain mb-4"
                                />
                                <div className="text-sm text-gray-700 mb-2">{listHotProducts.name}</div>
                                <div className="text-red-600 text-lg font-bold mb-4">
                                    ${listHotProducts.price.toFixed(2)}
                                </div>
                                <div className="flex justify-center gap-2">
                                    <button
                                        onClick={() => openProductModal(listHotProducts)}
                                        className="px-3 py-1 border border-gray-300 rounded-xl hover:bg-gray-100 text-sm">
                                        Add To Cart
                                    </button>
                                    <button className="p-2 border border-gray-300 rounded-xl hover:bg-gray-100">
                                        <FaExchangeAlt />
                                    </button>
                                    <button className="p-2 border border-gray-300 rounded-xl hover:bg-gray-100">
                                        <CiHeart />
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            <div className="p-6 w-5/6">
                <h3 className="text-2xl font-semibold mb-6">
                    <span className="text-red-500">Featured</span> Products
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {listFeaturedProducts && listFeaturedProducts.length > 0 &&
                        listFeaturedProducts.map((listFeaturedProducts) => (
                            <div
                                key={listFeaturedProducts.id}
                                className="relative border rounded-xl p-4 text-center shadow hover:shadow-lg transition"
                            >
                                {listFeaturedProducts.badge && (
                                    <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                        {listFeaturedProducts.badge}
                                    </div>
                                )}
                                <img
                                    src={listFeaturedProducts.image}
                                    alt={listFeaturedProducts.name}
                                    className="w-full h-48 object-contain mb-4"
                                />
                                <div className="text-sm text-gray-700 mb-2">{listFeaturedProducts.name}</div>
                                <div className="text-red-600 text-lg font-bold mb-4">
                                    ${listFeaturedProducts.price.toFixed(2)}
                                </div>
                                <div className="flex justify-center gap-2">
                                    <button
                                        onClick={() => openProductModal(listFeaturedProducts)}
                                        className="px-3 py-1 border border-gray-300 rounded-xl hover:bg-gray-100 text-sm">
                                        Add To Cart
                                    </button>
                                    <button className="p-2 border border-gray-300 rounded-xl hover:bg-gray-100">
                                        <FaExchangeAlt />
                                    </button>
                                    <button className="p-2 border border-gray-300 rounded-xl hover:bg-gray-100">
                                        <CiHeart />
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            {/* Product Detail Modal */}
            <ModalCart product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} onAddToCart={handleAddToCart} />
            <DetailProduct />
        </div>
    );
}
