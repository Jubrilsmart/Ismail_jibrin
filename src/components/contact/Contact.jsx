import React from 'react'
import IMG from '../../assets/projects/Colourful-pen-216053-pixahive.jpg'

function Contact() {
  return (
    <div id='contact' className='bg-light text-dark dark:bg-dark dark:text-light px-6 pb-20'>
        <div className='container mx-auto'>
            <div>
                <h2 id='contact'
                className='text-3xl font-bold pb-5 pt-20 pl-4 lg:pl-0'
                >Contact</h2>
            </div>
            <div className='md:grid md:grid-cols-[2fr_1fr]'>
                <div>
                    <img src={IMG} alt="" className='size-50 object-cover rounded-full mx-auto'/>
                    <p className='pt-6'>I am currently open to part-time, contract and full time opportunity in Front End Development</p>
                </div>
                <form className='space-y-6'>
                    <h3>Let me call you!</h3>
                    <div className='flex gap-8'>
                        <input type="text" placeholder='Your name' 
                        className='p-2 border rounded-md focus:border-red-500 bg-white dark:text-dark w-full'
                        />
                        <input type="number" placeholder='Your number' 
                        className='p-2 border rounded-md focus:border-red-500 bg-white dark:text-dark w-full'
                        />
                    </div>
                    <input type="email" placeholder='Your Email' 
                    className='block p-2 border w-full rounded-md bg-white dark:text-dark'
                    />
                    <input type="text" placeholder='Enter message' 
                    className='p-2 border rounded-md focus:border-red-500 bg-white dark:text-dark h-20 w-full'
                    />
                    <button type='submit'
                    className='px-4 py-1 border rounded-md bg-blue-500 text-white hover:cursor-pointer hover:bg-blue-800'
                    onClick={() => alert('Currently unavailable, please use the social icon')}
                    >Submit</button>
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default Contact