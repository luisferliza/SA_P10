const axios = require('axios');
const delay = require('delay');

const EBSIP = process.env.EBSIP || '182.18.7.10' ;



console.log("##################################")
console.log("############ CLIENTE #############")
console.log("##################################\n")

function orderFood() {
    console.log('Inicio de peticion')
    console.log('Enviando un pedido de Sushi al repartidor')
    axios.post(`http://${EBSIP}:5000/orderfood`,{food:'Sushi'})
        .then(function (response) {
            console.log(`El repartidor respondio: ${response.data.message}`)
        })
        .catch(function (error) {
            console.log(error)
            res.status(500).send({ "message": `Ocurrio un error al notificar la orden` });
        });

    console.log('Peticion de comida terminada')
}

function askStateRestaurant() {
    console.log('Inicio de peticion')
    console.log("Solicitando el estado del pedido 12345 al restaurante")
    axios.get(`http://${EBSIP}:5000/restaurantstate/12345`)
        .then(function (response) {
            console.log(`El repartidor respondio: ${response.data.message}`)
        })
        .catch(function (error) {
            console.log(error)
            res.status(500).send({ "message": `Ocurrio un error al notificar la orden` });
        });

    console.log('Peticion de estado a restaurante terminada')
}

function askStateDriver() {
    console.log('Inicio de peticion')
    console.log("Solicitando el estado del pedido 12345 al repartidor")
    axios.get(`http://${EBSIP}:5000/driverstate/12345`)
        .then(function (response) {
            console.log(`El repartidor respondio: ${response.data.message}`)
        })
        .catch(function (error) {
            console.log(error)
            res.status(500).send({ "message": `Ocurrio un error al notificar la orden` });
        });

    console.log('Peticion de estado a repartidor terminada')
}


(async () => {    
    await delay(7000);
    orderFood();
    await delay(2000);
    console.log('\n')
    askStateRestaurant();
    await delay(2000);
    console.log('\n')
    askStateDriver();    
})();