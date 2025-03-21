
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container max-w-lg text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center size-20 bg-founder-100 dark:bg-founder-800 rounded-full mb-6 text-4xl font-display font-medium">
              404
            </div>
            <h1 className="text-3xl md:text-4xl font-medium mb-4">Page not found</h1>
            <p className="text-founder-600 dark:text-founder-300 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/"
              className="inline-flex items-center font-medium text-founder-900 dark:text-white hover:underline"
            >
              <ArrowLeft size={16} className="mr-2" />
              Return to home
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
