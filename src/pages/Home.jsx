import imgRobo from '../assets/roboImg.svg';
import IconInsta from '../assets/iconsRedes/instaIconPreto.svg';
import IconFace from '../assets/iconsRedes/faceIconPreto.svg';
import IconThreads from '../assets/iconsRedes/iconLogins/iconThreads.svg';
import Nav from './Nav';
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import './Home.css'; 

export function Home() {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full flex flex-col sm:flex-row items-center sm:items-start mx-4">
          <img 
            src={imgRobo} 
            alt="Imagem de um Robô na cor branca" 
            className="mt-10 sm:w-[557px] sm:h-[666px] w-[153px] h-[182px] mx-auto sm:ml-[100px] sm:mr-[170px] font-titulo transform transition ease-in-out duration-1000 float-effect mr-[100px]" 
          />
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left ml-6 mr-6">
            <h1 className="scale-animation font-semibold text-[#5C6898] dark:text-white mb-10 text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] font-titulo mt-12 sm:ml-[3px]">
              Robô Kids
            </h1>

            <p className="w-[90%] sm:w-[80%] lg:w-[60%] text-black dark:text-white text-base md:text-lg sm:ml-1 text-justify font-normal font-paragrafo ml-12 mr-12">
              Trata-se de um produto destinado a ajudar crianças em sua jornada de aprendizado, com ênfase na disciplina de matemática. 
              Por meio da integração da tecnologia, as crianças podem se divertir enquanto aprendem, ao passo que os pais têm a oportunidade de monitorar o progresso de seus filhos.
            </p>
            <Link to="/produto">
              <button className="button-animation font-topico px-6 py-3 w-32 bg-purple text-white rounded-lg border border-transparent mb-11 mt-11">
                Veja mais
              </button>
            </Link>

            <div className="flex justify-center sm:justify-start space-x-4 mt-8 mb-8">
              <a href="https://www.threads.net/@robokids.tcc?xmt=AQGzPkcJ2U2CTwo69k4b4YNCFv9boH0X4e5DcFtUbQzNjlw"> 
                <img src={IconThreads} alt="Ícone da rede social Threads" className="w-10 h-10 transition-transform duration-200 ease-in-out transform hover:scale-110" />                   
              </a>
              <a href="https://www.instagram.com/robokids.tcc?igsh=ejhjY2p2a2preGN3&utm_source=qr"> 
                <img src={IconInsta} alt="Ícone da rede social Instagram" className="w-8 h-9 transition-transform duration-200 ease-in-out transform hover:scale-110" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61565793206934"> 
                <img src={IconFace} alt="Ícone da rede social Facebook" className="w-8 h-9 transition-transform duration-200 ease-in-out transform hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
