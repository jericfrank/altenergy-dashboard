import { Menu, Sidebar } from 'semantic-ui-react';
import styled from 'styled-components';
import Logo from '../Logo';

export const Spacer = styled.span`flex-grow: 1;`;

export const SidebarLogo = styled(Logo)`margin: 5px;`;

export const SidebarLogoContainer = styled.a`
	background-color : #0E85AA;
	color            : #0E85AA;
	box-shadow       : 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	padding          : 25px;
	text-align       : center;
`;

export const StyledSidebar = styled(Sidebar)`
	z-index  : 111 !important;
	display  : flex !important;
	border   : none !important;
	position : fixed !important;
`;

export const SidebarItem = styled(Menu.Item)``;

export const SidebarLogoutItem = styled(SidebarItem)`
	cursor     : pointer;
	border-top : 1px solid rgba(34, 36, 38, 0.15) !important;
`;