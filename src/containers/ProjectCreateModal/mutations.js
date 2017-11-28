import gql from 'graphql-tag';

export default gql`
  mutation project_create_relationship(
  		$projects              : ProjectInput!,
  		$location              : LocationInput!,
  		$technical_info        : TechnicalInfoInput!,
  		$electricity_contracts : ElectricityContractsInput!
  	) {
    project_create_relationship(
    	projects              : $projects,
    	location              : $location,
    	technical_info        : $technical_info,
    	electricity_contracts : $electricity_contracts
    ) {
      _id
			name
			type {
			  _id
			  name
			  createdAt
			  updatedAt
			}
			status {
			  _id
			  name
			  createdAt
			  updatedAt
			}
			state {
			  _id
			  name
			  createdAt
			  updatedAt
			}
			location {
			  _id
			  country
			  region
			  local_council
			  latitude
			  longitude
			  createdAt
			  updatedAt
			}
			createdAt
			updatedAt
    }
  }
`;