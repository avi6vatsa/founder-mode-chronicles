
import { motion } from 'framer-motion';
import { ArrowRight, Mic, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-founder-50/50 to-transparent dark:from-founder-950/50 pointer-events-none"></div>
      
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center px-3 py-1 mb-6 border border-founder-200 dark:border-founder-800 rounded-full bg-founder-50 dark:bg-founder-900/50 text-founder-600 dark:text-founder-300 text-sm">
              <Mic size={14} className="mr-2" />
              <span>New episodes weekly</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6"
          >
            <span className="block">Inside the minds of</span>
            <span className="block relative">
              empire builders
              <motion.span
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 h-1 bg-founder-900 dark:bg-white"
              ></motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-founder-600 dark:text-founder-300 mb-10 max-w-2xl mx-auto"
          >
            Join host Avi Vatsa for raw, unfiltered conversations with the world's most impactful founders and CEOs on building, scaling, and leading with purpose.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/episodes"
              className="group bg-founder-900 dark:bg-white hover:bg-black dark:hover:bg-founder-100 text-white dark:text-founder-900 px-8 py-3 rounded-lg font-medium flex items-center justify-center min-w-[180px] transition-all duration-300"
            >
              Listen Now
              <motion.span
                initial={{ x: 0, opacity: 0.5 }}
                animate={{ x: 5, opacity: 1 }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  duration: 1 
                }}
              >
                <ArrowRight size={18} className="ml-2" />
              </motion.span>
            </Link>
            <a
              href="#subscribe"
              className="border border-founder-200 dark:border-founder-800 hover:border-founder-900 dark:hover:border-white bg-transparent text-founder-900 dark:text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center min-w-[180px] transition-all duration-300"
            >
              Subscribe
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 md:mt-24 flex flex-col items-center"
          >
            <span className="text-sm text-founder-500 dark:text-founder-400 mb-4">AVAILABLE ON</span>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {['Spotify', 'Apple Podcasts', 'Google Podcasts', 'YouTube'].map((platform) => (
                <div key={platform} className="flex items-center text-founder-700 dark:text-founder-300 hover:text-founder-900 dark:hover:text-white transition-colors">
                  <span className="text-sm font-medium">{platform}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
