import React from 'react'
import AboutImage from '../assets/WhatsApp Image 2025-01-24 at 12.34.12 (2).jpeg'

const About = () => {
    return (
        <div className='bg-black text-white py-20' id='about'>
            <div className='container mx-auto px-8 mt:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src={AboutImage} alt=""
                        className='w-72 h-80 rounded object-cover md-8' />
                    <div className='flex-1'>
                        <p className='text-lg mb-8 mt-8'>
                        " I am a passionate and dedicated Full-Stack Software Developer with expertise in designing and developing scalable, high-performance applications. My skills include front-end and back-end development, database management, and API integration. I have a strong understanding of software architecture, user experience, and performance optimization.
                        </p>
                        <p className='text-lg mb-8 mt-8'>
With a problem-solving mindset and a keen eye for detail, I strive to create efficient and user-friendly solutions. I am always eager to learn new technologies, adapt to challenges, and collaborate in a dynamic environment. My goal is to build innovative and impactful digital experiences that enhance functionality and user engagement.
</p>
<p className='text-lg mb-8 mt-8'>
📍 Let’s build something great together!"
                        </p>

                        <div className='space-y-4'>
                            <div className='flex item-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>
                                    HTML & CSS
                                </label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 
                                    rounded-full
                                        transform transition-transform duration-300 hover:scale-105 w-10/12'>
                                    </div>
                                </div>
                            </div>
                        
                        
                            <div className='flex item-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>
                                    REACT JS
                                </label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                                        transform transition-transform duration-300 hover:scale-105 w-11/12'>
                                    </div>
                                </div>
                            </div>
                        
                        
                            <div className='flex item-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>
                                    NODE JS
                                </label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                                        transform transition-transform duration-300 hover:scale-105 w-9/12'>
                                    </div>
                                </div> 
                            </div>

                            <div className='flex item-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>
                                    JavaScript
                                </label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                                        transform transition-transform duration-300 hover:scale-105 w-11/12'>
                                    </div>
                                </div>
                            </div>

                            <div className='flex item-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>
                                    Java
                                </label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                                        transform transition-transform duration-300 hover:scale-105 w-11/12'>
                                    </div>
                                </div>
                            </div>

                            <div className='flex item-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>
                                    PHP
                                </label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                                        transform transition-transform duration-300 hover:scale-105 w-11/12'>
                                    </div>
                                </div>
                            </div>

                            
  
                        </div>
                       <div className='mt-12 flex justify-between text-center'>
                        <div>
                            <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
                            from-green-300 to-blue-500'>
                                10+
                            </h3>
                            <p>Projects Comleted</p>
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
                            from-green-300 to-blue-500'>
                                10+
                            </h3>
                            <p>Projects Comleted</p>
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
                            from-green-300 to-blue-500'>
                                10+
                            </h3>
                            <p>Projects Comleted</p>
                        </div>
                        </div>  
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default About
