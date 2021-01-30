import styled from 'styled-components'
import { Row, Typography } from 'antd';
import Colors from './colors'

export const StyledRow = styled(Row)`
	background-color: ${Colors.DARK_TWO};
  	height: 100vh;

	&:before {
		content: "";
		position: absolute;
		bottom: 25rem;
		right: 60rem;
		width: 90rem;
		height: 35rem;
		border-radius: 17rem;
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
		background-color: ${Colors.DARK_ONE};
	}
`

export const StyledTitle = styled(Typography.Title)`
	color: ${Colors.LIGHT_ONE} !important;
`

export const StyledText = styled(Typography.Text)`
  color: ${Colors.LIGHT_THREE} !important;
`