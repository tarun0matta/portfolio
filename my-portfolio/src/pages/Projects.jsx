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
  },
  // add more as needed...
];

const Projects = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-beige">
      <h2 className="text-3xl font-bold mb-8 text-left">All Projects</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
