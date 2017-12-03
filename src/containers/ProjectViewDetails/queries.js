import gql from 'graphql-tag';

export default gql`
    {
        project_permission_all {
          _id
          name
          default
          createdAt
          updatedAt
        }
    }
`;
