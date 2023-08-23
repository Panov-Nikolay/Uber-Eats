import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { DishCard } from '../../components/DishCard/DishCard'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { RestaurantPreview } from '../../components/RestaurantPreview/RestaurantPreview'
import { Loader } from '../../components/UI/Loader/Loader'
import { Menu } from '../../components/UI/Menu/Menu'
import { fetchDishes } from '../../services/dishesService'
import styles from './DishesList.module.css'

export const DishesList = () => {
	const foodTypes = [
		'Закуски',
		'Салаты',
		'Супы',
		'Горячие блюда',
		'Гарниры',
		'Десерты',
	]

	const dispatch = useDispatch()
	const params = useParams()

	const [foodType, setFoodType] = useState(foodTypes[0])

	const loading = useSelector(
		state => state.restaurants.currentRestaurant.loading
	)
	const dishes = useSelector(state =>
		state.restaurants.currentRestaurant.dishes.filter(
			dish => dish.type === foodType
		)
	)
	const restaurant = useSelector(
		state => state.restaurants.currentRestaurant.restaurant
	)

	useEffect(() => {
		dispatch(fetchDishes(params.id))
	}, [dispatch])

	const setFoodTypeHandler = type => {
		setFoodType(type)
	}

	return (
		<div className={styles.DishesList}>
			<Header />
			<div className={styles.preview}>
				<RestaurantPreview
					title={restaurant.title}
					foodType={restaurant.foodType}
					readyTime={restaurant.readyTime}
				/>
			</div>
			<Menu foodTypes={foodTypes} setFoodType={setFoodTypeHandler} />
			<h1>{foodType}</h1>
			{loading || !dishes ? (
				<Loader />
			) : dishes.length === 0 ? (
				<h1>Меню пусто</h1>
			) : (
				<Grid
					container
					direction='row'
					spacing={3}
					style={{ marginBottom: 10 }}
				>
					{dishes.map(dish => {
						return (
							<DishCard
								key={dish.id}
								id={dish.id}
								img={dish.img}
								title={dish.title}
								description={dish.description}
								price={dish.price}
							/>
						)
					})}
				</Grid>
			)}

			<Footer />
		</div>
	)
}
