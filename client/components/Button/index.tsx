import React from 'react'
import { ButtonProps, ButtonWrapperProps } from './types'
import styled from 'styled-components'
import Colors from '../../styles/colors'
import Link from "next/link"
import { transition } from '../../styles/constants'

const Button = ({ children, full, href, center, onClick }: ButtonProps ) => {
    if(href) {
        return (
            <Link href={href}>
                <StyledWrapper isFullWidth={full} center={center}>
                    {children}
                </StyledWrapper>
            </Link>
        )
    }

    return (
        <StyledWrapper isFullWidth={full} center={center} onClick={onClick}>
            {children}
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div<ButtonWrapperProps>`
    background-color: ${Colors.MEDIUM_TWO};
    display: inline-flex;
    color: ${Colors.LIGHT_TWO};
    border: 1px solid ${Colors.LIGHT_TWO};
    padding: 5px 20px;
    border-radius: 6px;
    cursor: pointer;
    appearance: none;
    align-items: center;
    justify-content: center;
    ${transition};
    user-select: none;
    position: relative;
    white-space: nowrap;
    vertical-align: middle;
    outline: none;
    font-size: 1rem;
    width: ${({ isFullWidth }) => isFullWidth ? '100%' : 'auto'};
    
    &:hover {
        ${transition};
        background-color: ${Colors.MEDIUM_ONE};
        border: 1px solid ${Colors.MEDIUM_THREE};
        color: ${Colors.LIGHT_ONE};
    }
`

export default Button