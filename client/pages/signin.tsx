import React from 'react'
import { Col, Space } from 'antd';
import { StyledRow, StyledTitle, StyledText } from '../styles/styled/home'

const SignIn = () => {
	return (
		<StyledRow align={'middle'}>
			<Col span={8} offset={4}>
				<StyledTitle>Designium</StyledTitle>
				<Space direction={'vertical'} size={20}>
					<StyledText>New way for creating game design</StyledText>
				</Space>
			</Col>
			<Col span={12}>

			</Col>
		</StyledRow>
	)
}

export default SignIn