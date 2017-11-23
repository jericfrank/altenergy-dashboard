// @flow
import React from 'react'
import { Image as ImageComponent } from 'semantic-ui-react'
import logoImg from './Logo.png';

type Props = {
	shape    : string, // | 'circular'
	centered : boolean
};

const Logo = (props: Props) => {
	return <ImageComponent src={logoImg} {...props} />
};

export default Logo;