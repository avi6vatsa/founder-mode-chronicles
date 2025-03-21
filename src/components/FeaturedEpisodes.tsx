
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import EpisodeCard, { Episode } from './EpisodeCard';

const FEATURED_EPISODES: Episode[] = [
  {
    id: '1',
    title: 'Building Resilience: How to Navigate Startup Chaos',
    description: 'In this episode, we dive deep into the strategies that helped tech founders navigate the most challenging periods of their journey.',
    date: 'May 15, 2023',
    duration: '42 min',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    guest: {
      name: 'Sarah Johnson',
      title: 'Founder & CEO of TechFlow'
    }
  },
  {
    id: '2',
    title: 'The Art of Raising Capital: What VCs Really Look For',
    description: 'We discuss the evolving landscape of venture funding and what metrics truly matter when pitching to investors in today\'s market.',
    date: 'June 2, 2023',
    duration: '38 min',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    guest: {
      name: 'Michael Chang',
      title: 'Partner at Sequoia Capital'
    }
  },
  {
    id: '3',
    title: 'Morning Routines of Billion-Dollar Founders',
    description: 'Discover the morning habits and rituals that set successful founders up for productive days and sustainable performance.',
    date: 'June 18, 2023',
    duration: '35 min',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7'
  },
  {
    id: '4',
    title: 'Scaling Culture: How to Maintain Your Values While Growing Fast',
    description: 'Learn how to build and maintain a strong company culture that scales with your business without losing your founding principles.',
    date: 'July 5, 2023',
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    guest: {
      name: 'Lisa Park',
      title: 'Founder of WorkFlow'
    }
  },
  {
    id: '5',
    title: 'The Future of AI in Business: Opportunities and Ethical Considerations',
    description: 'A thoughtful discussion on how artificial intelligence is reshaping industries and the ethical frameworks needed to guide its development.',
    date: 'July 22, 2023',
    duration: '51 min',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    guest: {
      name: 'Dr. Alex Rivera',
      title: 'AI Researcher & Entrepreneur'
    }
  }
];

const FeaturedEpisodes = () => {
  return (
    <section className="section bg-founder-50 dark:bg-founder-950">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium text-founder-500 dark:text-founder-400 mb-2"
            >
              FEATURED EPISODES
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-medium"
            >
              Recent conversations
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0"
          >
            <Link 
              to="/episodes" 
              className="group inline-flex items-center text-founder-800 dark:text-founder-200 hover:text-founder-900 dark:hover:text-white transition-colors"
            >
              <span className="font-medium">View all episodes</span>
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {FEATURED_EPISODES.map((episode, index) => (
            <EpisodeCard 
              key={episode.id} 
              episode={episode} 
              featured={index === 0} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEpisodes;
