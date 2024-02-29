

const cartController = require("./cartController");


const cartRoutes = (fastify,options,done)=>{ 
    
    fastify.post('/create',cartController.createCart);
    fastify.get('/getcart/:custId',cartController.getCart);

    done();
}
module.exports = cartRoutes;

