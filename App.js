import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native'

import RestaurantCard from './src/components/RestaurantCard'

const StyledSafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

const SearchBarWrapper = styled.View`
  background-color: green;
  width: 100%;
  padding: 10px;
`

const RestaurantList = styled.View`
  flex: 1;
  background-color: blue;
  width: 100%;
  padding: 10px;
`

export default function App() {
  [searchQuery, setSearchQuery] = React.useState('')
  return (
    <StyledSafeArea>
      <SearchBarWrapper><Searchbar placeholder="Search" onChangeText={setSearchQuery} value={searchQuery}/></SearchBarWrapper>
      <RestaurantList><RestaurantCard/></RestaurantList>
    </StyledSafeArea>
  );
}

