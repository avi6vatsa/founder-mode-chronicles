
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Episodes', path: '/episodes' },
    { name: 'About', path: '/about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-founder-950/80 backdrop-blur-md py-3 shadow-subtle' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative size-8 flex items-center justify-center bg-founder-900 dark:bg-white rounded-full">
            <Play size={12} className="text-white dark:text-founder-900 ml-0.5" />
          </div>
          <span className="font-display text-xl font-semibold tracking-tight">Founder Mode</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`subtle-underline text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-founder-900 dark:text-white'
                    : 'text-founder-600 dark:text-founder-300 hover:text-founder-900 dark:hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <a
            href="#subscribe"
            className="bg-founder-900 dark:bg-white text-white dark:text-founder-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-founder-800 dark:hover:bg-founder-100 transition-colors"
          >
            Subscribe
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-founder-900 dark:text-white" />
          ) : (
            <Menu size={24} className="text-founder-900 dark:text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ 
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="md:hidden bg-white/95 dark:bg-founder-950/95 backdrop-blur-md"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-lg py-2 border-b border-founder-100 dark:border-founder-800 ${
                    location.pathname === link.path
                      ? 'text-founder-900 dark:text-white'
                      : 'text-founder-600 dark:text-founder-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#subscribe"
                className="bg-founder-900 dark:bg-white text-white dark:text-founder-900 px-4 py-2 rounded-md text-center text-sm font-medium mt-2"
              >
                Subscribe
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
