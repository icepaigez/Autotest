"use strict";
const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();
// const http = require("https");
const axios = require('axios');
const { TrackClient, RegionUS, RegionEU } = require("customerio-node");

const PORT = process.env.PORT || 4000;
let cio = new TrackClient(process.env.siteId, process.env.apiKey, { region: RegionUS });

const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());


let apiBuffer = Buffer.from(`${process.env.siteId}:${process.env.apiKey}`, "utf8");
let auth = apiBuffer.toString("base64");


server.get('/', (req, res) => {
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


server.post('/add_person', (req, res) => {
	try {
		let created_at = Date.now();
		let { id, email, first_name, last_name } = req.body;
		cio.identify(id, {
			email, created_at, first_name, last_name
		})
		res.status(200)
	} catch (error) {
		res.status(500).json(error)
	}	
})

server.post('/new_person', (req, res) => {
	let created_at = Date.now();
	let { id, email, first_name, last_name } = req.body;
	let url = `https://track.customer.io/api/v1/customers/${id}`
	axios.put(url, req.body, {
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