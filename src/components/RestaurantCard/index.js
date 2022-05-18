import * as React from 'react'
import { Card, Button } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { SvgXml } from "react-native-svg";
import star from '../../../assets/star'

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

const Rating = styled.View`
	flex-direction: row;
	padding-top: ${({ theme }) => theme.space[2]};
	padding-bottom: ${({ theme }) => theme.space[2]};
`

const RestaurantCard = ({ restaurant = {} }) => {
	const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

	const ratingArray = Array.from(new Array(Math.floor(rating)));

	return (
		<Card>
			<Card.Cover source={{ uri: photos[0] }} />
			<Info>
				<Title>{name}</Title>
				<Rating>
					<Rating>
						{ratingArray.map((_, index) => (
							<SvgXml key={index} xml={star} width={20} height={20} />
						))}
					</Rating>
				</Rating>
				<Address>{address}</Address>
			</Info>
		</Card>
	)
}

export default RestaurantCard
