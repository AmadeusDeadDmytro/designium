import styled from 'styled-components'
import Colors from '../../styles/colors'

export const StyledWrapper = styled.section`
	background-color: ${Colors.DARK_TWO};
	height: 100vh;
  	display: flex;
  	justify-content: center;
  	align-items: center;
	
	&:after {
		content: '';
		background-color: ${Colors.DARK_ONE};
		position: absolute;
		bottom: 25rem;
		right: 60rem;
		width: 90rem;
		height: 35rem;
		border-radius: 17rem;
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
	}
`