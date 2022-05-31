import * as React from 'react'
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native'
import {ThemeProvider} from "styled-components/native"
import {useFonts as useOswald, Oswald_400Regular} from '@expo-google-fonts/oswald'
import {useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato'
import { FlatList } from 'react-native'

import RestaurantCard from './src/components/RestaurantCard'
import { Spacer } from  './src/components/Spacer'
import { theme } from './src/infrastructure/theme';
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

const StyledSafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.bg.primary};
  align-items: center;
  justify-content: center;
`

const SearchBarWrapper = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  width: 100%;
  padding: ${({theme}) => theme.space[3]}; 
`

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  })
  const [latoLoaded] = useLato({
    Lato_400Regular,
  })

  const [searchQuery, setSearchQuery] = React.useState('')
  if(!oswaldLoaded || !latoLoaded) {
    return null
  }
  return (
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
    </ThemeProvider>
  );
}

