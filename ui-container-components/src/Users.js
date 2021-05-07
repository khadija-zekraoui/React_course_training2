import React from 'react';
const Users = ({users, message}) => {

    //const { users, message } = props;

    const userList = users.map(user => {
        return user.age > 30 ? (
            <div key={user.id}>
                <div> Name : {user.name}</div>
                <div> Age : {user.age}</div>
                <div> Belt : {user.belt}</div>
                <br/>
            </div>
        ) : null;
    });

    return (
        <div>
             <h1>{ message }</h1>
             { userList } 
         </div>
     );
};

export default Users;