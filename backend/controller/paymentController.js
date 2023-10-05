const instance = require('../server');
var crypto = require("crypto");
const Razorpay = require('razorpay');
const productService = require('../service/products');
const shortid = require('shortid');

const checkout = async (req, res, next) => {
    const options = {
        amount: Number(req.body.amount * 100),  // amount in the smallest currency unit(Eg:Indian(Paisa))
        currency: "INR",
        receipt: shortid.generate()
    };
    try {
        const order = await instance.orders.create(options);
        // const order = {
        //     id: 'order_Lg1DJGMHPgnjEq',
        //     entity: 'order',
        //     amount: 1269200,
        //     amount_paid: 0,
        //     amount_due: 1269200,
        //     currency: 'INR',
        //     receipt: 'IdZYz9vj3',
        //     offer_id: null,
        //     status: 'created',
        //     attempts: 0,
        //     notes: [],
        //     created_at: 1681987779
        // }
        console.log("hyy", order);
        res.status(200).json({
            success: true,
            order
        });
    } catch (e) {
        next(e)
    }
}

const paymentVerification = async (req, res, next) => {
    const webHookSecret = "@G6gTasGp8-Qpxr"
    console.log(req.body)
    const expectedSignature2 = crypto.createHmac('sha256', webHookSecret)
        .update(JSON.stringify(req.body))
    const digest = expectedSignature2.digest('hex');
    console.log(digest, req.headers['x-razorpay-signature'])
    const isAuthenticated = digest.match(req.headers['x-razorpay-signature']);
    if (isAuthenticated) {
        console.log("Payment Successfully authenticated")
        //DATABASE Store After This
        // res.status(200).json({
        //     success: true,
        // });
        res.json({ status: 'ok' });
    }

    //FOR CALLBACK URL----------
    // console.log(req.body);
    // const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    // const body = razorpay_order_id + "|" + razorpay_payment_id;

    // const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET)
    //     .update(body.toString())
    //     .digest('hex');
    // console.log("sig received ", razorpay_signature);
    // console.log("sig generated ", expectedSignature);
    // // if (expectedSignature === razorpay_signature)
    // //     response = { "signatureIsValid": "true" }
    // // res.send(response);
    // const isAuthenticated = expectedSignature.match(razorpay_signature);
    // if (isAuthenticated) {
    //     //DATABASE Store After This
    //     // res.status(200).json({
    //     //     success: true,
    //     // });
    //     res.redirect(`http://localhost:3400/checkout/paymentsuccess?reference=${razorpay_payment_id}`);

    // } else {
    //     res.status(400).json({
    //         success: false,
    //     });
    // }

    // try {
    //     const order = await instance.orders.create(options);
    //     console.log(order);
    //     res.status(200).json({
    //         success: true,
    //         order
    //     });
    // } catch (e) {
    //     next(e)
    // }
}

const demopaymentVerification = async (req, res, next) => {
    console.log(req.body);
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET)
        .update(body.toString())
        .digest('hex');
    console.log("sig received ", razorpay_signature);
    console.log("sig generated ", expectedSignature);
    // if (expectedSignature === razorpay_signature)
    //     response = { "signatureIsValid": "true" }
    // res.send(response);
    const isAuthenticated = expectedSignature.match(razorpay_signature);
    if (isAuthenticated) {
        //DATABASE Store After This
        res.status(200).json({
            success: true,
        });
        // res.redirect(`http://localhost:3400/checkout/paymentsuccess?reference=${razorpay_payment_id}`);
        console.log("Same payment")

    } else {
        console.log("Wrong Payment")
        // res.status(400).json({
        //     success: false,
        // });
    }
}

const democreateorder = async (req, res, next) => {
    console.log("Demo Order Working");
    console.log(req.body);
    res.status(200).json({
        success: true,
    });
}
// COD Order
const codCreateorder = async (req, res, next) => {
    console.log("COD Order Working");
    console.log(req.body);
    res.status(200).json({
        success: true,
        orderID: 'AP5214SDFSDF0012'
    });
}
// PREPAID Order
const prepaidCreateorder = async (req, res, next) => {
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

// // Generate Order Id
// // First Order ID--------------------
// function generateOrderID() {
//     // Get current timestamp
//     const timestamp = Date.now().toString();
//     // Generate random 4-digit number
//     const random = Math.floor(Math.random() * 9000) + 1000;
//     // Generate order ID by combining timestamp, random, and user ID
//     const orderID = `OD${timestamp}${random}`;
//     return orderID;
// }
// // Example usage
// const orderID = generateOrderID();
// console.log(orderID);
// // Second Order ID--------------------
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
// console.log(orderID2);


module.exports = {
    checkout,
    paymentVerification,
    demopaymentVerification,
    democreateorder,
    postmancreateorder,
    codCreateorder,
    prepaidCreateorder,
}