const db = require("../model/index")
const Products = db.products;
const Images = db.images;

const getAllProducts = async () => {
    return Products.findAll();
}
const getProductsByUid = async (id) => {
    return Products.findOne({ where: { uid: id } });
}
const getProductsByid = async (id) => {
    return Products.findOne({ where: { id: id } });
}
const getProductsBySubCategory = async (id) => {
    return Products.findAll({ where: { subCategoryId: id } });
}
const createProduct = async (data) => {
    return Products.create(data);
}
const deleteProduct = async (id) => {
    return Products.destroy({ where: { id: id } });
}
const updateProduct = async (id, data) => {
    return Products.update(data, { where: { id: id } });
}
const addProductImages = async (data) => {
    return Images.create(data);
}

module.exports = {
    getAllProducts,
    getProductsByUid,
    getProductsByid,
    getProductsBySubCategory,
    createProduct,
    deleteProduct,
    updateProduct,
    addProductImages
}