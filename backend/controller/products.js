const productService = require('../service/products')

const getAllProducts = async (req, res, next) => {
    try {
        const data = await productService.getAllProducts();
        res.send(data)
    } catch (e) { next(e) }
}
const getProductsByUid = async (req, res, next) => {
    try {
        const data = await productService.getProductsByUid(req.params.id);
        res.send(data)
    } catch (e) { next(e) }
}
const getProductsByid = async (req, res, next) => {
    try {
        const data = await productService.getProductsByid(req.params.id);
        res.send(data)
    } catch (e) { next(e) }
}
const getProductsBySubCategory = async (req, res, next) => {
    try {
        const data = await productService.getProductsBySubCategory(req.params.id);
        res.send(data)
    } catch (e) { next(e) }
}
const createProduct = async (req, res, next) => {
    try {
        const data = await productService.createProduct(req.body);
        res.send(data)
    } catch (e) { next(e) }
}
const deleteProduct = async (req, res, next) => {
    try {
        const data = await productService.deleteProduct(req.params.id);
        res.send(data)
    } catch (e) { next(e) }
}
const updateProduct = async (req, res, next) => {
    try {
        const data = await productService.updateProduct(req.params.id, req.body);
        res.send(data)
    } catch (e) { next(e) }
}
const addProductImages = async (req, res, next) => {
    try {
        const data = await productService.addProductImages(req.body);
        res.send(data)
    } catch (e) { next(e) }
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