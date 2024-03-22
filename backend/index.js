const express = require('express');
const mainRouter = require("./routes/index")
const cors = require("cors");
const { json } = require('body-parser');

app.use(cors())
app.use(express.json())

const app = express()

app.listen(3000)

app.use("/api/v1", mainRouter) //mainRouter is index router of the route folder
