
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, CheckCircle2 } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate a submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1200);
  };

  return (
    <section id="subscribe" className="section bg-founder-900 dark:bg-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-5 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-radial from-founder-800/10 to-transparent pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container max-w-4xl mx-auto text-center"
      >
        <div className="inline-flex items-center px-3 py-1 mb-6 border border-founder-700 rounded-full bg-founder-800/50 text-founder-300 text-sm">
          <Mail size={14} className="mr-2" />
          <span>Free weekly insights</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
          Get the Founder Mindset Newsletter
        </h2>
        
        <p className="text-founder-300 text-lg mb-10 max-w-2xl mx-auto">
          Join thousands of entrepreneurs receiving actionable insights, mental models, and exclusive content from world-class founders.
        </p>
        
        <div className="max-w-md mx-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 pr-12 rounded-lg bg-white/10 border border-founder-700 text-white placeholder:text-founder-400 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-founder-900 rounded-md p-1.5 hover:bg-founder-100 transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="size-5 border-2 border-founder-300 border-t-founder-900 rounded-full animate-spin"></div>
                ) : (
                  <ArrowRight size={18} />
                )}
              </button>
              <p className="text-founder-400 text-xs mt-3 text-left">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 border border-founder-700 rounded-lg p-6 text-center"
            >
              <CheckCircle2 size={40} className="mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-medium mb-2">You're in!</h3>
              <p className="text-founder-300">
                Thanks for subscribing to the Founder Mindset Newsletter. Check your inbox soon!
              </p>
            </motion.div>
          )}
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {['Weekly insights', 'Exclusive content', 'Founder frameworks', 'Success stories'].map((feature) => (
            <div key={feature} className="text-sm">
              <span className="block text-founder-300">{feature}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Newsletter;
