const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res.send('Hello World!')
})

app.get('/:resCode', (req, res) =>{
    res.sendStatus(req.params.resCode)
})

app.listen(3000, () => {
    console.log('Tiny test server listening on port 3000!')
})
