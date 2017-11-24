import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import registerServiceWorker from 'utils/registerServiceWorker';

import App from 'containers/App';
import HomePage from 'containers/HomePage';
import ProjectPage from 'containers/ProjectPage';
import LoginPage from 'containers/LoginPage';

import 'semantic-ui-css/semantic.min.css';

const Root = () => (
	<BrowserRouter>
		<Switch>
			<App exact path='/' component={HomePage} />
			<App exact path='/projects' component={ProjectPage} />
			<Route exact path='/login' component={LoginPage} />
		</Switch>
	</BrowserRouter>
);

ReactDOM.render( <Root />, document.getElementById('root'));
registerServiceWorker();
