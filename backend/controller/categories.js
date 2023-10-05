const categoryService = require("../service/categories")
const getAllCategories = async (req, res, next) => {
    try {
        const data = await categoryService.getAllCategories();
        res.send(data)
    } catch (e) { next(e) }

}
const createCategory = async (req, res, next) => {
    try {
        const data = await categoryService.createCategory(req.body);
        res.send(data)
    } catch (e) { next(e) }

}
const deleteCategory = async (req, res, next) => {
    try {
        const data = await categoryService.deleteCategory(req.params.id);
        res.send(data)
    } catch (e) { next(e) }

}
const updateCategory = async (req, res, next) => {
    try {
        const data = await categoryService.updateCategory(req.params.id, req.body);
        res.send(data)
    } catch (e) { next(e) }

}
module.exports = {
    getAllCategories,
    createCategory,
    deleteCategory,
    updateCategory,
}