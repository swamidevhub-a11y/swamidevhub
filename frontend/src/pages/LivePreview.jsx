import React from 'react';
import { motion } from 'framer-motion';
import { demoWebsites } from '../data/siteData';
import VideoBreadcrumbBanner from '../components/VideoBreadcrumbBanner';
import SectionEffect from '../components/SectionEffect';

const LivePreview = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <VideoBreadcrumbBanner
        breadcrumb="Home / Live Website Preview"
        heading="Live Demo Websites"
        subtitle="Explore sample websites we have crafted for different industries and use them as inspiration for your own project."
        videoSrc=""
        height="short"
        align="center"
      />

      {/* Demo Websites Grid */}
      <SectionEffect variant="demo" className="py-20" data-testid="demo-websites-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Explore Industry‑Specific Demos
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {demoWebsites.map((item, index) => (
              <motion.a
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-zinc-900/80 rounded-2xl shadow-lg shadow-black/60 hover:shadow-[0_0_30px_rgba(0,0,0,0.9)] transition overflow-hidden border border-zinc-800 backdrop-blur-xl"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`demo-website-${index}`}
              >
                <div>
                  <div className="aspect-square bg-gray-50">
                    <img
                      src={item.imagePath}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </SectionEffect>

      {/* CTA Section */}
      <SectionEffect variant="newsletter" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Your Own Website?
            </h2>
            <p className="text-zinc-300 mb-8 text-lg">
              Choose a package and get your professional website delivered in 24 hours
            </p>
            <a
              href="/package-plans"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1db4c5] text-black font-semibold rounded-xl hover:scale-105 hover:bg-cyan-400 transition-transform"
              data-testid="view-packages-cta"
            >
              View Package Plans
            </a>
          </motion.div>
        </div>
      </SectionEffect>
    </div>
  );
};

export default LivePreview;
