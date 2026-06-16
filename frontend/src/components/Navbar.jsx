import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, siteInfo } from '../data/siteData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActivePath = (path) => location.pathname === path;
  const whatsappLink = `https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent(siteInfo.whatsappMessage)}`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-400/30 shadow-lg shadow-black/40'
            : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="inline-flex items-center gap-3 group"
              data-testid="navbar-logo"
              aria-label={siteInfo.name}
            >
              <img
                src={siteInfo.logoPath}
                alt=""
                aria-hidden="true"
                className="h-11 w-11 sm:h-12 sm:w-12 rounded-2xl object-cover border border-white/10 shadow-lg shadow-black/30"
                loading="eager"
                decoding="async"
              />
              <span className="text-[#1db4c5] font-bold text-xl sm:text-2xl tracking-tight group-hover:text-cyan-300 transition-colors">
                {siteInfo.name}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActivePath(link.path)
                      ? 'bg-[#1db4c5] text-black shadow-md shadow-cyan-500/40'
                      : 'text-gray-300 hover:bg-zinc-800'
                  }`}
                  data-testid={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                data-testid="try-for-free-button"
              >
                <div className="absolute inset-0 bg-[#1db4c5] rounded-xl blur opacity-80 group-hover:opacity-100 transition"></div>
                <div className="relative bg-[#1db4c5] text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg shadow-cyan-500/40">
                  Try For Free
                </div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-zinc-800 transition text-gray-100"
              data-testid="mobile-menu-toggle"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black border-t border-zinc-800 overflow-hidden"
              data-testid="mobile-menu"
            >
              <div className="px-4 py-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition ${
                      isActivePath(link.path)
                        ? 'bg-[#1db4c5] text-black'
                        : 'text-gray-200 hover:bg-zinc-800'
                    }`}
                    data-testid={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#1db4c5] text-black px-4 py-3 rounded-lg font-semibold text-center mt-4"
                  data-testid="mobile-try-for-free-button"
                >
                  Try For Free
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
