import React from 'react'
import styles from './Up.module.css'

const scrollTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
}

export const Up = () => {
	return (
		<img className={styles.Up} src='/src/assets/btn-up.png' alt='up' onClick={scrollTop}/>
	)
}
