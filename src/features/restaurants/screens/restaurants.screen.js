import * as React from 'react'
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native'
import { FlatList } from 'react-native'

import RestaurantCard from '../../../components/RestaurantCard'
import { Spacer } from  '../../../components/Spacer/'

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

export const RestaurantsScreen = () => {
	const [searchQuery, setSearchQuery] = React.useState('')

  return (
    <StyledSafeArea>
			<SearchBarWrapper><Searchbar placeholder="Search" onChangeText={setSearchQuery} value={searchQuery}/></SearchBarWrapper>
			<RestaurantList
				data={[
					{ name: 1 },
					{ name: 2 },
					{ name: 3 },
					{ name: 4 },
					{ name: 5 },
					{ name: 6 },
					{ name: 7 },
					{ name: 8 },
					{ name: 9 },
					{ name: 10 },
					{ name: 11 },
					{ name: 12 },
					{ name: 13 },
					{ name: 14 },
				]}
				keyExtractor={item => item.name}
				renderItem={() => (
					<Spacer position="bottom" size="large"><RestaurantCard/></Spacer>
				)}
			/>
		</StyledSafeArea>
  );
}

