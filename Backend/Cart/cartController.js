



const dbSql = require("../dbs");
const { handleResponse } = require('../utils');
const jwt = require("jsonwebtoken");

// const {  tokenVerification } = require('../Security/jwtToken');
const createCart = async (req, res) => {
    try {
        const { prodId, custId, quantity } = req.body;
        let createdAt = new Date();
        let isOrder = 0;
        // const isOrder = req.body.isOrder !== undefined ? req.body.isOrder : 0;
        // const query = "INSERT INTO cart(`prodId`, `quant`, `isOrder`, `custId`) VALUES (?, ?, ?, ?)";
        const query = "INSERT INTO cart(`prodId`, `quant`, `custId`,`isOrder`,`createdAt`) VALUES (?, ?, ?, ?, ?)";
        for (let i = 0; i < quantity; i++) {
            const values = [prodId, 1, custId, isOrder, createdAt];
            await dbSql.execute(query, values);
        }
        res.send(handleResponse(201, "Your product has been added to the cart"));
    } catch (error) {
        console.log(error);
        res.send(handleResponse(500, "Error in adding product to cart"));
    }
}

const getCart = async (req, res) => {
    const { custId } = req.params;
    // return custId;
    try {
        const query = `SELECT p.proName, cs.fName, cs.lName, c.custId, pc.proCatId, p.proID, pc.catName, 
        SUM(quant) as TotalQuantity FROM cart c 
        JOIN customer cs ON cs.cstId = c.custId 
        join products p on p.proID = c.prodId
        join product_category pc on pc.proCatId=p.categoryId
        where c.custId=${custId}
        GROUP BY prodId, custId;`
            ;
        const dbresult = await dbSql.execute(query);
        console.log("customer cart", dbresult);
        //return dbresult;
        // return dbresult[0];
        res.send(handleResponse(201, "Here you got all products", dbresult[0]));
    } catch (error) {
        console.log(error);
        res.send(handleResponse(500, "Error in getting products"));
    }
}

module.exports = { createCart, getCart }









