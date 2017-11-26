import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { userJwtToken, expireJwtToken } from 'utils/jwtToken';

export default ( WrappedComponent ) => {
    class RequireAuth extends Component {
        render () {
            if ( localStorage.getItem( 'AltenergyToken' ) ) {
                try {
                    return <WrappedComponent auth={{ user : userJwtToken() }} {...this.props} />;
                } catch ( err ) {
                    expireJwtToken();
                }
            }

            return <Redirect to='/login' />;
        }
    }

    return RequireAuth;
};