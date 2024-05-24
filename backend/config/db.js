const express = require("express")
const mongoose = require("mongoose") // new

// Connect to MongoDB database
mongoose
	.connect("mongodb+srv://mi7nfqh6b:heisenberg@cluster0.5ne9sud.mongodb.net/product?retryWrites=true&w=majority&appName=Cluster0", )
	.then(() => {
		const app = express()
	})