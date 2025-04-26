import React, { useEffect, useState } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
// import slideImage from '../assets/img/slide.jpg';
// import InvestmentPopup from '../components/InvestmentPopup';
import { Helmet } from 'react-helmet';
// import barApi from '../api/bar/barApi';
import { Link } from 'react-router-dom';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [topRatingBar, setTopRatingBar] = useState([]);

  const getBarTopRating = async () => {
    try {
      // const response = await barApi.getBarTopRating();
      // return response.data;
    } catch (err) {
      throw new Error(err.response?.data?.message || "Failed");
    }
  }

  useEffect(() => {
    getBarTopRating().then((data) => {
      setTopRatingBar(data);
    });
  }, []);

  useEffect(() => {
    setShowPopup(true);

    const keenSlider = new KeenSlider("#keen-slider", {
      loop: true,
      slides: {
        origin: 'center',
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 1024px)': {
          slides: {
            origin: 'auto',
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    });

    const keenSliderPrevious = document.getElementById('keen-slider-previous');
    const keenSliderNext = document.getElementById('keen-slider-next');

    const keenSliderPreviousDesktop = document.getElementById('keen-slider-previous-desktop');
    const keenSliderNextDesktop = document.getElementById('keen-slider-next-desktop');

    keenSliderPrevious.addEventListener('click', () => keenSlider.prev());
    keenSliderNext.addEventListener('click', () => keenSlider.next());

    keenSliderPreviousDesktop.addEventListener('click', () => keenSlider.prev());
    keenSliderNextDesktop.addEventListener('click', () => keenSlider.next());

    return () => {
      // Cleanup event listeners when component unmounts
      keenSlider.destroy();
    };
  }, []);
  return (
    <div>
      <Helmet>
        {/* Tiêu đề của trang */}
        <title>Trang chủ BPOOL</title>
        
        {/* Meta tags cơ bản */}
        <meta name="description" content="Đặt bàn bida tại BPool - Địa điểm chơi bida đẳng cấp. Đặt chỗ ngay để trải nghiệm không gian chuyên nghiệp và dịch vụ tận tình." />
        <meta name="keywords" content="đặt bàn, bida, bpool, đặt chỗ bida, địa điểm bida, đặt bàn bida, booking bida, billiards, billiard, chơi bida" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Đặt bàn bida tại BPool - Trải nghiệm chơi bida đẳng cấp" />
        <meta property="og:description" content="Đặt chỗ trước để tận hưởng không gian bida chuyên nghiệp tại BPool. Dịch vụ tốt nhất cho người yêu bida." />
        <meta property="og:url" content="https://fe-bpool.vercel.app/" />
        <meta property="og:image" content="%PUBLIC_URL%/bannerpr.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* {showPopup && <InvestmentPopup onClose={() => setShowPopup(false)} />} */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        // style={{ backgroundImage: `url(${slideImage})` }}
      >
        <div
          className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              ĐẶT BÀN NHANH CHÓNG

              <strong className="block font-extrabold text-red-500 text-5xl"> BPOOL </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              Nhận nhiều phần quà hấp dẫn khi đặt bàn tại Bpool. Đặt bàn ngay hôm nay để nhận ngay ưu đãi lớn.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="bar/?type=1"
                className="block w-full rounded bg-red-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-600 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              >
                Đặt bàn
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text--red-500 shadow hover:text-red-600 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              >
                Xem thông tin
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="w-full md:flex md:justify-center">
          <div className="mx-auto w-full md:w-3/4 px-4 py-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
              <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Những đánh giá về chúng tôi
                </h2>

                <p className="mt-4 text-gray-700">
                  Tiện lợi - Nhanh chóng - Dễ dàng
                </p>

                <div className="hidden lg:mt-8 lg:flex lg:gap-4 lg:justify-center">
                  <button
                    aria-label="Previous slide"
                    id="keen-slider-previous-desktop"
                    className="rounded-full border border-red-500 p-3 text-red-500 transition hover:bg-red-600 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 rtl:rotate-180"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>

                  <button
                    aria-label="Next slide"
                    id="keen-slider-next-desktop"
                    className="rounded-full border border-red-500 p-3 text-red-500 transition hover:bg-red-500 hover:text-white"
                  >
                    <svg
                      className="size-5 rtl:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="-mx-6 lg:col-span-2 lg:mx-0">
                <div id="keen-slider" className="keen-slider">
                  <div className="keen-slider__slide">
                    <blockquote
                      className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
                    >
                      <div>
                        <div className="mt-4">
                          <p className="text-2xl font-bold text-red-500 sm:text-3xl">Thông Hà</p>

                          <p className="mt-4 leading-relaxed text-gray-700">
                            Giờ đây tôi có thể đặt bàn một cách nhanh chóng và dễ dàng hơn bao giờ hết. Bpool là một ứng dụng tuyệt vời.
                          </p>
                        </div>
                      </div>

                      <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                        &mdash; Thông Hà
                      </footer>
                    </blockquote>
                  </div>

                  <div className="keen-slider__slide">
                    <blockquote
                      className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
                    >
                      <div>
                        <div className="mt-4">
                          <p className="text-2xl font-bold text-red-500 sm:text-3xl">Yến Nhi</p>

                          <p className="mt-4 leading-relaxed text-gray-700">
                            Dễ dàng tìm kiếm những quán bida phù hợp với mình. Tôi rất hài lòng với ứng dụng này. Hơn thế nữa đây là nơi để tôi tìm kiếm những quán bida mới.
                          </p>
                        </div>
                      </div>

                      <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                        &mdash; Yến Nhi
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-4 lg:hidden">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous"
                className="rounded-full border border-red-500 p-4 text-red-500 transition hover:bg-red-600 hover:text-white"
              >
                <svg
                  className="size-5 -rotate-180 transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next"
                className="rounded-full border border-red-500 p-4 text-red-500 transition hover:bg-red-600 hover:text-white"
              >
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="my-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-3/4 mx-auto">
        {topRatingBar.map((bar) => (
          <article
            key={bar._id}
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
          > */}
            {/* <Link to={`/detail/${bar._id}`}>
              <img
                alt={bar.name}
                src={bar.imageUrl}
                className="h-56 md:h-80 w-full object-cover"
              />
            </Link> */}

            {/* <div className="bg-white p-4 sm:p-6">
              <time
                dateTime={new Date(bar.createdAt).toISOString()}
                className="block text-xs text-gray-500"
              >
                {new Date(bar.createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </time>

              <Link to={`/detail/${bar._id}`}>
                <h3 className="mt-0.5 text-lg text-gray-900">{bar.name}</h3>
              </Link>
            </div>
          </article>
        ))}
      </div> */}
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            <div className="bg-red-500 p-8 md:p-12 lg:px-16 lg:py-24 flex justify-center items-center rounded-md">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  Nhận ngay ưu đãi lớn khi lần đầu đặt bàn
                </h2>
                <div className="mt-4 md:mt-8">
                  <a
                    href="/bar/?type=1"
                    className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-red-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Đặt bàn ngay
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 md:grid-cols-1 lg:grid-cols-2">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1654338773549-2af4921fae62?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="h-40 w-full object-cover sm:h-56 md:h-full rounded-sm"
              />

              <img
                alt=""
                src="https://images.unsplash.com/photo-1654338772911-16c641da9b9f?q=80&w=2550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="h-40 w-full object-cover sm:h-56 md:h-full rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
