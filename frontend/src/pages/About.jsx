import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { aboutContent, siteInfo } from '../data/siteData';
import VideoBreadcrumbBanner from '../components/VideoBreadcrumbBanner';
import SectionEffect from '../components/SectionEffect';
import WhyChooseSection from '../components/WhyChooseSection';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <VideoBreadcrumbBanner
        breadcrumb={`Home / About ${siteInfo.name}`}
        heading={`About ${siteInfo.name}`}
        subtitle="Your trusted partner for fast, professional web design."
        videoSrc=""
        height="short"
        align="center"
      />

      {/* Why Choose Swami Dev Hub - Design Crew style */}
      <SectionEffect variant="bento" className="py-20" data-testid="why-choose-section">
        <WhyChooseSection />
      </SectionEffect>

      {/* Our Mission - Design Crew style heading + content */}
      <SectionEffect variant="page" className="py-20" data-testid="our-mission-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight"
          >
            Our <span className="text-[#1db4c5]">Mission</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-300 text-lg sm:text-xl leading-relaxed max-w-4xl"
          >
            {aboutContent.mission}
          </motion.p>
        </div>
      </SectionEffect>

      {/* What We Believe - Design Crew style */}
      <SectionEffect variant="methodology" className="py-20" data-testid="what-we-believe-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 leading-tight"
          >
            What We <span className="text-[#1db4c5]">Believe</span>
          </motion.h2>
          <ul className="space-y-6 max-w-3xl">
            {(aboutContent.whatWeBelieve || []).map((belief, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-start gap-4 group"
              >
                <span className="flex-shrink-0 mt-1 text-[#1db4c5]">
                  <CheckCircle2 className="w-6 h-6" />
                </span>
                <span className="text-zinc-300 text-lg leading-relaxed group-hover:text-white transition-colors">
                  {belief}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </SectionEffect>
    </div>
  );
};

export default About;
