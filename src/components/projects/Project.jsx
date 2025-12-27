import React from 'react';
import project2 from '../../assets/projects/landing.png';
import project1 from '../../assets/projects/e-commerce.png'
import project4 from '../../assets/projects/OtpGen.png';
import project5 from '../../assets/projects/Tic-Tac.png';
import project3 from '../../assets/projects/Quote.png';
import project6 from '../../assets/projects/ShoppingApp.png'
import CustomLink from '../CustomLink';

const projects = [
  {  id: 1,
    image: project6,
    title: 'Shopping List App',
    description: 'A Shopping List App built with React, Redux, Tailwind CSS, and Local Storage that supports full CRUD operations. It features modal pop-ups for adding items and clearing the list, with persistent data and a responsive, user-friendly design.',
    url: '/shopping'
  },
  {
    id: 2,
    image: project1,
    title: 'Dummy e-commerce',
    description: 'A sample e-commerce store built to demonstrate product listings, shopping cart functionality, and a smooth checkout flow. Designed for testing, learning, and showcasing UI/UX without real transactions or payments.',    
    url: 'https://clothing-e-commerce-theta.vercel.app/'
  },

  {
    id: 3,
    image: project4,
    title: 'OTP Generator',
    description: 'Sinple and short project that emulate OTP generator with ',
    url: '/pass'
  },
  {
    id: 4,
    image: project5,
    title: 'Tic-Tac-Toe game',
    description: 'This is a game that emulate the popular tic-tac-toe game with players',
    url: '/tic-tac-toe'
  },
{
  id: 5,  
  image: project3,
    title: 'Quote Generator App',
    description: 'A React-based quote app with API integration, background prefetching, dynamic theming, and social sharing.',
    url: '/quote'
  }, 

  {
    id: 6,
    image: project2,
    title: 'Customisable Landing Page',
    description: 'A flexible landing page that lets you customize layout, colors, and content to fit your brand. Designed to look great on all devices and help you capture attention, generate leads, and drive conversions.',
    url: 'https://react-landing-page-sand-one.vercel.app'
  },

 

]

function Project() {
  return (
    <div id='projects' className='bg-light text-dark dark:bg-dark dark:text-light py-20 px-4'>
        <div className='container mx-auto'>
            <div>
                <h2 className='text-3xl font-bold p-2 m-5'>Featured Projects</h2>
            </div>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 items-center'>


              {/* project card */}
              {projects.map((project) => (
                <CustomLink to={project.url}>
                  <div data-aos='fade-out' key={project.id}
                  className=' border border-dark bg-blue-500/20 dark:border-light/50 rounded-lg mx-4 h-130 duration-100'
                  >

                    {/* image section */}
                    <div className='h-60 w-full'>
                        <img src={project.image} alt="" 
                      className='w-full h-full object-cover rounded-t-lg'
                      />
                    </div>

                    {/* text section  */}
                    <div className='p-5'>
                      <h3 className='text-3xl text-blue-500 font-bold mb-5'>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                </div> 
                </CustomLink>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Project