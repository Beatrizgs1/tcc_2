import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import Bateria from '../../assets/carossselMateriais/CardBateria.svg';
import AltoFalante from '../../assets/carossselMateriais/CardAltofalante.svg';
import Conector from '../../assets/carossselMateriais/CardConector.svg';
import DisplayIPS from '../../assets/carossselMateriais/CardDisplayIPS.svg';
import Jumperers from '../../assets/carossselMateriais/CardJumpers.svg';
import Leonardo from '../../assets/carossselMateriais/CardLeonardo.svg';
import Mineprotoboard from '../../assets/carossselMateriais/CardMineprotoboard.svg';
import Protoboard from '../../assets/carossselMateriais/CardProtoboard.svg';
import Servo from '../../assets/carossselMateriais/CardServo.svg';
import Uno from '../../assets/carossselMateriais/CardUno.svg';



export default function CMateriais() {
  return (
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
      <SwiperSlide className="bg-white dark:bg-black text-black dark:text-white p-4 rounded-lg shadow-md">
        <img src={Bateria} alt="Bateria" className="mx-auto" />
      </SwiperSlide>
      <SwiperSlide className="bg-white dark:bg-black text-black dark:text-white p-4 rounded-lg shadow-md">
        <img src={AltoFalante} alt="Alto-Falante" className="mx-auto" />
      </SwiperSlide>
      <SwiperSlide className="bg-white dark:bg-black text-black dark:text-white p-4 rounded-lg shadow-md">
        <img src={Conector} alt="Conector" className="mx-auto" />
      </SwiperSlide>
      <SwiperSlide className="bg-white dark:bg-black text-black dark:text-white p-4 rounded-lg shadow-md">
        <img src={DisplayIPS} alt="Display IPS" className="mx-auto" />
      </SwiperSlide>
      <SwiperSlide className="bg-white dark:bg-black text-black dark:text-white p-4 rounded-lg shadow-md">
        <img src={Jumperers} alt="Jumperers" className="mx-auto" />
      </SwiperSlide>
      <SwiperSlide className="bg-white dark:bg-black text-black dark:text-white p-4 rounded-lg shadow-md">
        <img src={Leonardo} alt="Leonardo" className="mx-auto" />
      </SwiperSlide>
      <SwiperSlide className="bg-white dark:bg-black text-black dark:text-white p-4 rounded-lg shadow-md">
        <img src={Mineprotoboard} alt="Mineprotoboard" className="mx-auto" />
      </SwiperSlide>
      <SwiperSlide className="bg-white dark:bg-black text-black dark:text-white p-4 rounded-lg shadow-md">
        <img src={Protoboard} alt="Protoboard" className="mx-auto" />
      </SwiperSlide>
      <SwiperSlide className="bg-white dark:bg-black text-black dark:text-white p-4 rounded-lg shadow-md">
        <img src={Servo} alt="Servo" className="mx-auto" />
      </SwiperSlide>
      <SwiperSlide className="bg-white dark:bg-black text-black dark:text-white p-4 rounded-lg shadow-md">
        <img src={Uno} alt="Uno" className="mx-auto" />
      </SwiperSlide>
    </Swiper>
  );
}
