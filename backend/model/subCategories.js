module.exports = (sequelize, DataTypes) => {
    return sequelize.define("sub_categories", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        categoryId: {
            field: "category_id",
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null
        },
        image: {
            type: DataTypes.STRING,
        },
    },
        {
            timestamps: false
        }
    )

};