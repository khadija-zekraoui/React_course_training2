import { Component } from "react";
import AddUser from "./AddUser";
import Users from "./Users"
class App extends Component {

  state = {
    users : [
      {name:'Luna', age:33, belt:'black', id:1},
      {name:'Lina', age:20, belt:'green', id:2},
      {name:'Sol', age:18, belt:'pink', id:3}
    ]
  }

  updateUsers = (user) => {
    user.id = Math.random()*10
    this.setState({
      users : [...this.state.users, user]
    });
    console.log("App ~ updateUsers ~ users", this.state.users);
  }

  deleteUser = (id) => {
    let usersList = this.state.users.filter(user => user.id !== id);
    console.log("App ~ deleteUser ~ usersList", usersList);
    
    this.setState({
      users : usersList
    });
  }
  render(){
    return(
      <div className="App">
        <Users users={this.state.users} deleteUser={this.deleteUser} message="Welcome to React App" />
        <br/>
        <AddUser updateUsers={this.updateUsers}/>
      </div>
    )
  }
}

export default App;
