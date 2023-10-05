const orderDetailsRepo = require("../repos/orderRepos");
const ApiError = require("../utils/apiError");

// GENERATE ORDER ID
const generateOrderID = () => {
    const randomFourDigit = Math.floor(Math.random() * 9000) + 1000;
    const currentDate = new Date();
    const year = currentDate.getFullYear().toString();
    const timestamp = Date.now().toString();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const dayOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'][currentDate.getDay()];
    const firstName = 'John'; // Replace with the user's first name
    const lastName = 'Doe'; // Replace with the user's last name
    const firstNameInitial = firstName.charAt(0).toUpperCase();
    const lastNameInitial = lastName.charAt(0).toUpperCase();
    // const orderID = `IN-${randomFourDigit.toString().slice(0, 2)}${firstNameInitial}${randomFourDigit.toString().slice(0, 1)}${lastNameInitial}-${year}-${timestamp}-${month}-${dayOfWeek}-${day}-${randomFourDigit}`;//01J0D
    // const orderID = `IN-${randomFourDigit.toString().slice(0, 2)}${firstNameInitial}${randomFourDigit.toString().slice(2, 4)}${lastNameInitial}-${year}-${timestamp}-${month}-${dayOfWeek}-${day}-${randomFourDigit}`;//14J25D
    const orderID = `IN${randomFourDigit.toString().slice(0, 2)}${firstNameInitial}${randomFourDigit.toString().slice(2, 4)}${lastNameInitial}${year}${timestamp}${month}${dayOfWeek}${day}${randomFourDigit}`;
    return orderID;
};

const getAllOrderDetails = async (id) => {
    // console.log(id);
    const data = await orderDetailsRepo.getAllOrderDetails(id);
    // console.log(data);
    if (!data) throw new ApiError(400, "Unable to get order details")
    console.log(data);
    return data;
}
const singleOrderDetails = async (id) => {
    console.log(id);
    const data = await orderDetailsRepo.SingleOrderDetails(id);
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
    const data = await orderDetailsRepo.createOrderDetails(info);
    // console.log(data);
    if (!data) throw new ApiError(400, "Unable to create OrderDetails")
    return { message: "Order createded successfully" };
}
const deleteOrderDetails = async (id) => {
    const data = await orderDetailsRepo.deleteOrderDetails(id);
    if (!data[0]) throw new ApiError(400, "Unable to delete sub category")
    return { message: "Sub-category deleted successfully" };
}
const updateOrderDetails = async (id, info) => {
    const data = await orderDetailsRepo.updateOrderDetails(id, info);
    if (!data[0]) throw new ApiError(400, "Unable to update sub category")
    return { message: "Sub-category updated successfully" };
}

module.exports = {
    getAllOrderDetails,
    singleOrderDetails,
    createOrderDetails,
    deleteOrderDetails,
    updateOrderDetails,
}
