import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import logoSite from '../assets/logoSite.svg';
import imgRobo from '../assets/roboImg.svg';
import confetti from 'canvas-confetti';

export function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarMensagemSucesso, setMostrarMensagemSucesso] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar a visibilidade do menu
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (email && senha) {
            setLoading(true);
            setMostrarMensagemSucesso(true);

            setTimeout(() => {
                confetti({
                    particleCount: 150,
                    angle: 90,
                    spread: 360,
                    origin: { y: 0.6 }
                });
            }, 500);

            setTimeout(() => {
                setLoading(false);
                setMostrarMensagemSucesso(false);
                navigate('/');
            }, 3000);
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    };

    return (
      <>
        <Nav /> {/* A navegação também ficará com fundo preto */}
        <main className='font-inter min-h-screen mt-14 mb-12 sm:mt-1 sm:mb-1 flex flex-col md:flex-row items-center justify-center p-6 bg-dark-bg dark:bg-dark-bg dark:text-white'>
          
          {!isMenuOpen && (
            <div className='absolute top-20 right-2 sm:right-8 mt-8 sm:mt-4 flex items-center space-x-2'>
              <p className='text-gray dark:text-white'>Não tem uma conta? </p>
              <button className='text-purple text-sm font-bold border-solid border-2 border-indigo-500 rounded px-5 hover:bg-purple hover:text-white hover:border-purple'>
                <Link to="/singup">Sign Up</Link>
              </button>
            </div>
          )}
  
          <div className='flex-shrink-0 mb-8 md:mb-0 md:mr-16'>
            <img
              src={imgRobo}
              alt="Imagem de um robô"
              className='md:w-[600px] w-[300px] ml-12 transform transition-transform duration-1000 animate-flutter'
            />
          </div>

          <div className='md:ml-8 w-full md:w-auto px-4 md:px-0 mb-[130px]'>
            <h1 className='text-3xl text-black md:text-4xl text-center md:text-left font-singUp dark:text-white'>
              Bem-vindo ao Robô <span className='text-purple font-titulo'>Kids</span>
            </h1>
            <p className='text-gray mt-4 mb-12 text-center md:text-left text-lg md:text-xl dark:text-white'>
              Insira as suas informações de login:
            </p>

            <div className='max-w-md mx-auto md:mx-0'>
              <form onSubmit={handleLogin}>
                <div className='mb-4'>
                  <label htmlFor="email" className='block text-sm sm:text-xl mb-2 dark:text-white'>E-mail ou User:</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='ex: robokids@gmail.com'
                    className='block w-full p-3 border-2 border-purple rounded bg-white dark:bg-dark-card dark:bg-black'
                  />
                </div>

                <div className='mb-6'>
                  <label htmlFor="senha" className='block text-sm sm:text-xl mb-2 dark:text-white'>Senha:</label>
                  <input
                    type={mostrarSenha ? "text" : "password"}
                    id="senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder='********'
                    className='block w-full p-3 border-2 border-purple rounded bg-white first-letter:dark:bg-dark-card dark:bg-black'
                  />
                  <div className='mt-2 flex items-center'>
                    <input
                      type="checkbox"
                      id="mostrarSenha"
                      checked={mostrarSenha}
                      onChange={() => setMostrarSenha(!mostrarSenha)}
                      className='form-checkbox border-2 border-pink-500'
                    />
                    <label htmlFor="mostrarSenha" className='ml-2 text-sm text-pink-500 dark:text-white'>
                      Mostrar senha
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className='text-white bg-purple font-semibold border-2 border-purple rounded-lg py-3 hover:bg-white hover:text-purple hover:border-purple transition px-6 w-32'>
                  Login
                </button>
              </form>
            </div>
          </div>

          {mostrarMensagemSucesso && (
            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
              <div className='bg-white p-12 rounded-lg text-center max-w-lg w-full dark:bg-black dark:text-white'>
                <h2 className='text-5xl font-bold text-purple mb-6'>Login realizado com sucesso!</h2>
                <p className='text-2xl text-gray-700 mb-4 dark:text-white'>Você será redirecionado em breve...</p>
                {loading && (
                  <div className='flex flex-col items-center'>
                    <div className='spinner'></div>
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
        <Footer />
      </>
    );
}
