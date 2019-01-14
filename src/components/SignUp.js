import React, { Component } from 'react';
import { Link } from 'react-router';
import {firebaseApp} from "../firebase";

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

    signUp(){
        const { email, password} = this.state;
        firebaseApp.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({error});
            });
    }

    render(){
        return(
            <div className="form-inline" style={{margin: '5%'}}>
                <h2>SignUp</h2>
                <div className="form-group">
                    <input style={{marginRight: '5px'}} onChange={event => this.setState({email: event.target.value})} className="form-control" type="text" placeholder="email"/>
                    <input style={{marginRight: '5px'}} onChange={event => this.setState({password: event.target.value})} className="form-control" type="password" placeholder="password" />
                    <button onClick={() => this.signUp()} className="btn btn-primary" type="button">Sign Up</button>
                </div>
                <div>{this.state.error.message}</div>
                <div><Link to={'/signin'}>Sing In</Link></div>
            </div>
        );
    }
}

export default SignUp;
