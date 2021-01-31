import styled from 'styled-components'
import { Typography } from 'antd'
import Colors from '../colors'

export const StyledTitle = styled(Typography.Title)`
	color: ${Colors.LIGHT_TWO} !important;
    user-select: none;
`

export const StyledText = styled(Typography.Text)`
  color: ${Colors.LIGHT_THREE} !important;
  user-select: none;
`