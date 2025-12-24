import SocialIcon from "../SocialIcon";


function Footer() {
    const links = [
      { name: "Home", href: '#' },
      { name: "Services", href: '#services' },
      { name: "Projects", href: '#projects' },
      { name: "Contact", href: '#contact' },
    ];
    
  return (
    <footer className='bg-light dark:bg-dark text-dark text-xl dark:text-light px-6 pb-20 pt-4'>
        <div className='container mx-auto grid grid-cols-[1fr_auto_2fr] lg:grid-cols-3 gap-4 lg:gap-6'>
            <p><span className='font-serif font-bold text-2xl pr-10'>I.J</span> 2025. All rights reserved</p>
            <div className='w-fit0 mx-auto'>
                <ul className='z-10'>
                    {links.map((link) =>
                        <li key={link.name} className='text-xl mb-4 hover:text-gray-400 hover:bg-blue-500/10'><a href={link.href}>{link.name}</a></li>
                    )}
                </ul>
            </div>
            <SocialIcon />
        </div>
    </footer>
  )
}

export default Footer