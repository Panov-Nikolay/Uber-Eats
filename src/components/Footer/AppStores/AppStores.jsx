import React from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../../db'
import styles from './AppStores.module.css'

export const AppStores = () => {
	return (
		<div className={styles.AppStores}>
			<Link>
				<img src={`${BASE_URL}/assets/appstore.png`} alt='appstore' />
			</Link>
			<Link>
				<img src={`${BASE_URL}/assets/googleplay.png`} alt='googleplay' />
			</Link>
		</div>
	)
}
