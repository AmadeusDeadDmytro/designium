import React from 'react'
import { BoxWrapper } from './BoxComponetStyle'
import { BoxPropsType } from "./BoxComponentTypes";

const Section = ({children, half} : BoxPropsType )=> {
	return (
		<BoxWrapper half={half}>
			{children}
		</BoxWrapper>
	)

}

export default Section