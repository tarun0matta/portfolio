import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: "Infinity POS",
    description: "A smart point-of-sale system with inventory tracking, reporting, and role-based access.",
    tech: ["React", "Flask", "PostgreSQL", "JWT"],
    link: "https://your-demo-link.com",
  },
  {
    title: "Wumpus World AI",
    description: "Genetic algorithm-driven AI agent to navigate a Wumpus World environment.",
    tech: ["Python", "Genetic Algorithm", "Game AI"],
    link: "https://github.com/yourusername/wumpus-world-ai",
  },
  {
    title: "PDF Q&A (RAG)",
    description: "Retrieval-Augmented Generation app that answers questions from uploaded PDFs using LLMs.",
    tech: ["LangChain", "Python", "OpenAI API"],
    link: "https://github.com/yourusername/pdf-qa",
  },
  {
    title: "Infinity POS",
    description: "A smart point-of-sale system with inventory tracking, reporting, and role-based access.",
    tech: ["React", "Flask", "PostgreSQL", "JWT"],
    link: "https://your-demo-link.com",
  },
  {
    title: "Wumpus World AI",
    description: "Genetic algorithm-driven AI agent to navigate a Wumpus World environment.",
    tech: ["Python", "Genetic Algorithm", "Game AI"],
    link: "https://github.com/yourusername/wumpus-world-ai",
  },
  {
    title: "PDF Q&A (RAG)",
    description: "Retrieval-Augmented Generation app that answers questions from uploaded PDFs using LLMs.",
    tech: ["LangChain", "Python", "OpenAI API"],
    link: "https://github.com/yourusername/pdf-qa",
  }
];

const Home = () => {
  return (
    <div className="text-beige">
      <section className="text-center mt-20">
        <h1 className="text-5xl font-bold mb-2">Tarun Matta</h1>
        <p className="text-lg text-gray-400 mb-6">Satya Sai Tarun Matta</p>
        <p className="max-w-xl mx-auto text-sm text-gray-400 mb-12">
          I'm a graduate student passionate about software engineering, machine learning, and full-stack web development. I love building real-world projects and experimenting with AI.
        </p>
        
      </section>
      <section className="text-center mt-20">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="max-w-xl mx-auto text-sm text-gray-400 mb-12">
          I'm a graduate student passionate about software engineering, machine learning, and full-stack web development. I love building real-world projects and experimenting with AI.
        </p>
        
      </section>


      <section id="projects" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>

        <div className="flex overflow-x-auto scrollbar-hide space-x-6 snap-x snap-mandatory pb-2">
          {projects.map((proj, i) => (
            <div key={i} className="snap-center shrink-0">
              <ProjectCard {...proj} />
            </div>
          ))}

          {/* "See All Projects" card */}
          <div className="snap-center shrink-0 w-[300px] h-[270px] bg-black border border-beige rounded-lg flex items-center justify-center">
            <a
              href="/projects"
              className="text-beige font-semibold underline hover:opacity-80 transition"
            >
              See All Projects →
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
