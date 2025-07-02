import React from 'react'

const Experience = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Student Volunteer</h3>
        <p className="italic">Texas A&M University, Corpus Christi, Tx</p>
        <p className="text-sm text-gray-600">Nov. 2023 – Nov. 2023</p>
        <ul className="list-disc list-inside mt-2">
          <li>Developed a scalable data processing pipeline for automating the preprocessing and integration of large datasets using Python and SQL for professor's research application.</li>
          <li>Reduced data preparation time by 40% and ensured seamless scalability for research applications</li>
          <li>Collaborated with the professor and team to align the pipeline with research objectives and enhance data accuracy</li>
          <li>Documented workflows to ensure maintainability and usability by team members</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Freelance web developer</h3>
        <p className="italic">G G Engineering Works, Hyd, India</p>
        <p className="text-sm text-gray-600">Aug. 2022 – Sept. 2022</p>
        <ul className="list-disc list-inside mt-2">
          <li>Designed and developed a custom Python Flask-based website using HTML, CSS, and Docker, to effectively showcase the company's services and enhance brand visibility, ensuring a responsive and scalable solution</li>
          <li>Collaborated with the company to understand their goals and priorities, and designed a website that effectively represented their brand and met their business objectives.</li>
        </ul>
      </div>
    </section>
  )
}

export default Experience