import React from 'react'
import { Textfield, Button } from '../../components'
import { Space } from 'antd'
import styled from 'styled-components'
import Link from 'next/link'
import { textColor } from '../../styles/constants'

const Index = () => {
    const handleSubmit = () => {

    }

    return (
        <form onSubmit={handleSubmit}>
            <Space direction={'vertical'} size={20} wrap style={{width: '100%'}}>
                <StyledTitle style={{ textAlign: 'center' }}>Sign Up</StyledTitle>
                <Textfield type={'email'} placeholder={'Email'}/>
                <Textfield type={'password'} placeholder={'Password'}/>
                <Textfield type={'password'} placeholder={'Confirm Password'}/>
                <Button full>Confirm</Button>
                <StyledText>Have Account? Back to <Link href={'/signin'}>Sign In</Link></StyledText>
            </Space>
        </form>
    )
}

const StyledText = styled.div`
  ${textColor};
  user-select: none;
  text-align: center;
`
const StyledTitle = styled.h2`
  ${textColor};
  font-size: 2rem;
  user-select: none;
`

export default Index