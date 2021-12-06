import React, { Component } from "react";
import { Link } from "react-router-dom";

class User extends Component {
	render() {
		return(
			<div className="app">
		        User Homepage
		        <nav
		          style={{
		            borderBottom: "solid 1px",
		            paddingBottom: "1rem"
		          }}
		        >
		          <div className="btns">
		            <Link to="/">Logout</Link>
		          </div>
		        </nav>
		      </div>
		)
	}
	
}

export default User;