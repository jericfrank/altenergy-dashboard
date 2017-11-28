import _ from 'lodash';
import { isLength } from 'validator';

import { FORM_FIELDS } from './constants';

export default function ( fields ) {
    let errors = {};
    
    _.forEach( FORM_FIELDS, ( values ) => {
        _.map( values.fields, ( value, index ) => {
            let e = [];

            if ( value['required'] && _.isEmpty( fields[ index ] ) ) {
                e = [
                	...e,
                	`${value.label} is required`
                ];
            }

           	if ( value['length'] ) {
           		const { min, max } = value['length'];

           		if ( !isLength( fields[ index ], { min, max } ) ) {
           			e = [
	                	...e,
	                	`character must be min of ${min} max of ${max}`
	                ];
           		}
            }

            if ( !_.isEmpty(e) ) {
                errors[ index ] = e;
            }
        } );
    });

    return { errors, empty : _.isEmpty(errors) };
}