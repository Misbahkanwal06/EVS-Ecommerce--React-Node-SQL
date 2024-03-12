

const orderController = require('./orderController');

const orderRoutes = (fastify, options, done) => {

    fastify.post('/createorder', orderController.createOrder);
    fastify.get('/getorder', orderController.getOrderNo);
    fastify.get('/getorderdata/:orderNo', orderController.getOrderData);
    // fastify.get('/getorderdata',);
    // fastify.post('/updatecart/',cartController.updateCart);   // By queryParameters.
    done();
}

module.exports = orderRoutes;
