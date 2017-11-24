import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import registerServiceWorker from 'utils/registerServiceWorker';

import App from 'layouts/App';
import Auth from 'layouts/Auth';

import HomePage from 'containers/HomePage';
import ProjectPage from 'containers/ProjectPage';
import LoginPage from 'containers/LoginPage';

import 'semantic-ui-css/semantic.min.css';

const networkInterface = createNetworkInterface({
	uri: '/graphql',
	opts: {
		credentials: 'same-origin'
	}
});

const client = new ApolloClient({
	networkInterface
});

const Root = () => (
	<ApolloProvider client={client}>
		<BrowserRouter>
			<Switch>
				<App exact path='/' component={HomePage} />
				<App exact path='/projects' component={ProjectPage} />
				<Auth exact path='/login' component={LoginPage} />
			</Switch>
		</BrowserRouter>
	</ApolloProvider>
);

ReactDOM.render( <Root />, document.getElementById('root'));
registerServiceWorker();
