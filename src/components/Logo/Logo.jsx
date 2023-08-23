import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Logo.module.css'

const scrollTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}

export const Logo = ({ src }) => {
	return (
		<div className={styles.Logo}>
			<Link to={'/'} onClick={scrollTop}>
				<img src={src} alt='Uber Eats' />
			</Link>
		</div>
	)
}
