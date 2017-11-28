import React, { Component } from 'react';
import { Dropdown, Menu, Image } from 'semantic-ui-react';

import { expireJwtToken } from 'utils/jwtToken';

import Logo from './logo.png';
import Avatar from './avatar.jpg';

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

		const text = (
			<span><Image src={Avatar} avatar /> {user.name}</span>
		);

		return (
			<Menu inverted vertical fixed='left'>
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
				<Dropdown upward item trigger={text} icon={null} style={{ position: 'absolute', bottom: 0, width: '100%' }}>
					<Dropdown.Menu>
						<Dropdown.Item text='Profile Settings' />
						<Dropdown.Item text='Change password' />
						<Dropdown.Item text='Account Settings' />
						<Dropdown.Divider />
						<Dropdown.Item text='Logout' onClick={this.handleLogout} />
					</Dropdown.Menu>
				</Dropdown>
			</Menu>
		)
	}
}

export default SidebarComponent;
