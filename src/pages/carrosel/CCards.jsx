import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Fotobia from '../../assets/fotosProgam/fotoBiaCentro.svg';
import Fotothigas from '../../assets/fotosProgam/fotoThigasCentro.svg';
import Fotole from '../../assets/fotosProgam/fotoLeeCentro.svg';
import Fotogabi from '../../assets/fotosProgam/fotoGabsCentro.svg';

function CCards() {
  return (
    <div className="w-full overflow-hidden relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
            <img 
              src={Fotobia} 
              alt="Beatriz Gonçalves" 
              className="w-40 h-40 object-contain rounded-full mb-4 " 
            />
            <h2 className="text-xl text-purple mb-2 text-center font-bold">Beatriz Gonçalves</h2>
            <p className="text-gray-600 mb-4 text-center font-paragrafo">Prótotipo, jogo e site</p>
            <button 
              onClick={() => window.location.href='https://www.instagram.com/biiah_gsouza/'}
              className="bg-purple text-white px-4 py-2 hover:underline rounded-lg hover:opacity-80 transition-opacity duration-300"
            >
              Saiba mais
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
            <img 
              src={Fotole} 
              alt="Letícia Lopes" 
              className="w-40 h-40 object-contain rounded-full mb-4 " 
            />
            <h2 className="text-xl font-bold mb-2 text-center text-purple">Letícia Lopes</h2>
            <p className="text-gray-600 mb-4 text-center font-paragrafo">Prótotipo, jogo e site</p>
            <button 
              onClick={() => window.location.href='https://www.instagram.com/lee.lopesz/'}
              className="bg-purple text-white px-4 py-2 hover:underline rounded-lg hover:opacity-80 transition-opacity duration-300"
            >
              Saiba mais
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
            <img 
              src={Fotogabi} 
              alt="Gabriela Balieiro" 
              className="w-40 h-40 object-contain rounded-full mb-4 " 
            />
            <h2 className="text-xl mb-2 text-center text-purple font-bold">Gabriela Balieiro</h2>
            <p className="text-gray-600 mb-4 text-center font-paragrafo">Prótotipo, jogo e site</p>
            <button 
              onClick={() => window.location.href='https://www.instagram.com/gabzbali/'}
              className="bg-purple text-white px-4 py-2 hover:underline rounded-lg hover:opacity-80 transition-opacity duration-300"
            >
              Saiba mais
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
            <img 
              src={Fotothigas} 
              alt="Thiago Lima" 
              className="w-40 h-40 object-contain rounded-full mb-4 "
            />
            <h2 className="text-xl mb-2 text-center text-purple font-bold">Thiago Lima</h2>
            <p className="text-gray-600 mb-4 text-center font-paragrafo">Prótotipo, jogo e site</p>
            <button 
              onClick={() => window.location.href='https://www.instagram.com/thii.lima_/'}
              className="bg-purple text-white px-4 py-2 hover:underline rounded-lg hover:opacity-80 transition-opacity duration-300"
            >
              Saiba mais
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CCards;
