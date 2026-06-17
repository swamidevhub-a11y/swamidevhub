import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Star,
  Send
} from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';
import { siteInfo, testimonials } from '../data/siteData';
import TestimonialCard from '../components/TestimonialCard';
import MethodologyAnimation from '../components/MethodologyAnimation';
import SectionEffect from '../components/SectionEffect';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const heroSlides = [
  {
    title: 'Fast Business Websites',
    highlight: 'Delivered in 24 Hours',
    description:
      "Launch a polished, mobile‑responsive business website with domain, SSL, and hosting configured for you in just 24 hours.",
  },
  {
    title: 'Conversion‑Focused Design',
    highlight: 'Built To Grow Your Brand',
    description:
      'Professionally designed layouts that highlight your services, build trust, and turn visitors into qualified enquiries.',
  },
  {
    title: 'Done‑For‑You Implementation',
    highlight: 'So You Never Stress Tech',
    description:
      'We handle strategy, setup, and optimisation—from deployment to security and performance—so you stay focused on your business.',
  },
];

const Home = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const whatsappLink = `https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent(siteInfo.whatsappMessage)}`;

  useEffect(() => {
    const id = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post(`${BACKEND_URL}/api/newsletter`, { email });
      toast.success('Successfully subscribed to our newsletter!');
      setEmail('');
    } catch (error) {
      if (error.response?.status === 400) {
        toast.error('This email is already subscribed');
      } else {
        toast.error('Failed to subscribe. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with banner background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img src={siteInfo.heroBannerPath} alt="" className="w-full h-full object-cover" aria-hidden />
          <div className="absolute inset-0 bg-black/50" aria-hidden />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-testid="hero-content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                  <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900/70 border border-yellow-500/40 px-3 py-1 mb-5 text-xs sm:text-sm text-yellow-300">
                    <span className="w-2 h-2 rounded-full bg-[#ffd33d] animate-pulse" />
                    <span>Fast, modern websites for serious brands</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                    {heroSlides[activeSlide].title}{' '}
                    <span className="text-[#ffd33d]">
                      {heroSlides[activeSlide].highlight}
                    </span>
                  </h1>
                  <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
                    {heroSlides[activeSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/package-plans"
                  className="group relative inline-flex items-center justify-center"
                  data-testid="hero-view-packages-btn"
                >
                  <div className="absolute inset-0 bg-[#ffd33d] rounded-xl blur opacity-80 group-hover:opacity-100 transition"></div>
                  <div className="relative bg-[#ffd33d] text-black px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 hover:scale-105 transition-transform shadow-lg shadow-yellow-500/40">
                    <span>View Website Packages</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-zinc-700 text-zinc-100 font-semibold rounded-xl hover:bg-zinc-900 hover:border-yellow-400 hover:text-yellow-300 transition-all"
                  data-testid="hero-whatsapp-btn"
                >
                  Talk to our team
                </a>
              </div>
              <div className="flex items-center gap-2 mt-6">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === activeSlide ? 'w-6 bg-[#ffd33d]' : 'w-3 bg-zinc-700'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative flex items-center justify-center"
              data-testid="hero-methodology"
            >
              <MethodologyAnimation centerText="24 Hours" />
            </motion.div>
          </div>
        </div>
      </section>

      {false && (
        <>
          {/* Bento grid section for key highlights */}
      <SectionEffect variant="bento" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-yellow-300 mb-3">
              Why Swami Web
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              A bento of benefits for fast‑growing brands
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 auto-rows-[210px]">
            <motion.div
              whileHover={{ y: -6 }}
              className="lg:col-span-2 lg:row-span-2 rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 border border-yellow-500/20 p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">
                  24‑Hour Launch
                </h3>
                <p className="text-zinc-300 mb-6">
                  From initial brief to a live, production-ready website in a single business day. Our proven process uses pre‑tested layouts and components tailored to your brand—so you get a professional result without the usual wait.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-300 mt-1.5">✓</span>
                    <span className="text-zinc-300 text-sm">Rapid deployment with zero compromise on quality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-300 mt-1.5">✓</span>
                    <span className="text-zinc-300 text-sm">Pre-optimized templates customized to your brand</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-300 mt-1.5">✓</span>
                    <span className="text-zinc-300 text-sm">Domain, hosting, and SSL configured automatically</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-300 mt-1.5">✓</span>
                    <span className="text-zinc-300 text-sm">Mobile-responsive design included by default</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-300 mt-1.5">✓</span>
                    <span className="text-zinc-300 text-sm">SEO-ready structure and fast loading times</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-between text-sm text-zinc-400 pt-4 border-t border-zinc-800">
                <span>Typical turnaround</span>
                <span className="text-yellow-300 font-semibold">24 hours</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-zinc-900/90 border border-zinc-800 p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold mb-2 text-white">Hosting, SSL & Domain</h3>
                <p className="text-sm text-zinc-300">
                  Everything bundled — secure, performant hosting with SSL and domain setup.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center text-xs font-semibold text-yellow-300">
                Included in every package
              </span>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-zinc-900/90 border border-zinc-800 p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold mb-2 text-white">SEO‑ready structure</h3>
                <p className="text-sm text-zinc-300">
                  Clean information architecture, fast load times and best practices baked in.
                </p>
              </div>
              <span className="mt-4 text-xs text-zinc-400">Optimised with modern tech stack</span>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-gradient-to-br from-yellow-500/10 via-yellow-500/5 to-zinc-900 border border-yellow-500/30 p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold mb-3 text-white">Trusted by businesses</h3>
                <p className="text-sm text-zinc-200 mb-4">
                  From local brands to digital‑first startups, Swami Web powers high‑impact web experiences.
                </p>
              </div>
              <div className="space-y-1 text-sm">
                <p className="flex justify-between text-zinc-300">
                  <span>Web projects shipped</span>
                  <span className="font-semibold text-yellow-300">150+</span>
                </p>
                <p className="flex justify-between text-zinc-300">
                  <span>Average client rating</span>
                  <span className="font-semibold text-yellow-300">4.9/5</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-zinc-900/90 border border-zinc-800 p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold mb-2 text-white">Conversion‑first layouts</h3>
                <p className="text-sm text-zinc-300">
                  Sections crafted for clear storytelling, strong CTAs and high engagement.
                </p>
              </div>
              <span className="mt-4 text-xs text-zinc-400">Focused on leads & sales, not just visuals</span>
            </motion.div>
          </div>
        </div>
      </SectionEffect>
        </>
      )}

      {/* About/Intro Section */}
      <SectionEffect variant="about" className="py-20" data-testid="about-intro-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#ffd33d]/20 rounded-2xl blur-2xl opacity-60" />
              <div className="relative bg-zinc-900 rounded-2xl overflow-hidden border border-yellow-500/20 aspect-[4/3] min-h-[18rem] max-h-[24rem]">
                <img
                  src={siteInfo.aboutIntroImagePath}
                  alt="Professional web design and technology"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Professionally Designed Websites For Growing Brands
              </h2>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                At Swami Web, we specialise in building sleek, conversion‑focused websites that reflect your brand and clearly communicate your services. Whether you are just starting out or scaling up, we help you create a modern, user‑friendly presence that builds trust.
              </p>
              <p className="text-zinc-300 mb-8 leading-relaxed">
                Our process is streamlined for speed without sacrificing quality. Every project includes design, content structure, essential on‑page SEO, and technical setup—so you go live quickly with a site that looks professional and performs reliably.
              </p>
              <Link
                to="/about-swami-web"
                className="inline-flex items-center space-x-2 text-yellow-300 font-semibold hover:text-white transition"
                data-testid="discover-more-btn"
              >
                <span>Discover More</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </SectionEffect>

      {/* Our Methodology for Success Section */}
      <SectionEffect variant="methodology" className="py-20" data-testid="methodology-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-yellow-300 mb-3">
              How We Work
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Our Methodology for Success
            </h2>
            <p className="text-zinc-300 max-w-2xl mx-auto text-lg">
              A proven process that transforms your vision into a high-performing website in 24 hours
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              className="flex items-center justify-center"
            >
              <MethodologyAnimation />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  From Concept to Launch in One Day
                </h3>
                <p className="text-zinc-300 leading-relaxed mb-8 text-base">
                  Our proven methodology follows a systematic approach that transforms your vision into a fully functional website. Each phase is carefully executed to deliver exceptional results within 24 hours.
                </p>
              </div>
              <div className="space-y-5">
                {[
                  { num: '01', title: 'Discovery', desc: 'We analyze your business objectives, target market, and brand positioning to establish a strategic roadmap for your project.' },
                  { num: '02', title: 'Design', desc: 'Our design team creates modern, conversion-optimized layouts that align with your brand and drive user engagement.' },
                  { num: '03', title: 'Development', desc: 'We build clean, performant code with responsive architecture, SEO optimization, and industry best practices.' },
                  { num: '04', title: 'Testing', desc: 'Comprehensive quality assurance ensures flawless functionality across all devices, browsers, and user scenarios.' },
                  { num: '05', title: 'Launch', desc: 'We manage domain registration, hosting configuration, SSL certification, and seamless deployment to production.' },
                  { num: '06', title: 'Support', desc: 'Ongoing maintenance and optimization support to ensure your website continues to perform at its best.' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#ffd33d]/15 to-[#ffd33d]/5 border border-yellow-500/30 flex items-center justify-center transition-all group-hover:border-yellow-500/50 group-hover:bg-[#ffd33d]/20">
                      <span className="text-yellow-300 font-bold text-sm tracking-wider">{item.num}</span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h4 className="font-semibold text-white mb-1.5 text-base group-hover:text-yellow-300 transition-colors">{item.title}</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </SectionEffect>

      {/* Reviews Section */}
      <SectionEffect variant="reviews" className="py-20" data-testid="reviews-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 bg-zinc-900 px-6 py-3 rounded-full mb-4 border border-zinc-700">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-bold text-white">EXCELLENT</span>
              <span className="text-zinc-300">Based on 168 reviews</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              Don't just take our word for it—hear from businesses we've helped succeed
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </SectionEffect>

      {/* Newsletter Section */}
      <SectionEffect variant="newsletter" className="py-20 border-y border-zinc-800" data-testid="newsletter-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Let's Join To Our Newsletters
            </h2>
            <p className="text-zinc-300 mb-8 text-lg">
              Get the latest updates, tips, and exclusive offers delivered to your inbox
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl border border-zinc-700 bg-black/60 focus:outline-none focus:ring-2 focus:ring-[#ffd33d] text-white placeholder:text-zinc-500"
                data-testid="newsletter-email-input"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#ffd33d] text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400 transition disabled:opacity-50 flex items-center justify-center space-x-2"
                data-testid="newsletter-submit-btn"
              >
                <span>{isSubmitting ? 'Subscribing...' : 'Subscribe'}</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </SectionEffect>
    </div>
  );
};

export default Home;
