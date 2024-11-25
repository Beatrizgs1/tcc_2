import React from 'react';
import Nav from './Nav';
import Footer from "./Footer";
import Carossel from './carrosel/CMateriais';

// Modificado para importar o novo arquivo de imagem
import imgRoboMateriais from '../assets/iconsRedes/robo.svg';

export function Materiais() {
  return (
    <div>
      <Nav />
      <div>
        <section className='mb-20'>
          <div>
            <h1 className="text-2xl md:text-4xl font-semibold text-purple mb-4 font-titulo text-center p-14">Materiais</h1>
          </div>
          <div className='flex justify-center items-center'>
            <Carossel />
          </div>
        </section>

        <section>
          <div className='sm:mb-44 mb-20'>
            <div className='flex items-center'>
              <h2 className='text-purple font-titulo sm:text-3xl sm:px-44 sm:pr-12 text-xl pr-10 pl-10'>Utilização</h2>
              <hr className='sm:w-[1320px] w-[130px] border-purple' />
            </div>

            <div className='relative mt-12 sm:mt-24 hover:cursor-pointer transform transition ease-in-out duration-2000 float-effect'>
              {/* Imagem alterada para o novo arquivo */}
              <img
                src={imgRoboMateriais}
                alt="Robô da página de materiais"
                className="sm:w-[428px] sm:h-[512px] w-[153px] h-[215px] mx-auto bg-transparent"
              />
       
              <div className="tooltip tooltip-head absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 transition-opacity">
                Display IPS
                <span className="tooltip-arrow"></span>
              </div>

              <div className="tooltip tooltip-arm-left absolute left-5 top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity">
                Servo Motor
                <span className="tooltip-arrow"></span>
              </div>
      
              <div className="tooltip tooltip-arm-right absolute right-5 top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity">
                Servo Motor
                <span className="tooltip-arrow"></span>
              </div>
       
              <div className="tooltip tooltip-belly absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 transition-opacity">
                Tela Touch Screen
                <span className="tooltip-arrow"></span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div className='flex items-center pl-2 p'>
              <h2 className='text-purple font-titulo text-xl sm:text-3xl sm:px-44 sm:pr-12 pl-[60px] pr-8'>Valor final</h2>
              <hr className='sm:w-[1120px] w-[130px] border-purple' />
            </div>
            <p className='sm:px-44 sm:py-6 font-paragrafo text-justify mb-[60px] sm:text-lg text-base px-10 py-4 mr-6 ml-6'>
              O nosso projeto, além de ter um alto custo inicial, demanda um grande esforço de trabalho, por isso projetamos um valor inicial de R$1.700,00, levando em consideração todo o custo e desenvolvimento. Além disso, o projeto é altamente tecnológico e apresenta um diferencial significativo, incluindo um aplicativo que permite aos pais acompanhar a evolução da criança e um jogo divertido para a própria criança. Tudo isso é integrado com o robô, proporcionando um suporte completo ao cliente.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
