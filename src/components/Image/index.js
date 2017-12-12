import React, { Component } from 'react';
import { Image, Loader } from 'semantic-ui-react';

class ImageComponent extends Component {
	render () {
		const { path } = this.props;

		return (
            <div>
                <Loader active={ ( path ) ? false : true } inline='centered' />
                <Image src={path} />
            </div>
		);
	}
}

export default ImageComponent;
