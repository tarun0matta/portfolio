import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Cooking Chatbot (Fine-tuned LLaMA2)",
    description: "A fine-tuned LLaMA2 model trained on RecipeNLG to act as a personal cooking assistant.",
    tech: ["Python", "HuggingFace", "LoRA", "LLaMA2"],
    link: "https://github.com/tarun0matta/cookbot-llama2",  // change if hosted somewhere else
    align: "right"
  },
  {
    title: "Text to SQL",
    description: "Converts natural language questions into SQL queries using prompt engineering and schema awareness.",
    tech: ["Python", "Streamlit", "LLMs"],
    link: "https://github.com/tarun0matta/text-2-sql",
    align: "left"
  },
  {
    title: "Drive-Thru Voice Assistant",
    description: "A local chatbot powered by LLaMA 3 and gTTS that takes fast food orders through speech.",
    tech: ["Python", "Ollama", "gTTS", "SpeechRecognition"],
    link: "https://github.com/tarun0matta/drivethru-chatbot",
    align: "right"
  },
  {
    title: "PDF Q&A (RAG)",
    description: "Retrieval-Augmented Generation app that lets users ask questions based on uploaded PDFs.",
    tech: ["LangChain", "Python", "LLMs"],
    link: "https://github.com/tarun0matta/rag-implementation",
    align: "left"
  },
  {
    title: "Portfolio Website",
    description: "My personal website built with React to showcase projects, skills, and sarcasm—professionally.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    link: "https://github.com/tarun0matta/portfolio",
    align: "right"
  },
  {
    title: "Infinity POS",
    description: "A smart POS system with inventory, sales, employee roles, and analytics built from scratch.",
    tech: ["React", "Flask", "PostgreSQL", "JWT"],
    link: "https://github.com/tarun0matta/infinity-pos",  // change if hosted live
    align: "left"
  }
];


const skills = [
  {
    category: "GenAI & LLMs",
    items: [
      { name: "LLaMA3 & Ollama", level: 95 },
      { name: "Transformer Architectures", level: 90 },
      { name: "Prompt Engineering", level: 92 },
      { name: "RAG Systems", level: 94 },
      { name: "Diffusion & GANs", level: 88 },
      { name: "LangChain", level: 92 }
    ]
  },
  {
    category: "ML Frameworks & Programming",
    items: [
      { name: "Python", level: 95 },
      { name: "TensorFlow", level: 90 },
      { name: "PyTorch", level: 88 },
      { name: "Hugging Face", level: 92 },
      { name: "scikit-learn", level: 90 },
      { name: "SQL", level: 88 }
    ]
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      { name: "AWS Services", level: 88 },
      { name: "Docker & Kubernetes", level: 85 },
      { name: "Git & Version Control", level: 92 },
      { name: "FastAPI & APIs", level: 90 },
      { name: "PostgreSQL & Databases", level: 88 },
      { name: "Pandas & NumPy", level: 92 }
    ]
  }
];

const rotatingWords = ['language models', 'LLMs', 'Transformers'];

const experiences = [
  {
    year: "2022-2023",
    title: "Developer Intern",
    company: "G G Engineering Works",
    location: "Hyd, India",
    description: "Developed and maintained RESTful APIs using Flask for internal tools and customer applications",
    tech: ["Flask", "PostgreSQL", "REST APIs", "JSON"],
    highlight: "Aug. 2022 - Mar. 2023",
    details: [
      "Developed and maintained RESTful APIs using Fast API, improving backend functionality for internal tools and customer-facing applications",
      "Collaborated with senior developers to design endpoints, handle data validation, and implement error handling for robust API workflows",
      "Worked with PostgreSQL and integrated APIs with frontend components using JSON-based communication"
    ]
  }
];

const SkillBar = ({ name, level, index }) => {
  return (
    <motion.div 
      className="mb-6"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-white/80 text-lg">{name}</span>
        <span className="text-white/60 text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-green-400 to-blue-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ category, items, index }) => {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-2xl font-light mb-8 text-white/90">{category}</h3>
      {items.map((skill, idx) => (
        <SkillBar key={skill.name} {...skill} index={idx} />
      ))}
    </motion.div>
  );
};

const FloatingIcon = ({ icon, delay, duration, x, y }) => {
  return (
    <motion.div
      className="absolute text-white/10 text-4xl"
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.2, 0.5, 0.2],
        y: [y, y - 50, y],
        x: [x, x + 20, x]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    >
      {icon}
    </motion.div>
  );
};

