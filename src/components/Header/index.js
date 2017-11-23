import _ from 'lodash';
import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

import {
	StyledHeader,
	HeaderInner,
	Navicon,
	PageTitle
} from './style';

import {
	Spacer
} from '../Sidebar/style';

import {
	SIDEBAR_ITEMS
} from '../Sidebar/constants';

import Headroom from 'react-headroom';

class Header extends Component {
	render () {
		const { pathname } = this.props.location;

		const { label } = _.find( SIDEBAR_ITEMS, { 'path' : pathname });

		return (
			<Headroom>
				<StyledHeader>
					<HeaderInner>
						<Navicon>
							<Icon name="content" />
						</Navicon>
						<PageTitle>{label}</PageTitle>
						<Spacer />
					</HeaderInner>
				</StyledHeader>
			</Headroom>
		);
	}
}

export default Header;