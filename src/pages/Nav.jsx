import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoSite from '../assets/logoSite.svg';
import tresLinhas from '../assets/tresLinhas.svg';

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

    // Alterar tema no corpo do documento
    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [theme]);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <div>
            {/* Navbar - Tema Claro e Escuro para o header e site inteiro */}
            <div className={`bg-white p-5 px-4 ml-6 mr-6 hidden md:block border-b-[1px] border-purple dark:bg-dark-bg dark:border-dark-border`}>
                <div className="max-w-8xl mx-auto flex justify-between items-center px-4">
                    <img src={logoSite} alt="Logo do site escrito Robô Kids" className="w-auto" />
                    <ul className="text-sm flex space-x-12">
                        {['/', '/produto', '/materiais', '/bibliografias', '/desenvolvedores', '/jogos'].map((path, index) => (
                            <li key={index} className="relative group">
                                <Link
                                    to={path}
                                    className={`relative inline-block transition-transform duration-300 ease-in-out ${
                                        location.pathname === path
                                            ? 'text-purple font-bold'
                                            : 'hover:text-purple'
                                    }`}
                                >
                                    {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                                </Link>
                                <span
                                    className={`absolute left-0 bottom-[-2px] h-[2px] bg-purple transition-all duration-300 ease-in-out ${
                                        location.pathname === path ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}
                                />
                            </li>
                        ))}
                        <li>
                            <Link
                                to="/login"
                                className="border border-purple rounded px-4 py-1.5 hover:bg-purple hover:text-white transition-all duration-300 ease-in-out"
                            >
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/singup"
                                className="bg-purple text-white rounded px-4 py-1.5 hover:bg-white hover:text-purple border border-purple transition-all duration-300 ease-in-out"
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {/* Botão de alternar tema */}
                    <button
                        onClick={toggleTheme}
                        className="hidden md:block text-2xl focus:outline-none ml-4"
                    >
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </div>
            </div>

            {/* Menu para dispositivos móveis */}
            <div className="md:hidden">
                <div className="flex justify-between items-center p-4">
                    <img src={logoSite} alt="Logo do site escrito Robô Kids" className="w-auto" />
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isMenuOpen ? (
                            <span className="text-2xl">&times;</span>
                        ) : (
                            <img src={tresLinhas} alt="Menu" />
                        )}
                    </button>
                    {/* Botão de alternar tema no menu mobile */}
                    <button
                        onClick={toggleTheme}
                        className="text-2xl focus:outline-none"
                    >
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </div>
                <div
                    className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                        isMenuOpen ? 'max-h-screen' : 'max-h-0'
                    }`}
                >
                    <div className={`bg-purple text-white p-4 dark:bg-dark-card`}>
                        <ul className="flex flex-col space-y-8 mt-4">
                            {['/', '/produto', '/materiais', '/bibliografias', '/desenvolvedores', '/jogos'].map((path, index) => (
                                <li key={index} className="relative group">
                                    <Link
                                        to={path}
                                        onClick={toggleMenu}
                                        className={`relative inline-block transition-transform duration-300 ease-in-out ${
                                            location.pathname === path
                                                ? 'font-bold underline decoration-purple text-white'
                                                : 'hover:underline'
                                        }`}
                                    >
                                        {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                                    </Link>
                                    <span
                                        className={`absolute left-0 bottom-[-2px] h-[2px] bg-purple transition-all duration-300 ease-in-out ${
                                            location.pathname === path ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}
                                    />
                                </li>
                            ))}
                            <li>
                                <Link
                                    to="/login"
                                    onClick={toggleMenu}
                                    className="border border-white rounded px-4 py-1.5 hover:bg-white hover:text-purple transition-all duration-300 ease-in-out"
                                >
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/singup"
                                    onClick={toggleMenu}
                                    className="bg-white text-purple rounded px-4 py-1.5 hover:bg-purple hover:text-white border-purple"
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
