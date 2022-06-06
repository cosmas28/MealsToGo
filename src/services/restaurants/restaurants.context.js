import React from 'react'
import {restaurantsRequest, restaurantsTransform} from './restaurants.service'

export const RestaurantContext = React.createContext()

export const RestaurantContextProvider = ({ children }) => {
	const [restaurants, setRestaurants] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(false)
	const [error, setError] = React.useState(null)

	const retrieveRestaurants = () => {
		setIsLoading(true)
		setTimeout(() => {
			restaurantsRequest().then(restaurantsTransform).then((results) => {
				setIsLoading(false)
				setRestaurants(results)
			}).catch((error) => {
				setIsLoading(false)
				setError(error)
			})
		}, 2000);
	}
	React.useEffect(() => {
		retrieveRestaurants()
	}, [])

	return (
		<RestaurantContext.Provider value={{
				restaurants,
				isLoading,
				error
			}}
		>
			{children}
		</RestaurantContext.Provider>
	)
}
