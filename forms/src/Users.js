import React from 'react';
import './Users.css'
const Users = ({ users, message, deleteUser }) => {

    return (
        <div>
            <h1>{message}</h1>
            <table id="users">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Belt</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.belt}</td>
                                <td><button onClick={() => deleteUser(user.id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <br/>
        </div>
    );
};

export default Users;