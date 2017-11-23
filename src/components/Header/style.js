import styled from 'styled-components'
import { Button } from 'semantic-ui-react'

export const StyledHeader = styled.header`
	background      : #212223;
	border-bottom   : 1px solid #0e1319;
	box-shadow      : inset 0 0 0 0 #0e1319, 0 2px 1px 0 #0e1319;
	color           : #FFFFFF;
	display         : flex;
	justify-content : center;
	flex-direction  : column;
	width           : 100%;
	z-index         : 444;
	height          : 60px;
`;

export const HeaderInner = styled.div`
	display : flex;
	padding : 0 15px;
`;

export const PageTitle = styled.span`
	line-height : 1;
	font-size   : 24px;
	align-items : center;
	display     : flex;
`;

export const Navicon = styled.span`
	width       : 48px;
	height      : 48px;
	padding     : 12px;
	line-height : 1;
	font-size   : 24px;
	display     : none;
`;

export const HeaderButton = styled(Button)`
	&#header-button {
		align-self       : center;
		box-shadow       : 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
		color            : #FFFFFF !important;
		background-color : #0e1319 !important;
	}
`;