import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import profileImg from '../assets/profile.png';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Infinity POS',
    description: 'A smart point-of-sale system with inventory tracking, reporting, and role-based access.'
  },
  {
    title: 'Wumpus World AI',
    description: 'Genetic algorithm-driven AI agent to navigate a Wumpus World environment.'
  },
  {
    title: 'PDF Q&A (RAG)',
    description: 'Retrieval-Augmented Generation app that answers questions from uploaded PDFs using LLMs.'
  }
];

const About = () => {
  return (
    <section className="max-w-[1550px] mx-auto px-4 sm:px-8 py-12 sm:py-24 text-beige min-h-screen">
      <div className="flex flex-col lg:flex-row gap-10 sm:gap-20 items-center lg:items-start mb-12 sm:mb-24">
        {/* Left: About Heading and Paragraphs */}
        <motion.div 
          className="flex-1 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-light mb-8 sm:mb-12 text-left bg-clip-text bg-gradient-to-r from-beige to-gray-400">
            About
          </h2>
          <motion.div 
            className="backdrop-blur-sm bg-white/5 p-6 sm:p-8 rounded-xl border border-white/10 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                As someone deeply fascinated by the brilliance of large language models and the ever-expanding frontier of AI, I find joy (and sometimes existential dread) in building systems that make human–computer interaction feel natural, intuitive, and surprisingly helpful.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                I'm a graduate student who loves turning complex ideas into clean, functional web apps and AI/ML systems. I'm especially passionate about creating tools that leverage the power of large language models (LLMs) — the kind that can write code, explain black holes, or help you draft a polite email to your boss. The now-iconic paper "Attention Is All You Need" didn't just spark an industry shift — it also sparked my current obsession with generative AI.              
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Profile Image and Social Links */}
        <motion.div
          className="lg:w-1/3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="relative group">
            <img
              src={profileImg}
              alt="Tarun Matta"
              className="rounded-2xl w-48 sm:w-64 h-48 sm:h-64 object-cover shadow-2xl border-4 border-beige mb-4 transition-transform duration-300 group-hover:scale-105 mx-auto"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-beige mt-4 sm:mt-6 text-center">Tarun Matta</h3>
          <div className="flex gap-4 sm:gap-6 mt-4 sm:mt-6 justify-center">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:sstmatta@gmail.com" 
              className="hover:text-white transition text-xl sm:text-2xl bg-white/10 p-2 sm:p-3 rounded-full"
            >
              <FaEnvelope />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/sstmatta" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition text-xl sm:text-2xl bg-white/10 p-2 sm:p-3 rounded-full"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/tarun0matta" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition text-xl sm:text-2xl bg-white/10 p-2 sm:p-3 rounded-full"
            >
              <FaGithub />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="w-full"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 sm:mb-12 text-left bg-clip-text bg-gradient-to-r from-beige to-gray-400">
          Education
        </h2>
        <motion.div 
          className="backdrop-blur-sm bg-white/5 p-6 sm:p-8 rounded-xl border border-white/10 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="space-y-6 sm:space-y-8">
            <motion.div 
              className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 sm:gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-light text-white">Master of Science in Computer Science</h3>
                <p className="text-base sm:text-lg text-gray-400">Texas A&M University, Corpus Christi</p>
              </div>
              <p className="text-base sm:text-lg text-gray-400">May 2025</p>
            </motion.div>

            <motion.div 
              className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 sm:gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-light text-white">Bachelor of Technology in Computer Science</h3>
                <p className="text-base sm:text-lg text-gray-400">Raghu Institute of Technology, India</p>
              </div>
              <p className="text-base sm:text-lg text-gray-400">May 2022</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
