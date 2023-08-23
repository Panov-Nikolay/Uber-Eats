import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Auth } from './pages/Auth/Auth'
import { DishesList } from './pages/DishesList/DishesList'
import { RestaurantsList } from './pages/RestaurantsList/RestaurantsList'
import { autoLogin } from './services/authService'

function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(autoLogin())
	}, [])
	const routes = (
		<Routes>
			<Route path='/Uber-Eats/' Component={RestaurantsList} />
			<Route path={'/Uber-Eats/restaurants/:id'} Component={DishesList} />
			<Route path={'/Uber-Eats/auth'} Component={Auth} />
		</Routes>
	)

	return <>{routes}</>
}

export default App
