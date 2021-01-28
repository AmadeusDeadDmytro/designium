import React from 'react'
import { LayoutPropsType } from './LayoutComponentTypes'

const LayoutComponent = ({ children }: LayoutPropsType) => {
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export default LayoutComponent
