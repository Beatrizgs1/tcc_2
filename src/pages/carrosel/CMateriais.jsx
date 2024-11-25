import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import Bateria from '../../assets/carossselMateriais/CardBateria.svg';
import AltoFalante from '../../assets/carossselMateriais/CardAltofalante.svg';
import Amplificador from '../../assets/carossselMateriais/CardAmplificador.svg';
import Conector from '../../assets/carossselMateriais/CardConector.svg';
import DisplayIPS from '../../assets/carossselMateriais/CardDisplayIPS.svg';
import DisplayLCD from '../../assets/carossselMateriais/CardDisplayLCD.svg';
import Jumperers from '../../assets/carossselMateriais/CardJumpers.svg';
import Leonardo from '../../assets/carossselMateriais/CardLeonardo.svg';
import Mineprotoboard from '../../assets/carossselMateriais/CardMineprotoboard.svg';
import Modulo from '../../assets/carossselMateriais/CardModulo.svg';
import Protoboard from '../../assets/carossselMateriais/CardProtoboard.svg';
import Servo from '../../assets/carossselMateriais/CardServo.svg';
import Uno from '../../assets/carossselMateriais/CardUno.svg';
import Mega from '../../assets/carossselMateriais/CardMega.svg';
import DFplayer from '../../assets/carossselMateriais/CardDFplayer.svg';
import Resistor from '../../assets/carossselMateriais/CardResistor.svg';
import Filamento from '../../assets/carossselMateriais/CardFilamento.svg';

export default function CMateriais() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Verifique o tema no carregamento da página (pode vir do localStorage ou contexto)
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    setIsDarkMode(currentTheme === 'dark');
  }, []);

  return (
    <div className={isDarkMode ? 'theme-dark' : ''}>
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        navigation={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1, 
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          }
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto"
      >
        <SwiperSlide>
          <div className="bg-white p-0 rounded-lg shadow-lg overflow-hidden">
            <img src={Bateria} alt="Bateria" className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-0 rounded-lg shadow-lg overflow-hidden">
            <img src={AltoFalante} alt="Alto-Falante" className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-0 rounded-lg shadow-lg overflow-hidden">
            <img src={Conector} alt="Conector" className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-0 rounded-lg shadow-lg overflow-hidden">
            <img src={DisplayLCD} alt="Display LCD" className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-0 rounded-lg shadow-lg overflow-hidden">
            <img src={Jumperers} alt="Jumperers" className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-0 rounded-lg shadow-lg overflow-hidden">
            <img src={Protoboard} alt="Protoboard" className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-0 rounded-lg shadow-lg overflow-hidden">
            <img src={Servo} alt="Servo" className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-0 rounded-lg shadow-lg overflow-hidden">
            <img src={Uno} alt="Uno" className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-0 rounded-lg shadow-lg overflow-hidden">
            <img src={Mega} alt="Arduino Mega" className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-0 rounded-lg shadow-lg overflow-hidden">
            <img src={DFplayer} alt="DFplayer Mini" className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-0 rounded-lg shadow-lg overflow-hidden">
            <img src={Resistor} alt="Resistor 1K" className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-0 rounded-lg shadow-lg overflow-hidden">
            <img src={Filamento} alt="Filamento" className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
