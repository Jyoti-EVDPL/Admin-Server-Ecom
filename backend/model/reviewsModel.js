module.exports = (sequelize, DataTypes) => {
    return sequelize.define("orders", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        product_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        customer_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ratings: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        reviews: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // categoryId: {
        //     field: "category_id",
        //     type: DataTypes.INTEGER,
        //     allowNull: true,
        //     defaultValue: null
        // },
        billing_address: {
            type: DataTypes.STRING,
        },
        shipping_address: {
            type: DataTypes.STRING,
        },
        payment_status: {
            type: DataTypes.STRING,
        },
        shipping_id: {
            type: DataTypes.STRING,
        }
    })
};