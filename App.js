import * as React from 'react'
import 'react-native-gesture-handler';
import {ThemeProvider} from "styled-components/native"
import {useFonts as useOswald, Oswald_400Regular} from '@expo-google-fonts/oswald'
import {useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato'

import { theme } from './src/infrastructure/theme';
import {AppNavigator} from './src/infrastructure/navigation/app.navigator'
import {RestaurantContextProvider} from './src/services/restaurants/restaurants.context'
import {LocationProvider} from './src/services/location/location.context'

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
      <LocationProvider>
        <RestaurantContextProvider>
          <AppNavigator/>
        </RestaurantContextProvider>
      </LocationProvider>
    </ThemeProvider>
  );
}
