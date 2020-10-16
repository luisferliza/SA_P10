const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;
const EBSIP = process.env.EBSIP || '182.18.7.10' ;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log("##################################")
console.log("########## Restaurante ###########")
console.log("##################################\n")


app.post('/request_food', (req, res) => {
  console.log("\n------- Se recibio una peticion -------")
  console.log(`Se esta recibiendo un pedido de: ${JSON.stringify(req.body.food)}`)
  res.status(200).send({ "message": `Pedido de ${req.body.food} recibido` });

  console.log("--------- Finalizo la peticion ---------\n")
});


app.get('/ask_state/:id', (req, res) => {
  console.log("\n------- Se recibio una peticion -------")
  console.log(`Se esta solicitando el estado del pedido ${req.params.id}`)
  res.status(200).send({ "message": `La orden con el id ${req.params.id} esta siendo procesada` });
  console.log("--------- Finalizo la peticion ---------\n")
});

app.get('/notify_driver', (req, res) => {
  console.log("\n------- Se enviara una peticion al repartidor -------")
  console.log(`Se esta notificando que el pedido ${123456} esta listo`)
  axios.post(`http://${EBSIP}:5000/notify_driver`, {
    id: '12345'
  })
    .then(function (response) {
      console.log(`El repartidor respondio: ${response.data.message}`)
      res.status(200).send({ "message": `Orden 123456 notificada correctamente` });
    })
    .catch(function (error) {
      console.log(error)
      res.status(200).send({ "message": `Ocurrio un error al notificar la orden` });
    });
  console.log("----------------- Finalizo la peticion ----------------\n")
});



app.listen(port, () => {
  console.log(`API Rest corriendo en http://localhost:${port}`);

});