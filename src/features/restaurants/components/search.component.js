import React from "react"
import styled from "styled-components/native"
import { Searchbar } from 'react-native-paper';
import {LocationContext} from "../../../services/location/location.context"

const SearchBarWrapper = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  width: 100%;
  padding: ${({theme}) => theme.space[3]}; 
`

export const Search = () => {
	const { search, keyword } = React.useContext(LocationContext)
	const [searchKeyword, setSearchKeyword] = React.useState(keyword)

	React.useEffect(() => {
		setSearchKeyword(keyword)
	}, [keyword])

	return (
		<SearchBarWrapper>
			<Searchbar
				placeholder="Search"
				onChangeText={(text) => setSearchKeyword(text)}
				value={searchKeyword}
				onSubmitEditing={() => {
					search(searchKeyword)
				}}
			/>
		</SearchBarWrapper>
	)
}
