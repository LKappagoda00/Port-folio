import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black sticky top-0 text-white px-8 md:px-16 lg:px-24 border-b-[1px] border-b-gray-600 px-4 z-50'>
        <div className='container py-5 flex justify-center md:justify-between item-center'>
            <div className='text-3x1 font-bold hidden md:inline'>Lahiru Kappagoda</div>
            <div className='space-x-6'>
                <a href="#home" className='hover:text-gray-400'>Home</a>
                <a href="#about" className='hover:text-gray-400'>About Me</a>
                <a href="#services" className='hover:text-gray-400'>Services</a>
                <a href="#projects" className='hover:text-gray-400'>Projects</a>
                <a href="#contact" className='hover:text-gray-400'>Contact</a>
            </div>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact Me</button>
        </div>
    </nav>
  )
}

export default Navbar
