import React from 'react'
import {restaurantsRequest, restaurantsTransform} from './restaurants.service'
import {LocationContext} from '../location/location.context'

export const RestaurantContext = React.createContext()

export const RestaurantContextProvider = ({ children }) => {
	const [restaurants, setRestaurants] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(false)
	const [error, setError] = React.useState(null)
	const { location } = React.useContext(LocationContext)

	const retrieveRestaurants = (loc) => {
		setIsLoading(true)
		setRestaurants([])
		setTimeout(() => {
			restaurantsRequest(loc).then(restaurantsTransform).then((results) => {
				setIsLoading(false)
				setRestaurants(results)
			}).catch((error) => {
				setIsLoading(false)
				setError(error)
			})
		}, 2000);
	}
	React.useEffect(() => {
		if (location) {
			const locationString = `${location.lat},${location.lng}`
			retrieveRestaurants(locationString)
		}
	}, [location])

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
