import React from 'react';
import SocialIcon from '../SocialIcon';

function Footer() {
    const links = ['Home', 'Services', 'Experience', 'Skils', 'Contact'];
  return (
    <footer className='bg-light dark:bg-dark text-dark text-xl dark:text-light px-6'>
        <div className='container mx-auto grid grid-cols-3 lg:gap-6'>
            <p><span className='font-serif font-bold text-2xl pr-10'>I.J</span> 2025. All rights reserved</p>
            <div className=''>
                {<ul className=' z-10'>
                    {links.map((link) =>
                        <li key={link} className='text-xl mb-4 mr-3 hover:text-gray-400 hover:bg-blue-500/10'><a href="#">{link}</a></li>
                    )}
                </ul>}
            </div>
            <SocialIcon />
            </div>
    </footer>
  )
}

export default Footer