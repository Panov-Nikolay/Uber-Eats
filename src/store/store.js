import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import basketSlice from './basketSlice'
import restaurantsSlice from './restaurantsSlice'

const rootReducer = combineReducers({
	restaurants: restaurantsSlice,
	bascket: basketSlice,
	auth: authSlice,
})

export const store = configureStore({
	reducer: rootReducer,
})
