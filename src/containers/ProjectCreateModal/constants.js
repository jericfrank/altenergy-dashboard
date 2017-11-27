export const MODAL_PROPS = {
	size   : 'small',
	dimmer : 'blurring'
};

export const FORM_FIELDS = {
	basic : {
		label : 'Get Started with the Basics',
		fields : {
			name : {
				type        : 'text',
				label       : 'Project Name',
				placeholder : 'Project Name',
				required    : true
			},
			project_type_id : {
				type        : 'select',
				label       : 'Project Type',
				placeholder : 'Project Type',
				required    : true,
				options     : {
					prop  : 'project_types_all',
					key   : '_id',
					text  : 'name',
					value : '_id'
				}
			},
			project_status_id : {
				type        : 'select',
				label       : 'Project Status',
				placeholder : 'Project Status',
				required    : true,
				options     : {
					prop  : 'project_status_all',
					key   : '_id',
					text  : 'name',
					value : '_id'
				}
			},
			state_id : {
				type        : 'select',
				label       : 'Location',
				placeholder : 'Location',
				required    : true,
				options     : {
					prop  : 'states_all',
					key   : '_id',
					text  : 'name',
					value : '_id'
				}
			}
		}
	}
};