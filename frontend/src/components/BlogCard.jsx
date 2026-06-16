import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogCard = ({ post, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group h-full bg-zinc-900/80 rounded-2xl overflow-hidden shadow-lg shadow-black/60 hover:shadow-[0_0_30px_rgba(0,0,0,0.9)] transition-all border border-zinc-800 backdrop-blur-xl"
      data-testid={`blog-card-${index}`}
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-700">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl opacity-20">📝</div>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center space-x-2 text-sm text-zinc-400 mb-3">
          <Calendar className="w-4 h-4" />
          <span>{post.date}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#1db4c5] transition">
          {post.title}
        </h3>
        <p className="text-zinc-300 mb-4 line-clamp-2 flex-1">{post.excerpt}</p>
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center space-x-2 text-[#1db4c5] font-semibold hover:text-cyan-300 transition"
          data-testid={`blog-read-more-${index}`}
        >
          <span>Read More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
