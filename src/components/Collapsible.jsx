import React from 'react';
import HeroImg from '../assets/contact/swappy-20251223-200642.png';
import { HiBriefcase, HiFolder, HiHome, HiMail } from 'react-icons/hi';


const links = [
  { name: "Home", icon: <HiHome className='inline-block mr-4'/>, href: '#' },
  { name: "Services", icon: <HiBriefcase className='inline-block mr-4'/>, href: '#services' },
  { name: "Projects", icon: <HiFolder className='inline-block mr-4'/>, href: '#projects' },
  { name: "Contact", icon: <HiMail className='inline-block mr-4'/>, href: '#contact' },
];

function Collapsible({ className }) {
  return (
    <div className={className}>
        <div className='absolute w-full top-0 z-10 md:hidden px-10 py-2 bg-blue-300'>
            <img src={HeroImg} alt="" className='size-20 rounded-full mb-4 mx-auto'/>
            {/* Mobile Navigation menu */}
            <ul className='text-black text-xl dark:text-gray-50 z-10 flex flex-col justify-center w-fit mx-auto'>
                {links.map((link) =>
                    <li key={link.name} className='text-xl mb-4 mr-3 hover:text-gray-400 hover:bg-blue-500/10'>
                        <a href={link.href} >
                            {link.icon}{link.name}
                        </a>
                    </li>
                )}
            </ul>
        </div>
    </div>
  )
}

export default Collapsible