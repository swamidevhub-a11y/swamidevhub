import React from 'react';
import { motion } from 'framer-motion';
import { Clock3, Layers3, ShieldCheck, Smartphone } from 'lucide-react';
import { packages } from '../data/siteData';
import PackageCard from '../components/PackageCard';
import VideoBreadcrumbBanner from '../components/VideoBreadcrumbBanner';
import SectionEffect from '../components/SectionEffect';

const highlights = [
  {
    icon: Clock3,
    title: 'Flexible Delivery',
    desc: 'Delivery timelines scale from 24-48 hours for simple sites to 3-6 weeks for enterprise builds.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Ready',
    desc: 'Every website plan is structured for a strong experience across desktop, tablet, and mobile.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure Setup',
    desc: 'Domain, hosting, and SSL are included across the listed plans so launches stay simple and secure.'
  },
  {
    icon: Layers3,
    title: 'Plans That Scale',
    desc: 'Choose from basic websites, business systems, full web apps, or enterprise-grade custom software.'
  }
];

const Packages = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <VideoBreadcrumbBanner
        breadcrumb="Home / Package Plans"
        heading="Website Package Plans"
        subtitle="Select the package that matches your stage of growth, from a simple business website to a full custom software build."
        videoSrc=""
        height="short"
        align="center"
      />

      <SectionEffect variant="page" className="py-20" data-testid="packages-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <PackageCard key={pkg.name} pkg={pkg} index={index} />
            ))}
          </div>
        </div>
      </SectionEffect>

      <SectionEffect variant="bento" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              Package Highlights
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-zinc-900/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg shadow-black/60 text-center border border-zinc-800"
                  >
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#1db4c5]/10 border border-cyan-500/20 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#1db4c5]" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-zinc-300 text-sm">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </SectionEffect>
    </div>
  );
};

export default Packages;
