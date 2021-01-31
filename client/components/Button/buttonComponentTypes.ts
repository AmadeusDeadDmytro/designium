import { ReactNode } from 'react'

export interface ButtonProps {
    children: ReactNode
    full?: boolean
    href?: string
    center?: boolean
}

export interface ButtonWrapperProps {
    isFullWidth: boolean
    center: boolean
}