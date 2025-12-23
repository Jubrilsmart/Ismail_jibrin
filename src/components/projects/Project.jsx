import React from 'react';
import project1 from '../../assets/projects/book1.jpeg'

const projects = [
  {
    id: 1,
    image: project1,
    title: 'Lorem ipsum dolor sit.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nostrum magni. Adipisci quod molestiae obcaecati similique! Officia omnis labore placeat?'
  },
  {
    id: 2,
    image: project1,
    title: 'Lorem ipsum dolor sit.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nostrum magni. Adipisci quod molestiae obcaecati similique! Officia omnis labore placeat?'
  },
  {
    id: 3,
    image: project1,
    title: 'Lorem ipsum dolor sit.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nostrum magni. Adipisci quod molestiae obcaecati similique! Officia omnis labore placeat?'
  },
  {
    id: 4,
    image: project1,
    title: 'Lorem ipsum dolor sit.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nostrum magni. Adipisci quod molestiae obcaecati similique! Officia omnis labore placeat?'
  },
{
  id: 5,  
  image: project1,
    title: 'Lorem ipsum dolor sit.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nostrum magni. Adipisci quod molestiae obcaecati similique! Officia omnis labore placeat?'
  },

]

function Project() {
  return (
    <div id='projects' className='bg-light text-dark dark:bg-dark dark:text-light py-20 px-4'>
        <div className='container mx-auto'>
            <div>
                <h2 className='text-3xl font-bold p-2 m-5'>Featured Projects</h2>
            </div>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 items-center'>
              {projects.map((project) => (
                <div key={project.id}
                className=' border border-dark bg-blue-500/20 dark:border-light/50 rounded-lg mx-4'
                >
                  <div className='h-60 w-full'>
                    <a href='#'><img src={project.image} alt="" 
                    className='w-full h-full object-cover rounded-t-lg'
                    /></a>
                  </div>
                  <div className='p-5'>
                    <h3 className='text-3xl text-blue-500 font-bold mb-5'>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Project