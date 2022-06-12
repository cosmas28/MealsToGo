import * as React from 'react'
import { ActivityIndicator, Colors } from 'react-native-paper';
import styled from 'styled-components/native'
import { FlatList } from 'react-native'

import RestaurantCard from '../../../components/RestaurantCard'
import { Spacer } from  '../../../components/Spacer/'
import {RestaurantContext} from '../../../services/restaurants/restaurants.context'
import {Search} from '../../../features/restaurants/components/search.component'

const StyledSafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.bg.primary};
  align-items: center;
  justify-content: center;
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
	const {restaurants, isLoading} = React.useContext(RestaurantContext)

  return (
    <StyledSafeArea>
			<Search/>
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

