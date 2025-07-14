import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: "Infinity POS",
    description: "A smart POS system with inventory, employee roles, real-time sales, and analytics — built with clean code and caffeine.",
    tech: ["React", "Flask", "PostgreSQL", "JWT"],
    link: "https://github.com/tarun0matta/infinity-pos",
    category: "Full Stack"
  },
  {
    title: "PDF Q&A (RAG)",
    description: "Retrieval-Augmented Generation system that answers questions based on PDF content. No more Ctrl+F.",
    tech: ["LangChain", "Python", "LLMs"],
    link: "https://github.com/tarun0matta/rag-implementation",
    category: "AI/ML"
  },
  {
    title: "Drive-Thru Voice Assistant",
    description: "Voice-based assistant using LLaMA 3 and gTTS to take fast food orders like a chatty McBot.",
    tech: ["Python", "Ollama", "gTTS", "SpeechRecognition"],
    link: "https://github.com/tarun0matta/drivethru-chatbot",
    category: "AI/ML"
  },
  {
    title: "Cooking Chatbot (Fine-tuned LLaMA2)",
    description: "A culinary LLM trained on RecipeNLG, ready to guide you through recipes and judge your pantry.",
    tech: ["Python", "LoRA", "LLaMA2", "HuggingFace"],
    link: "https://github.com/tarun0matta/cookbot-llama2",
    category: "AI/ML"
  },
  {
    title: "Text-to-SQL Generator",
    description: "Natural language interface that converts user queries into SQL — no manual joins, no crying.",
    tech: ["Python", "Streamlit", "LLMs"],
    link: "https://github.com/tarun0matta/text-2-sql",
    category: "AI/ML"
  },
  {
    title: "Portfolio Website",
    description: "A sleek, sarcastic portfolio built with React to showcase all this chaos and clean code.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    link: "https://github.com/tarun0matta/portfolio",
    category: "Full Stack"
  }
];


const categories = ["All", "AI/ML", "Full Stack"];

const ProjectCard = ({ project }) => (
  <motion.div
    layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="group relative rounded-lg overflow-hidden bg-gradient-to-br from-[#0f1922] to-[#0a1118] p-4 sm:p-6 transition-all duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative z-10">
      <h3 className="text-xl sm:text-2xl font-light text-white/90 mb-2 sm:mb-3">{project.title}</h3>
      <p className="text-[#8b8b8b] mb-4 sm:mb-6 line-clamp-2 text-xs sm:text-sm">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-white/5 rounded-full text-xs text-[#8b8b8b]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs text-[#8b8b8b]">{project.category}</span>
        <motion.a
          href={project.link}
          className="inline-flex items-center text-sm text-[#8b8b8b] hover:text-white transition-colors duration-300 group"
          whileHover={{ x: 5 }}
        >
          View Project
          <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
        </motion.a>
      </div>
    </div>
  </motion.div>
);

const FilterButton = ({ category, selected, onClick }) => (
  <button
    onClick={() => onClick(category)}
    className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
      selected 
        ? 'bg-white/10 text-white' 
        : 'text-[#8b8b8b] hover:text-white'
    }`}
  >
    {category}
  </button>
);

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter(project => 
    selectedCategory === "All" ? true : project.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <div className="mb-8 sm:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-light text-white mb-4 sm:mb-6"
          >
            Featured Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#8b8b8b] max-w-2xl text-sm sm:text-base"
          >
            Explore my latest work in AI, web development, and cloud solutions. Each project represents a unique challenge and innovative solution.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap gap-2 sm:gap-4 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map(category => (
            <FilterButton
              key={category}
              category={category}
              selected={selectedCategory === category}
              onClick={setSelectedCategory}
            />
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
