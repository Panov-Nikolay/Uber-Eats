import { createSlice } from '@reduxjs/toolkit'

const bascketSlice = createSlice({
	name: 'bascket',
	initialState: {
		items: JSON.parse(localStorage.getItem('bascket')) || [],
	},
	reducers: {
		addItem(state, { payload }) {
			if (state.items.some(item => item.id === payload.id)) {
				return
			}
			state.items.push(payload)
			localStorage.setItem('bascket', JSON.stringify(state.items))
		},
		setItemCount(state, { payload }) {
			state.items[payload.index].count = payload.count
		},
		deleteItem(state, { payload }) {
			state.items = state.items.filter((item, index) => index !== payload)
			localStorage.setItem('bascket', JSON.stringify(state.items))
		},
		clearBascket(state) {
			state.items = []
			localStorage.removeItem('bascket')
		},
	},
})
export default bascketSlice.reducer
export const { addItem, deleteItem, setItemCount, clearBascket } =
	bascketSlice.actions
