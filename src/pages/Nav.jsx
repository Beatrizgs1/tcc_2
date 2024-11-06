import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoSite from '../assets/logoSite.svg';
import tresLinhas from '../assets/tresLinhas.svg';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <div>
            <div className="bg-white p-5 hidden md:block">
                <div className="max-w-8xl mx-auto flex justify-between items-center">
                    <img src={logoSite} alt="Logo do site escrito Robô Kids" className="w-auto" />
                    <ul className="text-sm flex space-x-12">
                        {['/', '/produto', '/materiais', '/bibliografias', '/desenvolvedores' ,'/jogos'].map((path, index) => (
                            <li key={index} className={location.pathname === path ? 'text-purple font-bold underline decoration-purple' : 'hover:underline'}>
                                <Link to={path}>{path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}</Link>
                            </li>
                        ))}
                        <li>
                            <Link to={"/login"} className="border border-purple rounded px-4 py-1.5 hover:bg-purple hover:text-white transition duration-300">Login</Link>
                        </li>
                        <li>
                            <Link to={"/singup"} className="bg-purple text-white rounded px-4 py-1.5 hover:bg-white hover:text-purple transition duration-300">Sign Up</Link>
                        </li>
                    </ul>
                </div>
                <hr className="border-purple my-4" />
            </div>
            <div className="md:hidden">
                <div className="flex justify-between items-center p-4">
                    <img src={logoSite} alt="Logo do site escrito Robô Kids" className="w-auto" />
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isMenuOpen ? (
                            <span className="text-xl">&times;</span> 
                        ) : (
                            <img src={tresLinhas} alt="Menu" />
                        )}
                    </button>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
                    <div className={`bg-purple text-white p-4 transition-transform transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                        <ul className="flex flex-col space-y-8 mt-4">
                            {['/', '/produto', '/materiais', '/bibliografias', '/desenvolvedores', '/jogo'].map((path, index) => (
                                <li key={index} className={location.pathname === path ? 'font-bold underline decoration-white text-white' : 'hover:underline'}>
                                    <Link to={path} onClick={toggleMenu}>{path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}</Link>
                                </li>
                            ))}
                            <li>
                                <Link to={"/login"} onClick={toggleMenu} className="border border-white rounded px-4 py-1.5 hover:bg-white hover:text-purple transition duration-300">Login</Link>
                            </li>
                            <li>
                                <Link to={"/singup"} onClick={toggleMenu} className="bg-white text-purple rounded px-4 py-1.5 hover:bg-purple hover:text-white transition duration-300 border-purple">Sign Up</Link>
                            </li>
                        </ul>
                        <div className="h-16" /> 
                    </div>
                </div>
            </div>
        </div>
    );
}
