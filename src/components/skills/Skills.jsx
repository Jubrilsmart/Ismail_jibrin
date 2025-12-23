import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { BiLogoJavascript } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import { DiCss3, DiPython, DiReact } from 'react-icons/di'
import { ImGit } from 'react-icons/im'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiFlask, SiRedux } from 'react-icons/si'
import Slider from 'react-slick'


const Skills = () => {
    const skills =  [
        {icon: <AiFillHtml5 className='mx-auto' />, title: 'HTML5'},
        {icon: <DiCss3 className='mx-auto' />, title: 'CSS'},
        {icon: <BiLogoJavascript className='mx-auto'/>, title: 'Javascript'},
        {icon: <DiReact className='mx-auto'/>, title: 'ReactJs'},
        {icon: <RiTailwindCssFill className='mx-auto' />, title: 'Tailwindcss'},
        {icon: <ImGit className='mx-auto' />, title: 'Git'},
        {icon: <BsGithub className='mx-auto' />, title: 'Github'},
        {icon: <SiRedux className='mx-auto' />, title: 'Redux'},
        {icon: <DiPython className='mx-auto' />, title: 'Python'},
        {icon: <SiFlask className='mx-auto' />, title: 'Flask'},
        ];

        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
  return (
    <div className='bg-light dark:bg-dark text-dark dark:text-light px-6'>
        <div className='container mx-auto'>
            <div>
                <h2 className='text-3xl font-bold pb-10'>Skills</h2>
            </div>
            <div>
                <Slider {...settings}>
                {skills.map((skill) => (
                    <div key={skill.title} className='text-5xl text-center mx-auto'>
                        {skill.icon}
                        <p className='text-xl'>{skill.title}</p>
                    </div>
                ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Skills