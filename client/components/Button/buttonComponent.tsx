import React from 'react'
import { ButtonProps, ButtonWrapperProps } from './buttonComponentTypes'
import styled from 'styled-components'
import Colors from '../../styles/colors'
import Link from 'next/link'

const Button = ({ children, full, href }: ButtonProps ) => {
    if(href) {
        return (
            <Link href={href}>
                <StyledWrapper isFullWidth={full}>
                    {children}
                </StyledWrapper>
            </Link>
        )
    }

    return (
        <StyledWrapper isFullWidth={full}>
            {children}
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div<ButtonWrapperProps>`
  background-color: ${Colors.MEDIUM_TWO};
  display: inline-flex;
  color: ${Colors.LIGHT_TWO};
  border: 1px solid ${Colors.LIGHT_TWO};
  padding: 3px 10px;
  border-radius: 6px;
  cursor: pointer;
  appearance: none;
  align-items: center;
  justify-content: center;
  transition: all linear 0.25s;
  user-select: none;
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  outline: none;
  width: ${({ isFullWidth }) => isFullWidth ? '100%' : 'auto'};
  
  &:hover {
    transition: all linear 0.25s;
    background-color: ${Colors.MEDIUM_ONE};
    border: 1px solid ${Colors.MEDIUM_THREE};
    color: ${Colors.LIGHT_ONE};
  }
`

export default Button