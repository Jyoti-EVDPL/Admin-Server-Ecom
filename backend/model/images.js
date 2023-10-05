module.exports = (sequelize, DataTypes) => {
    return sequelize.define("images", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
        },
        productId: {
            field: "product_id",
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null
        }
    }, {
        timestamps: false
    })

};