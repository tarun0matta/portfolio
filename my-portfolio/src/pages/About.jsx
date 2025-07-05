import { FaEnvelope,FaLinkedin, FaGithub } from 'react-icons/fa';
import profileImg from '../assets/profile.png';

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
  // Add more projects as needed from your resume
];

const About = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20 text-beige">
      <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start">
        {/* Left: About Heading and Paragraphs */}
        <div className="flex-1 w-full">
          <h2 className="text-7xl font-bold mb-10 text-left">About</h2>
          <div className="space-y-8 text-lg md:text-2xl text-gray-300">
            <p>
            As someone deeply fascinated by the brilliance of large language models and the ever-expanding frontier of AI, I find joy (and sometimes existential dread) in building systems that make human–computer interaction feel natural, intuitive, and surprisingly helpful.
            </p>
            <p>
            I'm a graduate student who loves turning complex ideas into clean, functional web apps and AI/ML systems. I’m especially passionate about creating tools that leverage the power of large language models (LLMs) — the kind that can write code, explain black holes, or help you draft a polite email to your boss. The now-iconic paper "Attention Is All You Need" didn’t just spark an industry shift — it also sparked my current obsession with generative AI.              
            </p>
            <p>
             I focus on building applications that combine cutting-edge AI with real-world functionality. Whether it's voice-based assistants, natural language interfaces, or fine-tuned models that actually understand context, I aim to make intelligent systems that are not just powerful, but human-friendly. My development philosophy blends clarity, creativity, and usefulness — I believe technology should not only work, but feel like magic (without the bugs, hopefully). 
            </p>
            <p>
             I'm always up for collaborating on innovative AI projects — especially the kind where we can build something cool and actually useful. If you're building in GenAI or dreaming up tools that make people’s lives easier, I’d love to hear from you.
            </p>
          </div>
        </div>
        {/* Right: Profile Image and Name */}
        <div className="flex flex-col items-center w-full lg:w-auto lg:ml-24">
          <img
            src={profileImg}
            alt="Tarun Matta"
            className="rounded-2xl w-48 h-48 object-cover shadow-lg border-4 border-beige mb-4"
          />
          <h3 className="text-2xl font-semibold text-beige mt-2 text-center">Tarun Matta</h3>
          <div className="flex gap-4 mt-4">
          <a href="mailto:sstmatta@gmail.com" className="hover:opacity-80 transition text-xl"><FaEnvelope /></a>
            <a href="https://www.linkedin.com/in/sstmatta" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition text-xl"><FaLinkedin /></a>
            <a href="https://github.com/tarun0matta" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition text-xl"><FaGithub /></a>
          </div>
        </div>
      </div>
      {/* Projects section can be added below if needed */}
    </section>
  );
};

export default About;
