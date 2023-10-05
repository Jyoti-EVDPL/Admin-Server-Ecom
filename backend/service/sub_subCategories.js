const sub_subCategoryRepo = require("../repos/sub_subCategories");
const ApiError = require("../utils/apiError");
const getAllsub_SubCategories = async (id) => {
    const data = await sub_subCategoryRepo.getAllsub_SubCategories(id);
    if (!data) throw new ApiError(400, "Unable to get sub category")
    return data;
}
const createsub_SubCategory = async (info) => {
    const data = await sub_subCategoryRepo.createsub_SubCategory(info);
    if (!data[0]) throw new ApiError(400, "Unable to create sub category")
    return { message: "Sub-category added successfully" };
}
const deletesub_SubCategory = async (id) => {
    const data = await sub_subCategoryRepo.deletesub_SubCategory(id);
    if (!data[0]) throw new ApiError(400, "Unable to delete sub category")
    return { message: "Sub-category deleted successfully" };
}
const updatesub_SubCategory = async (id, info) => {
    const data = await sub_subCategoryRepo.updatesub_SubCategory(id, info);
    if (!data[0]) throw new ApiError(400, "Unable to update sub category")
    return { message: "Sub-category updated successfully" };
}

module.exports = {
    getAllsub_SubCategories,
    createsub_SubCategory,
    deletesub_SubCategory,
    updatesub_SubCategory,
}
