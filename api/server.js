// Modules
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

// Database
const connectDB = require('./db.js')

// Config
const port = 3080;

// Middleware
app.use(morgan('tiny'))
app.use(cors())
app.use(bodyParser.json())

// Connect to DB
connectDB()

// Routes
app.use('/api/links', require('./routes/links'))

// Listen
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})