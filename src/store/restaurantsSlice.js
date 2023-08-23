import { createSlice } from '@reduxjs/toolkit'

const restaurantsSlice = createSlice({
	name: 'restaurants',
	initialState: {
		items: [],
		currentRestaurant: {
			restaurant: {},
			dishes: [],
			loading: false,
		},
		loading: false,
	},
	reducers: {
		fetchRestaurantsStart(state) {
			state.loading = true
		},
		fetchRestaurantsSuccess(state, { payload }) {
			state.items = payload
			state.loading = false
		},
		fetchDishesStart(state) {
			state.currentRestaurant.loading = true
		},
		fetchDishesSuccess(state, { payload }) {
			state.currentRestaurant.restaurant = payload.restaurant
			state.currentRestaurant.dishes = payload.dishes
			state.currentRestaurant.loading = false
		},
	},
})

export default restaurantsSlice.reducer
export const {
	fetchRestaurantsStart,
	fetchRestaurantsSuccess,
	fetchDishesStart,
	fetchDishesSuccess,
} = restaurantsSlice.actions
