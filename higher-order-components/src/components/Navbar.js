import React from 'react';
/* withRouter is a Higher order components: is a function which wraps other components
and give them extra features*/
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = (props) => {

  setTimeout(() => {
    //redirect the user ti another page
      props.history.push('/about')  
    }, 5000);

  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        {/* when we use link instead of a tag we prevent requesting the page from the server
        React inject the component in the page */}
        <Link className="brand-logo" to="/">Poke' Times</Link>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          {/* NavLink add an additional class named 'active' in the active link */}
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}

//we use a wrapper to include routing information to this component
export default withRouter(Navbar)