import { useState, useEffect } from "react"
import { X, Minus, Plus, ShoppingCart } from "lucide-react"

const ModalCart = ({ product, isOpen, onClose, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1)

    // Reset quantity when modal opens with a new product
    useEffect(() => {
        if (isOpen) {
            setQuantity(1)
        }
    }, [isOpen, product])

    // Prevent body scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [isOpen])

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1)
    }

    const decreaseQuantity = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
    }

    const handleAddToCart = () => {
        onAddToCart({
            ...product,
            quantity,
        })
        onClose()
    }

    if (!isOpen || !product) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
            <div
                className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10">
                    <X size={24} />
                </button>

                <div className="flex flex-col md:flex-row">
                    {/* Product Image */}
                    <div className="md:w-1/2 p-6 flex items-center justify-center bg-gray-100">
                        <img
                            src={product.image || "/placeholder.svg?height=400&width=400"}
                            alt={product.name}
                            className="max-h-[300px] object-contain"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="md:w-1/2 p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>

                        {/* Price */}
                        <div className="text-red-500 text-2xl font-bold mb-4">${product.price?.toFixed(2)}</div>

                        {/* Description */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">Mô tả sản phẩm</h3>
                            <p className="text-gray-600">
                                {product.description ||
                                    "Sản phẩm chất lượng cao với thiết kế hiện đại. Phù hợp với nhiều phong cách và nhu cầu sử dụng khác nhau."}
                            </p>
                        </div>

                        {/* Quantity Selector */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">Số lượng</h3>
                            <div className="flex items-center">
                                <button
                                    onClick={decreaseQuantity}
                                    className="w-10 h-10 rounded-l border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                                >
                                    <Minus size={16} />
                                </button>
                                <div className="w-14 h-10 border-t border-b border-gray-300 flex items-center justify-center">
                                    {quantity}
                                </div>
                                <button
                                    onClick={increaseQuantity}
                                    className="w-10 h-10 rounded-r border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                            onClick={handleAddToCart}
                            className="w-full py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg flex items-center justify-center transition-colors"
                        >
                            <ShoppingCart size={20} className="mr-2" />
                            Thêm vào giỏ hàng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCart
