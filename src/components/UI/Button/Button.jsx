import React from 'react'
import styles from './Button.module.css'

export const Button = ({ children, type, onClick, disabled }) => {
	const classes = [styles.Button, styles[type]]

	return (
		<button className={classes.join(' ')} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	)
}
