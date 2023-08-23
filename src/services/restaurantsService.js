import { DATA } from '../db'
import {
	fetchRestaurantsStart,
	fetchRestaurantsSuccess,
} from '../store/restaurantsSlice'

export function fetchRestaurants() {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(DATA)
		}, 1000)
	})

	return async dispatch => {
		dispatch(fetchRestaurantsStart())
		try {
			promise.then(data => {
				dispatch(fetchRestaurantsSuccess(data))
			})
		} catch (error) {
			console.log(error)
		}
	}
}
