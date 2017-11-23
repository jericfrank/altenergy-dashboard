import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

import {
	StyledSidebar,
	SidebarLogoutItem
} from './style';

class SidebarComponent extends Component {
	render () {
		const sidebarProps = {
			visible: true,
			as: Menu,
			vertical: true,
			icon: 'labeled',
			animation: 'push',
			width: 'thin'
		}


		return (
			<StyledSidebar {...sidebarProps}>
				<SidebarLogoutItem>
					<Icon name="sign out" />
					Logout
				</SidebarLogoutItem>
			</StyledSidebar>
		)
	}
}

export default SidebarComponent
