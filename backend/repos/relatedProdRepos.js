const db = require("../model/index")
const ProductsDetail = db.products;
const SubCat = db.sub_subCategories;

const getRelProdDetails = async (data) => {
    console.log(data);
    const id = 1;
    return ProductsDetail.findAll({
        where: { sub_sub_category_id: data },
        // attributes: ['id', 'username', 'createdAt', 'updatedAt', 'RoleId'],
        // include: [{ model: UserRole, as: 'Role', include: [{ model: Permission, as: 'Permissions', attributes: { include: ['id', 'name'], exclude: 'UserRolePermission' } }] }]
    });

}
const SingleProductDetail = async (id) => {
    return ProductsDetail.findOne({ where: { order_id: id } });
}








const createProductsDetail = async (data) => {
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
    return ProductsDetail.create(data);
}
const deleteProductsDetail = async (id) => {
    return ProductsDetail.destroy({ where: { id: id } });
}
const updateProductsDetail = async (id, data) => {
    return ProductsDetail.update(data, { where: { id: id } });
}
module.exports = {
    getRelProdDetails,
    SingleProductDetail,
    createProductsDetail,
    deleteProductsDetail,
    updateProductsDetail,
}