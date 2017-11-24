import React, { Component } from 'react';

import { userJwtToken, expireJwtToken } from 'utils/jwtToken';

export default ( WrappedComponent ) => {
    class RequireAuth extends Component {
        constructor ( props ) {
            super( props );

            this.state = {
                auth : {}
            };
        }

        componentWillMount () {
            if ( localStorage.getItem( 'AltenergyToken' ) ) {
                try {
                    this.setState({ auth : { user : userJwtToken() } });
                } catch ( err ) {
                    expireJwtToken();
                }
            } else {
                this.props.history.push( '/login' );
            }
        }

        render () {
            return <WrappedComponent auth={this.state.auth} {...this.props} />;
        }
    }

    return RequireAuth;
};
