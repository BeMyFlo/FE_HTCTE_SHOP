import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import logo from '../../assets/logo.png'

const HomeSlider = () => {
    const slides = [
        {
            title: "COLLECTION FOR WINTER",
            subtitle: "PARIS SHOW 2014",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            image:'https://media.tinmoi.vn/2015/01/05/can-canh-nhan-sac-my-nhan-co-khuon-mat-dep-nhat-the-gioi7.png'
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

    return (
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
    );
};

export default HomeSlider;
