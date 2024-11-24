import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoSite from '../assets/logoSite.svg';
import tresLinhas from '../assets/tresLinhas.svg';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <div>

            <div className="bg-white p-5 px-4  ml-6 mr-6 hidden md:block border-b-[1px] border-purple">
                {/* Espaçamento ao lado da borda */}
                <div className="max-w-8xl mx-auto flex justify-between items-center px-4"> {/* Adicionando px-4 para o espaçamento */}
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
                                {/* Barra deslizante */}
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
                </div>
                <div
                    className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                        isMenuOpen ? 'max-h-screen' : 'max-h-0'
                    }`}
                >
                    <div className="bg-purple text-white p-4">
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
                                    {/* Barra deslizante no menu mobile */}
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
                        <div className="h-16" />
                    </div>
                </div>
            </div>
        </div>
    );
}
