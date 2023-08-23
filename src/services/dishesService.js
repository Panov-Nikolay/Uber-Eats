import { DATA } from '../db'
import { fetchDishesStart, fetchDishesSuccess } from '../store/restaurantsSlice'

export function fetchDishes(id) {
	const { title, foodType, readyTime, dishes } = DATA[id]
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				restaurant: {
					title,
					foodType,
					readyTime,
				},
				dishes,
			})
		}, 1000)
	})

	return async dispatch => {
		dispatch(fetchDishesStart())
		try {
			promise.then(data => {
				dispatch(fetchDishesSuccess(data))
			})
		} catch (error) {
			console.log(error)
		}
	}
}
