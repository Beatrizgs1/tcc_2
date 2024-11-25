import React, { useState } from 'react';
import Nav from './Nav';
import Footer from "./Footer";
import CProduto from './carrosel/CProduto';
import '../customSwiper.css';

import numeroUm from '../assets/iconsRedes/iconsNumero/iconUm.svg';
import numeroDois from '../assets/iconsRedes/iconsNumero/iconDois.svg';
import numeroTres from '../assets/iconsRedes/iconsNumero/iconTres.svg';
import numeroQuatro from '../assets/iconsRedes/iconsNumero/iconQuatro.svg';
import numeroCinco from '../assets/iconsRedes/iconsNumero/iconCinco.svg';

import lupaBranca from '../assets/iconsRedes/iconLupa/iconLupaBranca.svg';
import lupaRoxa from '../assets/iconsRedes/iconLupa/iconLupaRoxo.svg';

export function Nossoproduto() {
  const [activePhase, setActivePhase] = useState('Primeira Fase');

  const handlePhaseClick = (phase) => {
    setActivePhase(phase);
  };

  return (
    <div>
      <Nav />
      <div className="min-h-screen flex justify-center items-center sm:ml-5 sm:mr-5">
        <section className="p-8 rounded-lg max-w-6xl w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className='text-purple dark:text-white text-2xl md:text-4xl text-center sm:text-start font-semibold font-titulo mb-10 ml-5'>
                Robô Kids
              </h1>
              <p className="font-paragrafo text-justify mb-5 ml-5 mr-5 text-base sm:text-lg">
              O projeto consiste em um protótipo desenvolvido através da plataforma Arduino, com comunicação via Wi-Fi e uma tela touch screen. A partir dela, a criança conseguirá interagir com o Robô Kids, que irá realizar perguntas sobre a matéria de matemática, de acordo com a idade da criança, permitindo que ela selecione a resposta da pergunta realizada. Além disso, um aplicativo ligado ao robô lista todos os acertos e erros conforme as perguntas realizadas, ajudando os pais a acompanharem o desenvolvimento educativo de seus filhos e observarem as dificuldades que a criança apresenta na matéria. O principal objetivo é ajudar as crianças a aprenderem e adquirirem mais conhecimentos.
              </p>
            </div>
            <div className="flex justify-center order-last">
              <CProduto />
            </div>
          </div>

          <section className="py-15 mt-10">
            <div className='flex items-center'>
              <h2 className='text-purple dark:text-white sm:text-3xl text-xl font-titulo my-14 font-normal whitespace-nowrap mr-12'>Funcionamento</h2>
              <hr className='sm:w-[850px] w-[400px] border-purple dark:border-white' />
            </div>

            <div className='sm:flex items-start mt-10'>
              <div className='flex justify-start sm:items-start font-paragrafo'>
                <div className='mr-8 mb-15 font-paragrafo'>
                  <p className='font-topico text-purple dark:text-white md:2xl lg:text-[30px] mb-15 mt-15'>Guia de utilização</p>

                  <div className='bg-gray-200 dark:bg-gray-700 rounded-lg p-4 ml-4 w-full max-w-[700px] h-[390px] mt-4'>
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/i76IcCoIKUo" 
                      title="Robô Kids" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className='rounded-lg'
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className='ml-auto space-y-6 w-full max-w-[600px] text-justify font-paragrafo text-base mt-10 px-5 dark:text-white'>
                {[  
                  { number: numeroUm, title: "Passo 1", description: "Na tela inicial, escolha entre diferentes modos de aprendizado..." },
                  { number: numeroDois, title: "Passo 2", description: "A criança pode tocar nos botões na tela para responder às perguntas..." },
                  { number: numeroTres, title: "Passo 3", description: "Baixe o aplicativo complementar no smartphone ou tablet..." },
                  { number: numeroQuatro, title: "Passo 4", description: "Para garantir um uso saudável do robô, os pais podem estabelecer limites de tempo..." },
                  { number: numeroCinco, title: "Passo 5", description: "O robô também pode enviar relatórios semanais para o aplicativo dos pais..." },
                ].map((step, index) => (
                  <div className='flex items-start space-x-4' key={index}>
                    <img src={step.number} alt={`número ${index + 1}`} className='w-10 h-10' />
                    <div>
                      <p className='font-paragrafo text-lg sm:text-xl font-medium text-purple dark:text-white'>{step.title}</p>
                      <p className='text-grey-popup font-topico text-base sm:text-x1 dark:text-white'>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className='flex items-center mt-10'>
            <h1 className='text-purple dark:text-white sm:text-3xl text-xl font-titulo my-14 font-normal mr-12'>Desenvolvimento</h1>
            <hr className='w-[1500px] border-purple dark:border-white' />
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-5 gap-[50px] justify-items-center'>
            {['Primeira Fase', 'Segunda Fase', 'Terceira Fase', 'Quarta Fase', 'Fase Final'].map((fase, index) => (
              <div 
                key={index} 
                className={`w-56 h-48 rounded-lg border-2 ml-10 border-purple flex flex-col items-center justify-between p-4 ${activePhase === fase ? 'bg-purple text-white' : 'bg-white text-purple dark:bg-gray-700 dark:text-white'} transition-opacity duration-300 hover:opacity-50 cursor-pointer`} 
                onClick={() => handlePhaseClick(fase)}
              >
                <img 
                  className={`w-21 h-20 ${activePhase === fase ? 'opacity-100' : 'opacity-50'}`} 
                  src={activePhase === fase ? lupaBranca : lupaRoxa} 
                  alt="Lupa" 
                />
                <div className="text-xl sm:text-2xl font-normal font-titulo">{fase}</div>
              </div>
            ))}
          </div>

          <div className='flex flex-col items-center sm:items-start mt-8'>
            <div className='sm:flex sm:items-center'>
              <p className='font-topico text-purple dark:text-white text-xl sm:text-2xl sm:mb-5 mb-10'>
                {activePhase}
              </p>
            </div>
            <div className='w-full max-w-[600px] flex flex-col '>
              <p className="font-paragrafo text-base sm:text-lg text-center text-justify px-10 sm:px-0 mb-5 dark:text-white">
                {activePhase === 'Primeira Fase' && 'Na primeira fase, focamos na seleção e aquisição das peças e componentes essenciais para a construção do robô...'}
                {activePhase === 'Segunda Fase' && 'Durante a segunda fase, trabalhamos na programação inicial do robô...'}
                {activePhase === 'Terceira Fase' && 'Na terceira fase, focamos na integração completa entre o hardware e o software do robô...'}
                {activePhase === 'Quarta Fase' && 'Durante a quarta fase, realizamos uma série de testes de desempenho...'}
                {activePhase === 'Fase Final' && 'A fase final envolve a entrega do robô ao cliente...'}
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
