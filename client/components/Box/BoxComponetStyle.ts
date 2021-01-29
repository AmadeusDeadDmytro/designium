import styled from 'styled-components'

export const BoxWrapper = styled.div<{half: boolean}>`
	display: flex;
  	justify-content: center;
  	align-items: center;
  	flex-direction: row;
  	flex-wrap: wrap;
  	width: ${({ half }) => half ? '50%' : 'auto'};
`