import React, { useState } from "react";
import {
    ShoppingCartIcon,
    MinusCircleIcon,
    PlusCircleIcon,
    TrashIcon
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { postOrder } from "../../api/Order/OrderApi";
import { clearCart } from "../../redux/cartSlice";


const CheckoutPage = () => {
    const cartItems = useSelector(state => state.cartProducts.items);
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const dispatch = useDispatch();

    // const [cartItems, setCartItems] = useState([
    //     {
    //         id: 1,
    //         name: "Áo thun basic",
    //         price: 250000,
    //         quantity: 1,
    //         image: "https://placehold.co/80x80",
    //     },
    //     {
    //         id: 2,
    //         name: "Quần jean slim fit",
    //         price: 450000,
    //         quantity: 1,
    //         image: "https://placehold.co/80x80",
    //     },
    // ]);

    const [activeTab, setActiveTab] = useState("personal");
    const [paymentMethod, setPaymentMethod] = useState("cod");

    // const updateQuantity = (id, change) => {
    //     setCartItems(
    //         cartItems.map((item) => {
    //             if (item.id === id) {
    //                 const newQuantity = Math.max(1, item.quantity + change);
    //                 return { ...item, quantity: newQuantity };
    //             }
    //             return item;
    //         })
    //     );
    // };

    // const removeItem = (id) => {
    //     setCartItems(cartItems.filter((item) => item.id !== id));
    // };

    // const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 30000;
    const totalPay = total + shipping;

    // Format price in VND
    const formatPrice = (price) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(price);
    };

    const handleOrder = async () => {
        let res = await postOrder({ cartItems });
        if (res && res.success === true) {
            alert("Order placed successfully!");
            dispatch(clearCart());

        }
    }


    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items - Left Side on Desktop */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <div className="flex items-center gap-2 mb-2">
                            <ShoppingCartIcon className="h-5 w-5" />
                            <h2 className="text-xl font-bold">Your Cart</h2>
                        </div>
                        <p className="text-gray-500 mb-4">{cartItems.length} items in your cart</p>

                        {cartItems.length > 0 ? (
                            <div className="space-y-4">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                                        <div className="flex-shrink-0">
                                            <img
                                                src={item.image || "/placeholder.svg"}
                                                alt={item.name}
                                                className="w-20 h-20 rounded-md object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium">{item.name}</p>
                                            <p className="text-sm text-gray-500">{formatPrice(item.price)}</p>
                                        </div>
                                        {/* <div className="flex items-center space-x-2">
                                            <button
                                                className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
                                                onClick={() => updateQuantity(item.id, -1)}
                                            >
                                                <MinusCircleIcon className="h-4 w-4" />
                                                <span className="sr-only">Giảm số lượng</span>
                                            </button>
                                            <span className="w-8 text-center">{item.quantity}</span>
                                            <button
                                                className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
                                                onClick={() => updateQuantity(item.id, 1)}
                                            >
                                                <PlusCircleIcon className="h-4 w-4" />
                                                <span className="sr-only">Tăng số lượng</span>
                                            </button>
                                            <button
                                                className="p-1 rounded-full text-red-500 hover:bg-red-50"
                                                onClick={() => removeItem(item.id)}
                                            >
                                                <TrashIcon className="h-4 w-4" />
                                                <span className="sr-only">Xóa sản phẩm</span>
                                            </button>
                                        </div> */}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <p>Your cart is empty</p>
                            </div>
                        )}
                    </div>

                    {/* Customer Information Form */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold mb-2">Customer Information</h2>
                        <p className="text-gray-500 mb-6">
                            Please fill out all information to complete your order
                        </p>

                        <div className="mb-6">
                            <div className="flex border-b">
                                <button
                                    className={`py-2 px-4 font-medium ${activeTab === "personal"
                                        ? "border-b-2 border-blue-500 text-blue-500"
                                        : "text-gray-500"
                                        }`}
                                    onClick={() => setActiveTab("personal")}
                                >
                                    Personal Info
                                </button>
                                <button
                                    className={`py-2 px-4 font-medium ${activeTab === "shipping"
                                        ? "border-b-2 border-blue-500 text-blue-500"
                                        : "text-gray-500"
                                        }`}
                                    onClick={() => setActiveTab("shipping")}
                                >
                                    Shipping Address
                                </button>
                            </div>

                            {activeTab === "personal" ? (
                                <div className="mt-6 space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="fullName" className="block text-sm font-medium">
                                                Full Name
                                            </label>
                                            <input
                                                id="fullName"
                                                type="text"
                                                placeholder="Eden HaDa"
                                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="block text-sm font-medium">
                                                Email
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                placeholder="example@email.com"
                                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="block text-sm font-medium">
                                            Phone Number
                                        </label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            placeholder="0912345678"
                                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className="mt-6 space-y-4">
                                    {/* <div className="space-y-2">
                                        <label htmlFor="province" className="block text-sm font-medium">
                                            Tỉnh/Thành phố
                                        </label>
                                        <select
                                            id="province"
                                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Chọn tỉnh/thành phố</option>
                                            <option value="hanoi">Hà Nội</option>
                                            <option value="hcm">TP. Hồ Chí Minh</option>
                                            <option value="danang">Đà Nẵng</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="district" className="block text-sm font-medium">
                                            Quận/Huyện
                                        </label>
                                        <select
                                            id="district"
                                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Chọn quận/huyện</option>
                                            <option value="district1">Quận 1</option>
                                            <option value="district2">Quận 2</option>
                                            <option value="district3">Quận 3</option>
                                        </select>
                                    </div> */}
                                    <div className="space-y-2">
                                        <label htmlFor="address" className="block text-sm font-medium">
                                            Full Address
                                        </label>
                                        <input
                                            id="address"
                                            type="text"
                                            placeholder="Street address, City, State, Zip Code"
                                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="note" className="block text-sm font-medium">
                                            Note
                                        </label>
                                        <input
                                            id="note"
                                            type="text"
                                            placeholder="Any notes about your order"
                                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Order Summary - Right Side on Desktop */}
                <div>
                    <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                        <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>{formatPrice(total)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>{formatPrice(shipping)}</span>
                            </div>
                            <div className="border-t pt-4 mt-4">
                                <div className="flex justify-between font-bold">
                                    <span>Total</span>
                                    <span>{formatPrice(totalPay)}</span>
                                </div>
                            </div>

                            <div className="pt-4">
                                <p className="text-sm font-medium mb-2">Payment Method</p>
                                <div className="space-y-2">
                                    <label className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="cod"
                                            checked={paymentMethod === "cod"}
                                            onChange={() => setPaymentMethod("cod")}
                                            className="h-4 w-4 text-blue-600"
                                        />
                                        <span>Cash on Delivery (COD)</span>
                                    </label>
                                    <label className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="bank"
                                            checked={paymentMethod === "bank"}
                                            onChange={() => setPaymentMethod("bank")}
                                            className="h-4 w-4 text-blue-600"
                                        />
                                        <span>Bank Transfer</span>
                                    </label>
                                    <label className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="card"
                                            checked={paymentMethod === "card"}
                                            onChange={() => setPaymentMethod("card")}
                                            className="h-4 w-4 text-blue-600"
                                        />
                                        <span>Credit/Debit Card</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => handleOrder()}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md mt-6 transition duration-200">
                            Complete Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;