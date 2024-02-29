

const dbSql = require('../dbs');
const { handleResponse } = require("../utils");

const catCreate = async (req, res) => {
    console.log("req.body");
    //  return req.body;

    try {
        const { procatId, catname, createdat, updatedat } = req.body;
        const query = "INSERT INTO product_category(`proCatId`,`catName`,`createdAt`,`updatedAt`)VALUES(?,?,?,?)";
        const values = [procatId, catname, createdat, updatedat];
        //    return values;
        const dbresult = await dbSql.execute(query, values);
        //  return dbresult;
        console.log("dbresult", dbresult);
        res.send(handleResponse(201, "Product Category added"),);
    } catch (error) {
        console.log(error);
        res.send(handleResponse(500, "Error in creating category"));
    }
}

const getCategories = async (req,res) => {
    console.log("here");
       try {
        const query = `select * from product_category`;
        console.log("query",query);
        const dbresult = await dbSql.execute(query);
        // console.log("getCategories",dbresult[0]); 
        console.log("DBRES",dbresult[0]);
        // return dbresult;
        res.send(handleResponse(201,"Here you got all categories",dbresult));

       } catch (error) {
        console.log(error);
        res.send(handleResponse(500, "Error in getting Categories"));
       }
}

module.exports = { catCreate, getCategories };