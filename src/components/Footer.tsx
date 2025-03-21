
import { Link } from 'react-router-dom';
import { ExternalLink, Instagram, Linkedin, Play, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-founder-950 py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="relative size-8 flex items-center justify-center bg-founder-900 dark:bg-white rounded-full">
                <Play size={12} className="text-white dark:text-founder-900 ml-0.5" />
              </div>
              <span className="font-display text-xl font-semibold tracking-tight">Founder Mode</span>
            </Link>
            <p className="text-founder-600 dark:text-founder-400 mb-6 max-w-md">
              Your front-row seat into the minds, routines, and frameworks of the world's most impactful founders and CEOs.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Youtube, label: 'YouTube' },
                { icon: Linkedin, label: 'LinkedIn' }
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="size-9 rounded-full flex items-center justify-center bg-founder-100 dark:bg-founder-900 text-founder-800 dark:text-founder-200 hover:bg-founder-900 hover:text-white dark:hover:bg-white dark:hover:text-founder-900 transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Episodes', path: '/episodes' },
                { name: 'About', path: '/about' },
                { name: 'Subscribe', path: '#subscribe' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-founder-600 dark:text-founder-400 hover:text-founder-900 dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Listen On</h3>
            <ul className="space-y-2">
              {[
                'Spotify',
                'Apple Podcasts',
                'Google Podcasts',
                'YouTube'
              ].map((platform) => (
                <li key={platform}>
                  <a 
                    href="#" 
                    className="flex items-center text-founder-600 dark:text-founder-400 hover:text-founder-900 dark:hover:text-white transition-colors"
                  >
                    <span>{platform}</span>
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-founder-100 dark:border-founder-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-founder-500 dark:text-founder-400 mb-4 md:mb-0">
            &copy; {currentYear} Founder Mode. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-founder-600 dark:text-founder-400 hover:text-founder-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-founder-600 dark:text-founder-400 hover:text-founder-900 dark:hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
