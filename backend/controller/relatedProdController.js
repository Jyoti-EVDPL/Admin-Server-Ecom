const relatedProdService = require('../service/relatedProdService');
const { v4: uuidv4 } = require('uuid');

// ALL ORDER(FIND ALL)
const reelatedProducts = async (req, res, next) => {
    try {
        const data = await relatedProdService.getRelProdDetails(req.params.id);
        res.send(data)
    } catch (e) { next(e) }
}
const productdetails = async (req, res, next) => {
    try {
        const data = await relatedProdService.productDetails(req.params.id);
        res.send(data)
    } catch (e) { next(e) }
}
// COD Order(Creation)
const codCreateorder = async (req, res, next) => {
    try {
        const data = await relatedProdService.createOrderDetails(req.body);
        res.send(data)
    } catch (e) { next(e) }

    // try {
    //     const data = await relatedProdService.deleteSubCategory(req.params.id);
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



module.exports = {
    reelatedProducts,
    productdetails,
    democreateorder,
    postmancreateorder,
    codCreateorder,
    prepaidCreateorder,
}