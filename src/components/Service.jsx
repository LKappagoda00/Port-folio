import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    id: 1,
    title: "Custom Software & Web Development",
    description:
      "We create custom software and web applications to suit your business needs.",
    fullDescription:
      "From small business websites to large-scale enterprise solutions, our team ensures high performance, security, and great user experiences.",
    icon: "🌐",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "We develop mobile apps that are user-friendly and optimized for performance.",
    fullDescription:
      "We build cross-platform and native mobile applications with seamless UI and best-in-class user experience.",
    icon: "📱",
  },
  {
    id: 3,
    title: "API Development & Integration",
    description:
      "We design and integrate APIs for seamless system connectivity.",
    fullDescription:
      "Our API solutions enhance data exchange, automation, and connectivity between different software applications.",
    icon: "🔧",
  },
  {
    id: 4,
    title: "Software Maintenance & Support",
    description:
      "Continuous software maintenance is crucial for improving performance and security.",
    fullDescription:
      "We offer long-term support, including bug fixes, optimizations, and feature enhancements.",
    icon: "⚙️",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleReadMore = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <section className="bg-gray-950 text-white py-20" id="services">
      <div className="container mt-10 mx-auto px-8 md:px-16">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="mt-20">
          <Slider {...sliderSettings}>
            {services.map((service) => (
              <div key={service.id} className="p-4">
                <div
                  className="bg-gray-800 px-10 py-8 rounded-lg min-h-[300px] hover:shadow-xl transform 
                transition-transform duration-300 hover:scale-105 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-5xl text-center mb-4 text-gradient bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                      {service.icon}
                    </div>
                    <h3
                      className="text-2xl font-bold text-center text-transparent bg-clip-text 
                    bg-gradient-to-r from-green-400 to-blue-500"
                    >
                      {service.title}
                    </h3>
                    <p className="mt-4 text-gray-300 text-center">
                      {expandedService === service.id
                        ? service.fullDescription
                        : service.description}
                    </p>
                  </div>
                  <div className="text-center mt-4">
                    <button
                      onClick={() => toggleReadMore(service.id)}
                      className="text-blue-400 hover:underline"
                    >
                      {expandedService === service.id ? "Read Less" : "Read More"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Services;
