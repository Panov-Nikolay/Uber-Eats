import { Grid } from '@material-ui/core'
import React from 'react'
import styles from './RestaurantPreview.module.css'

export const RestaurantPreview = ({ title, foodType, readyTime }) => {
	return (
		<Grid item lg={4} md={5} xs={6}>
			<div className={styles.RestaurantPreview}>
				<h1>{title}</h1>
				<div className={styles.description}>
					<h5 className={styles.text}>{foodType}</h5>
					<h5 className={[styles.readyTime, styles.text].join(' ')}>
						{readyTime}
					</h5>
				</div>
			</div>
		</Grid>
	)
}
