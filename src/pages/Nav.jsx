import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoSite from '../assets/logoSite.svg';
import logoSite2 from '../assets/logoSite2.svg';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importando o ícone de três linhas e o ícone de fechar (X)

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const location = useLocation();

    // Função para alternar entre os temas
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        document.body.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <div>
            <div
                className={`p-5 px-4 ml-6 mr-6 hidden md:block border-b-[1px] transition-colors duration-300 ease-in-out ${theme === 'dark' ? 'bg-dark-bg border-dark-border' : 'bg-white border-purple'}`}
            >
                <div className="max-w-8xl mx-auto flex justify-between items-center px-4">
                    <img
                        src={theme === 'dark' ? logoSite2 : logoSite}
                        alt="Logo do site Robô Kids"
                        className="w-auto h-10"
                    />
                    <ul className="text-sm flex space-x-12">
                        {['/', '/produto', '/materiais', '/bibliografias', '/desenvolvedores', '/jogos'].map(
                            (path, index) => (
                                <li key={index} className="relative group">
                                    <Link
                                        to={path}
                                        className={`relative inline-block transition-transform duration-300 ease-in-out ${
                                            location.pathname === path
                                                ? 'text-purple font-bold'
                                                : 'hover:text-purple dark:text-white'
                                        }`}
                                    >
                                        {path === '/'
                                            ? 'Home'
                                            : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                                    </Link>
                                    <span
                                        className={`absolute left-0 bottom-[-2px] h-[2px] bg-purple transition-all duration-300 ease-in-out ${
                                            location.pathname === path ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}
                                    />
                                </li>
                            )
                        )}
                        <li>
                            <Link
                                to="/login"
                                className="border border-purple rounded px-4 py-1.5 hover:bg-purple hover:text-white transition-all duration-300 ease-in-out dark:text-white"
                            >
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/singup"
                                className="bg-purple text-white rounded px-4 py-1.5 hover:bg-white hover:text-purple border border-purple transition-all duration-300 ease-in-out dark:text-white"
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {/* Botão de alternar tema */}
                    <button
                        onClick={toggleTheme}
                        className="hidden md:block text-2xl focus:outline-none ml-4 dark:text-white"
                    >
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </div>
            </div>

            <div className="md:hidden">
                <div className="flex justify-between items-center p-4">
                    <img
                        src={theme === 'dark' ? logoSite2 : logoSite}
                        alt="Logo do site Robô Kids"
                        className="w-auto h-8 md:h-7"
                    />
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="text-2xl focus:outline-none dark:text-white"
                        >
                            {theme === 'light' ? '🌙' : '☀️'}
                        </button>

                        {/* Botão de menu (três linhas) */}
                        <button onClick={toggleMenu} className="focus:outline-none">
                            <FaBars className={`text-2xl ${theme === 'dark' ? 'text-white' : 'text-black'}`} />
                        </button>
                    </div>
                </div>

                {/* Menu Dropdown */}
                <div
                    className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                        isMenuOpen ? 'max-h-screen' : 'max-h-0'
                    }`}
                >
                    <div className={`bg-purple text-white p-4 dark:bg-dark-card`}>
                        <div className="flex justify-between items-center mb-4 pl-[333px]">
                            {/* Ícone de fechar (X) posicionado à direita */}
                            <button onClick={toggleMenu} className={`text-2xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                <FaTimes />
                            </button>
                        </div>
                        <ul className="flex flex-col space-y-8 mt-4">
                            {['/', '/produto', '/materiais', '/bibliografias', '/desenvolvedores', '/jogos'].map(
                                (path, index) => (
                                    <li key={index} className="relative group">
                                        <Link
                                            to={path}
                                            onClick={toggleMenu}
                                            className={`relative inline-block transition-transform duration-300 ease-in-out ${
                                                location.pathname === path
                                                    ? 'font-bold underline decoration-purple text-white'
                                                    : 'hover:underline dark:text-white'
                                            }`}
                                        >
                                            {path === '/'
                                                ? 'Home'
                                                : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                                        </Link>
                                        <span
                                            className={`absolute left-0 bottom-[-2px] h-[2px] bg-purple transition-all duration-300 ease-in-out ${
                                                location.pathname === path ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}
                                        />
                                    </li>
                                )
                            )}
                            <li>
                                <Link
                                    to="/login"
                                    onClick={toggleMenu}
                                    className="border border-white rounded px-4 py-1.5 hover:bg-white hover:text-purple transition-all duration-300 ease-in-out dark:text-white"
                                >
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/singup"
                                    onClick={toggleMenu}
                                    className="bg-white text-purple rounded px-4 py-1.5 hover:bg-purple hover:text-white border-purple dark:text-white"
                                >
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
