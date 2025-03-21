
import { useEffect, useState } from 'react';
import { ChevronDown, Filter, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EpisodeCard, { Episode } from '../components/EpisodeCard';
import Newsletter from '../components/Newsletter';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

// Reuse the episodes data from FeaturedEpisodes and add more
const ALL_EPISODES: Episode[] = [
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
  },
  {
    id: '6',
    title: 'From Idea to IPO: A Founder\'s 10-Year Journey',
    description: 'The complete story of building a company from scratch to taking it public, with all the highs and lows in between.',
    date: 'August 5, 2023',
    duration: '62 min',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    guest: {
      name: 'David Chen',
      title: 'Founder of NexTech'
    }
  },
  {
    id: '7',
    title: 'Decision-Making Frameworks for High-Stakes Leadership',
    description: 'How successful leaders make critical decisions under pressure and the mental models they use to navigate complexity.',
    date: 'August 19, 2023',
    duration: '47 min',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    guest: {
      name: 'Elena Rodriguez',
      title: 'CEO of Global Innovations'
    }
  },
  {
    id: '8',
    title: 'Building a Personal Brand as a Technical Founder',
    description: 'Strategies for technical founders to build their personal brand while focusing on product development and business growth.',
    date: 'September 2, 2023',
    duration: '39 min',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    guest: {
      name: 'Ryan Lee',
      title: 'CTO & Co-founder of DevStack'
    }
  },
  {
    id: '9',
    title: 'The Psychology of High Performance: Mental Health for Founders',
    description: 'Exploring the mental health challenges faced by entrepreneurs and strategies for maintaining wellbeing while building a company.',
    date: 'September 15, 2023',
    duration: '55 min',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    guest: {
      name: 'Dr. Maria Santos',
      title: 'Psychologist & Performance Coach'
    }
  },
  {
    id: '10',
    title: 'Bootstrapping to $50M: No Venture Capital Needed',
    description: 'The alternative path to building a successful tech company without raising venture funding.',
    date: 'October 1, 2023',
    duration: '43 min',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    guest: {
      name: 'Thomas Reed',
      title: 'Founder of BootTech'
    }
  }
];

const categories = ['All Episodes', 'Interviews', 'Solo Episodes', 'Case Studies', 'Frameworks'];

const Episodes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Episodes');
  const [filteredEpisodes, setFilteredEpisodes] = useState<Episode[]>(ALL_EPISODES);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Simple filtering logic for demonstration
    const filtered = ALL_EPISODES.filter(episode => 
      episode.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      episode.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (episode.guest?.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setFilteredEpisodes(filtered);
  }, [searchQuery, selectedCategory]);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 md:pt-32">
          <section className="container mb-16">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-semibold mb-4"
              >
                All Episodes
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-founder-600 dark:text-founder-300"
              >
                Dive into our archive of conversations with the world's most impactful founders.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col md:flex-row gap-4 mb-10"
            >
              <div className="relative flex-grow">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-founder-400" />
                <input
                  type="text"
                  placeholder="Search episodes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white dark:bg-founder-900 border border-founder-200 dark:border-founder-800 focus:outline-none focus:ring-2 focus:ring-founder-300 dark:focus:ring-founder-700"
                />
              </div>
              
              <div className="relative">
                <div className="inline-flex items-center justify-between w-full md:w-48 px-4 py-3 rounded-lg bg-white dark:bg-founder-900 border border-founder-200 dark:border-founder-800 cursor-pointer">
                  <span>{selectedCategory}</span>
                  <ChevronDown size={16} />
                </div>
                
                {/* This would be a dropdown in a real implementation */}
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredEpisodes.map((episode) => (
                <EpisodeCard key={episode.id} episode={episode} />
              ))}
            </div>
            
            {filteredEpisodes.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-founder-500 dark:text-founder-400">No episodes found matching your search.</p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="mt-4 text-founder-900 dark:text-white font-medium underline"
                >
                  Clear search
                </button>
              </div>
            )}
          </section>
          
          <Newsletter />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Episodes;
