require('./config/config');

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.get('/usuario', function (req, res) {
  res.send('get Usuario')
})

app.post('/usuario', function (req, res) {
    let body = req.body;

    if(body.nombre === undefined ){

        res.status(400).send({
            ok: false,
            mensaje: 'El nombre es necesario'
        })

    } else{
        res.send({
            body
        })
    }

  })

  app.put('/usuario/:id', function (req, res) {
      let id = req.params.id;
    res.send({
        id
    })
  })

  app.delete('/usuario', function (req, res) {
    res.send('delete Usuario')
  })
 
app.listen(process.env.PORT, ()=>{
    console.log('Escuchando el puerto', 3000);
});