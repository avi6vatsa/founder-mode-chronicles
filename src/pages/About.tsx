
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mic, Play, ArrowRight, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import PageTransition from '../components/PageTransition';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 md:pt-32">
          {/* Hero Section */}
          <section className="container mb-24">
            <div className="max-w-3xl mx-auto">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm font-medium text-founder-500 dark:text-founder-400 mb-4"
              >
                ABOUT THE PODCAST
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-medium mb-6"
              >
                Not just another business podcast
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-founder-600 dark:text-founder-300 mb-8"
              >
                Founder Mode is your front-row seat into the minds, routines, decision-making frameworks, and daily challenges of the world's most impactful founders and CEOs. Every episode delivers raw, unfiltered conversations that go beyond surface-level success stories — diving deep into what it really takes to build, scale, and lead with purpose.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="aspect-video relative rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-founder-900 flex items-center justify-center">
                  <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1483058712412-4245e9b90334" 
                    alt="Founder Mode podcast recording studio" 
                    className="w-full h-full object-cover object-center opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="size-20 md:size-24 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-founder-100 transition-colors">
                      <Play size={32} className="text-founder-900 ml-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
          
          {/* Mission Section */}
          <section className="py-16 bg-founder-50 dark:bg-founder-950">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-sm font-medium text-founder-500 dark:text-founder-400 mb-4"
                >
                  OUR MISSION
                </motion.p>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl md:text-4xl font-medium mb-8"
                >
                  To inspire, equip, and empower ambitious entrepreneurs
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-founder-700 dark:text-founder-300 mb-6"
                >
                  We're on a mission to deconstruct the habits, mental frameworks, and strategies used by the boldest founders in the world. Beyond the surface-level success stories, we dive deep into:
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
                >
                  {[
                    {
                      title: 'Daily Routines & Mental Models',
                      description: 'Understand the daily habits and thinking patterns that drive billion-dollar decisions.'
                    },
                    {
                      title: 'Real Talk on Failures',
                      description: 'Honest conversations about the obstacles and behind-the-scenes chaos founders face.'
                    },
                    {
                      title: 'Exclusive Playbooks',
                      description: 'Actionable frameworks you can apply directly to your business and life.'
                    },
                    {
                      title: 'First-Gen Focus',
                      description: 'Targeted content for first-generation entrepreneurs and high-performers hungry for growth.'
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-white dark:bg-founder-900 p-6 rounded-2xl border border-founder-100 dark:border-founder-800">
                      <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                      <p className="text-founder-600 dark:text-founder-400">{item.description}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Host Section */}
          <section className="py-16 md:py-24">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-sm font-medium text-founder-500 dark:text-founder-400 mb-3">THE HOST</p>
                  <h2 className="text-3xl md:text-4xl font-medium mb-6">Meet Avi Vatsa</h2>
                  <p className="text-founder-700 dark:text-founder-300 mb-6">
                    Serial entrepreneur, investor, and TEDx speaker with over a decade of experience building and scaling companies across multiple industries.
                  </p>
                  <p className="text-founder-700 dark:text-founder-300 mb-6">
                    After founding several successful ventures and mentoring hundreds of entrepreneurs, Avi created Founder Mode to share the unfiltered reality of what it takes to build something meaningful in today's world.
                  </p>
                  <p className="text-founder-700 dark:text-founder-300 mb-8">
                    His direct, no-nonsense approach and ability to extract practical insights from guests has made Founder Mode a trusted resource for ambitious entrepreneurs worldwide.
                  </p>
                  
                  <a 
                    href="#"
                    className="inline-flex items-center text-founder-900 dark:text-white font-medium hover:underline"
                  >
                    Learn more about Avi
                    <ArrowRight size={16} className="ml-2" />
                  </a>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative">
                    <div className="absolute -inset-6 border-2 border-founder-100 dark:border-founder-800 rounded-3xl transform rotate-3"></div>
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                      <img 
                        src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                        alt="Avi Vatsa, host of Founder Mode podcast" 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    
                    <div className="absolute -bottom-6 -right-6 bg-white dark:bg-founder-900 rounded-xl p-4 shadow-subtle border border-founder-100 dark:border-founder-800">
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 size-10 bg-founder-900 dark:bg-white rounded-full flex items-center justify-center">
                          <Mic size={16} className="text-white dark:text-founder-900" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">156+ Episodes</p>
                          <p className="text-xs text-founder-500 dark:text-founder-400">80M+ Downloads</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Audience Section */}
          <section className="py-16 bg-founder-900 dark:bg-black text-white">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-sm font-medium text-founder-400 mb-3"
                >
                  WHO'S THIS FOR
                </motion.p>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl md:text-4xl font-medium mb-6"
                >
                  Our Audience
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-founder-300"
                >
                  Founder Mode is crafted specifically for ambitious individuals building something meaningful.
                </motion.p>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {[
                  {
                    title: 'Entrepreneurs & Startup Founders',
                    description: 'Building new ventures and navigating the early challenges of company creation.'
                  },
                  {
                    title: 'CEOs and C-Level Executives',
                    description: 'Leading established organizations and driving meaningful growth and innovation.'
                  },
                  {
                    title: 'Aspiring Founders',
                    description: 'Side-hustlers and future entrepreneurs preparing to make the leap into full-time building.'
                  },
                  {
                    title: 'Tech Professionals',
                    description: 'Engineers, product managers, and tech leaders looking to think more entrepreneurially.'
                  },
                  {
                    title: 'Investors',
                    description: 'VCs, angels, and investors seeking deeper understanding of founder psychology and business models.'
                  },
                  {
                    title: 'Creators & Brand Builders',
                    description: 'Content creators and personal brand builders creating impact in the digital space.'
                  }
                ].map((audience, index) => (
                  <div 
                    key={index} 
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                  >
                    <h3 className="text-xl font-medium mb-3">{audience.title}</h3>
                    <p className="text-founder-300">{audience.description}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>
          
          {/* Format Section */}
          <section className="py-16 md:py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-sm font-medium text-founder-500 dark:text-founder-400 mb-3"
                >
                  PODCAST FORMAT
                </motion.p>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl md:text-4xl font-medium mb-10"
                >
                  How We Deliver Value
                </motion.h2>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-10"
                >
                  {[
                    {
                      title: 'Weekly Episodes',
                      description: 'Every week, we release a new 30-45 minute episode packed with insights and actionable takeaways.',
                      details: 'Designed to fit into your commute, workout, or morning routine.'
                    },
                    {
                      title: 'Mixed Content Types',
                      description: 'A carefully crafted mix of in-depth interviews, solo insights, and tactical playbook episodes.',
                      details: 'This variety ensures you get both inspiration and practical frameworks to apply.'
                    },
                    {
                      title: 'Video-First Approach',
                      description: 'Available on YouTube with high-quality video, plus audio on all major podcast platforms.',
                      details: 'Watch facial expressions and demonstrations or just listen - whatever fits your preference.'
                    },
                    {
                      title: 'High-Profile Guests',
                      description: 'Conversations with unicorn founders, VCs, serial entrepreneurs, and thought leaders.',
                      details: 'We bring you access to minds you wouldn\'t normally be able to reach.'
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="flex-shrink-0 size-12 rounded-full bg-founder-100 dark:bg-founder-900 flex items-center justify-center text-founder-900 dark:text-white font-display text-xl font-medium">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                        <p className="text-founder-600 dark:text-founder-300 mb-2">{item.description}</p>
                        <p className="text-founder-500 dark:text-founder-400 text-sm">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
          
          <Newsletter />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
