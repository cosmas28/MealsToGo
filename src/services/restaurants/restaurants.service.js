import camelize from 'camelize'

import { mocks } from './mock'

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
	return new Promise((resolve, reject) => {
		const mock = mocks[location]
		if (!mock) {
			reject('No restaurant available in this location!')
		}

		resolve(mock)
	})
}

export const restaurantsTransform = ({result = []}) => {
	const mappesResults = results.map((restaurant) => {
		return {
			...restaurant,
			isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
			isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY"
		}
	})
	return camelize(mappesResults)
}
