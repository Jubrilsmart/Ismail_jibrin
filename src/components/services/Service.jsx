import React from 'react';
import { FiGlobe, FiMonitor, FiSmartphone } from 'react-icons/fi';


const services = [
    {   icon: '<FaCode />',
        title: 'Front-End',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum sit dolorem rerum iste tenetur.'
    }
]

function Service() {
  return (
    <div id='services' className='bg-light dark:bg-dark text-dark dark:text-light pt-20 p-4'>
        <div className='container mx-auto space-y-8'>
            <div data-aos='flip-left'>
                <h2 className='text-3xl lg:text-center pl-4 font-bold '>What I Do</h2>
            </div>
            <div data-aos='fade-down' className='space-y-4 lg:flex lg:gap-8 text-center lg:text-left'>
                <div className='max-w-9/10 p-8 space-y-4 mx-auto'>
                    <FiMonitor className='text-3xl text-blue-500 mb-10 mx-auto lg:mx-0'/>
                    <h3 className='text-2xl font-bold uppercase'>ui/ux</h3>
                    <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo porro nihil eaque officia?</p>
                </div>
                <div data-aos='fade-up' className='max-w-9/10 p-8 space-y-4 mx-auto'>
                    <FiGlobe className='text-3xl text-blue-500 mb-10 mx-auto lg:mx-0'/>
                    <h3 className='text-2xl font-bold uppercase'>Web App</h3>
                    <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo porro nihil eaque officia?</p>
                </div>
                <div data-aos='fade-right' className='max-w-9/10 p-8 space-y-4 mx-auto'>
                    <FiSmartphone className='text-3xl text-blue-500 mb-10 mx-auto lg:mx-0'/>
                    <h3 className='text-2xl font-bold uppercase'>Mobile App</h3>
                    <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo porro nihil eaque officia?</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Service