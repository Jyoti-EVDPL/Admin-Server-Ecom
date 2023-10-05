const productRepo = require('../repos/products');
const ApiError = require('../utils/apiError');

const getAllProducts = async () => {
    const data = await productRepo.getAllProducts();
    if (!data) throw new ApiError(400, "Unable to fetch all product")
    return data;
}
const getProductsByUid = async (id) => {
    const data = await productRepo.getProductsByUid(id);
    if (!data) throw new ApiError(400, "Unable to fetch product")
    return data;
}
const getProductsByid = async (id) => {
    const data = await productRepo.getProductsByid(id);
    if (!data) throw new ApiError(400, "Unable to fetch product")
    return data;
}
const getProductsBySubCategory = async (id) => {
    const data = await productRepo.getProductsBySubCategory(id);
    if (!data) throw new ApiError(400, "Unable to fetch product")
    return data;
}
const createProduct = async (info) => {
    const data = await productRepo.createProduct(info);
    if (!data[0]) throw new ApiError(400, "Unable to create product")
    return { message: "Product created successfully" };
}
const deleteProduct = async (id) => {
    const data = await productRepo.deleteProduct(id);
    if (!data[0]) throw new ApiError(400, "Unable to delete product")
    return { message: "Product deleted successfully" };
}
const updateProduct = async (id, info) => {
    const data = await productRepo.updateProduct(id, info);
    if (!data[0]) throw new ApiError(400, "Unable to update product")
    return { message: "Product updated successfully" };
}

const addProductImages = async (info) => {
    const data = await productRepo.addProductImages(info);
    if (!data) throw new ApiError(400, "Unable to upload image")
    return { message: "Image uploaded successfully" };
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