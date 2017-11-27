import gql from 'graphql-tag';

export default gql`
	{
		project_types_all {
			_id
			name
		}

		project_status_all {
			_id
			name
		}

		states_all {
			_id
			name
		}

		access_all {
			_id
			name
		}
	}
`;