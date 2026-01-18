import React from 'react'
import { BsTwitterX, BsWhatsapp } from 'react-icons/bs'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'

function SocialIcon({ className }) {
  return (
    <div className={className}>
        <div className="text-gray-500/50 dark:text-gray-50/40 lg:text-3xl space-y-4">
            <div className='space-y-2'>
                <a href="#" className="hover:scale-110 hover:text-gray-400 transition flex items-center group">
                    <GrMail className='inline-block mr-2'/>
                    <span className='text-[12px] sm:text-xl text-blue-500 flex flex-wrap'>
                         <span>Jubrilsmart1</span><span>@gmail.com</span>
                    </span>
                </a>
                <a href="" className="hover:scale-110 hover:text-gray-400 transition flex items-center group">
                    <BsWhatsapp className='inline-block mr-2'/>
                    <span className='text-[15px] sm:text-xl text-blue-500'>
                        +234-9060-245-245
                    </span>
                </a>
            </div>
            <div className='flex flex-wrap lg:justify-start gap-4'>
                <a href="#" className="hover:scale-110 hover:text-gray-400 transition"><FaFacebook /></a>
                <a href="#" className="hover:scale-110 hover:text-gray-400 transition"><BsTwitterX /></a>
                <a href="#" className="hover:scale-110 hover:text-gray-400 transition"><FaInstagram /></a>
                <a href="#" className="hover:scale-110 hover:text-gray-400 transition"><FaLinkedin /></a>
            </div> 
        </div>
    </div>
    
  )
}

export default SocialIcon