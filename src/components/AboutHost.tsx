
import { motion } from 'framer-motion';

const AboutHost = () => {
  return (
    <section className="section bg-white dark:bg-founder-900">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <p className="text-sm font-medium text-founder-500 dark:text-founder-400 mb-3">ABOUT YOUR HOST</p>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Avi Vatsa</h2>
            <p className="text-lg text-founder-600 dark:text-founder-300 mb-4">
              Serial entrepreneur, TEDx speaker, and founder of multiple successful ventures.
            </p>
            <p className="text-founder-700 dark:text-founder-300 mb-6">
              Avi has spent over a decade building companies, investing in startups, and mentoring founders. 
              Through Founder Mode, he brings you unfiltered access to the mindsets, frameworks, and 
              daily habits that drive the world's most ambitious entrepreneurs.
            </p>
            <p className="text-founder-700 dark:text-founder-300 mb-8">
              Each episode deconstructs the journeys of empire builders—going beyond surface-level success 
              stories to reveal the gritty reality of what it takes to build something extraordinary.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div>
                <p className="text-3xl font-display font-semibold">156+</p>
                <p className="text-sm text-founder-500 dark:text-founder-400">Episodes</p>
              </div>
              <div>
                <p className="text-3xl font-display font-semibold">80M+</p>
                <p className="text-sm text-founder-500 dark:text-founder-400">Downloads</p>
              </div>
              <div>
                <p className="text-3xl font-display font-semibold">200+</p>
                <p className="text-sm text-founder-500 dark:text-founder-400">Founders interviewed</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-founder-100 dark:bg-founder-800/30 transform -rotate-2"></div>
              <div className="absolute -inset-4 rounded-3xl bg-founder-200/50 dark:bg-founder-800/60 transform rotate-2"></div>
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-founder-900">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                  alt="Avi Vatsa, founder and host of Founder Mode podcast" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-founder-950 rounded-2xl p-4 shadow-subtle border border-founder-100 dark:border-founder-800">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 size-10 bg-founder-900 dark:bg-white rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white dark:text-founder-900">
                      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 4-10 4-10 0-2.5-1.5-3-3-3s-2.5 1-4 1-2.5-1-4-1-3 .5-3 3c0 0 1 10 4 10 1.25 0 2.5-1.06 4-1.06Z"></path>
                      <path d="M12 7V3"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">TEDx Speaker</p>
                    <p className="text-xs text-founder-500 dark:text-founder-400">The Future of Work</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHost;
