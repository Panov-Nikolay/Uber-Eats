import React from 'react'
import { IoAddCircle, IoRemoveCircle } from 'react-icons/io5'
import { useBascketCounter } from '../../../hooks/useBascketCounter'
import styles from './Counter.module.css'

export const Counter = ({ index }) => {
	const [count, setCount] = useBascketCounter(index)

	return (
		<div className={styles.Counter}>
			<button onClick={() => setCount(count - 1)} disabled={count <= 1}>
				<IoRemoveCircle />
			</button>
			{count}
			<button onClick={() => setCount(count + 1)}>
				<IoAddCircle />
			</button>
		</div>
	)
}
