import React from 'react'
import { Col, Space } from 'antd';
import { StyledRow } from '../styles/styled/home'
import { SignUpModule } from '../modules'
import styled from 'styled-components'
import { textColor } from '../styles/constants'

const SignUp = () => {
	return (
		<StyledRow align={'middle'}>
			<Col span={8} offset={4}>
				<StyledTitle>Designium</StyledTitle>
				<Space direction={'vertical'} size={20}>
					<StyledText>New way for creating game design</StyledText>
				</Space>
			</Col>
			<Col span={4} offset={4}>
				<SignUpModule />
			</Col>
		</StyledRow>
	)
}

const StyledText = styled.div`
  	${textColor};
	user-select: none;
`

const StyledTitle = styled.h1`
  	${textColor};
	user-select: none;
`

export default SignUp