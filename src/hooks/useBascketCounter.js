import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setItemCount } from '../store/basketSlice'

export const useBascketCounter = index => {
	const dispatch = useDispatch()

	const initialValue = useSelector(state => state.bascket.items[index].count)

	const [count, setCount] = useState(initialValue)

	useEffect(() => {
		dispatch(setItemCount({ index, count }))
	}, [count])

	return [count, setCount]
}
