import React from 'react'
import { Text } from "react-native";
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import {RestaurantsScreen} from '../../features/restaurants/screens/restaurants.screen'
import {StyledSafeArea} from '../../components/utility/safe-area.component'
import {RestaurantDetailScreen} from '../../features/restaurants/screens/restaurant-detail.screen'

const RestaurantStack = createStackNavigator()

export const RestaurantsNavigator = () => {
	return (
		<RestaurantStack.Navigator
			initialRouteName="Restaurant"
			screenOptions={{ ...TransitionPresets.ModalPresentationIOS, headerMode: 'none' }}
		>
			<RestaurantStack.Screen
				name="Restaurant"
				component={RestaurantsScreen}
			/>
			<RestaurantStack.Screen
				name="RestaurantDetail"
				component={RestaurantDetailScreen}
			/>
		</RestaurantStack.Navigator>
	)
}
