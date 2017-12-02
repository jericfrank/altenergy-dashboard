import gql from 'graphql-tag';

export default gql`
    {
    	projects_all {
            _id
            name
            type {
                _id
                name
            }
            state {
                _id
                name
            }
            status {
                _id
                name
            }
            permission {
                _id
                name
                createdAt
                updatedAt
            }
            createdAt
            updatedAt
    	}
    }
`;
