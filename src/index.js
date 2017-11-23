import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './containers/App';
import HomePage from './containers/HomePage';
import ProjectPage from './containers/ProjectPage';

import 'semantic-ui-css/semantic.min.css';

const Root = () => (
	<BrowserRouter>
		<Switch>
			<App exact path='/' component={HomePage} />
			<App exact path='/projects' component={ProjectPage} />
		</Switch>
	</BrowserRouter>
);

ReactDOM.render( <Root />, document.getElementById('root'));
registerServiceWorker();
