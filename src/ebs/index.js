const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5000;
const RESIP = process.env.RESIP || '182.18.7.8';
const DRIIP = process.env.DRIIP || '182.18.7.9';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log("##################################")
console.log("########## EBS ###########")
console.log("##################################\n")




app.post('/notify_driver', (req, res) => {
    console.log("\n--------------------- Inicio de Peticion --------------------")
    console.log("Datos recibidos: " + req.body)
    axios.post(`http://${DRIP}:3200/notify_order`, {
        'id': req.body.id
    })
        .then(function (response) {
            console.log(`El repartidor respondio: ${response.data.message}`)
            res.status(200).send(response.data);
        })
        .catch(function (error) {
            console.log(error)
            res.status(500).send({ "message": `Ocurrio un error al notificar la orden` });
        });
    console.log("----------------- Finalizo la peticion ----------------\n")

});

app.post('/orderfood', (req, res) => {
    console.log("\n--------------------- Inicio de Peticion --------------------")
    console.log("Datos recibidos: " + JSON.stringify(req.body))
    axios.post(`http://${RESIP}:3000/request_food`, {
        'food': req.body.food
    })
        .then(function (response) {
            console.log(`El repartidor respondio: ${response.data.message}`)
            res.status(200).send(response.data);
        })
        .catch(function (error) {
            console.log(error)
            res.status(500).send({ "message": `Ocurrio un error al notificar la orden` });
        });
    console.log("----------------- Finalizo la peticion ----------------\n")

});


app.get('/restaurantstate/:id', (req, res) => {
    console.log("\n--------------------- Inicio de Peticion --------------------")
    console.log("Se estan solicitando datos del pedido: " + req.params.id)
    axios.get(`http://${RESIP}:3000/ask_state/` + req.params.id)
        .then(function (response) {
            console.log(`El repartidor respondio: ${response.data.message}`)
            res.status(200).send(response.data);
        })
        .catch(function (error) {
            console.log(error)
            res.status(500).send({ "message": `Ocurrio un error al notificar la orden` });
        });
    console.log("----------------- Finalizo la peticion ----------------\n")

});

app.get('/driverstate/:id', (req, res) => {
    console.log("\n--------------------- Inicio de Peticion --------------------")
    console.log("Se está solicitando al repartidor el estado del pedido: " + req.params.id)
    axios.get(`http://${DRIIP}:3200/ask_state/` + req.params.id)
        .then(function (response) {
            console.log(`El repartidor respondio: ${response.data.message}`)
            res.status(200).send(response.data);
        })
        .catch(function (error) {
            console.log(error)
            res.status(500).send({ "message": `Ocurrio un error al notificar la orden` });
        });
    console.log("----------------- Finalizo la peticion ----------------\n")

});



app.listen(port, () => {
    console.log(`API Rest corriendo en http://localhost:${port}`);

});
