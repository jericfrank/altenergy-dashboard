import CryptoJS from 'crypto-js';

/**
 * Parses the JWT token received from the server. Sets the token on the
 * localStorage and add the token to the axios request headers.
 *
 * @param  {Object} data A hash with an access_token
 *
 * @return {Object} Returns the decoded token
 */
export function handleJwtToken ( { token, user } ) {
	const encrypt = CryptoJS.AES.encrypt( JSON.stringify( user ), token );

	localStorage.setItem( 'AltenergyUser', encrypt );
	localStorage.setItem( 'AltenergyToken', token );
}

/**
 * This method removes the current JwtToken, invalidating the session
 *
 * @return null
 */
export function expireJwtToken () {
	localStorage.removeItem( 'AltenergyToken' );
	localStorage.removeItem( 'AltenergyUser' );
	
	return null;
}


export function userJwtToken () {
	const jsonString = CryptoJS.AES.decrypt( localStorage.getItem( 'AltenergyUser' ), localStorage.getItem( 'AltenergyToken' ) )
	const User       = JSON.parse( jsonString.toString( CryptoJS.enc.Utf8 ) );

	return User;
}