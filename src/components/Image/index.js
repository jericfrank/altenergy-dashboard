import React, { Component } from 'react';
import { Image, Loader } from 'semantic-ui-react';

import DefaultImage from 'containers/ProjectViewDetails/default.jpg';

class ImageComponent extends Component {
	render () {
		let { path } = this.props;

		if ( path === null ) {
			path = DefaultImage;
		}

		return (
            <div>
                <Loader active={ ( path ) ? false : true } inline='centered' />
                <Image src={path} />
            </div>
		);
	}
}

export default ImageComponent;
