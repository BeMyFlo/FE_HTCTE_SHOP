import { useState } from "react"
import { Star, Heart, Mail, ChevronLeft, ChevronRight } from "lucide-react"
import Button from 'react-bootstrap/Button';
import { FaExchangeAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

import { Link, useLocation } from "react-router-dom"
import ModalCart from "../ModalCart/ModalCart";
import { useDispatch } from "react-redux";
import { addToCart } from '../../redux/cartSlice';

export default function DetailProduct() {
    const [quantity, setQuantity] = useState(1)
    const [activeImage, setActiveImage] = useState(0)
    const [activeTab, setActiveTab] = useState("description");
    const location = useLocation();
    const product = location.state?.product || {} // Assuming product data is passed via state
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null);
    const dispatch = useDispatch();


    const openProductModal = (product) => {
        setSelectedProduct(product)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }
    const handleAddToCart = (product) => {
        // dispatch luôn product cần thêm vào cart
        dispatch(addToCart({ ...product, quantity: product.quantity }));

        alert(`Đã thêm 1 sản phẩm "${product.name}" vào giỏ hàng!`);
    };


    const productImages = [
        "https://leika.vn/wp-content/uploads/2023/05/ao-so-mi-tui-op-phoi-le-2-768x1152.jpg",
        "https://leika.vn/wp-content/uploads/2023/05/ao-so-mi-tui-op-phoi-le-2-768x1152.jpg",
        "https://leika.vn/wp-content/uploads/2023/05/ao-so-mi-tui-op-phoi-le-2-768x1152.jpg",
        "https://leika.vn/wp-content/uploads/2024/04/So-mi-DT-tre-vai-hoa-tiet-3-768x1152.jpg",
        "https://leika.vn/wp-content/uploads/2024/04/So-mi-DT-tre-vai-hoa-tiet-3-768x1152.jpg",
        "https://leika.vn/wp-content/uploads/2024/04/So-mi-DT-tre-vai-hoa-tiet-3-768x1152.jpg",
    ]

    const specialDeals = [
        {
            id: 1,
            name: "Licoln Corner Unit",
            price: 300.0,
            image: "https://leika.vn/wp-content/uploads/2023/05/ao-so-mi-tui-op-phoi-le-2-768x1152.jpg",
        },
        {
            id: 2,
            name: "Licoln Corner Unit",
            price: 300.0,
            image: "https://leika.vn/wp-content/uploads/2023/05/ao-so-mi-tui-op-phoi-le-2-768x1152.jpg",
        },
        {
            id: 3,
            name: "Licoln Corner Unit",
            price: 300.0,
            image: "https://leika.vn/wp-content/uploads/2023/05/ao-so-mi-tui-op-phoi-le-2-768x1152.jpg",
        },
    ]

    const productTags = ["Lincoln us", "SDress for Girl", "Corner", "Window", "PG", "Oscar", "Bath room", "PSD"]

    const handlePrevImage = () => {
        setActiveImage((prev) => (prev === 0 ? product.image.length - 1 : prev - 1))
    }

    const handleNextImage = () => {
        setActiveImage((prev) => (prev === product.image.length - 1 ? 0 : prev + 1))
    }

    return (
        <div
            className="flex justify-center w-full pt-5"
        >
            <div className="flex w-11/12 gap-6 items-start">
                <div className="flex flex-col w-3/4">
                    <div className="flex gap-6">
                        {/* Left Column - Product Images */}
                        <div className="border rounded-md p-4 bg-white w-1/4 h-fit">
                            <div className="relative mb-4 flex justify-center">
                                {/* <img
                        src={product.image[activeImage] || "/placeholder.svg"}
                        alt="Product Image"
                        fill
                        className="object-contain h-96"
                        priority
                    /> */}
                                <img
                                    src={product.image || "/placeholder.svg"}
                                    alt="Product Image"
                                    fill
                                    className="object-contain h-96"
                                    priority
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button onClick={handlePrevImage} className="p-1 border rounded-md hover:bg-gray-100">
                                    <ChevronLeft className="h-5 w-5" />
                                </button>
                                <div className="flex gap-2 overflow-x-auto">
                                    {/* {product.image.map((img, index) => (
                            <button
                                key={index}
                                className={`border p-1 rounded-md ${activeImage === index ? "border-gray-500" : "border-gray-200"}`}
                                onClick={() => setActiveImage(index)}
                            >
                                <div className="relative w-14 h-14">
                                    <img src={img || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
                                </div>
                            </button>
                        ))} */}
                                </div>
                                <button onClick={handleNextImage} className="p-1 border rounded-md hover:bg-gray-100">
                                    <ChevronRight className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* Middle Column - Product Details */}
                        <div className="border rounded-md p-6 bg-white w-3/4 h-fit">
                            <h1 className="text-2xl font-medium text-gray-800 mb-2">{product.name}</h1>

                            <div className="flex items-center mb-2">
                                <div className="flex text-yellow-400 mr-2">
                                    <Star className="fill-current h-5 w-5" />
                                    <Star className="fill-current h-5 w-5" />
                                    <Star className="fill-current h-5 w-5" />
                                    <Star className="h-5 w-5 text-gray-300" />
                                    <Star className="h-5 w-5 text-gray-300" />
                                </div>
                                <span className="text-sm text-gray-600">02 Review(s)</span>
                            </div>

                            <div className="mb-4">
                                <span className="font-medium">Availability: </span>
                                <span className="text-red-500">{product.availability}</span>
                            </div>

                            <p className="text-gray-600 mb-6">
                                {product.description || "No description available."}
                            </p>

                            <div className="flex items-center mb-6">
                                <span className="font-medium mr-2">Price :</span>
                                <span className="text-3xl font-bold text-red-500">{product.price} .00$</span>
                                <span className="ml-4 text-gray-500 line-through">{product.price + 100} .00$</span>
                            </div>

                            {/* <div className="flex items-center mb-6">
                                <span className="font-medium mr-2">Qty :</span>
                                <div className="relative">
                                    <select
                                        value={quantity}
                                        onChange={(e) => setQuantity(Number(e.target.value))}
                                        className="border rounded-md py-2 pl-3 pr-8 appearance-none bg-white"
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                            <option key={num} value={num}>
                                                {num}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronLeft className="absolute right-2 top-2.5 h-4 w-4 rotate-90 text-gray-500" />
                                </div>
                            </div> */}

                            {/* <div className="flex flex-wrap gap-2 mb-6">
                                <Button className="bg-gray-800 hover:bg-gray-900">Add To Cart</Button>
                                <Button variant="outline" size="icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-4 w-4"
                                    >
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5v14"></path>
                                    </svg>
                                </Button>
                                <Button variant="outline" size="icon">
                                    <Heart className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="icon">
                                    <Mail className="h-4 w-4" />
                                </Button>
                            </div> */}
                            <div className="flex justify-center gap-2">
                                <button
                                    onClick={() => openProductModal(product)}
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

                            <div className="flex gap-2 justify-end">
                                <Link href="#" className="text-blue-500 hover:text-blue-700">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </Link>
                                <Link href="#" className="text-blue-400 hover:text-blue-600">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </Link>
                                <Link href="#" className="text-gray-600 hover:text-gray-800">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5"
                                    >
                                        <path d="M6 9 2 9 2 22 17 22 17 18"></path>
                                        <path d="M18 8V2H2v16H6"></path>
                                        <path d="M18 14H9"></path>
                                        <path d="M15 11l3 3-3 3"></path>
                                    </svg>
                                </Link>
                                <Link href="#" className="text-orange-500 hover:text-orange-700">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                                    </svg>
                                </Link>
                                <span className="text-gray-600 border rounded px-2 text-sm flex items-center">0</span>
                            </div>
                        </div>
                    </div>
                    {/* Product Tabs */}
                    <div className="lg:col-span-3 pt-3">
                        {/* Tabs buttons */}
                        <div className="flex border-b">
                            {["description", "review", "product-tags"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-8 py-3 rounded-t-md text-sm font-medium ${activeTab === tab
                                        ? "bg-red-500 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                        }`}
                                >
                                    {tab.replace("-", " ").toUpperCase()}
                                </button>
                            ))}
                        </div>

                        {/* Tabs content */}
                        <div className="border p-6 bg-white rounded-b-md">
                            {activeTab === "description" && (
                                <>
                                    <p className="text-gray-600">
                                        Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc...
                                    </p>
                                    <p className="text-gray-600 mt-4">
                                        Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc...
                                    </p>
                                </>
                            )}
                            {activeTab === "review" && (
                                <p className="text-gray-600">No reviews yet. Be the first to review this product.</p>
                            )}
                            {activeTab === "product-tags" && (
                                <div className="flex flex-wrap gap-2">
                                    {productTags.map((tag, index) => (
                                        <a
                                            key={index}
                                            href="#"
                                            className="px-3 py-1 border rounded-md text-sm text-gray-600 hover:bg-gray-100"
                                        >
                                            {tag}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>


                {/* Right Column - Special Deals & Tags */}
                <div className=" w-1/4">
                    {/* Right Column - Special Deals & Tags */}
                    <div className="space-y-6">
                        {/* Special Deals */}
                        <div className="border rounded-md overflow-hidden">
                            <div className="bg-gray-100 p-4">
                                <h2 className="text-lg font-medium">
                                    SPECIAL <span className="text-red-500">DEALS</span>
                                </h2>
                            </div>
                            <div className="p-4 space-y-4">
                                {specialDeals.map((deal) => (
                                    <div key={deal.id} className="flex items-center gap-4">
                                        <div className="w-16 h-16 overflow-hidden rounded-md">
                                            <img
                                                src={deal.image || "/placeholder.svg"}
                                                alt={deal.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-gray-600 text-sm">{deal.name}</p>
                                            <p className="text-red-500 font-medium">${deal.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Tags */}
                        <div className="border rounded-md overflow-hidden">
                            <div className="bg-gray-100 p-4">
                                <h2 className="text-lg font-medium">
                                    PRODUCTS <span className="text-red-500">TAGS</span>
                                </h2>
                            </div>
                            <div className="p-4">
                                <div className="flex flex-wrap gap-2">
                                    {productTags.map((tag, index) => (
                                        <a
                                            key={index}
                                            href="#"
                                            className="px-3 py-1 border rounded-md text-sm text-gray-600 hover:bg-gray-100"
                                        >
                                            {tag}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="border rounded-md overflow-hidden">
                            <div className="bg-gray-100 p-4">
                                <h2 className="text-lg font-medium">
                                    GET <span className="text-red-500">NEWSLETTER</span>
                                </h2>
                            </div>
                            <div className="p-4">
                                <p className="text-sm text-gray-600 mb-3">Casio G Shock Digital Dial Black.</p>
                                <div className="space-y-3">
                                    <input
                                        type="email"
                                        placeholder="Your Email..."
                                        className="w-full border rounded-md px-3 py-2 text-sm"
                                    />
                                    <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalCart product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} onAddToCart={handleAddToCart} />
        </div>
    )
}
