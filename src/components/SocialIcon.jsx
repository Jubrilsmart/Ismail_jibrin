import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { GrMail } from 'react-icons/gr'

function SocialIcon({ className }) {
  return (
    <div className={className}>
        <div className="text-gray-500/50 dark:text-gray-50/40 lg:text-3xl">
            <div>
                <a href="#" className="hover:scale-110 hover:text-gray-400 transition"><GrMail />
                    <span className='text-xs text-blue-500'>
                        Jubrilsmart1@gmail.com
                    </span></a>
            </div>
            <div className='flex justify-center flex-wrap lg:justify-start gap-4'>
                <a href="#" className="hover:scale-110 hover:text-gray-400 transition"><FaFacebook /></a>
                <a href="#" className="hover:scale-110 hover:text-gray-400 transition"><FaX /></a>
                <a href="#" className="hover:scale-110 hover:text-gray-400 transition"><FaInstagram /></a>
                <a href="#" className="hover:scale-110 hover:text-gray-400 transition"><FaLinkedin /></a>
                <a href="#" className="hover:scale-110 hover:text-gray-400 transition"><FaTwitter /></a>
            </div> 
        </div>
    </div>
    
  )
}

export default SocialIcon