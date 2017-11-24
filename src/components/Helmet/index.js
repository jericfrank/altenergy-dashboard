import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class HeaderComponent extends Component {
	render () {
		const { title } = this.props;

		return (
			<Helmet>
			    <meta charSet="utf-8" />
			    <title>Altenergy - {title}</title>
			</Helmet>
		);
	}
}

export default HeaderComponent;