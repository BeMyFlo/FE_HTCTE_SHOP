import Header from "./Header";
import HomeSlider from "./HomeSlider";
import HotProducts from "./HotProducts";


const HomePage = () => {
    return (
        <div className="flex flex-col bg-gray-100 min-h-screen">
            <div className="header">
                <Header />
            </div>
            <div className="home-slider">
                <HomeSlider />
            </div>
            <div className="flex justify-center items-center w-full">
                <HotProducts />
            </div>
        </div>
    );
}
export default HomePage;    