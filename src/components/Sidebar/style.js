import { Menu, Sidebar } from 'semantic-ui-react';
import styled from 'styled-components';

// ${'combine sidebar with dimmer, when sidebar is visible on mobile'}
//   color: ${props => props.theme.primaryColorText}!important;
// ${'' /* background-color: ${props => props.theme.accentColor}!important; */}
export const StyledSidebar = styled(Sidebar)`
	z-index: 111 !important;
	display: flex !important;
	border: none !important;
	position: fixed !important;
`;

export const SidebarItem = styled(Menu.Item)``;

export const SidebarLogoutItem = styled(SidebarItem)`
	cursor: pointer;
	border-top: 1px solid rgba(34, 36, 38, 0.15) !important;
`;