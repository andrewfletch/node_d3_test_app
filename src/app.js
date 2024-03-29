const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.send('Hello express!')
})

app.get('/about', (req, res) => {
    res.send('About page is under construction.')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})