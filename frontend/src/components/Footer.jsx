import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { siteInfo, navLinks } from '../data/siteData';

const Footer = () => {
  const whatsappLink = `https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent(siteInfo.whatsappMessage)}`;

  return (
    <footer className={`${siteInfo.footerBgClass} text-white pt-16 pb-8 border-t border-cyan-500/20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-3 group"
              data-testid="footer-logo"
              aria-label={siteInfo.name}
            >
              <img
                src={siteInfo.logoPath}
                alt=""
                aria-hidden="true"
                className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl object-cover border border-white/10 shadow-lg shadow-black/30"
                loading="eager"
                decoding="async"
              />
              <span className="text-[#1db4c5] font-bold text-xl hover:text-cyan-300 transition-colors">
                {siteInfo.name}
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              {siteInfo.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#1db4c5] transition text-sm"
                    data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#1db4c5] flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <a
                    href={`tel:${siteInfo.phone}`}
                    className="text-gray-300 hover:text-[#1db4c5] transition block"
                    data-testid="footer-phone-primary"
                  >
                    {siteInfo.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#1db4c5] flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${siteInfo.email}`}
                  className="text-gray-300 hover:text-[#1db4c5] transition text-sm"
                  data-testid="footer-email"
                >
                  {siteInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Where We Work From</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#1db4c5] flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm leading-relaxed" data-testid="footer-address">
                  {siteInfo.address}
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm" data-testid="footer-copyright">
              {siteInfo.copyright}
            </p>
            <div className="flex items-center space-x-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#1db4c5] transition text-sm"
                data-testid="footer-whatsapp-link"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${siteInfo.email}`}
                className="text-gray-400 hover:text-[#1db4c5] transition text-sm"
                data-testid="footer-email-link"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
