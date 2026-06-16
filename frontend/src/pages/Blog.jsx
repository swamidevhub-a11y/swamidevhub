import React from 'react';
import { motion } from 'framer-motion';
import { blogPosts, siteInfo } from '../data/siteData';
import BlogCard from '../components/BlogCard';

const Blog = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              {siteInfo.name} Insights
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Practical articles on websites, marketing, and strategy to help your business grow online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-gradient-to-br from-black via-zinc-900 to-black" data-testid="blog-posts-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-black via-zinc-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Ahead With Fresh Ideas
            </h2>
            <p className="text-zinc-300 mb-8 text-lg">
              Visit our homepage to join the newsletter and receive the latest articles, resources, and offers in your inbox.
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1db4c5] text-black font-semibold rounded-xl hover:scale-105 hover:bg-cyan-400 transition-transform shadow-lg shadow-cyan-500/40"
              data-testid="subscribe-newsletter-cta"
            >
              Subscribe Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
