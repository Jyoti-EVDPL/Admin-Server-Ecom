const db = require("../model/index")
const SubCategories = db.subCategories;

const getAllSubCategories = async (id) => {
    return SubCategories.findAll({ where: { categoryId: id } });
}
const createSubCategory = async (data) => {
    return SubCategories.create(data);
}
const deleteSubCategory = async (id) => {
    return SubCategories.destroy({ where: { id: id } });
}
const updateSubCategory = async (id, data) => {
    return SubCategories.update(data, { where: { id: id } });
}
module.exports = {
    getAllSubCategories,
    createSubCategory,
    deleteSubCategory,
    updateSubCategory,
}