import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';

import { handleJwtToken, userJwtToken, expireJwtToken } from 'utils/jwtToken';

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

            if ( this.props.location.search ) {
                const { token, user } = queryString.parse( this.props.location.search );

                handleJwtToken({ token, user: JSON.parse( user ) });

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
