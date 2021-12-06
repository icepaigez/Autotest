import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import WithNavigate from "./components/Login/Login";
import RegWithNavigate from "./components/Register/Register";
import User from "./components/User/User";
import * as serviceWorker from './serviceWorker';
import "./index.css";

ReactDOM.render(
	<BrowserRouter> 
		<Routes>
			<Route path="/" element={<App />}/>
			<Route path="login" element={<WithNavigate />}/>
			<Route path="register" element={<RegWithNavigate />}/>
			<Route path="user" element={<User />}/>
		</Routes>
	</BrowserRouter>, 
	document.getElementById('root')
);
serviceWorker.unregister();
