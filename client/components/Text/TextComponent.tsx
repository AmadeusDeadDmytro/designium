import React from 'react'
import { TextWrapper } from './TextComponetStyle'
import { TextPropsType } from "./TextComponentTypes";

const Text = ({children} : TextPropsType )=> {
	return (
		<TextWrapper>
			{children}
		</TextWrapper>
	)

}

export default Text