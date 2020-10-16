const assert = require('chai').assert;
const createNewOrder = require('../src/order').createNewOrder;
const getOrderDescription = require('../src/order').getOrderDescription;
const getOrderStatus = require('../src/order').getOrderStatus;

describe('GetOrderDescription', function(){
    it('app should return Sushi', function(){
        assert.equal(getOrderDescription(2), 'Sushi');
    })
})

describe('GetNullOrderDescription', function(){
    it('app should return Sushi', function(){
        assert.equal(getOrderDescription(-1), null);
    })
})

describe('GetOrderStatus', function(){
    it('app should return 2', function(){
        assert.equal(getOrderStatus(4), 2);
    })
})

describe('GetNullOrderStatus', function(){
    it('app should return Sushi', function(){
        assert.equal(getOrderStatus(-1), null);
    })
})

describe('CreateOrder', function(){
    it('app should return {4, Postres, Cient, Status}', function(){
        let order = createNewOrder(4,'Postres',11);
        assert.deepEqual(order,{ id: 4, Description: "Postres", client: 11, status: 0});        
    })
})

