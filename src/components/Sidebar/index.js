import _ from 'lodash';
import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

import {
	StyledSidebar,
	SidebarItem,
	SidebarLogoutItem,
	SidebarLogoContainer,
	SidebarLogo,
	Spacer
} from './style';

import {
	SIDEBAR_ITEMS
} from './constants';

class Sidebar extends Component {
	constructor ( props ) {
		super( props );

		this.renderSideBarItem = this.renderSideBarItem.bind( this );
		this.handleRedirect    = this.handleRedirect.bind( this );
		this.handleLogout      = this.handleLogout.bind( this );
	}

	handleRedirect ( e, { path } ) {
		this.props.history.push( path );
	}

	renderSideBarItem ( { icon, label, path }, key ) {
		const { pathname } = this.props.location;

		return (
			<SidebarItem active={( pathname === path )} key={key} icon path={path} onClick={this.handleRedirect}>
				<Icon name={icon} /> {label}
			</SidebarItem>
		);
	}

	handleLogout () {
		alert( 'Logging out' );
	}

	render () {
		const sidebarProps = {
			visible   : true,
			as        : Menu,
			vertical  : true,
			icon      : 'labeled',
			animation : 'push',
			width     : 'thin'
		};

		return (
			<StyledSidebar {...sidebarProps}>
				<SidebarLogoContainer href="/">
					<SidebarLogo alt="logo" shape="circular" centered />
				</SidebarLogoContainer>
				{ _.map( SIDEBAR_ITEMS, this.renderSideBarItem ) }
				<Spacer />
				<SidebarLogoutItem onClick={this.handleLogout}>
					<Icon name="sign out" />
					Logout
				</SidebarLogoutItem>
			</StyledSidebar>
		)
	}
}

export default Sidebar;