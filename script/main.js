const express = require('express')
const app = express()
const path = require('path');
const port = 3000



app.get('/', (req, res) => {
  res.send('Bienvenido')
  res.status(500).send("Something broke!");
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/eimy', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
     app.use(express.static(path.join(__dirname, 'public')));
})
app.get('/productos/:sku', (req, res) => {
    res.send(req.params)
})

