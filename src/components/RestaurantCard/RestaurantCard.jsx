import { Grid } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './RestaurantCard.module.css'

export const RestaurantCard = ({ title, foodType, readyTime, img, id }) => {
	return (
		<Grid item lg={4} md={4} sm={12} xs={12}>
			<Link to={`/restaurants/${id}`}>
				<div className={styles.RestaurantCard}>
					<img src={img} alt='' />
					<h2 className={styles.text}>{title}</h2>
					<h3 className={styles.text}>{foodType}</h3>
					<h4 className={styles.text}>{readyTime}</h4>
				</div>
			</Link>
		</Grid>
	)
}
