import React, { useState } from 'react'
import { FaPhone, FaMapMarkedAlt, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address.';
    if (!formData.message) newErrors.message = 'Message is required.';

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission (e.g., send an email, API call, etc.)
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className='bg-black text-white py-20' id='contact'>
      <div className='mt-10 container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center md-12'>Contact</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          <div className='flex-1 mt-10'>
            <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text
                        bg-gradient-to-r from-green-400 to-blue-500'>Let's Talk</h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className='md-4 mt-8'>
              <FaEnvelope className='inline-block text-green-400 mr-2' />
              <a href="mailto:lahirupandukakappagoda@gmail.com" className='hover:underline'>
                lahirupandukakappagoda@gmail.com
              </a>
            </div>
            <div className='md-4 mt-8'>
              <FaPhone className='inline-block text-green-400 mr-2' />
              <span>+94752072010</span>
            </div>
            <div className='mb-4 mt-8'>
              <FaMapMarkedAlt className='inline-block text-green-400 mr-2' />
              <span>Kappagoda Niwasa, Alkegama, Makehelwala.</span>
            </div>
          </div>

          <div className='flex-1 w-full mt-12'>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label htmlFor="name" className='block mb-2'>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Enter Your Name'
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className='block mb-2'>Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Enter Your email'
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className='block mb-2'>Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-green-400'
                  rows="5"
                  placeholder='Enter Your Message'
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
