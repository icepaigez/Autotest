import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

class User extends Component {

	constructor() {
		super()
		this.state = {
			user:""
		}
	}

	getText = e => {
		console.log(e.target.value)
	}

	componentDidMount() {
		const { location } = this.props;
		this.setState({
			user: location.state.user
		})
	}

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
		        <button onClick={this.getText} value="Primary" type="button" className="btn btn-primary">Primary</button>
				<button onClick={this.getText} type="button" value="Secondary" className="btn btn-secondary">Secondary</button>
				<button onClick={this.getText} type="button" value="Success" className="btn btn-success">Success</button>
				<button onClick={this.getText} type="button" value="Danger" className="btn btn-danger">Danger</button>
				<button onClick={this.getText} type="button" value="Warning" className="btn btn-warning">Warning</button>
				<button onClick={this.getText} type="button" value="Info" className="btn btn-info">Info</button>
				<button onClick={this.getText} type="button" value="Light" className="btn btn-light">Light</button>
				<button onClick={this.getText} type="button" value="Dark" className="btn btn-dark">Dark</button>
		      </div>
		)
	}
	
}

const DataWithNav = props => {
	const location  = useLocation();
	return <User {...props} location={location} />
}

export default DataWithNav;