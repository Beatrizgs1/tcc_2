import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import imgRobo from '../assets/roboImg.svg';
import confetti from 'canvas-confetti'; 

export function Singup() {
  const [mostrarSenha, setMostrarSenha] = useState(false); 
  const [loading, setLoading] = useState(false); 
  const [mostrarMensagemSucesso, setMostrarMensagemSucesso] = useState(false); 
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
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
  };

  return (
    <>
      <Nav />
      <main className='font-inter min-h-screen mt-14 mb-12 sm:mt-1 sm:mb-1 flex flex-col md:flex-row items-center justify-center p-6 dark:bg-black dark:text-white'>
        
        <div className='absolute top-20 right-2 sm:right-8 mt-8 sm:mt-4 flex items-center space-x-2'>
          <p className='text-gray dark:text-white'>Já tem uma conta?</p>
          <button className='text-purple text-sm font-bold border-solid border-2 border-indigo-500 rounded px-5 hover:bg-purple hover:text-white hover:border-purple'>
            <Link to="/login">Login</Link>
          </button>
        </div>

        <div className='flex-shrink-0 mb-8 md:mb-0 md:mr-16'>
          <img
            src={imgRobo}
            alt="Imagem de um robô"
            className='md:w-[600px] w-[300px] ml-12 transform transition-transform duration-1000 animate-flutter'
          />
        </div>

        <div className='md:ml-8 w-full md:w-auto px-4 md:px-0 mb-[20px]'>
          <h1 className='text-3xl text-black md:text-4xl text-center md:text-left font-singUp dark:text-white'>
            Bem-vindo ao Robô <span className='text-purple font-titulo'>Kids</span>
          </h1>
          <p className='text-gray mt-4 mb-12 text-center md:text-left text-lg md:text-xl dark:text-white'>Preencha os campos abaixo:</p>

          <div className='max-w-md mx-auto md:mx-0'>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label htmlFor="name" className='block text-sm sm:text-xl mb-2 dark:text-white'>Nome:</label>
                <input
                  type="name"
                  id="name"
                  placeholder='ex: Nome de usuário'
                  className='block w-full p-3 border-2 border-purple rounded dark:bg-white dark:text-black'
                />
              </div>

              <div className='mb-4'>
                <label htmlFor="email" className='block text-sm sm:text-xl mb-2 dark:text-white'>E-mail:</label>
                <input
                  type="email"
                  id="email"
                  placeholder='ex: robokids@gmail.com'
                  className='block w-full p-3 border-2 border-purple rounded dark:bg-white dark:text-black'
                />
              </div>

              <div className='mb-6'>
                <label htmlFor="password" className='block text-sm sm:text-xl mb-2 dark:text-white'>Senha:</label>
                <input
                  type={mostrarSenha ? "text" : "password"}
                  id="password"
                  placeholder='********'
                  className='block w-full p-3 border-2 border-purple rounded dark:bg-white dark:text-black'
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
                Criar
              </button>
            </form>
          </div>
        </div>

        {mostrarMensagemSucesso && (
          <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
            <div className='bg-white p-12 rounded-lg text-center max-w-lg w-full dark:bg-black dark:text-white'>
              <h2 className='text-5xl font-bold text-purple mb-6'>Conta criada com sucesso!</h2>
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
