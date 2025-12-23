import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa6';

function DarkMode({ className }) {
	// set darkMode to 'true' or 'false', fetch theme localStorage
	const [darkMode, setDarkMode] = useState(() => {
		const stored = localStorage.getItem('theme');
		if (stored !== null) return stored === 'dark';
		return window.matchMedia("(prefers-color-scheme: dark)").matches;
	});

	// toggle dark mode and store result in localStorage
	useEffect(() => {
		const element = document.documentElement
		if (darkMode) {
			element.classList.add('dark')
			localStorage.setItem('theme', 'dark');
		}else {
			element.classList.remove('dark')
			localStorage.setItem('theme', 'light');
		}
	}, [darkMode]);

	const handleToggle = () => {
		setDarkMode((prev) => !prev)
	}

  return (
    <div className={className}>
			{darkMode ? (
				<FaSun className='' onClick={handleToggle}/>
			) : (
				<FaMoon onClick={handleToggle}/>
			)}
    </div>
  )
}

export default DarkMode