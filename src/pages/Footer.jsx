import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoFooter.svg';
import IconEmail from '../assets/iconsRedes/emailIconAzul.svg';
import IconInsta from '../assets/iconsRedes/instaIconAzul.svg';
import IconX from '../assets/iconsRedes/xIconAzul.svg';
import IconFace from '../assets/iconsRedes/faceIconAzul.svg';

function Footer() {
  return (
    <footer className="bg-purple py-8 flex flex-col items-center">
      <div className="container flex flex-col sm:flex-row items-center justify-between">
        <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
          <img src={logo} alt="Logo do site escrito Robô Kids" className="mb-4" />
          <div className='flex items-center gap-5'>
            <a href="">
              <img src={IconEmail} alt="Ícone do Email" className='transition-transform duration-200 ease-in-out transform hover:scale-110' />
            </a>
            <a href="">
              <img src={IconInsta} alt="Ícone do Instagram" className='transition-transform duration-200 ease-in-out transform hover:scale-110' />
            </a>
            <a href="">
              <img src={IconX} alt="Ícone do X" className='transition-transform duration-200 ease-in-out transform hover:scale-110' />
            </a>
            <a href="">
              <img src={IconFace} alt="Ícone do Facebook" className='transition-transform duration-200 ease-in-out transform hover:scale-110' />
            </a>
          </div>
        </div>

        <div className='flex flex-col gap-8 sm:flex-row sm:gap-16'>
          <div className='mt-8'> 
            <button className='font-paragrafo font-bold text-light-blue text-xl sm:text-2xl no-underline hover:text-grey hover:underline'>
              <Link to={"/produto"}>Produto</Link>
            </button>
            <div className='font-topico font-normal text-white text-lg sm:text-xl'>
              <p>O que é?</p>
              <p>Funcionamento</p>
              <p>Desenvolvimento</p>
            </div>
          </div>
          <div className='mt-8'> 
            <button className='font-paragrafo font-bold text-light-blue text-xl sm:text-2xl no-underline hover:text-grey hover:underline'>
              <Link to={"/materiais"}>Materiais</Link>
            </button>
            <div className='font-topico font-normal text-white text-lg sm:text-xl'>
              <p>Componentes</p>
              <p>Utilização</p>
              <p>Valor final do projeto</p>
            </div>
          </div>
          <div className='mt-8'>
            <button className='font-paragrafo font-bold text-light-blue text-xl sm:text-2xl no-underline hover:text-grey hover:underline'>
              <Link to={"/bibliografias"}>Bibliografia</Link>
            </button>
            <div className='font-topico font-normal text-white text-lg sm:text-xl'>
              <p>Descrição</p>
              <p>Artigos</p>
            </div>
          </div>
          <div className='mt-8'>
            <button className='font-paragrafo font-bold text-light-blue text-xl sm:text-2xl no-underline hover:text-grey hover:underline'>
              <Link to={"/quemsomos"}>Somos</Link>
            </button>
            <div className='font-topico font-normal text-white text-lg sm:text-xl'>
              <p>Desenvolvedores</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
