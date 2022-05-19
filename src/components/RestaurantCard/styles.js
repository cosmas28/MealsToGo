import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

export const Info = styled.View`
	padding: ${({ theme }) => theme.space[3]};
`

export const Rating = styled.View`
	flex-direction: row;
`

export const Section = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding-top: ${({ theme }) => theme.space[2]};
	padding-bottom: ${({ theme }) => theme.space[2]};
`
