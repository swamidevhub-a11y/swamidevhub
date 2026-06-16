import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';
import { siteInfo } from '../data/siteData';
import VideoBreadcrumbBanner from '../components/VideoBreadcrumbBanner';
import SectionEffect from '../components/SectionEffect';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post(`${BACKEND_URL}/api/contact`, formData);
      toast.success('Message sent successfully! We will get back to you soon.');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <VideoBreadcrumbBanner
        breadcrumb="Home / Contact"
        heading="Let’s Talk About Your Website"
        subtitle="Share a few details about your business and we’ll help you choose the right website package and next steps."
        videoSrc=""
        height="short"
        align="center"
      />

      {/* Contact Section */}
      <SectionEffect variant="page" className="py-20" data-testid="contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Contact {siteInfo.name}
                </h2>
                <p className="text-zinc-300 leading-relaxed mb-8">
                  We’re available to answer questions, discuss your ideas, and guide you through getting a professional website live in 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1db4c5] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-cyan-500/40">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone</h3>
                    <a
                      href={`tel:${siteInfo.phone}`}
                      className="text-zinc-300 hover:text-[#1db4c5] transition block"
                      data-testid="contact-phone-primary"
                    >
                      {siteInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1db4c5] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-cyan-500/40">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <a
                      href={`mailto:${siteInfo.email}`}
                      className="text-zinc-300 hover:text-[#1db4c5] transition"
                      data-testid="contact-email"
                    >
                      {siteInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1db4c5] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-cyan-500/40">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Service Location</h3>
                    <p className="text-zinc-300 leading-relaxed" data-testid="contact-address">
                      {siteInfo.address}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-zinc-900/90 rounded-2xl p-8 shadow-lg shadow-black/60 border border-cyan-500/30 backdrop-blur-xl"
                data-testid="contact-form"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-black/60 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#1db4c5] transition"
                      placeholder="John Doe"
                      data-testid="contact-name-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-black/60 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#1db4c5] transition"
                      placeholder="Enter your phone number"
                      data-testid="contact-phone-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-black/60 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#1db4c5] transition"
                      placeholder="john@example.com"
                      data-testid="contact-email-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-black/60 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#1db4c5] transition resize-none"
                      placeholder="Tell us about your project..."
                      data-testid="contact-message-input"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1db4c5] text-black py-4 rounded-xl font-semibold hover:scale-105 hover:bg-cyan-400 transition-transform disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/40"
                    data-testid="contact-submit-btn"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </SectionEffect>
    </div>
  );
};

export default Contact;
