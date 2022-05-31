import * as React from 'react'
import {Text} from 'react-native'
import {ThemeProvider} from "styled-components/native"
import {useFonts as useOswald, Oswald_400Regular} from '@expo-google-fonts/oswald'
import {useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons'

import { theme } from './src/infrastructure/theme';
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { StyledSafeArea } from './src/components/utility/safe-area.component'

const Tab = createBottomTabNavigator()

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

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  })
  const [latoLoaded] = useLato({
    Lato_400Regular,
  })

  if(!oswaldLoaded || !latoLoaded) {
    return null
  }
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Restaurants'
          screenOptions={{
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray'
          }}
        >
          <Tab.Screen
            name='Restaurants'
            component={RestaurantsScreen}
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
    </ThemeProvider>
  );
}

