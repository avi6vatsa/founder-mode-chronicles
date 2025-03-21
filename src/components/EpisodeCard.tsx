
import { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export interface Episode {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  image: string;
  guest?: {
    name: string;
    title: string;
  };
}

interface EpisodeCardProps {
  episode: Episode;
  featured?: boolean;
}

const EpisodeCard = ({ episode, featured = false }: EpisodeCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${
        featured 
          ? 'md:col-span-2 aspect-[16/7] md:aspect-[21/9]' 
          : 'aspect-square md:aspect-[3/4]'
      }`}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-noise opacity-20 z-10 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 z-10"></div>
      <img 
        src={episode.image} 
        alt={episode.title}
        className="absolute inset-0 w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      
      {/* Content */}
      <div className="absolute inset-0 z-20 p-6 md:p-8 flex flex-col justify-end">
        <div className="text-white space-y-3">
          {episode.guest && (
            <p className="text-white/80 font-medium text-sm">
              {episode.guest.name}, {episode.guest.title}
            </p>
          )}
          <h3 className={`font-display font-medium line-clamp-2 ${
            featured ? 'text-xl md:text-2xl' : 'text-lg'
          }`}>
            {episode.title}
          </h3>
          
          <p className="text-white/70 text-sm line-clamp-2 md:line-clamp-3">
            {episode.description}
          </p>
          
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2 text-xs text-white/60">
              <span>{episode.date}</span>
              <span>•</span>
              <span>{episode.duration}</span>
            </div>
            
            <motion.div
              className="flex items-center justify-center size-10 bg-white rounded-full text-founder-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ x: -5, opacity: 0 }}
              animate={{ 
                x: isHovered ? 0 : -5, 
                opacity: isHovered ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              <Play size={14} className="ml-0.5" />
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Link overlay */}
      <a href="#" className="absolute inset-0 z-30" aria-label={`Listen to ${episode.title}`}></a>
    </motion.article>
  );
};

export default EpisodeCard;
