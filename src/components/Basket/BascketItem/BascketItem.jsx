import React, { useState } from 'react'
import { IoCloseCircle } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem } from '../../../store/basketSlice'
import { Counter } from '../../UI/Counter/Counter'
import styles from './BascketItem.module.css'

export const BascketItem = ({ index }) => {
	const dispatch = useDispatch()

	const { img, title, price, count } = useSelector(
		state => state.bascket.items[index]
	)

	const [classes, setClasses] = useState([styles.BascketItem])

	const deleteHandler = () => {
		dispatch(deleteItem(index))
	}

	const setDeleteStyle = () => {
		setClasses([styles.BascketItem, styles.del])
	}
	const removeDeleteStyle = () => {
		setClasses([styles.BascketItem])
	}

	return (
		<div className={classes.join(' ')}>
			<div>
				<img src={img} />
				<div>
					<h4>{title}</h4>
					<div>
						<Counter index={index} />
						{`${price * count} ₽`}
					</div>
				</div>
			</div>
			<IoCloseCircle
				className={styles.delete}
				onClick={deleteHandler}
				onMouseEnter={setDeleteStyle}
				onMouseLeave={removeDeleteStyle}
			/>
		</div>
	)
}
