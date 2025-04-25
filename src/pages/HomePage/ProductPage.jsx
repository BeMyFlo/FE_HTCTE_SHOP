import { useContext, useEffect, useState } from "react"
import { Heart, Share2, ChevronLeft, ChevronRight, List, Grid } from "lucide-react";
import { CategoryContext } from "../../context/CategoryContext";
import { getProductByCategory } from "../../api/Product/ProductApi";
import { useSearchParams } from "react-router-dom";
import { FaExchangeAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import ModalCart from "../ModalCart/ModalCart";
import { addToCart } from '../../redux/cartSlice';



export default function ProductPage() {
    const [viewMode, setViewMode] = useState("grid")
    const [currentPage, setCurrentPage] = useState(1)
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("");

    const [listProductByCategory, setListProductByCategory] = useState([]);

    const { idCategory } = useContext(CategoryContext);

    const [searchParams] = useSearchParams();
    const categoryFromURL = searchParams.get("category");

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [cart, setCart] = useState([]);
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
    // useEffect(() => {
    //     if (idCategory) {
    //         fetchProductByCategory(idCategory);
    //     }
    // }, [idCategory]);
    useEffect(() => {
        if (categoryFromURL) {
            fetchProductByCategory(categoryFromURL);
        }
    }, [categoryFromURL]);

    const fetchProductByCategory = async (idCategory) => {
        let data = await getProductByCategory(idCategory);
        if (data && data.success === true) {
            setListProductByCategory(data.data)
        }
    }

    console.log('listProductByCategory: ', listProductByCategory)


    const products = [
        {
            id: 1,
            name: "Iphone 5s Gold 32 Gb 2013",
            price: 451.0,
            image: "/placeholder.svg?height=300&width=200",
            isNew: false,
        },
        {
            id: 2,
            name: "Iphone 5s Gold 32 Gb 2013",
            price: 451.0,
            image: "/placeholder.svg?height=300&width=200",
            isNew: false,
        },
        {
            id: 3,
            name: "Iphone 5s Gold 32 Gb 2013",
            price: 451.0,
            image: "/placeholder.svg?height=300&width=200",
            isNew: true,
        },
    ]

    const categories = ["Men", "Women", "Salon", "New Trend", "Living room", "Bed room"]

    const branches = ["New", "Sofa", "Salon", "New Trend", "Living room", "Bed room"]

    const handlePriceFilter = () => {
        console.log("Filtering by price:", minPrice, maxPrice)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Sale Banner */}
            <div className="relative mb-8 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gray-200">
                    <div className="absolute inset-0 bg-purple-200 bg-opacity-30 flex items-center justify-end">
                        <img src="/placeholder.svg?height=400&width=600" alt="Model with hat" className="h-full object-cover" />
                    </div>
                    <div className="absolute left-0 top-0 h-full w-1/2 flex flex-col items-center justify-center text-center px-8">
                        <h2 className="text-4xl font-bold text-red-500 mb-4">OFF SALE %40</h2>
                        <p className="text-pink-500">
                            Etiam velit purus, luctus vitae velit sedauctor egestas diam, Etiam velit purus.
                        </p>
                    </div>
                </div>
                <div className="h-48 md:h-64 lg:h-80"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <div className="md:w-1/4 space-y-8">
                    {/* Categories */}
                    <div className="border rounded-lg p-4">
                        <h3 className="text-lg font-medium mb-4 text-gray-700">CATEGORIES</h3>
                        <ul className="space-y-2">
                            {categories.map((category, index) => (
                                <li key={index}>
                                    <a href="#" className="text-gray-600 hover:text-red-500">
                                        {category}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Branch */}
                    <div className="border rounded-lg p-4">
                        <h3 className="text-lg font-medium mb-4 text-gray-700">BRANCH</h3>
                        <ul className="space-y-2">
                            {branches.map((branch, index) => (
                                <li key={index}>
                                    <a href="#" className="text-gray-600 hover:text-red-500">
                                        {branch}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Price Filter */}
                    <div className="border rounded-lg p-4">
                        <h3 className="text-lg font-medium mb-4 text-gray-700">PRICE</h3>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-600">$</span>
                            <input
                                type="text"
                                className="border rounded p-2 w-20"
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                            />
                            <span className="text-gray-600">-</span>
                            <span className="text-gray-600">$</span>
                            <input
                                type="text"
                                className="border rounded p-2 w-20"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                            />
                            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handlePriceFilter}>
                                Go
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="md:w-3/4">
                    {/* Toolbar */}
                    <div className="flex flex-wrap items-center justify-between mb-6">
                        <div className="flex items-center gap-2 mb-4 md:mb-0">
                            <button
                                className={`p-2 border rounded ${viewMode === "list" ? "bg-red-500 text-white" : "bg-white"}`}
                                onClick={() => setViewMode("list")}
                            >
                                <List size={18} />
                            </button>
                            <button
                                className={`p-2 border rounded ${viewMode === "grid" ? "bg-red-500 text-white" : "bg-white"}`}
                                onClick={() => setViewMode("grid")}
                            >
                                <Grid size={18} />
                            </button>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-gray-600">Sort by:</span>
                                <select className="border rounded p-2 text-gray-600">
                                    <option>Default</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Newest</option>
                                </select>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-gray-600">Show:</span>
                                <select className="border rounded p-2 text-gray-600">
                                    <option>3</option>
                                    <option>6</option>
                                    <option>9</option>
                                    <option>12</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div
                        className={`grid ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"} gap-6`}
                    >
                        {listProductByCategory && listProductByCategory.length > 0 &&
                            listProductByCategory.map((listProductsByCategory) => (
                                <div
                                    key={listProductsByCategory.id}
                                    className="relative border rounded-xl p-4 text-center shadow hover:shadow-lg transition"
                                >
                                    {listProductsByCategory.badge && (
                                        <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                            {listProductsByCategory.badge}
                                        </div>
                                    )}
                                    <img
                                        src={listProductsByCategory.image}
                                        alt={listProductsByCategory.name}
                                        className="w-full h-48 object-contain mb-4"
                                    />
                                    <div className="text-sm text-gray-700 mb-2">{listProductsByCategory.name}</div>
                                    <div className="text-red-600 text-lg font-bold mb-4">
                                        ${listProductsByCategory.price.toFixed(2)}
                                    </div>
                                    <div className="flex justify-center gap-2">
                                        <button
                                            onClick={() => openProductModal(listProductsByCategory)}
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

                    {/* Pagination */}
                    <div className="flex justify-center mt-8">
                        <nav className="flex items-center gap-1">
                            <button className="p-2 border rounded hover:bg-gray-100">
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                className={`px-4 py-2 border rounded ${currentPage === 1 ? "bg-red-500 text-white" : "hover:bg-gray-100"
                                    }`}
                                onClick={() => setCurrentPage(1)}
                            >
                                1
                            </button>
                            <button
                                className={`px-4 py-2 border rounded ${currentPage === 2 ? "bg-red-500 text-white" : "hover:bg-gray-100"
                                    }`}
                                onClick={() => setCurrentPage(2)}
                            >
                                2
                            </button>
                            <button
                                className={`px-4 py-2 border rounded ${currentPage === 3 ? "bg-red-500 text-white" : "hover:bg-gray-100"
                                    }`}
                                onClick={() => setCurrentPage(3)}
                            >
                                3
                            </button>
                            <button className="p-2 border rounded hover:bg-gray-100">
                                <ChevronRight size={18} />
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
            {/* Product Detail Modal */}
            <ModalCart product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} onAddToCart={handleAddToCart} />
        </div>
    )
}
