import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		token: null,
	},
	reducers: {
		authSuccess(state, action) {
			state.token = action.payload
		},
		logout(state) {
			state.token = null
			localStorage.removeItem('token')
			localStorage.removeItem('userId')
			localStorage.removeItem('expirationDate')
		},
	},
})

export default authSlice.reducer
export const { logout, authSuccess } = authSlice.actions
