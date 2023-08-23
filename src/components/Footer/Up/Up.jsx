import React from 'react'
import { BASE_URL } from '../../../db'
import styles from './Up.module.css'

const scrollTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}

export const Up = () => {
	return (
		<img
			className={styles.Up}
			src={`${BASE_URL}/assets/btn-up.png`}
			alt='up'
			onClick={scrollTop}
		/>
	)
}
