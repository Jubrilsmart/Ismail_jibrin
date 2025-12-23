import React from 'react';
import HeroImg from '../../assets/hero/her01.png';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram, FaLinkedin, FaTwitter, FaX } from 'react-icons/fa6';
import { GrMail } from 'react-icons/gr';
import Collapsible from '../Collapsible';

function Hero({ isMenuOpen }) {
  return (
    <section className="bg-light dark:bg-dark text-dark dark:text-light relative">
      <div className="container mx-auto px-4 py-10 lg:pb-36 ">
		<div data-aos='fade-up' className='flex flex-col-reverse gap-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-20 mb-10'>
			{/* Text content */}
			<div className="text-center lg:text-left space-y-4 lg:p-10">
			<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
				Hi, I am <span className="text-blue-500">Ismail Jibrin</span>
			</h1>

			<p className="text-lg md:text-2xl lg:text-3xl  ">
				A seasoned Frontend Developer transforming ideas into stunning reality
			</p>

			<button className="bg-blue-500 px-6 py-2 rounded-lg text-lg md:text-xl hover:bg-blue-700 transition">
				Hire Me
			</button>
			</div>
			
			{/* Image */}
			{/* <div className="flex justify-center">
			<img
				src={HeroImg}
				alt="Hero"
				className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
			/>
			</div> */}
		</div>
      </div>
	  {isMenuOpen && <Collapsible />}
    </section>
  )
}

export default Hero
