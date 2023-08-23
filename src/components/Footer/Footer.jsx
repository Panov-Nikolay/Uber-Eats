import React from 'react'
import { Logo } from '../Logo/Logo'
import { AppStores } from './AppStores/AppStores'
import { Copyright } from './Copyright/Copyright'
import styles from './Footer.module.css'
import { Info } from './Info/Info'
import { Up } from './Up/Up'



export const Footer = () => {
	return (
		<div className={styles.Footer}>
			<Logo src='/src/assets/white-logo.png'/>
			<hr />
			<Info />
			<hr />
			<AppStores />
			<hr />
			<Copyright />
			<Up />
		</div>
		
	)
}
