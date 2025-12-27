import React, { useState } from 'react'
import { FaBars, } from 'react-icons/fa'
import { FaGithub, FaXmark } from 'react-icons/fa6';
import DarkMode from '../DarkMode';



function Navbar({ isMenuOpen, setIsMenuOpen }) {

    const links = [
      { name: "Home", href: '#' },
      { name: "Services", href: '#services' },
      { name: "Projects", href: '#projects' },
      { name: "Contact", href: '#contact' },
    ];
    
  return (
    <div className='w-full dark:bg-black dark:text-white bg-white text-gray-900'>
        <div className=''>
            <div className='pt-10 p-4 flex justify-between '>
                <div className='font-serif text-2xl text-primary'>I.J</div>
                <div className='hidden sm:block'>
                    <ul className='flex gap-4'>
                        {links.map((link) =>
                            <li key={link.name} className='text-xl mb-4 hover:text-gray-400 hover:bg-blue-500/10'><a href={link.href}>{link.name}</a></li>
                        )}
                    </ul>
                </div>
                <div className='flex'>
                        <a 
                        href="https://github.com/jubrilsmart" 
                        target='_blank'
                        >
                            <FaGithub className='mr-4'/>
                        </a>
                        <DarkMode className='mr-4 hover:cursor-pointer'/> 
                
                    <div className='relative flex text-xl sm:hidden'>
                            
                        {/* Hamburger and x icon */}
                        {isMenuOpen ? <FaXmark onClick={() => setIsMenuOpen(!isMenuOpen)}/> : <FaBars
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        />}
                        
                   
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar