import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: "Inventory Management System and Point Of Sale",
      technologies: "React JS, Python, PostgreSQL, llama3",
      date: "Dec. 2023",
      description: [
        "Developed a full-stack point-of-sale platform using ReactJS, Python, and PostgreSQL, streamlining inventory tracking, sales transactions, and automated sales reporting.",
        "Implemented predictive ordering using Large Language Models (LLM) to analyze historical sales data, significantly optimizing inventory management and reducing costs"
      ]
    },
    {
      title: "Cooking Chatbot",
      technologies: "Llama3, LoRA, Streamlit, Python, PostgreSQL",
      date: "Dec. 2023",
      description: [
        "Fine-tuned Llama3 using LoRA specifically for culinary guidance, creating an intuitive chatbot providing personalized cooking tips and recipe suggestions.",
        "Developed an interactive frontend using Streamlit, with conversation history securely stored in PostgreSQL for improved user engagement and experience."
      ]
    },
    {
      title: "Event Registration & Ticketing API",
      technologies: "Python, Pandas, smtplib, pyqrcode",
      date: "March 2023",
      description: [
        "Accomplished efficient event management by implementing a Python-based system that used Pandas to process attendee data from an Excel sheet, generated unique QR codes, and automated email distribution using smtplib",
        "This reduced manual workload, improved accuracy, and streamlined event access for over 1300 attendees"
      ]
    }
  ]

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-sm text-gray-600">{project.technologies}</p>
          <p className="text-sm text-gray-600">{project.date}</p>
          <ul className="list-disc list-inside mt-2">
            {project.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default Projects