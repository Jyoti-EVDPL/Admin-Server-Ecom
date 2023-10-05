const sub_subCategoryService = require("../service/sub_subCategories")
const getAllsub_SubCategories = async (req, res, next) => {
    try {
        const data = await sub_subCategoryService.getAllsub_SubCategories(req.params.id);
        res.send(data)
    } catch (e) { next(e) }

}
const createsub_SubCategory = async (req, res, next) => {
    try {
        const data = await sub_subCategoryService.createsub_SubCategory(req.body);
        res.send(data)
    } catch (e) { next(e) }

}
const deletesub_SubCategory = async (req, res, next) => {
    try {
        const data = await sub_subCategoryService.deletesub_SubCategory(req.params.id);
        res.send(data)
    } catch (e) { next(e) }

}
const updatesub_SubCategory = async (req, res, next) => {
    try {
        const data = await sub_subCategoryService.updatesub_SubCategory(req.params.id, req.body);
        res.send(data)
    } catch (e) { next(e) }

}
module.exports = {
    getAllsub_SubCategories,
    createsub_SubCategory,
    deletesub_SubCategory,
    updatesub_SubCategory,
}