import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import { blogPosts } from '../data/siteData';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-[#1db4c5] hover:text-cyan-300 font-semibold">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-zinc-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 text-[#1db4c5] hover:text-cyan-300 font-semibold mb-8 transition"
              data-testid="back-to-blog-link"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blog</span>
            </Link>
            <div className="flex items-center space-x-4 text-sm text-zinc-300 mb 4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="w-4 h-4" />
                <span>Web Design</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-xl"
            data-testid="blog-post-featured-image"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-9xl opacity-20">📝</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 bg-black" data-testid="blog-post-content">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 text-zinc-100"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-gradient-to-br from-black via-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            More Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.filter(p => p.id !== post.id).map((relatedPost, index) => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.slug}`}
                className="group bg-zinc-900/80 rounded-2xl overflow-hidden shadow-lg shadow-black/60 hover:shadow-[0_0_30px_rgba(0,0,0,0.9)] transition-all border border-zinc-800 backdrop-blur-xl"
                data-testid={`related-post-${index}`}
              >
                <div className="relative h-48 bg-gradient-to-br from-purple-100 to-cyan-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">📝</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-zinc-400 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{relatedPost.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#1db4c5] transition">
                    {relatedPost.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
