const express = require('express')
const cors = require('cors')
// const pool = require("./database")
const studentRoutes = require("./routes")

const app = express()

app.use(express.json())
// app.use(express.urlencoded({ extended: false }));
app.use(cors())


app.get("/", (req, res) => {
    res.send("Hello world")
})

app.use("/students", studentRoutes)

app.listen(4000, () => {
    console.log("Server running on: 4000")
})