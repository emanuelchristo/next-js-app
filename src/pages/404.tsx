import React from 'react'
import Link from 'next/link'

const NotFound = () => {
	return (
		<div className='not-found-page'>
			<span>Oops! You are lost</span>
			<Link href='/'>Go to Home</Link>
		</div>
	)
}

export default NotFound
