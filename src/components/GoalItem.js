import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoalRef, goalRef } from "../firebase";

class GoalItem extends Component {
    completeGoal(){
    //add complete goal to the database
        const { email } = this.props.user.email;
        const { title, serverKey } = this.props.goal;
        goalRef.child(serverKey).remove();
        completeGoalRef.push({email, title});
    }

    render() {
        const {email, title} = this.props.goal;
        return (
            <div style={{margin: '5px'}} className="Goal-item">
               <strong>{ title }</strong>
                <span style={{marginRight: '5px'}}> submitted by <em>{ email }</em></span>
                <button className="btn btn-small btn-primary" onClick={() => this.completeGoal()}>Complete</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    }
}
export default connect(mapStateToProps, null)(GoalItem);
