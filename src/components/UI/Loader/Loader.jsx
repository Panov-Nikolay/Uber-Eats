import React from 'react'
import styles from './Loader.module.css'

export const Loader = () => {
	return (
		<div className={styles.Loader}>
			<div className={styles.ldsRing}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}
