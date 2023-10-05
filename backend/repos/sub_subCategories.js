const db = require("../model/index")
const sub_SubCategories = db.sub_subCategories;

const getAllsub_SubCategories = async (id) => {
    return sub_SubCategories.findAll({ where: { categoryId: id } });
}
const createsub_SubCategory = async (data) => {
    return sub_SubCategories.create(data);
}
const deletesub_SubCategory = async (id) => {
    return sub_SubCategories.destroy({ where: { id: id } });
}
const updatesub_SubCategory = async (id, data) => {
    return sub_SubCategories.update(data, { where: { id: id } });
}
module.exports = {
    getAllsub_SubCategories,
    createsub_SubCategory,
    deletesub_SubCategory,
    updatesub_SubCategory,
}