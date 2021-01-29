import React from 'react'
import { StyledWrapper } from './SectionComponentStyles'
import { SectionPropsType } from "./SectionComponentTypes";

const Section = ({ children }: SectionPropsType )=> {
	return (
		<StyledWrapper>
			{children}
		</StyledWrapper>
	)

}

export default Section