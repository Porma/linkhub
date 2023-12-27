const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World! from links')
})


router.post('/', (req, res) => {
    
})


module.exports = router
