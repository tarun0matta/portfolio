import React from 'react'

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold">Satya Sai Tarun Matta</h1>
        <p className="text-xl">Computer Science Graduate Student</p>
        <p className="mt-2">
          <a href="mailto:sstmatta@gmail.com" className="mr-4 hover:underline">sstmatta@gmail.com</a>
          <a href="https://www.linkedin.com/in/sstmatta/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        </p>
      </div>
    </header>
  )
}

export default Header