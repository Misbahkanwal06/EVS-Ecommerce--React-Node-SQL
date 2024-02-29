


const dbSql = require("../dbs");
const {handleResponse} = require("../utils");

const proCreate = async (req,res)=>{
       console.log("req.body");
    // return req.body;
       try {
        const { name,price,createdat,updatedat } = req.body;
      const query = "INSERT INTO products(`proName`,`price`,`createdAt`,`updatedAt`)VALUES(?,?,?,?)";
    const values = [name,price,createdat,updatedat ];
        console.log(values); 
            const dbresult = await dbSql.execute(query, values);
            console.log(dbresult);
            res.send(handleResponse(201, "product created"));
    } catch (error) {
        console.log(error);
        res.send(handleResponse(500, "Error in product creating"))
    }
}


const getProducts = async (req,res) => {
    console.log("asg",req.params);
    // return req.params;
    const {id} = req.params;
    // return id
    console.log("here");
       try {
        const query = `Select * from products p JOIN product_category pc ON pc.proCatId = p.categoryId
        WHERE  categoryId = ${id} ` 
        ;
        console.log(query);
        const dbresult = await dbSql.execute(query);
        console.log("products asdad",dbresult);
        // return dbresult[0]; 
        res.send(handleResponse(201, "Here you got all products",dbresult[0]));
       } catch (error) {
        console.log(error);
        res.send(handleResponse(500, "Error in getting products"));
       }
}
module.exports = {proCreate, getProducts};