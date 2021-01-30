import { ReactNode } from 'react'

export interface ButtonProps {
    children: ReactNode
    full?: boolean
    href?: string
}

export interface ButtonWrapperProps {
    isFullWidth: boolean
}