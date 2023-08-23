import { Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { RestaurantCard } from '../../components/RestaurantCard/RestaurantCard'
import { Input } from '../../components/UI/Input/Input'
import { Loader } from '../../components/UI/Loader/Loader'
import { fetchRestaurants } from '../../services/restaurantsService'
import styles from './RestaurantsList.module.css'

export const RestaurantsList = () => {
	const dispatch = useDispatch()

	const loading = useSelector(state => state.restaurants.loading)
	const restaurants = useSelector(state => state.restaurants.items)

	useEffect(() => {
		dispatch(fetchRestaurants())
	}, [dispatch])

	return (
		<div className={styles.RestaurantsList}>
			<Header />
			<Input label={'Поиск по ресторанам и кухням'} />
			<h1>Рестораны в Москве</h1>
			{loading || !restaurants ? (
				<Loader />
			) : restaurants.length === 0 ? (
				<h1>Рестораны не найдены</h1>
			) : (
				<Grid
					container
					direction='row'
					spacing={3}
					style={{ marginBottom: 10 }}
				>
					{restaurants.map((card, index) => {
						return (
							<RestaurantCard
								key={index}
								img={card.img}
								title={card.title}
								foodType={card.foodType}
								readyTime={card.readyTime}
								id={index}
							/>
						)
					})}
				</Grid>
			)}

			<Footer />
		</div>
	)
}
