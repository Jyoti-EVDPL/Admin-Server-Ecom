const db = require("../model/index")
const Categories = db.categories;

const getAllCategories = async () => {
    return Categories.findAll();
}
const createCategory = async (data) => {
    return Categories.create(data);
}
const deleteCategory = async (id) => {
    return Categories.destroy({ where: { id: id } });
}
const updateCategory = async (id, data) => {
    return Categories.update(data, { where: { id: id } });
}
module.exports = {
    getAllCategories,
    createCategory,
    deleteCategory,
    updateCategory,
}