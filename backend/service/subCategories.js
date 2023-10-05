const subCategoryRepo = require("../repos/subCategories");
const ApiError = require("../utils/apiError");
const getAllSubCategories = async (id) => {
    const data = await subCategoryRepo.getAllSubCategories(id);
    if (!data) throw new ApiError(400, "Unable to get sub category")
    return data;
}
const createSubCategory = async (info) => {
    const data = await subCategoryRepo.createSubCategory(info);
    if (!data[0]) throw new ApiError(400, "Unable to create sub category")
    return { message: "Sub-category added successfully" };
}
const deleteSubCategory = async (id) => {
    const data = await subCategoryRepo.deleteSubCategory(id);
    if (!data[0]) throw new ApiError(400, "Unable to delete sub category")
    return { message: "Sub-category deleted successfully" };
}
const updateSubCategory = async (id, info) => {
    const data = await subCategoryRepo.updateSubCategory(id, info);
    if (!data[0]) throw new ApiError(400, "Unable to update sub category")
    return { message: "Sub-category updated successfully" };
}

module.exports = {
    getAllSubCategories,
    createSubCategory,
    deleteSubCategory,
    updateSubCategory,
}
