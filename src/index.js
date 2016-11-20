import "semantic-ui-css/semantic.css";
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import {Router, Route, browserHistory} from "react-router";
import {initAuth} from "./actions/auth";
import {syncHistoryWithStore} from "react-router-redux";
import AccountPage from "./containers/AccountPage";
import LoginPage from "./containers/LoginPage";


const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(initAuth());

const onLoginEnter = (nextState, replace, callback) => {
	if (store.getState().auth.connected) {
		replace('/');
	}
	callback();
};

const onAppEnter = (nextState, replace, callback) => {
	if (!store.getState().auth.connected) {
		replace('/login');
	}
	callback();
};

//console.log(store.getState().auth);
render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={AccountPage} onEnter={onAppEnter}/>
			<Route path="/login" component={LoginPage} onEnter={onLoginEnter}/>
		</Router>
	</Provider>,
	document.getElementById('root')
);