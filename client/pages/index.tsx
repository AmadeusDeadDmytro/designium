import React from 'react'
import { Col } from 'antd';
import { StyledRow, StyledTitle, StyledText } from '../styles/styledHome'

const HomePage = () => {
    return (
        <StyledRow align={'middle'}>
            <Col span={8} offset={4}>
                <StyledTitle>Designium</StyledTitle>
                <StyledText>New way for creating game design</StyledText>
            </Col>
            <Col span={12}>

            </Col>
        </StyledRow>
    )
}

export default HomePage