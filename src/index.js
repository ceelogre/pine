import express from 'express'
import path from 'path'
const app = express()

import i18n from 'i18n'

i18n.configure({
    locales: ['en', 'fr'],
    directory: path.resolve(__dirname , '../' , 'locales/'),
})

app.use(i18n.init)
app.use(
    (req, res) => {
        let msg = res.__('404')
        res.json({msg})
    }
)
module.exports = app