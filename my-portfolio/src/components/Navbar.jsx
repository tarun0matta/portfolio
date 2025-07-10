import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let animationFrameId;
    
    const handleScroll = () => {
      animationFrameId = window.requestAnimationFrame(() => {
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        const currentProgress = Math.min((window.pageYOffset / totalScroll) * 100, 100);
        setScrollProgress(currentProgress);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [window.location.pathname]);

  return (
    <nav className="backdrop-blur-sm bg-black/20 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-[1550px] mx-auto px-6 md:px-8 lg:px-12 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl md:text-3xl font-light tracking-wide hover:opacity-80 transition">
            Tarun Matta
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-lg">
            <Link to="/about" className="hover:opacity-80 transition">About</Link>
            <Link to="/projects" className="hover:opacity-80 transition">Projects</Link>
            <Link to="/resume" className="hover:opacity-80 transition">Resume</Link>
            <Link to="/contact" className="hover:opacity-80 transition">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-4 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4 flex flex-col items-center text-lg">
                <Link to="/about" className="w-full text-center py-2 hover:bg-white/10 transition">About</Link>
                <Link to="/projects" className="w-full text-center py-2 hover:bg-white/10 transition">Projects</Link>
                <Link to="/resume" className="w-full text-center py-2 hover:bg-white/10 transition">Resume</Link>
                <Link to="/contact" className="w-full text-center py-2 hover:bg-white/10 transition">Contact</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-[1px] bg-white/60 transition-all duration-300 ease-out"
        style={{ 
          transform: `translateX(${scrollProgress - 100}%)`,
          width: '100%',
          opacity: scrollProgress >= 40 ? 1 : 0
        }} 
      />
    </nav>
  );
};

export default Navbar;
