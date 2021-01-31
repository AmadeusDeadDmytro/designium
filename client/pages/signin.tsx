import React from 'react'
import { Col, Space } from 'antd';
import { StyledRow } from '../styles/styled/home'
import { StyledTitle, StyledText } from '../styles/styled/common'
import SignInModule from '../modules/SignIn/SignInModule'

const SignIn = () => {
	return (
		<StyledRow align={'middle'}>
			<Col span={8} offset={4}>
				<StyledTitle>Designium</StyledTitle>
				<Space direction={'vertical'} size={20}>
					<StyledText>New way for creating game design</StyledText>
				</Space>
			</Col>
			<Col span={4} offset={4}>
				<SignInModule />
			</Col>
		</StyledRow>
	)
}

export default SignIn