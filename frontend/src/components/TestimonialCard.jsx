import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, rating, text, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="h-full bg-zinc-900/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg shadow-black/60 hover:shadow-[0_0_30px_rgba(0,0,0,0.9)] transition-shadow border border-zinc-800"
      data-testid={`testimonial-card-${index}`}
    >
      <div className="flex items-center space-x-1 mb-3">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
        ))}
      </div>
      <p className="text-zinc-200 mb-4 leading-relaxed">{text}</p>
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-[#1db4c5] rounded-xl flex items-center justify-center text-black font-semibold shadow-md shadow-cyan-500/40">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="text-sm text-zinc-400">Verified Customer</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
