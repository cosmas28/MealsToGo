import * as React from 'react'
import { Card, Button } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

const Title = styled.Text`
	font-family: ${({theme}) => theme.fonts.body}
	padding: ${({theme}) => theme.space[3]};
	background-color: ${({theme}) => theme.colors.bg.primary};
`

const RestaurantCard = () => (
	<Card>
		<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
		<Title>Some card title</Title>
	</Card>
)

export default RestaurantCard
