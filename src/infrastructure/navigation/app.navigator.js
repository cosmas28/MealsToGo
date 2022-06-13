import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

import {RestaurantsNavigator} from './restaurants.navigator'
import {StyledSafeArea} from '../../components/utility/safe-area.component'

const Tab = createBottomTabNavigator();

const Settings = () => (
  <StyledSafeArea>
    <Text>Settings</Text>
  </StyledSafeArea>
)

const Map = () => (
  <StyledSafeArea>
    <Text>Map</Text>
  </StyledSafeArea>
)

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
       initialRouteName='Restaurants'
			 screenOptions={{
				 headerShown: false,
				 tabBarActiveTintColor: 'tomato',
				 tabBarInactiveTintColor: 'gray'
			 }}
    >
      <Tab.Screen
				name='Restaurants'
				component={RestaurantsNavigator}
				options={{
					tabBarLabel: 'Restaurants',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='md-restaurant' size={size} color={color} />
					)
				}}
			/>
			<Tab.Screen
				name='Map'
				component={Map}
				options={{
					tabBarLabel: 'Map',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='md-map' size={size} color={color} />
					)
				}}
			/>
			<Tab.Screen
				name='Settings'
				component={Settings}
				options={{
					tabBarLabel: 'Set',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='md-settings' size={size} color={color} />
					)
				}}
			/>
    </Tab.Navigator>
  </NavigationContainer>
);
