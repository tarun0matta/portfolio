const ProjectCard = ({ title, description, tech, link }) => {
    const short = description.length > 120;
  
    return (
      <div className="bg-black border border-beige rounded-lg p-4 w-[300px] h-[270px] flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-400 mb-3">
            {short ? description.slice(0, 100) + '...' : description}
          </p>
        </div>
        <div className="mt-auto">
          <div className="text-xs text-beige mb-2">
            {tech.map((t, i) => (
              <span key={i} className="mr-2">#{t}</span>
            ))}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline text-beige"
          >
            View Project
          </a>
          {short && (
            <span className="block text-xs mt-1 text-gray-500">Read more on GitHub</span>
          )}
        </div>
      </div>
    );
  };
export default ProjectCard  