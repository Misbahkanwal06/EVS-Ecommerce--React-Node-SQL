
const proRoutes = require("./products/proRoutes");
const procatRoutes = require("./productCategory/proCatRoutes");
const custRoutes = require('./Customer/customerRoutes');
const cartRoutes = require('./Cart/cartRoutes');


const mainRoutes = (fastify,options,done)=>{
    fastify.register(proRoutes,{prefix :"/products"});
    fastify.register( procatRoutes,{prefix :"/productsCategory"});
    fastify.register(custRoutes,{prefix:"/customer"});
    fastify.register(cartRoutes,{prefix:"/cart"});
    done();
}
module.exports = mainRoutes;