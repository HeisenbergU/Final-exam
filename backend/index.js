const express = require("express")
require("./config/db")
const routes = require("./routes/routes")

const bodyparser = require('body-parser')
var cors = require('cors')

const app = express()
app.use(bodyparser.json())
app.use(cors())
app.use(express.json())
app.use("/api", routes) // new

app.listen(5000, () => {
	console.log("Server has started!")
})