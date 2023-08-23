import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../store/authSlice'
import { Bascket } from '../Basket/Bascket'
import { Logo } from '../Logo/Logo'
import { Button } from '../UI/Button/Button'
import styles from './Header.module.css'

export const Header = () => {
	const [withBasket, setWithBasket] = useState([styles.Header])

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const token = useSelector(state => state.auth.token)

	const toggleBascketHandler = () => {
		if (withBasket.length === 1) {
			setWithBasket([styles.Header, styles.withBascket])
		} else {
			setWithBasket([styles.Header])
		}
	}
	const loginHandler = () => {
		navigate('/auth')
	}
	const profileHandler = () => {
		dispatch(logout())
	}
	return (
		<div className={withBasket.join(' ')}>
			<nav className={styles.nav}>
				<Logo src='/assets/logo.png' />
				<div className={styles.login}>
					{!!token ? (
						<Button onClick={profileHandler} type='red'>
							Выйти
						</Button>
					) : (
						<Button type='primary' onClick={loginHandler}>
							Войти
						</Button>
					)}

					<div className={styles.bascket} onClick={toggleBascketHandler}>
						<img src='/assets/basket@2x.png' />
					</div>
				</div>
			</nav>
			<Bascket />
		</div>
	)
}
