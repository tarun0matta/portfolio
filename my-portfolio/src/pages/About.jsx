const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 text-beige">
      <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left: Text content */}
        <div className="flex-1 space-y-6 text-gray-300">
          <h3 className="text-2xl font-semibold text-beige">
            Hey there, I’m Tarun Matta
          </h3>
          <p>
            I’m a graduate student passionate about building impactful full-stack web apps,
            AI/ML systems, and solving real-world problems with elegant code.
          </p>
          <p>
            I specialize in creating smart backend systems, beautiful React interfaces,
            and efficient data pipelines. I enjoy turning ideas into clean, functional products.
          </p>
          <p>
            I’ve worked on POS systems, AI-powered document search tools, and intelligent
            agents using genetic algorithms. I love shipping things that matter.
          </p>
        </div>

        {/* Right: Photo + contact info */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <img
            src="/profile.jpg" // replace with your image path
            alt="Tarun Matta"
            className="rounded-xl w-48 h-48 object-cover mb-6"
          />
          <div className="text-sm space-y-2">
            <div>
              <p className="text-gray-500">Email</p>
              <a
                href="mailto:youremail@example.com"
                className="text-beige underline"
              >
                youremail@example.com
              </a>
            </div>
            <div>
              <p className="text-gray-500">Location</p>
              <p className="text-beige">Your City, Country</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
