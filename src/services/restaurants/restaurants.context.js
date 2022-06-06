import React from 'react'

export const RestaurantContext = React.createContext()

export const RestaurantContextProvider = ({ children }) => {
	return (
		<RestaurantContext.Provider value={{ restaurants: [
			{ name: 1 },
			{ name: 2 },
			{ name: 3 },
		]}}>
			{children}
		</RestaurantContext.Provider>
	)
}
