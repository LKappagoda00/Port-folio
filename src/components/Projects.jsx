import React from 'react'
import Photo from '../assets/image-ppl.JPG'
import fitness from '../assets/8.png'
import ngc from '../assets/11.png'
import hostp from '../assets/6.png'


const projects=[
    {
        id:1,
        name:"Health And Wellness App",
        technologies:"React Native, Firebase, Expo, JavaScript, Redux, Figma ",
        image:fitness,
        github:"https://github.com/LKappagoda00/Firebase-Fitness-Master",
    },
    {
        id:2,
        name:"Smart Tech Hub Management System",
        technologies:"JavaScript, React, Node.js, Express.js, MongoDB, Postman API, HTML, CSS ",
        image:ngc,
        github:"https://github.com/LKappagoda00/New-Gen-Computer-shop-Management-System",
    },
    {
        id:3,
        name:"Hospital Management System",
        technologies:"TypeScript, React, Node.js, MongoDB, Postman API, HTML, CSS   ",
        image:hostp,
        github:"",
    },
    

]

const Projects = () => {
  return (
    <div className='bg-black text-white py-20' id='projects'>
            <div className='mt-10 container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-8 ' >
                    {projects.map((project)=>(
                        <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg
                        transform transition-transform duration-300 hover:scale-105'>
                            <img src={project.image} alt={project.name} className='rounded-lg mb-4
                            w-full h-48 object-cover' />
                            <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                            <p className='text-gray-400 mb-4'>{project.technologies}</p>
                            <div className=' mt-'>
                            <a href={project.github} className='bg-gradient-to-r from-blue-500 to-purple-500 text-white hidden md:inline-block 
              transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' target='_blank'
                            rel='noopener noreferrer'>GitHub</a>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
    </div>
  )
}

export default Projects
