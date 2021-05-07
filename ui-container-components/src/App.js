import { Component } from "react";
import Users from "./Users"
class App extends Component {

  state = {
    users : [
      {name:'Luna', age:33, belt:'black', id:1},
      {name:'Lina', age:35, belt:'green', id:2},
      {name:'Sol', age:23, belt:'pink', id:3}
    ]
  }
  render(){
    return(
      <div className="App">
        <Users users={this.state.users} message="Welcome to React App"/>
      </div>
    )
  }
}

export default App;
