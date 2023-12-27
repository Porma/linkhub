const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const Link = mongoose.model('Link')

router.get('/', (req, res) => {

  Link.find()
    .then(links => {
      res.send(links)
    })
    .catch(error => {
      console.log(error)
      res.send(error)
    })

  // res.send('Hello World! from links')
})


router.post('/', async (req, res) => {
  // Create document
  let link = new Link({
    title: req.body.title,
    uri: req.body.uri
  })

  // Save link document
  let result = await link.save()

  // Check if document was saved successfully
  if (result === link) {
    res.send({
      message: "Link successfully added to DB",
      link: result
    })

    return
  }

  // Failed to save
  res.send("uh oh spaghettio something went wrong")
})


module.exports = router
