import fs from 'fs'

//Read json
let msgs = {}
fs.readFile('../helpers/messages.json', 'utf-8', (err, data) => {
    if (err) return
    msgs = JSON.parse(data)
})

module.exports = msgs