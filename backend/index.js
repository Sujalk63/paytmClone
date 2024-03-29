const express = require('express');
const mainRouter = require("./routes/index")
const cors = require("cors");
const { json } = require('body-parser');


const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1", mainRouter) //mainRouter is index router of the route folder
app.listen(3000)
console.log("app running at port 3000");



