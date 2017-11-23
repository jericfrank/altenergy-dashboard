import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => (
	<div>
		<NavLink to='/' exact>Home</NavLink>
		<NavLink to='/projects'>Projects</NavLink>
	</div>
)

export default Menu;