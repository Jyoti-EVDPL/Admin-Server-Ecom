module.exports = (sequelize, DataTypes) => {
    return sequelize.define("products", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        uid: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        mrp: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        info: {
            type: DataTypes.STRING,
        },
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
        subSubCategoryId: {
            field: "sub_sub_category_id",
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null
        }
    }, {
        timestamps: false
    })

};