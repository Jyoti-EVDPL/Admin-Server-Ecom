module.exports = (sequelize, DataTypes) => {
    return sequelize.define("categories", {
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
        image: {
            type: DataTypes.STRING,
        },
    },
        {
            timestamps: false
        }
    )
};