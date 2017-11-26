import React, { Component } from 'react';
import { Dropdown, Menu, Image } from 'semantic-ui-react';

import { expireJwtToken } from 'utils/jwtToken';

import Logo from './logo.png';
import { Sidebar } from './style';

class SidebarComponent extends Component {
	constructor ( props ) {
		super( props );

		this.handleLogout   = this.handleLogout.bind( this );
		this.handleRedirect = this.handleRedirect.bind( this );
	}

	handleRedirect ( e, { path } ) {
		this.props.history.push( path );
	}

	handleLogout () {
		expireJwtToken();
		this.props.history.push( '/login' );
	}

	render () {
		const { location, auth } = this.props;
		
		const { user }     = auth;
		const { pathname } = location;

		return (
			<Sidebar>
				<Menu fluid inverted vertical>
					<Menu.Item>
						<Image size='mini' spaced='right' src={Logo} />
						<strong>Altenergy Projects</strong>
					</Menu.Item>
					<Menu.Item>
						Menu
						<Menu.Menu>
							<Menu.Item name='Dashboard' icon='dashboard' active={( pathname === '/' )} path='/' onClick={this.handleRedirect} />
							<Menu.Item name='Create' icon='add' />
							<Menu.Item name='Projects' icon='folder' active={( pathname === '/projects' )} path='/projects' onClick={this.handleRedirect} />
						</Menu.Menu>
					</Menu.Item>

					<Menu.Item>
						Settings
						<Menu.Menu>
							<Menu.Item name='Account' icon='settings' />
						</Menu.Menu>
					</Menu.Item>
			
					<Dropdown upward item text={user.name} pointing='left'>
						<Dropdown.Menu>
							<Dropdown.Item icon='edit' text='Profile Settings' />
							<Dropdown.Item icon='configure' text='Change password' />
							<Dropdown.Item icon='settings' text='Account Settings' />
							<Dropdown.Divider />
							<Dropdown.Item icon='lock' text='Logout' onClick={this.handleLogout} />
						</Dropdown.Menu>
					</Dropdown>						
				</Menu>
			</Sidebar>
		)
	}
}

export default SidebarComponent;