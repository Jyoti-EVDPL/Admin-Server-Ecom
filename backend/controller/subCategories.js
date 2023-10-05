const subCategoryService = require("../service/subCategories")
const getAllSubCategories = async (req, res, next) => {
    try {
        const data = await subCategoryService.getAllSubCategories(req.params.id);
        res.send(data)
    } catch (e) { next(e) }

}
const createSubCategory = async (req, res, next) => {
    try {
        const data = await subCategoryService.createSubCategory(req.body);
        res.send(data)
    } catch (e) { next(e) }

}
const deleteSubCategory = async (req, res, next) => {
    try {
        const data = await subCategoryService.deleteSubCategory(req.params.id);
        res.send(data)
    } catch (e) { next(e) }

}
const updateSubCategory = async (req, res, next) => {
    try {
        const data = await subCategoryService.updateSubCategory(req.params.id, req.body);
        res.send(data)
    } catch (e) { next(e) }

}
module.exports = {
    getAllSubCategories,
    createSubCategory,
    deleteSubCategory,
    updateSubCategory,
}