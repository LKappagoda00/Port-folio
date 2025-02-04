import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className='bg-black sticky top-0 text-white px-8 md:px-16 lg:px-24 border-b-[1px] border-b-gray-600 z-50'>
      <div className='container py-5 flex justify-between items-center'>
        <div className='text-2xl font-bold'>Lahiru Kappagoda</div>
        
        {/* Desktop and larger screens */}
        <div className='hidden md:flex space-x-6'>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#services" className='hover:text-gray-400'>Services</a>
          <a href="#projects" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>
        
        {/* Hamburger menu for mobile */}
        <div className='md:hidden flex items-center'>
          <button onClick={toggleMenu} className='text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Contact Me Button for larger screens */}
        <div className='hidden md:inline'>
          <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
            Contact Me
          </button>
        </div>
      </div>

      {/* Mobile Menu (visible when `isOpen` is true) */}
      {isOpen && (
        <div className='md:hidden bg-black text-white px-4 py-3'>
          <div className='space-y-4'>
            <a href="#home" className='block hover:text-gray-400' onClick={toggleMenu}>Home</a>
            <a href="#about" className='block hover:text-gray-400' onClick={toggleMenu}>About Me</a>
            <a href="#services" className='block hover:text-gray-400' onClick={toggleMenu}>Services</a>
            <a href="#projects" className='block hover:text-gray-400' onClick={toggleMenu}>Projects</a>
            <a href="#contact" className='block hover:text-gray-400' onClick={toggleMenu}>Contact</a>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
              Contact Me
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
