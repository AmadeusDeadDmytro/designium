import React from 'react'
import { SignInModuleProps } from './types'
import { Textfield, Button, Checkbox } from '../../components'
import { Space } from 'antd'
import styled from 'styled-components'
import Link from 'next/link'
import { textColor } from '../../styles/constants'

const Index = ({  }: SignInModuleProps) => {
    const handleSubmit = () => {

    }

    return (
        <form onSubmit={handleSubmit}>
            <Space direction={'vertical'} size={20} wrap style={{width: '100%'}}>
                <StyledTitle style={{ textAlign: 'center' }}>Sign In</StyledTitle>
                <Textfield type={'email'} placeholder={'Email'}/>
                <Textfield type={'password'} placeholder={'Password'}/>
                <Checkbox label={'Remember Me'} checked={false}/>
                <Button full>Confirm</Button>
                <StyledText>Don't have account? <Link href={'/signup'}>Create</Link></StyledText>
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