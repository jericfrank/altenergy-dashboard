import gql from 'graphql-tag';

export default gql`
    query projects_select($_id: String!) {
        projects_select(_id: $_id) {
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
            tech_info {
                _id
                total_land_area
                renewable_project_area
                size
                modules
                module_technology
                module_inclination
                module_azimuth
                inverter
                inverter_type
                inverter_quantity
                system_monitoring
                createdAt
                updatedAt
            }
            electricity_contract {
                _id
                type
                form_of_compensation
                feed_in_tarrif
                buyer
                term
                start
                price
                index_linked
                createdAt
                updatedAt
            }
            permission {
                _id
                name
                createdAt
                updatedAt
            }
            image {
                key
                s3
            }
            createdAt
            updatedAt
        }
    }
`;
