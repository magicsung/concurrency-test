const express = require('express')
const bodyParser = require('body-parser')
const port = 3000
const app = express()
const db = require('./models')
const Count = db.Count;

app.get('/count', (req, res) => {
  Count
    .findOne({ where: { name: 'test' } })
    .then(testCount => {
      if (!testCount) return Count.create({name: 'test', count: 0})
      return testCount
    })
    .then(testCount => {
      return testCount.update({ count: testCount.count + 1 })
    })
    .then(testCount => {
      const result = `testCount updated, ${JSON.stringify(testCount)}`
      console.log(result)
      res.send(result)
    })
})

app.get('/countWithInc', (req, res) => {
  Count
    .findOne({ where: { name: 'testWithInc' } })
    .then(testCount => {
      if (!testCount) return Count.create({name: 'testWithInc', count: 0})
      return testCount
    })
    .then(testCount => {
      return testCount.increment('count', {by: 1})
    })
    .then(testCount => {
      const result = `testCount updated, ${JSON.stringify(testCount)}`
      console.log(result)
      res.send(result)
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port 3000!`)
})
