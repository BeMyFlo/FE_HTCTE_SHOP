import { FaExchangeAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

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
    return (
        <div className="p-6 w-5/6">
            <h3 className="text-2xl font-semibold mb-6">
                <span className="text-red-500">Hot</span> Products
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="relative border rounded-xl p-4 text-center shadow hover:shadow-lg transition"
                    >
                        {product.badge && (
                            <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                {product.badge}
                            </div>
                        )}
                        <img
                            src={product.img}
                            alt={product.name}
                            className="w-full h-48 object-contain mb-4"
                        />
                        <div className="text-sm text-gray-700 mb-2">{product.name}</div>
                        <div className="text-red-600 text-lg font-bold mb-4">
                            ${product.price.toFixed(2)}
                        </div>
                        <div className="flex justify-center gap-2">
                            <button className="px-3 py-1 border border-gray-300 rounded-xl hover:bg-gray-100 text-sm">
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
    );
}
