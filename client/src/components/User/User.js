import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

class User extends Component {

	constructor() {
		super()
		this.state = {
			user:"",
			texta:"",
			textb:"",
			textc:""
		}
	}

	getTexta = e => {
		this.setState({
			texta: e.target.value
		}, () => {
			window._cio.track("click action", {
				"item_clicked" : `${this.state.texta} Button`
			})
		})
	}

	getTextb = e => {
		this.setState({
			textb: e.target.value
		}, () => {
			window._cio.track("click action", {
				"item_clicked" : `${this.state.textb} Button`
			})
		})
	}

	getTextc = e => {
		this.setState({
			textc: e.target.value
		}, () => {
			window._cio.track("click action", {
				"item_clicked" : `${this.state.textc} Button`
			})
		})
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
		        <button onClick={this.getTexta} value="Primary" type="button" className="btn btn-primary">Primary</button>
				<button onClick={this.getTextb} type="button" value="Secondary" className="btn btn-secondary">Secondary</button>
				<button onClick={this.getTextc} type="button" value="Success" className="btn btn-success">Success</button>
		      </div>
		)
	}
	
}

const DataWithNav = props => {
	const location  = useLocation();
	return <User {...props} location={location} />
}

export default DataWithNav;