import React from 'react'
import styles from './Menu.module.css'

export const Menu = ({ setFoodType, foodTypes }) => {
	return (
		<div className={styles.Menu}>
			{foodTypes.map((type, index) => {
				return (
					<h3
						onClick={() => setFoodType(foodTypes[index])}
						className={styles.item}
						key={index}
					>
						{type}
					</h3>
				)
			})}
		</div>
	)
}
