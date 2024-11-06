import React from 'react';
import Nav from './Nav';
import Carossel from './carrosel/CCards.jsx';
import Footer from './Footer';

export function Quemsomos() {
  return (
    <div>
      <Nav />
      <div className=" justify-center mx-20 mt-5 mb-[160px]">
        <h1 className="text-2xl md:text-4xl font-semibold text-purple  md:mb-[40px] mb-12 mt-16 font-titulo text-center  ml-[20px]">Desenvolvedores</h1>
        <div className="max-w-7xl mx-auto ">
          <Carossel />
        </div>
      </div>
   <Footer />
   </div>
  )
}
