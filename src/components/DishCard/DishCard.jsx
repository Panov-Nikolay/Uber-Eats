import { Grid } from '@material-ui/core'
import React from 'react'
import { IoBagAddSharp } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { addItem } from '../../store/basketSlice'
import styles from './DishCard.module.css'

export const DishCard = ({ id, title, description, price, img }) => {
	const dispatch = useDispatch()

	const addToDascketHandler = () => {
		dispatch(
			addItem({
				id,
				img,
				title,
				price,
				count: 1,
			})
		)
	}

	return (
		<Grid item lg={6} md={6} xs={12}>
			<div className={styles.DishCard}>
				<div className={styles.info}>
					<div className={styles.title}>
						<h4 style={{ marginTop: 0 }}>{title}</h4>
						<h5>{description}</h5>
					</div>
					<div className={styles.price}>
						{`${price} ₽`}
						<IoBagAddSharp
							className={styles.addtoBascketButton}
							onClick={addToDascketHandler}
						/>
					</div>
				</div>
				<img src={img} alt='' />
			</div>
		</Grid>
	)
}
