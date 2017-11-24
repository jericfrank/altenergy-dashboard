import styled from 'styled-components';
import { Sidebar } from 'semantic-ui-react';

export const PageLayout = styled.div`height: 100%;`;

export const MainContent = styled.main`
	min-height     : calc(100% - 72px);
	display        : flex;
	flex-direction : column;
	padding        : 15px;
`;

export const SidebarPushable = styled(Sidebar.Pushable)`
	display : initial;
	> .pusher {
		overflow : visible !important;
	}
`;

export const SidebarPusher = styled(Sidebar.Pusher)`
	-webkit-overflow-scrolling : touch;
`;