import gql from 'graphql-tag';

export default gql`
    mutation auth_login(
        $username : String!,
        $password : String!
    ) {
        auth_login(
        	username : $username,
        	password : $password
        ) {
            token
            user {
                _id
                name
                email
                username
                role {
                    _id
                    role
                }
                createdAt
                updatedAt
            }
        }
    }
`;