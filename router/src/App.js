import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

export default class App extends Component {
  render() {
    return (
      //surround the app with BrowserRouter to use Router functionalities
      <BrowserRouter>
        <div>
          <Navbar />
          {/* all components with route receive information about routing through props */}
          {/* set routes to use them in the app */}
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}
