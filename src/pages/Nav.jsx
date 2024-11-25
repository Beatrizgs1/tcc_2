import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoSite from '../assets/logoSite.svg';
import logoSite2 from '../assets/logoSite2.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const location = useLocation();

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
                    </ul>
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
                        <button onClick={toggleMenu} className="focus:outline-none">
                            <FaBars className={`text-2xl ${theme === 'dark' ? 'text-white' : 'text-black'}`} />
                        </button>
                    </div>
                </div>

                <div
                    className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}
                >
                    <div className={`p-4 ${theme === 'dark' ? 'bg-black' : 'bg-purple'} text-white dark:bg-dark-card`}>
                        <div className="flex justify-between items-center mb-4">
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
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
