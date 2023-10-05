require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
    process.env.DB,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
        logging: false,
    }
);

sequelize
    .authenticate()
    .then(() => console.log("Database connection successful"))
    .catch(e => console.log("Some error in DB connection", e))

const db = {};
db.sequelize = sequelize;
//Protected Routes
db.delivery_address = require("./deliveryAddress")(sequelize, DataTypes);
db.orders = require("./orderTable")(sequelize, DataTypes);
//---END---
db.customers = require("./UserModel")(sequelize, DataTypes);
db.products = require("./products")(sequelize, DataTypes);
db.images = require("./images")(sequelize, DataTypes);
db.categories = require("./categories")(sequelize, DataTypes);
db.subCategories = require("./subCategories")(sequelize, DataTypes);
db.sub_subCategories = require("./sub_subCategories")(sequelize, DataTypes);

db.offersBanner = require("./offersBanner")(sequelize, DataTypes);

db.delivery_address.belongsTo(db.customers, {
    foreignKey: {
        name: "customer_id",
        allowNull: false
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
})

db.subCategories.belongsTo(db.categories, {
    foreignKey: ["categoryId", "category_id"],
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
})
db.categories.hasMany(db.subCategories, {
    foreignKey: ["categoryId", "category_id"],
    onUpdate: "CASCADE",
    onDelete: "SET NULL"
})
db.sub_subCategories.belongsTo(db.subCategories, {
    foreignKey: ["subCategoryId", "sub_category_id"],
    onUpdate: "CASCADE",
    onDelete: "SET NULL"
})
db.subCategories.hasMany(db.sub_subCategories, {
    foreignKey: ["subCategoryId", "sub_category_id"],
    onUpdate: "CASCADE",
    onDelete: "SET NULL"
})
db.products.belongsTo(db.sub_subCategories, {
    foreignKey: ["subSubCategoryId", "sub_sub_category_id"],
    onUpdate: "CASCADE",
    onDelete: "SET NULL"
})
db.sub_subCategories.hasMany(db.products, {
    foreignKey: ["subSubCategoryId", "sub_sub_category_id"],
    onUpdate: "CASCADE",
    onDelete: "SET NULL"
})
db.images.belongsTo(db.products, {
    foreignKey: ["productId", "product_id"],
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
})
db.products.hasMany(db.images, {
    foreignKey: ["productId", "product_id"],
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
})
// sequelize
//     .sync({ alter: true })
//     .then(() => {
//         console.log("Table Altered");
//     })
//     .catch((err) => {
//         console.log("Error in table modification:", err);
//     });

module.exports = db;
