const db = require("../model/index")
const OrderDetails = db.orders;

const getAllOrderDetails = async (data) => {
    return OrderDetails.findAll({ where: { customer_id: data.username } });
}
const SingleOrderDetails = async (id) => {
    return OrderDetails.findOne({ where: { order_id: id } });
}
const createOrderDetails = async (data) => {
    const data5 = {
        order_id: "DEMO3 ORDER_ID",
        customer_id: "DEMO3 USER",
        name: "DEMO3 DEMO3",
        billing_address: "DEMO3 BILLING",
        shipping_address: "DEMO3 SHIPPING",
        payment_mode: "COD",
        payment_status: null,
        shipping_id: null,
        shipping_status: null,
        // createdAt: "2023-06-01 00:00:00",
        // updatedAt: "2023-06-01 00:00:00"
    }
    return OrderDetails.create(data);
}
const deleteOrderDetails = async (id) => {
    return OrderDetails.destroy({ where: { id: id } });
}
const updateOrderDetails = async (id, data) => {
    return OrderDetails.update(data, { where: { id: id } });
}
module.exports = {
    getAllOrderDetails,
    SingleOrderDetails,
    createOrderDetails,
    deleteOrderDetails,
    updateOrderDetails,
}