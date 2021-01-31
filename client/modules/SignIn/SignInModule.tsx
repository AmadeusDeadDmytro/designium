import React from 'react'
import { SignInModuleProps } from './SignInModuleType'
import { Input, Button } from '../../components'
import { Space } from 'antd'
import { StyledTitle } from '../../styles/styled/common'

const SignInModule = ({  }: SignInModuleProps) => {
    const handleSubmit = () => {

    }

    return (
        <form onSubmit={handleSubmit}>
            <Space direction={'vertical'} size={20} wrap style={{width: '100%'}}>
                <StyledTitle style={{ textAlign: 'center' }}>Sign In</StyledTitle>
                <Input type={'email'} placeholder={'Email'}/>
                <Input type={'password'} placeholder={'Password'}/>
                <Button>Confirm</Button>
            </Space>
        </form>
    )
}

export default SignInModule