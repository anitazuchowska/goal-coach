import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider} from 'react-redux';
import { Router, Route, browserHistory} from "react-router";
import { firebaseApp } from './firebase';
import {logUser} from "./actions";
import reducer from './reducers';
import App from '../src/components/App';
import SignIn from '../src/components/SignIn';
import SignUp from '../src/components/SignUp';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
    if(user) {
        const email = user.email;
        store.dispatch(logUser(email));
        browserHistory.push('/app');
    } else {
        browserHistory.push('/signin');
    }
});

ReactDOM.render(
    <Provider store={store}>
        <Router path="/" history={browserHistory}>
            <Route path="/app" component={App} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
        </Router>
    </Provider>
    , document.getElementById('root'));
