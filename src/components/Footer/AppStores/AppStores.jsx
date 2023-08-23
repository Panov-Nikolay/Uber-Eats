import React from 'react'
import { Link } from 'react-router-dom'
import styles from './AppStores.module.css'

export const AppStores = () => {
	return (
		<div className={styles.AppStores}>
			<Link>
				<img src='/public/assets/appstore.png' alt='appstore' />
			</Link>
			<Link>
				<img src='/public/assets/googleplay.png' alt='googleplay' />
			</Link>
		</div>
	)
}
