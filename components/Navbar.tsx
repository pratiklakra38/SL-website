
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Link } from 'react-router-dom';

const MridangaIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-gold">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
);


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/90 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex items-center gap-2" onClick={handleLinkClick}>
                        <MridangaIcon />
                        <span className="text-xl font-bold text-white font-heading">Ajay Gauranga Das</span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        {NAV_LINKS.map((link) => (
                             link.href.startsWith('#contact') ? 
                             <a key={link.name} href={link.href} className="text-gray-300 hover:text-brand-gold transition-colors">{link.name}</a> :
                             <Link key={link.name} to={link.href.substring(1)} className="text-gray-300 hover:text-brand-gold transition-colors">{link.name}</Link>
                        ))}
                    </div>
                    
                    <div className="hidden md:flex">
                        <Link to="/login" className="bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity">
                            Start Learning
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-brand-dark border-t border-gray-800`}>
                <div className="flex flex-col items-center py-4 space-y-4">
                    {NAV_LINKS.map((link) => (
                        link.href.startsWith('#contact') ? 
                        <a key={link.name} href={link.href} onClick={handleLinkClick} className="text-gray-300 hover:text-brand-gold transition-colors text-lg">{link.name}</a> :
                        <Link key={link.name} to={link.href.substring(1)} onClick={handleLinkClick} className="text-gray-300 hover:text-brand-gold transition-colors text-lg">{link.name}</Link>
                    ))}
                    <Link to="/login" onClick={handleLinkClick} className="bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity w-full text-center mx-4">
                        Start Learning
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