const ExperienceCard = ({ experience, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <motion.div 
        className="absolute left-0 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"
        initial={{ height: 0 }}
        animate={isInView ? { height: "100%" } : {}}
        transition={{ duration: 1, delay: index * 0.2 }}
      />
      
      <div className="ml-8 relative mb-16">
        <motion.div
          className="absolute -left-10 w-3 h-3 rounded-full bg-white/30"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-white/30"
            animate={{ scale: [1, 2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        <motion.span
          className="inline-block text-sm text-white/50 mb-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        >
          {experience.highlight}
        </motion.span>

        <motion.div
          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 group hover:border-white/30 transition-all duration-300"
          whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-light text-white/90 mb-2">{experience.title}</h3>
              <h4 className="text-lg text-white/70 mb-1">{experience.company}</h4>
            </div>
            <span className="text-sm text-white/50">{experience.location}</span>
          </div>
          
          <div className="space-y-2 mb-4">
            {experience.details.map((detail, i) => (
              <p key={i} className="text-white/60 text-sm">{detail}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {experience.tech.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-white/10 rounded-full text-sm text-white/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ParallaxText = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);

  return (
    <motion.span
      ref={ref}
      style={{ y, opacity }}
      className={className}
    >
      {children}
    </motion.span>
  );
};

const Home = () => {
  const [wordIndex, setWordIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="max-w-[1550px] mx-auto">
        {/* Header row */}
        <motion.div 
          className="flex justify-between items-center pt-32 pb-10 px-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#888] text-3xl hover:text-white transition-colors duration-300">Hi, I'm Tarun</p>
          <div className="flex items-center gap-2 group cursor-pointer">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <p className="text-[#888] text-xl group-hover:text-white transition-colors duration-300">
              I'm available for new projects
            </p>
          </div>
        </motion.div>

        {/* Main content */}
        <motion.div 
          className="px-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="max-w-5xl">
            <h1 className="text-8xl font-light tracking-tight leading-[1.1] mb-16">
              <div className="opacity-90 hover:opacity-100 transition-opacity duration-300">
                I'm passionate about<br />
                building usable AI with
              </div>
              <motion.span
                className="text-green-400 block mt-2"
                key={wordIndex}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </h1>
            <motion.p 
              className="text-[#888] text-2xl font-light leading-relaxed max-w-3xl hover:text-[#999] transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              As a software engineer with a passion for machine learning and GenAI, I specialize in building modern web apps powered by LLMs. My projects span domains like voice interfaces, natural language systems, and developer tools.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.section 
        className="max-w-[1400px] mx-auto px-12 py-32 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-blue-500/10 blur-3xl -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h2 
          className="text-5xl font-light mb-24 text-center bg-clip-text bg-gradient-to-r from-beige to-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, i) => (
            <SkillCategory key={category.category} {...category} index={i} />
          ))}
        </div>
      </motion.section>

      {/* Experience Timeline Section */}
      <motion.section 
        className="max-w-[1400px] mx-auto px-12 py-32 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-green-500/5 blur-3xl -z-10" />
          {/* Add floating background elements */}
          <ParallaxText className="absolute top-20 left-10 text-8xl font-bold text-white/5">
            AI
          </ParallaxText>
          <ParallaxText className="absolute top-40 right-20 text-7xl font-bold text-white/5">
            ML
          </ParallaxText>
          <ParallaxText className="absolute bottom-40 left-30 text-9xl font-bold text-white/5">
            Web
          </ParallaxText>
        </div>

        <motion.h2 
          className="text-5xl font-light mb-24 text-center bg-clip-text bg-gradient-to-r from-beige to-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="relative">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.year} experience={exp} index={i} />
          ))}
        </div>
      </motion.section>

      {/* Projects section */}
      <motion.section 
        id="projects" 
        className="max-w-[1400px] mx-auto px-12 py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-5xl font-light mb-24 text-center bg-clip-text bg-gradient-to-r from-beige to-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-40">
          {projects.map((proj, i) => (
            <motion.div 
              key={i}
              className={`flex items-center justify-center ${proj.align === 'right' ? 'md:justify-end' : 'md:justify-start'} relative`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className={`w-full md:w-2/3 lg:w-1/2 relative ${proj.align === 'right' ? 'md:ml-auto' : 'md:mr-auto'}`}>
                <motion.div 
                  className="absolute -inset-4 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
                  initial={false}
                  whileHover={{ scale: 1.02 }}
                />
                <motion.div
                  className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 group hover:border-white/30 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h3 className="text-3xl font-light mb-4 text-white/90">{proj.title}</h3>
                  <p className="text-lg text-gray-400 mb-6">{proj.description}</p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {proj.tech.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={proj.link}
                    className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    View Project <span className="text-xl">→</span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}

          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link to="/projects" className="relative z-10 text-xl text-white/70 group-hover:text-white flex items-center gap-3">
                See All Projects 
                <motion.span 
                  className="text-2xl"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
