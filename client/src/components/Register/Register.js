import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./register.css";

class Register extends Component {

	constructor() {
		super()
		this.state = {
			name:"",
			email:"",
			password:""
		}
	}

	onNameChange = e => {
		this.setState({
			name: e.target.value
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
		const { name, email } = this.state;
		//used to create a new person in the workspace
		window._cio.identify({
			id: email,
			name,
			created_at: Date.now()
		})
		this.setState({
			name:"",
			email:"",
			password:""
		})
	}

	handleClick = () => {
		this.props.navigate('/');
	}

	render() {
		const { name, email, password } = this.state;
		const enabled = email.length > 0 && password.length > 0 && name.length > 0;
		return(
			<div className="register">
			  <h1>Register</h1>	
		      <Form onSubmit={this.handleSubmit}>
		      	<Form.Group size="lg" controlId="name">
		          <Form.Label>Name</Form.Label>
		          <Form.Control
		            autoFocus
		            type="text"
		            value={name}
		            onChange={this.onNameChange}
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