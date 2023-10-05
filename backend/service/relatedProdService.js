const relatedProdRepo = require("../repos/relatedProdRepos");
const ApiError = require("../utils/apiError");

const getRelProdDetails = async (id) => {
    const data = await relatedProdRepo.getRelProdDetails(id);
    if (!data) throw new ApiError(400, "Unable to get order details")
    return data;
}
const productDetails = async (id) => {
    console.log(id);
    const data = await relatedProdRepo.SingleProductDetails(id);
    // console.log(data);
    if (!data) throw new ApiError(400, "Unable to get order details")
    console.log(data);
    return data;
}
const createOrderDetails = async (info) => {
    const order_id = generateOrderID();
    info = {
        ...info, // Spread the existing properties of info object
        order_id: order_id, // Add the order_id property to the info object
    };
    const data = await relatedProdRepo.createOrderDetails(info);
    // console.log(data);
    if (!data) throw new ApiError(400, "Unable to create OrderDetails")
    return { message: "Order createded successfully" };
}
const deleteOrderDetails = async (id) => {
    const data = await relatedProdRepo.deleteOrderDetails(id);
    if (!data[0]) throw new ApiError(400, "Unable to delete sub category")
    return { message: "Sub-category deleted successfully" };
}
const updateOrderDetails = async (id, info) => {
    const data = await relatedProdRepo.updateOrderDetails(id, info);
    if (!data[0]) throw new ApiError(400, "Unable to update sub category")
    return { message: "Sub-category updated successfully" };
}

module.exports = {
    getRelProdDetails,
    productDetails,
    createOrderDetails,
    deleteOrderDetails,
    updateOrderDetails,
}
