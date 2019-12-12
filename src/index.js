import express from 'express'
const app = express()
app.use(
    (req, res) => {
        res.send('Get to work. I\'m up and running.')
    }
)
module.exports = app