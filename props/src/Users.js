import React, { Component } from 'react'

export default class users extends Component {
    render() {

        const { users, message } = this.props;
        const usersList = users.map(user => {
            return (
                <div key={user.id}>
                    <div> Name : {user.name}</div>
                    <div> Age : {user.age}</div>
                    <div> Belt : {user.belt}</div>
                    <br/>
                </div>
            )
        })

        return (
           <div>
                <h1>{ message }</h1>
                { usersList } 
            </div>
        )
    }
}
