import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory} from "react-router";
import { firebaseApp } from './firebase';
import App from '../src/components/App';
import SignIn from '../src/components/SignIn';
import SignUp from '../src/components/SignUp';

firebaseApp.auth().onAuthStateChanged(user => {
    if(user) {
        console.log('user has signed in or up', user)
    } else {
        console.log('user has signed out or still need to signIn')
    }
});

ReactDOM.render(<Router path="/" history={browserHistory}>
    <Route path="/app" component={App} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
</Router>, document.getElementById('root'));
