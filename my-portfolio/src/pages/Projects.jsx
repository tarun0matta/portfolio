import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: "Infinity POS",
    description: "A smart point-of-sale system with inventory tracking, reporting, and role-based access.",
    tech: ["React", "Flask", "PostgreSQL", "JWT"],
    link: "https://your-demo-link.com",
    category: "Full Stack"
  },
  {
    title: "Wumpus World AI",
    description: "Genetic algorithm-driven AI agent to navigate a Wumpus World environment.",
    tech: ["Python", "Genetic Algorithm", "Game AI"],
    link: "https://github.com/yourusername/wumpus-world-ai",
    category: "AI/ML"
  },
  {
    title: "PDF Q&A (RAG)",
    description: "Retrieval-Augmented Generation app that answers questions from uploaded PDFs using LLMs.",
    tech: ["LangChain", "Python", "OpenAI API"],
    link: "https://github.com/yourusername/pdf-qa",
    category: "AI/ML"
  },
  {
    title: "Smart Analytics Dashboard",
    description: "Real-time analytics platform with predictive insights and interactive visualizations.",
    tech: ["Next.js", "D3.js", "Python", "Redis"],
    link: "https://github.com/yourusername/analytics",
    category: "Full Stack"
  },
  {
    title: "Neural Style Transfer",
    description: "Web app that applies artistic styles to images using deep learning.",
    tech: ["PyTorch", "FastAPI", "React", "Docker"],
    link: "https://github.com/yourusername/style-transfer",
    category: "AI/ML"
  },
  {
    title: "Cloud Infrastructure Manager",
    description: "Automated cloud resource management and optimization platform.",
    tech: ["Terraform", "AWS", "Node.js", "GraphQL"],
    link: "https://github.com/yourusername/cloud-manager",
    category: "DevOps"
  }
];

const categories = ["All", "AI/ML", "Full Stack", "DevOps"];

const ProjectCard = ({ project }) => (
  <motion.div
    layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="group relative rounded-lg overflow-hidden bg-gradient-to-br from-[#0f1922] to-[#0a1118] p-6 transition-all duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative z-10">
      <h3 className="text-2xl font-light text-white/90 mb-3">{project.title}</h3>
      <p className="text-[#8b8b8b] mb-6 line-clamp-2 text-sm">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
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
      <div className="max-w-7xl mx-auto px-8 py-24">
        {/* Header */}
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-light text-white mb-6"
          >
            Featured Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#8b8b8b] max-w-2xl"
          >
            Explore my latest work in AI, web development, and cloud solutions. Each project represents a unique challenge and innovative solution.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex gap-4 mb-12"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
