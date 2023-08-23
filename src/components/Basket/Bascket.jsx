import React from 'react'
import { IoMdCash } from 'react-icons/io'
import { LiaCartArrowDownSolid } from 'react-icons/lia'
import { MdRemoveShoppingCart } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearBascket } from '../../store/basketSlice'
import { Button } from '../UI/Button/Button'
import styles from './Bascket.module.css'
import { BascketItem } from './BascketItem/BascketItem'

export const Bascket = () => {
	const items = useSelector(state => state.bascket.items)
	const token = useSelector(state => state.auth.token)

	const navigate = useNavigate()

	const dispatch = useDispatch()

	const clearBascketHandler = () => {
		dispatch(clearBascket())
	}

	const total = items.reduce((total, item) => {
		total += item.price * item.count
		return total
	}, 0)

	const payHandler = () => {
		if (!token) {
			navigate('/auth')
		}
	}

	return (
		<div className={styles.Bascket}>
			{items.length !== 0 ? (
				items.map((item, index) => {
					return <BascketItem key={index} index={index} />
				})
			) : (
				<div className={styles.empty}>
					<h1>Корзина пуста</h1>
					<LiaCartArrowDownSolid className={styles.img} />
				</div>
			)}
			<div className={styles.buttons}>
				<Button
					type='red'
					onClick={clearBascketHandler}
					disabled={!items.length}
				>
					<MdRemoveShoppingCart />
					Очистить
				</Button>
				<Button type='primary' disabled={!items.length} onClick={payHandler}>
					Оплатить
					<IoMdCash />
					{`${total} ₽`}
				</Button>
			</div>
		</div>
	)
}
