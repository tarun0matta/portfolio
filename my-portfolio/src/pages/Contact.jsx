const Contact = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 text-beige">
      <div className="mb-16">
        <p className="text-sm uppercase tracking-wide text-gray-400">Contact</p>
        <h2 className="text-4xl font-bold mt-2 mb-2">Get in touch</h2>
        <p className="text-md text-gray-400 max-w-xl">
          Get in touch to learn more about me, my work, or just to say hello.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        {/* Left column */}
        <div>
          <p className="text-sm mb-2 text-gray-400">Get in touch</p>
          <a href="mailto:youremail@example.com" className="text-beige underline">
            youremail@example.com
          </a>

          <p className="text-sm mt-10 mb-2 text-gray-400">Address</p>
          <p className="text-beige">Your City, Country</p>
        </div>

        {/* Right column */}
        <div className="flex flex-col space-y-4">
          {[
            { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
            { name: 'GitHub', url: 'https://github.com/yourusername' },
            { name: 'Medium', url: 'https://medium.com/@yourusername' },
            { name: 'Twitter', url: 'https://twitter.com/yourusername' },
          ].map((link, i) => (
            <div key={i} className="flex justify-between border-b border-gray-700 pb-1">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-beige hover:underline"
              >
                {link.name}
              </a>
              <span className="text-gray-500 text-xs">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
