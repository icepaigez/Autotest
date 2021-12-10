"use strict";
const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();
const axios = require('axios');


const PORT = process.env.PORT || 4000;

const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());


let apiBuffer = Buffer.from(`${process.env.siteId}:${process.env.apiKey}`, "utf8");
let auth = apiBuffer.toString("base64");


server.get('/region', (req, res) => {
	let url = "https://track.customer.io/api/v1/accounts/region"
	axios.get(url, {
		headers: {
			"Authorization": `Basic ${auth}`
		}
	})
	.then(response => {
		res.status(200).json(response.data)
	})
	.catch(err => {
		res.status(500).json(err)
	})
})

server.post('/new_person', (req, res) => {
	let created_at = Math.round(new Date()/1000);
	let { id, email, first_name, last_name } = req.body;
	let params =  { created_at, email, first_name, last_name }
	let url = `https://track.customer.io/api/v1/customers/${id}`
	axios.put(url, params, {
		headers: {
			"Authorization": `Basic ${auth}`
		}
	})
	.then(response => {
		res.status(200).json(response.data)
	})
	.catch(err => {
		res.status(500).json(err)
	})
})


server.post('/events', (req, res) => {
	let { name, data } = req.body;
	let { id, item_clicked } = data;
	let params =  { name, data : { item_clicked } }
	let url = `https://track.customer.io/api/v1/customers/${id}/events`
	axios.post(url, params, {
		headers: {
			"Authorization": `Basic ${auth}`
		}
	})
	.then(response => {
		res.status(200).json(response.data)
	})
	.catch(err => {
		res.status(500).json(err)
	})
})

server.post('/event_backfill', (req, res) => {
	let today = new Date();
	let backDate = today.setDate(today.getDate() - 5); //5 days back
	let timestamp = Math.round(backDate/1000);
	let { name, data } = req.body;
	let { id, item_clicked } = data;
	let params =  { name, timestamp, data : { item_clicked } }
	let url = `https://track.customer.io/api/v1/customers/${id}/events`
	axios.post(url, params, {
		headers: {
			"Authorization": `Basic ${auth}`
		}
	})
	.then(response => {
		res.status(200).json(response.data)
	})
	.catch(err => {
		res.status(500).json(err)
	})
})

server.listen(PORT, () => {
	console.log(`The server is listening on port ${ PORT }`)
})