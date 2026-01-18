import React from 'react'
import IMG from '../../assets/contact/swappy-20251223-200642.png'

function Contact() {
  return (
    <div id='contact' className='bg-light text-dark dark:bg-dark dark:text-light px-6 pb-20 w-screen'>
        <div className='container mx-auto'>
            <div data-aos='fade-in'>
                <h2 id='contact'
                className='text-3xl font-bold pb-5 pt-20 pl-4 lg:pl-0'
                >Contact</h2>
            </div>
            <div data-aos='fade-left' className='md:grid md:grid-cols-[2fr_1fr]'>
                <div>
                    <img src={IMG} alt="" className='size-50 object-cover rounded-full mx-auto'/>
                    <p className='pt-6 text-xl'>I am currently open to part-time, contract and full time opportunity in Front End Development</p>
                </div>
                <form data-aos='fade-right' className='space-y-6'>
                    <h3 className='text-2xl font-semibold mt-10 lg:mt-0'>Let me call you!</h3>
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
                    <textarea type="text" placeholder='Enter message' 
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