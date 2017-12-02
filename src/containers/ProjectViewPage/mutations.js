import gql from 'graphql-tag';

export default gql`
    mutation project_delete( $_id: String! ) {
        project_delete( _id: $_id ) {
            _id
        }
    }
`;
