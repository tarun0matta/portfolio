import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

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

  return (
    <nav className="backdrop-blur-sm bg-opacity-20 text-white px-30 py-4 shadow-md flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-3xl font-light tracking-wide hover:opacity-80 transition">Tarun Matta</Link>
      <div className="space-x-4 text-lg">
        <Link to="/about" className="hover:opacity-80 transition ">About</Link>
        <Link to="/projects" className="hover:opacity-80 transition ">Projects</Link>
        <Link to="/resume" className="hover:opacity-80 transition ">Resume</Link>
        <Link to="/contact" className="hover:opacity-80 transition ">Contact</Link>
      </div>
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
