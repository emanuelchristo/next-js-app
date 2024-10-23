import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Navbar = () => {
	return (
		<nav className='nav-bar'>
			<NavLink href='/'>Home</NavLink>
			<NavLink href='/following'>Following</NavLink>
			<NavLink href='/contact'>Contact Us</NavLink>
		</nav>
	)
}

const NavLink = ({ href, children }) => {
	const router = useRouter()
	const isActive = router.asPath === href
	return (
		<Link href={href} className={isActive ? 'nav-link-active' : ''}>
			{children}
		</Link>
	)
}
