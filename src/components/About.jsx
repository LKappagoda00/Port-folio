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
                        " Motivated software engineering student with experience in web and mobile
                         development using React, Node.js, Express, Mongodb, PHP and java. Skilled 
                         in problem-solving, holding a HackerRank Skill Certificate in Problem Solving 
                         (Basic). Proficient in JavaScript, Java, Python, C++, and C. Passionate about 
                         building innovative solutions and contributing to impactful projects."
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
