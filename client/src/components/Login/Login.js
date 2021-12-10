import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./login.css";

class Login extends Component {

	constructor() {
		super()
		this.state = {
			email:"",
			password:""
		}
	}

	onEmailChange = e => {
		this.setState({
			email: e.target.value
		}) 
	}

	onPasswordChange = e => {
		this.setState({
			password: e.target.value
		})
	}

	handleSubmit = e => {
		e.preventDefault();
		const { email } = this.state;
		//to identify an existing person in the workspace and update attributes
		window._cio.identify({
			id: email, 
			created_at: Math.round(+new Date()/1000)
		})
		this.setState({
			email:"",
			password:""
		})
		this.props.navigate('/user', {
			state: {
				user: email
			}
		})
	}

	handleClick = () => {
		this.props.navigate('/');
	}


	render() {
		const { email, password } = this.state;
		const enabled = email.length > 0 && password.length > 0;
		return(
			<div className="Login">
			  <h1>Login</h1>	
		      <Form onSubmit={this.handleSubmit}>
		        <Form.Group size="lg" controlId="email">
		          <Form.Label>Email</Form.Label>
		          <Form.Control
		            autoFocus
		            type="email"
		            value={email}
		            onChange={this.onEmailChange}
		          />
		        </Form.Group>
		        <Form.Group size="lg" controlId="password">
		          <Form.Label>Password</Form.Label>
		          <Form.Control
		            type="password"
		            value={password}
		            onChange={this.onPasswordChange}
		          />
		        </Form.Group>
		        <Button block size="lg" type="submit" disabled={!enabled}>
		          Login
		        </Button>
		        <Button onClick={this.handleClick} block size="lg" type="submit">
		          Home
		        </Button>
		      </Form>
		    </div>
		)
	}
}

const WithNavigate = props => {
	let navigate = useNavigate();
	return <Login {...props} navigate={navigate} />
}

export default WithNavigate;