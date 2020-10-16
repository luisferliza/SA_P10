const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 3200;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


console.log("##################################")
console.log("########### Repartidor ###########")
console.log("##################################\n")

app.post('/notify_order', (req, res) => {    
    console.log("\n------- Se recibio una peticion -------")
    console.log(`Datos recibidos: ${JSON.stringify(req.body)}`)    
    console.log(`Se esta notificando que el pedido ${req.body.id} esta listo`)
    res.status(200).send({ "message": `Notificacion de orden ${req.body.id} recibida` });
    console.log("--------- Finalizo la peticion ---------\n")
});


app.get('/ask_state/:id', (req, res) => {    
    console.log("\n------- Se recibio una peticion -------")
    console.log(`Se esta solicitando el estado del pedido ${req.params.id}`)
    res.status(200).send({ "message": `La orden con el id ${req.params.id} esta en camino` });
    console.log("--------- Finalizo la peticion ---------\n")
});


app.get('/end_order', (req, res) => {    
    console.log("\n------- Se recibio una peticion -------")
    console.log(`Se cambiara el estado del pedido a entregado`)    
    res.status(200).send({ "message": `Orden Finalizada exitosamente` });
    console.log("--------- Finalizo la peticion ---------\n")
});


app.listen(port, () => {
    console.log(`API Rest corriendo en http://localhost:${port}`);

});