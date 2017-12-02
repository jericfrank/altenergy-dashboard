import { userJwtToken } from 'utils/jwtToken';

export function isAdmin () {
	const { role } = userJwtToken();

	return ( role.role === 0 );
}