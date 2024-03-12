


const { getData, insertdata, updateData, getlastVAlue, viewOrderNo , viewOrderNoDetails} = require('./orderModel');
const { handleResponse, random } = require('../utils');


// const createOrder = async (req, res) => {
//     const array = req.body;
//     try {
//         let arr = [];
//         for (let i = 0; i < array.length; i++) {
//             // console.log("i", array[i]);
//             // const item = array[i];
//             const { custId, prodid, quantity } = array[i];
//             const dbres = await getData(custId, quantity, prodid);
//             //  return dbres;
//             let emptyStr = "OR-000001";
//             emptyStr = random(emptyStr);
//             for (let j = 0; j < dbres.length; j++) {
//                 console.log("abc",dbres[j] );
//                 arr.push(dbres[j]);
//             }
//         }
//         return arr;
//     } catch (error) {
//         console.log("error in controller", error);
//     }
// }

const createOrder = async (req, res) => {
    const array = req.body;
    // return array;
    try {
        let emptyStr = "OR-000001";
        let ordNo = getlastVAlue();
        // return ordNo;
        emptyStr = random(ordNo.ordNo);
        // emptyStr = ordNo ? random(ordNo.ordNo) : null;
        // let arr = [];
        for (let i = 0; i < array.length; i++) {
            const { custId, prodid, quantity, price } = array[i];
            console.log("custId, prodid, quantity, price", custId, prodid, quantity, price);
            const dbres = await getData(custId, quantity, prodid);
            // return dbres;
            for (let j = 0; j < dbres.length; j++) {
                const orderObject = {
                    ...dbres[j],
                    orderNo: emptyStr,
                    amount: price,
                }
                let { orderNo, cartId, prodId, quant, createdAt, amount } = orderObject;
                console.log("orderNo, cartId, prodId, price, quant, createdAt", orderNo, cartId, prodId, quant, createdAt, amount);
                // // Order obj ko db me insert kerna hy step 1
                let dbRESULT = await insertdata(orderNo, cartId, prodId, amount, quant, createdAt);
                // return dbRESULT;
                console.log("dbRESULT", dbRESULT);
                // us cart id ka is order true kerna hy step 2
                let response = await updateData(cartId);
            }

            // arr.push(orderObject);
            // for (let k = 0; k < arr.length; k++) {
            //     const { orderNo, cartId, prodId, price, quant, createdAt } = arr[i];
            //     let dbRESULT = await insertdata(orderNo, cartId, prodId, price, quant, createdAt);
            //     updateData(cartId);
            //     console.log(dbRESULT);
            //     // return dbRESULT;
            // }
        }
        // return arr;
    } catch (error) {
        console.log("error in controller", error);
    }
}

const getOrderNo = async (req, res) => {
    try {
        const dbres = await viewOrderNo();
        // return dbres;
        res.send(handleResponse(201, "Inserted in card", dbres));
    } catch (error) {
        console.log("error in controller", error);
    }
}


const getOrderData = async (req, res) => {
    try {
        const { orderNo } = req.params;
        const dbres = await viewOrderNoDetails(orderNo);
        return dbres;
    } catch (error) {
        console.log("error in controller", error);
    }
}

module.exports = { createOrder, getOrderNo, getOrderData };


// let createdAt = new Date();
// let prefix = "OR";
// const uniqueCode = await  generateUniqueCode(prefix);
// // console.log("uniqueCode", uniqueCode);
// // return uniqueCode;
// const dbresult = await insertdata(uniqueCode,cartid,proid, price, quantity,createdAt);
// return dbresult;




// return dbres;
// for (let i = 0; i <= dbres.length; i++) {
//     // console.log("e",dbres[i]);
//     let emptyStr = "OR-000001";
//     emptyStr = random(emptyStr);
//     // let { cartId, prodId, quant, createdAt } = dbres;
//     return dbres;
//     let dbRESULT = await insertdata(emptyStr, cartId, prodId, price, quant, createdAt)
//     console.log(dbRESULT);
//     return dbRESULT;
// }