const categoryRepo = require("../repos/categories");
const ApiError = require("../utils/apiError");
const getAllCategories = async () => {
    const data = await categoryRepo.getAllCategories();
    if (!data) throw new ApiError(400, "Unable to create category")
    return data;
}
const createCategory = async (info) => {
    const data = await categoryRepo.createCategory(info);
    if (!data) throw new ApiError(400, "Unable to create category")
    return { message: "Category added successfully" };
}
const deleteCategory = async (id) => {
    const data = await categoryRepo.deleteCategory(id);
    if (!data[0]) throw new ApiError(400, "Unable to delete category")
    return { message: "Category deleted successfully" };
}
const updateCategory = async (id,info) => {
    const data = await categoryRepo.updateCategory(id,info);
    if (!data[0]) throw new ApiError(400, "Unable to update category")
    return { message: "Category updated successfully" };
}
module.exports = {
    getAllCategories,
    createCategory,
    deleteCategory,
    updateCategory,
}