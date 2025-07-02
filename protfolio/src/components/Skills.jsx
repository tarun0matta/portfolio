import React from 'react'

const Skills = () => {
  const skillCategories = [
    { title: "Programming Languages", skills: ["Python", "SQL", "C"] },
    { title: "Database", skills: ["PostgreSQL", "MySQL"] },
    { title: "LLM and ML", skills: ["llama3", "gemma", "LoRA (Low Rank Adoption)", "Hugging face"] },
    { title: "Frontend", skills: ["React JS", "HTML", "CSS", "JavaScript"] },
    { title: "Developer Tools", skills: ["Visual Studio code", "PowerBi", "Jupyter Notebook", "Excel", "GIT"] },
    { title: "Software Development Practices", skills: ["Software Architecture Design", "Troubleshooting/Debugging", "Test-Driven Development"] }
  ]

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((category, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{category.title}</h3>
            <ul className="list-disc list-inside">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills