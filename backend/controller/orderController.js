const instance = require('../server');
var crypto = require("crypto");
const Razorpay = require('razorpay');
const productService = require('../service/orderService');
const shortid = require('shortid');
const { v4: uuidv4 } = require('uuid');

// ALL ORDER(FIND ALL)
const getAllorder = async (req, res, next) => {
    try {
        const data = await productService.getAllOrderDetails(req.body);
        res.send(data)
    } catch (e) { next(e) }
}
const singleorder = async (req, res, next) => {
    try {
        const data = await productService.singleOrderDetails(req.params.id);
        res.send(data)
    } catch (e) { next(e) }
}
// COD Order(Creation)
const codCreateorder = async (req, res, next) => {
    try {
        const data = await productService.createOrderDetails(req.body);
        res.send(data)
    } catch (e) { next(e) }

    // try {
    //     const data = await productService.deleteSubCategory(req.params.id);
    //     res.send(data)
    // } catch (e) { next(e) }
}
// PREPAID Order(Creation)
const prepaidCreateorder = async (req, res, next) => {
    console.log("Demo Order Working");
    console.log(req.body);
    res.status(200).json({
        success: true,
    });
}

const democreateorder = async (req, res, next) => {
    console.log("Demo Order Working");
    console.log(req.body);
    res.status(200).json({
        success: true,
    });
}

const postmancreateorder = async (req, res, next) => {
    const { paymentmode, id } = req.body;
    if (paymentmode === 'COD') {
        console.log("Postman Order Working");
    } else if (paymentmode === 'PREPAID') {
        console.log("Postman Prepaid Order Working");
    } console.log("Error")
    // console.log("Postman Order Working");
    // console.log(paymentmode);
    // console.log(req.body);
    res.status(200).json({
        success: true,
    });
}



// // 1ST ORDER ID-----------------------------------
// function generateOrderID1() {
//     // Get current timestamp
//     const timestamp = Date.now().toString();
//     // Generate random 4-digit number
//     const random = Math.floor(Math.random() * 9000) + 1000;
//     // Generate order ID by combining timestamp, random, and user ID
//     const orderID1 = `OD${timestamp}${random}`;
//     return orderID1;
// }
// // Example usage
// const orderID1 = generateOrderID1();
// console.log("1st Order");
// console.log(orderID1);

// // 2ND ORDER ID-----------------------------------
// function generateOrderID2() {
//     // Generate a random number between 1 and 1000000000.
//     const randomNumber = Math.floor(Math.random() * 1000000000);
//     // Convert the random number to a string.
//     const randomNumberString = randomNumber.toString();
//     // Generate a cryptographic hash of the random number.
//     const hash = crypto.createHash("sha256");
//     hash.update(randomNumberString);
//     const hashString = hash.digest("hex");

//     // Return the first 10 digits of the hash string.
//     return hashString.substring(0, 10);
// }
// const orderID2 = generateOrderID2();
// console.log("2nd Order");
// console.log(orderID2);


// function generateOrderID3() {
//   // Generate a UUID (Universally Unique Identifier).
//   const uuid = uuidv4();
//   // Get the current timestamp in milliseconds.
//   const timestamp = Date.now();
//   // Generate a random number between 1 and 100000.
//   const randomNumber = Math.floor(Math.random() * 100000) + 1;
//   // Combine the timestamp, random number, and UUID to create the order ID.
//   const orderID3 = `${timestamp}-${randomNumber}-${uuid}`;
//   return orderID3;
// }

// // Example usage:
// const orderID3 = generateOrderID3();
// console.log("3rd Order")
// console.log(orderID3);


module.exports = {
    getAllorder,
    singleorder,
    democreateorder,
    postmancreateorder,
    codCreateorder,
    prepaidCreateorder,
}