import React from 'react';

const Services = [
    {
        id:1,
        title: "🖥️ Custom Software & Web Development",
        description:"Custom software and web development services focus on creating tailored solutions that meet specific business and personal needs. These solutions enhance productivity, improve user experiences, and provide seamless interaction with digital platforms."
    },
    {
        id:2,
        title: "📱 Mobile App Development",
        description:"Developing mobile applications that are user-friendly, efficient, and optimized for performance. Mobile apps are designed to provide interactive experiences, ensuring accessibility across different devices and platforms."
    },
    {
        id:3,
        title: "⚙️ API Development & Integration",
        description:"APIs facilitate seamless communication between different software applications. Developing and integrating APIs ensures data exchange, system connectivity, and automation, enhancing the overall functionality of applications."
    },
    {
        id:4,
        title: "🛠️ Software Maintenance & Support",
        description:"Continuous software maintenance is crucial for improving performance, fixing bugs, and adding new features. Regular updates and support services help ensure the longevity and efficiency of applications."
    },
    
]

const Service = () => {
  return (
    <div className='bg-black text-white py-20' id='services'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Services Offered</h2>
                <div className='grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-8'>
                    {Services.map((service)=>(
                        <div
                        key={service.id}
                        className='bg-gray-800 px-6 pb-6 rounded-lg hover-lg transform
                        transition-transform duration-300 hover:scale-105'
                        >
                        <div
                        className='text-right text-2xl font-bold text-transparent bg-clip-text
                        bg-gradient-to-r from-green-600 to-blue-400'
                        >
                            {service.id}

                        </div>
                        <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text
                        bg-gradient-to-r from-green-400 to-blue-500'>
                            {service.title}

                        </h3>
                        <p className='mt-2 text-gray-300'>{service.description}</p>
                        <a href="#" className='mt-4 inline-block text-green-400 hover:text-blue-500'>Read More</a>

                        </div>
                    ))}
                </div>
            </div>
    </div>            
  )
}

export default Service
