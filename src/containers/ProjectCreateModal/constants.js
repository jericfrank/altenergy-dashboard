export const MODAL_PROPS = {
	size   : 'small',
	dimmer : 'blurring'
};

export const FIELDS = {
	name              : '',
	project_type_id   : '',
	project_status_id : '',
	state_id          : '',

	country        : '',
	region         : '',
	local_council  : '',
	latitude       : '',
	longitude      : '',

	total_land_area        : '',
	renewable_project_area : '',
	access_id              : '',
	size                   : '',
	modules                : '',
	module_technology      : '',
	module_inclination     : '',
	module_azimuth         : '',
	inverter               : '',
	inverter_type          : '',
	inverter_quantity      : '',
	system_monitoring      : '',

	type                 : '',
	form_of_compensation : '',
	feed_in_tarrif       : '',
	buyer                : '',
	term                 : '',
	start                : '',
	price                : '',
	index_linked         : ''
};

export const FORM_FIELDS = {
	basic : {
		label : 'Get Started with the Basics',
		fields : {
			name : {
				type        : 'text',
				label       : 'Project Name',
				placeholder : 'Project Name',
				required    : true,
				length      : {
					min : 3,
					max : 50
				}
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
	},
	location : {
		label : 'Location',
		fields : {
			country : {
				type        : 'text',
				label       : 'Country',
				placeholder : 'Country',
				required    : true
			},
			region : {
				type        : 'text',
				label       : 'Region',
				placeholder : 'Regional area'
			},
			local_council : {
				type        : 'text',
				label       : 'Local Council',
				placeholder : 'Local Council'
			},
			latitude : {
				type        : 'text',
				label       : 'Latitude',
				placeholder : 'Latitude'
			},
			longitude : {
				type        : 'text',
				label       : 'Longitude',
				placeholder : 'Longitude'
			}
		}
	},
	technical : {
		label  : 'Technical Data',
		fields : {
			total_land_area : {
				type        : 'text',
				label       : 'Total Land Area',
				placeholder : '2 hectares'
			},
			renewable_project_area : {
				type        : 'text',
				label       : 'Renewable Project Area',
				placeholder : '1 acre'
			},
			access_id : {
				type        : 'select',
				label       : 'Access',
				placeholder : 'Access',
				options     : {
					prop  : 'access_all',
					key   : '_id',
					text  : 'name',
					value : '_id'
				},
				required    : true
			},
			size : {
				type        : 'text',
				label       : 'Size',
				placeholder : 'eg 175 kW'
			},
			modules : {
				type        : 'text',
				label       : 'Modules',
				placeholder : 'eg brand/model'
			},
			module_technology : {
				type        : 'text',
				label       : 'Module Technology',
				placeholder : 'eg Polycrystalline'
			},
			module_inclination : {
				type        : 'text',
				label       : 'Module Inclination',
				placeholder : '30 degrees'
			},
			module_azimuth : {
				type        : 'text',
				label       : 'Module Azimuth',
				placeholder : '0 degrees'
			},
			inverter : {
				type        : 'text',
				label       : 'Inverter',
				placeholder : 'eg brand/model'
			},
			inverter_type : {
				type        : 'text',
				label       : 'Inverter Type',
				placeholder : 'eg string intverter'
			},
			inverter_quantity : {
				type        : 'text',
				label       : 'Inverter Quantity',
				placeholder : 'eg 2'
			},
			system_monitoring : {
				type        : 'select',
				label       : 'System Monitoring',
				placeholder : 'eg 2',
				required    : true,
				options     : {
					prop  : 'yes_no',
					key   : '_id',
					text  : 'name',
					value : '_id'
				}
			}
		}
	},
	contracts : {
		label  : 'Electricity Contracts',
		fields : {
			type : {
				type        : 'text',
				label       : 'Contract Type',
				placeholder : 'long term supply'
			},
			form_of_compensation : {
				type        : 'text',
				label       : 'Form of Compensation',
				placeholder : 'tarrif'
			},
			feed_in_tarrif : {
				type        : 'select',
				label       : 'Feed-in Tarrif',
				placeholder : 'Access',
				required    : true,
				options     : {
					prop  : 'yes_no',
					key   : '_id',
					text  : 'name',
					value : '_id'
				}
			},
			buyer : {
				type        : 'text',
				label       : 'Buyer',
				placeholder : 'Counter party',
				required    : true
			},
			term : {
				type        : 'text',
				label       : 'Contract term',
				placeholder : 'years'
			},
						start : {
				type        : 'text',
				label       : 'Contract start',
				placeholder : 'start'
			},
			price : {
				type        : 'text',
				label       : 'Price',
				placeholder : 'per kWh'
			},
			index_linked : {
				type        : 'select',
				label       : 'Index linked',
				placeholder : 'Index linked',
				required    : true,
				options     : {
					prop  : 'yes_no',
					key   : '_id',
					text  : 'name',
					value : '_id'
				}
			}
		}
	}
};
