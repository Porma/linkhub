const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const port = 3080;

app.use(morgan('tiny'))
app.use(cors())
app.use(bodyParser.json())

app.use('/api/links', require('./routes/links'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})