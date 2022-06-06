import * as React from 'react'
import { Searchbar, ActivityIndicator, Colors } from 'react-native-paper';
import styled from 'styled-components/native'
import { FlatList } from 'react-native'

import RestaurantCard from '../../../components/RestaurantCard'
import { Spacer } from  '../../../components/Spacer/'
import {RestaurantContext} from '../../../services/restaurants/restaurants.context'

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

const Loading = styled(ActivityIndicator)`
	margin-left: -25px;
`;

const LoadingContainer = styled(ActivityIndicator)`
	position: absolute;
	top: 50%;
	left: 50%;
`

export const RestaurantsScreen = () => {
	const [searchQuery, setSearchQuery] = React.useState('')
	const {restaurants, isLoading} = React.useContext(RestaurantContext)

  return (
    <StyledSafeArea>
			<SearchBarWrapper><Searchbar placeholder="Search" onChangeText={setSearchQuery} value={searchQuery}/></SearchBarWrapper>
			{
				isLoading && (
					<LoadingContainer>
							<Loading size={50} animating={true} color={Colors.blue300} />
					</LoadingContainer>
				)
			}
			<RestaurantList
				data={restaurants}
				keyExtractor={item => item.name}
				renderItem={({item}) => (
					<Spacer position="bottom" size="large"><RestaurantCard restaurant={item} /></Spacer>
				)}
			/>
		</StyledSafeArea>
  );
}

