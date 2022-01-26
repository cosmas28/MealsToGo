import * as React from 'react'
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native'
import {ThemeProvider} from "styled-components/native"
import {useFonts as useOswald, Oswald_400Regular} from '@expo-google-fonts/oswald'
import {useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato'

import RestaurantCard from './src/components/RestaurantCard'
import { theme } from './src/infrastructure/theme';

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

const RestaurantList = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.bg.secondary};
  width: 100%;
  padding: ${({theme}) => theme.space[3]};
`

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
      <StyledSafeArea>
        <SearchBarWrapper><Searchbar placeholder="Search" onChangeText={setSearchQuery} value={searchQuery}/></SearchBarWrapper>
        <RestaurantList><RestaurantCard/></RestaurantList>
      </StyledSafeArea>
    </ThemeProvider>
  );
}

