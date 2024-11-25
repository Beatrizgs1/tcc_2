import Nav from './Nav';
import Footer from "./Footer";
import React from 'react';
import '../index.css'; 

export function Jogo() {
  return (
    <div className="flex flex-col min-h-screen w-full ">
      <Nav />
      <div className="flex-grow flex flex-col justify-center items-center mx-4 mt-5 mb-4 px-9 ">
        <h1 className="animated-title text-2xl sm:text-3xl md:text-4xl font-semibold text-purple mb-[70px] mt-12 font-titulo text-center">
          Funcionamento dos Jogos
        </h1>
        
        <iframe
          className="w-full max-w-lg mb-[70px]"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8S7fhljEoZc?si=M87XbQq0SMB2JJQl"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <iframe
          className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] aspect-[9/16] mb-[70px]"
          src="https://www.youtube.com/embed/JAqcn_-xXAc" // Link atualizado
          title="Jogo - “Pou”"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}
