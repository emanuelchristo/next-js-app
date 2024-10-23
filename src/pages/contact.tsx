import React from 'react'
import Link from 'next/link'

const ContactPage = () => {
	return (
		<div className='not-found-page'>
			<span>Get in touch</span>
			<Link href='mailto:tom@jerry.com'>tom@jerry.com</Link>
		</div>
	)
}

export default ContactPage
