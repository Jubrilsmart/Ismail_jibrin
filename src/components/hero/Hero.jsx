import React from 'react';
import { GrMail } from 'react-icons/gr';
import Collapsible from '../Collapsible';
import { BiDownload } from 'react-icons/bi';

function Hero({ isMenuOpen, setIsMenuOpen }) {
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

			<button className="bg-blue-500 px-6 py-2 rounded-lg text-lg md:text-xl hover:bg-blue-700 duration-200 hover:cursor-pointer active:bg-gray-500">
				<a href="/Ismail_Jibrin_Frontend_Developer_Resumee.pdf" target='_blank' download="Ismail_Jibrin_Resume.pdf">
					<BiDownload className='inline-block mr-2'/>
					Resume
				</a>
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
	  {isMenuOpen && (
		<>
			<Collapsible />
			<div 
			onClick={() => setIsMenuOpen(false)}
			className='w-full h-screen absolute'></div>
		</>
		)}
    </section>
  )
}

export default Hero
