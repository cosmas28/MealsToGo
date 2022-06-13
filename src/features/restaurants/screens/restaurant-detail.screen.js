import React from 'react'
import styled from 'styled-components/native'
import RestaurantCard from '../../../components/RestaurantCard'

const SafeArea = styled.SafeAreaView`
	flex: 1;
	background-color: ${({theme}) => theme.colors.bg.primary};
`

export const RestaurantDetailScreen = ({ route }) => {
	const { restaurant } = route.params
	return (
		<SafeArea>
			<RestaurantCard restaurant={restaurant} />
		</SafeArea>
	)
}
