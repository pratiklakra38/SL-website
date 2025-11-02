
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const MridangaIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-gold">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
);

const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
  </svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/>
    </svg>
);

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
    </svg>
);


const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-dark border-t border-gray-800 mt-20">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* Column 1: Logo & Tagline */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-2 mb-4">
                            <MridangaIcon />
                            <span className="text-2xl font-bold text-white font-heading">Ajay Gauranga Das</span>
                        </div>
                        <p className="text-gray-400">Preserving Traditional Devotional Music</p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {NAV_LINKS.map(link => (
                                 link.href.startsWith('#contact') ? 
                                 <li key={link.name}><a href={link.href} className="text-gray-400 hover:text-brand-gold transition-colors">{link.name}</a></li> :
                                 <li key={link.name}><Link to={link.href.substring(1)} className="text-gray-400 hover:text-brand-gold transition-colors">{link.name}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Connect */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><YouTubeIcon/></a>
                            <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><InstagramIcon/></a>
                            <a href="mailto:ajay@example.com" className="text-gray-400 hover:text-brand-gold transition-colors"><EmailIcon/></a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
                    <p>Copyright © {new Date().getFullYear()} Ajay Gauranga Das. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
