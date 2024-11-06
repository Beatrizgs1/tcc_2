import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function CProduto() {
    return (
        <div className="w-full flex justify-center mt-12 px-4">
            <Swiper
                spaceBetween={10}
                centeredSlides={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                style={{ width: '100%', maxWidth: '400px' }}
            >
                <SwiperSlide>
                    <img
                        src="/images/image1.jpeg"
                        alt="Imagem 1"
                        className="w-full h-auto sm:w-[340px] sm:h-[450px] rounded-lg mx-auto"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/images/image2.jpeg"
                        alt="Imagem 2"
                        className="w-full h-auto sm:w-[340px] sm:h-[450px] rounded-lg mx-auto"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/images/image3.jpeg"
                        alt="Imagem 3"
                        className="w-full h-auto sm:w-[340px] sm:h-[450px] rounded-lg mx-auto"
                    />
                </SwiperSlide>
            </Swiper>

            {/* Custom Pagination */}
            <div className="flex justify-center mt-4">
                <div className="swiper-pagination" />
            </div>
        </div>
    );
}
