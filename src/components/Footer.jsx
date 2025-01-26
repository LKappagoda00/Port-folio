import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
        <div className='container mx-auto px-8 md:px16 lg:px-24'>
            <div className='flex flex-col md:flex-row md:space-x-12 item-center md-4'>
                <div className='flex-1 md-4 md:md-0'>
                    <h3 className='text-2xl font-bold md-2'>Lahiru Kappagoda</h3>
                    <p className='text-gray-400'>
                        Full-Stack Developer based in the Sri Lanka, specializating in web and softwaredevelopment
                    </p>
                </div>
                <div className='flex-1 w-full'> 
                    <form className='flex item-center justify-center'>
                        <input type="email" placeholder='Enter Email'className='w-full p-2 rounded-l-lg bg-gray-800 border-gray-600 focus:outline-none focus:border-green-400' />
                        <button type='submit' className='bg-gradient-to-r from-green-400 to-blue-500 tect-white px-4 py-2 rounded-r-lg'>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center'>
                <p className='text-gray-400'>
                    &copy; {new Date().getFullYear()}
                </p>
                <div className='flex space-x-4 my-4 md:my-0'>
                    <a href="#" className='text-gray-400 hover:text-white'>
                    <FaFacebook />
                    </a>
                    <a href="#"className='text-gray-400 hover:text-white'>
                    <FaLinkedin />
                    </a>
                    <a href="#"className='text-gray-400 hover:text-white'>
                    <FaGithub />
                    </a>
                </div>
                <div>
                    <a href="#"className='text-gray-400 hover:text-white'>
                        Privecy
                    </a>
                    <a href="#"className='text-gray-400 hover:text-white'>
                        Terms of Services
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer