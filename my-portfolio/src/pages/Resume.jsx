import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-8 py-12 sm:py-24">
        {/* Header */}
        <div className="mb-8 sm:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-light text-white mb-4 sm:mb-6"
          >
            Resume
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#8b8b8b] max-w-2xl text-base sm:text-lg"
          >
            View my professional experience and download my resume below.
          </motion.p>
        </div>

        {/* Resume Actions */}
        <motion.div 
          className="flex justify-center mb-8 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="/resume.pdf"
            download="Tarun_Matta_Resume.pdf"
            className="flex items-center justify-center gap-2 sm:gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 group w-full max-w-md"
          >
            <FaDownload className="text-xl sm:text-2xl text-[#8b8b8b] group-hover:text-white transition-colors duration-300" />
            <span className="text-sm sm:text-base text-[#8b8b8b] group-hover:text-white transition-colors duration-300">
              Download Resume
            </span>
          </a>
        </motion.div>

        {/* Resume Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-16"
        >
          <h2 className="text-xl sm:text-2xl font-light text-white mb-6 sm:mb-8">Resume Preview</h2>
          <div className="aspect-[8.5/11] w-full bg-white/5 rounded-xl overflow-hidden border border-white/10">
            <object
              data="/resume.pdf"
              type="application/pdf"
              className="w-full h-full"
            >
              <div className="flex items-center justify-center h-full text-[#8b8b8b] text-sm sm:text-base p-4 text-center">
                <p>Unable to display PDF. Please use the download button above.</p>
              </div>
            </object>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
  