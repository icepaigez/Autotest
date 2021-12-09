import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./register.css";

class Register extends Component {

	constructor() {
		super()
		this.state = {
			first_name:"",
			last_name:"",
			email:"",
			password:""
		}
	}

	onFirstNameChange = e => {
		this.setState({
			first_name: e.target.value
		})
	}

	onLastNameChange = e => {
		this.setState({
			last_name: e.target.value
		})
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
		const { first_name, last_name, email } = this.state;
		//used to create a new person in the workspace using the JS snippet
		window._cio.identify({
			id: email,
			first_name, last_name,
			created_at: Date.now()
		})
		this.setState({
			first_name:"",
			last_name:"",
			email:"",
			password:""
		})
		this.props.navigate('/user');
	}

	handleClick = () => {
		this.props.navigate('/');
	}

	render() {
		const { first_name, last_name, email, password } = this.state;
		const enabled = email.length > 0 && password.length > 0 && first_name.length > 0 && last_name.length > 0;
		return(
			<div className="register">
			  <h1>Register</h1>	
		      <Form onSubmit={this.handleSubmit}>
		      	<Form.Group size="lg" controlId="first_name">
		          <Form.Label>First Name</Form.Label>
		          <Form.Control
		            autoFocus
		            type="text"
		            value={first_name}
		            onChange={this.onFirstNameChange}
		          />
		        </Form.Group>
		        <Form.Group size="lg" controlId="last_name">
		          <Form.Label>Last Name</Form.Label>
		          <Form.Control
		            autoFocus
		            type="text"
		            value={last_name}
		            onChange={this.onLastNameChange}
		          />
		        </Form.Group>
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
		          Register
		        </Button>
		        <Button onClick={this.handleClick} block size="lg" type="submit">
		          Home
		        </Button>
		      </Form>
		    </div>
		)
	}
}

const RegWithNavigate = props => {
	let navigate = useNavigate();
	return <Register {...props} navigate={navigate} />
}

export default RegWithNavigate;