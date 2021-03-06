import React from 'react'
import styled from 'styled-components/native'
import WebView from 'react-native-webview'
import {Platform} from 'react-native';

import {Text} from '../Text'

const CompactImage = styled.Image`
	border-radius: 10px;
	width: 120px;
	height: 100px;
`

const CompactWebView = styled(WebView)`
	border-radius: 10px;
	width: 120px;
	height: 100px;
`

const Container = styled.View`
	padding: 10px;
	max-width: 120px;
	align-items: center;
`
const isAndroid = Platform.OS === 'android'
export const CompactRestaurantInfo = ({restaurant}) => {
	const Image = isAndroid ? CompactWebView : CompactImage;
	return (
		<Container>
			<Image source={{ uri: restaurant.photos[0] }}/>
			<Text ceenter variant="caption">{restaurant.name}</Text>
		</Container>
	)
}
