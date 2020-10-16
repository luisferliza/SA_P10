// returns the order descriprion
function getOrderDescription(id) {
    let orders = [
        { id: 1, Description: "Pollo Frito", client: 25, status: 0},
        { id: 2, Description: "Sushi", client: 3, status: 2},
        { id: 3, Description: "Carne Asada", client: 54, status: 1},
        { id: 4, Description: "Postres", client: 11, status: 2}

    ]
    for (let index = 0; index < orders.length; index++) {
        const element = orders[index];
        if( element.id == id){
            return element.Description;
        }
    }
    return null;
}
 
// returns the order status
function getOrderStatus(id) {
    let orders = [
        { id: 1, Description: "Pollo Frito", client: 25, status: 0},
        { id: 2, Description: "Sushi", client: 3, status: 2},
        { id: 3, Description: "Carne Asada", client: 54, status: 1},
        { id: 4, Description: "Postres", client: 11, status: 2}

    ]
    for (let index = 0; index < orders.length; index++) {
        const element = orders[index];
        if( element.id == id){
            return element.status;
        }
    }
    return null;
}

// returns new order
function createNewOrder(id, Description, client){
    //El status por defecto es 0, preparando
    return { id: id, Description: Description, client: client, status: 0}

}
 
// exports the variables and functions
module.exports.getOrderDescription = getOrderDescription;
module.exports.getOrderStatus = getOrderStatus;
module.exports.createNewOrder = createNewOrder;