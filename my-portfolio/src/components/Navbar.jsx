import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-3xl font-bold tracking-wide hover:opacity-80 transition">Tarun Matta</Link>
      <div className="space-x-4 text-sm">
        <Link to="/about" className="hover:opacity-80 transition">About</Link>
        <Link to="/projects" className="hover:opacity-80 transition">Projects</Link>
        <Link to="/resume" className="hover:opacity-80 transition">Resume</Link>
        <Link to="/contact" className="hover:opacity-80 transition">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
