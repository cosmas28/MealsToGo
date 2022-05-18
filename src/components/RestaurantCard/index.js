import * as React from 'react'
import { Card, Button } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

const Title = styled.Text`
	font-family: ${({theme}) => theme.fonts.heading};
	font-size: ${({ theme }) => theme.fontSizes.body};
	background-color: ${({theme}) => theme.colors.bg.primary};
`

const Info = styled.View`
	padding: ${({ theme }) => theme.space[3]};
`

const Address = styled.Text`
	font-family: ${({ theme }) => theme.fonts.body};
	font-size: ${({ theme }) => theme.fontSizes.caption};
`

const RestaurantCard = () => (
	<Card>
		<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
		<Info>
			<Title>Some card title</Title>
			<Address>56 Alexandra Avenue</Address>
		</Info>
	</Card>
)

export default RestaurantCard
