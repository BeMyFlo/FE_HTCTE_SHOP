import { Outlet } from "react-router-dom";
import Header from "./Header";
import HomeSlider from "./HomeSlider";
import HotProducts from "./HotProducts";
import { useState } from "react";
import { CategoryContext } from "../../context/CategoryContext";

const HomePage = () => {
    const [idCategory, setIdCategory] = useState(null);

    // const selectCategory = (id) => {
    //     setIdCategory(id);
    // }


    return (
        <CategoryContext.Provider value={{ idCategory, setIdCategory }}>
            <div className="flex flex-col bg-gray-100 min-h-screen">
                <div className="header">
                    <Header />
                </div>
                <div className="pt-110">
                    <Outlet />
                </div>
            </div>
        </CategoryContext.Provider>
    );
}
export default HomePage;    