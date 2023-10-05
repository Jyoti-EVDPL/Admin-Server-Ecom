module.exports = (sequelize, DataTypes) => {
    return sequelize.define("offers_banner", {
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
        off: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        info: {
            type: DataTypes.STRING,
        },
        valid_from: {
            type: DataTypes.DATE,
        },
        valid_upto: {
            type: DataTypes.DATE,
        },
    }, {
        timestamps: false
    })

};