import * as React from 'react'
import { Card, Button } from 'react-native-paper'
import { Image } from 'react-native'
import styled from 'styled-components/native'
import { SvgXml } from "react-native-svg";
import star from '../../../assets/star'
import open from '../../../assets/open'
import { Spacer } from '../Spacer'
import { Text } from '../Text'
import { Info, Rating, Section } from './styles'

const RestaurantCard = ({ restaurant = {} }) => {
	const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
		placeId,
  } = restaurant;

	const ratingArray = Array.from(new Array(Math.floor(rating)));

	return (
		<Card>
			<Card.Cover source={{ uri: photos[0] }} />
			<Info>
				<Text variant="label">{name}</Text>
				<Section>
					<Rating>
						{ratingArray.map((_, index) => (
							<SvgXml key={`star-${placeId}-${index}`} xml={star} width={20} height={20} />
						))}
					</Rating>
					{isClosedTemporarily && (
						<Text variant="label" style={{ color: "red"}} >CLOSED TEMPORARILY</Text>
					)}
					<Spacer position="left" size="large">
						{isOpenNow && <SvgXml xml={open} width={20} height={20} />}
					</Spacer>
					<Spacer position="left" size="large">
						<Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
					</Spacer>
				</Section>
				<Text variant="body">{address}</Text>
			</Info>
		</Card>
	)
}

export default RestaurantCard
