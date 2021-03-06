import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

import registerServiceWorker from 'utils/registerServiceWorker';
import { HOST_URI } from 'utils/request';

import App from 'layouts/App';
import Auth from 'layouts/Auth';

import AccountPage from 'containers/AccountPage';
import HomePage from 'containers/HomePage';
import ProjectPage from 'containers/ProjectPage';
import ProjectViewPage from 'containers/ProjectViewPage';
import LoginPage from 'containers/LoginPage';

import 'semantic-ui-css/semantic.min.css';

const httpLink = createHttpLink({
    uri: `${HOST_URI}/gql`,
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem('AltenergyToken');
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : null,
		}
	}
});

const client = new ApolloClient({
    dataIdFromObject : o => o._id,
	link             : authLink.concat(httpLink),
	cache            : new InMemoryCache()
});

const Root = () => (
	<ApolloProvider client={client}>
		<BrowserRouter>
			<Switch>
				<App exact path='/' component={HomePage} />
				<App exact path='/projects' component={ProjectPage} />
                <App exact path="/projects/:_id" component={ProjectViewPage}/>
                <App exact path='/account' component={AccountPage} />
				<Auth exact path='/login' component={LoginPage} />
			</Switch>
		</BrowserRouter>
	</ApolloProvider>
);

ReactDOM.render( <Root />, document.getElementById('root'));
registerServiceWorker();
