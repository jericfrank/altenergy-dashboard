import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { Route, withRouter } from 'react-router-dom';

class Auth extends Component {
	constructor ( props ) {
		super( props );

		this.renderLayout = this.renderLayout.bind( this );
	}

    componentWillMount () {
        if ( localStorage.getItem( 'AltenergyToken' ) ) {
            this.props.history.push( '/' );
        }
    }

	renderLayout () {
		const { component: ComponentWrapper } = this.props;

		return (
            <div className='login-form'>
                <style>{`
                    body > div,
                    body > div > div,
                    body > div > div > div.login-form {
                        height     : 100%;
                        background : #FAFBFC;
                    }
                `}</style>
                <Grid
                    textAlign='center'
                    style={{ height: '80%' }}
                    verticalAlign='middle'
                >
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <ComponentWrapper {...this.props} />
                    </Grid.Column>
                </Grid>
            </div>
		);
	}

	render () {
		const { computedMatch, exact, location } = this.props;

		return (
			<Route computedMatch={computedMatch} exact={exact} location={location} render={this.renderLayout} />
		)
	}
}

export default withRouter( Auth );
