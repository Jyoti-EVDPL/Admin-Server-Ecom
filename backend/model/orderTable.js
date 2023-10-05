module.exports = (sequelize, DataTypes) => {
    return sequelize.define("orders", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        order_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        customer_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
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

        payment_mode: {
            type: DataTypes.STRING,
            validate: {
                isIn: {
                    args: [["COD", "PREPAID"]],
                    msg: "Type must be either (COD or PREPAID)"
                }
            }
        },
        //
        payment_status: {
            type: DataTypes.STRING,
        },
        shipping_id: {
            type: DataTypes.STRING,
        },
        shipping_status: {
            //(PLACED/PACKING/SHIPPED/OUTFORDELIVERY/DELIVERED)
            type: DataTypes.STRING,
            validate: {
                isIn: {
                    args: [["PLACED", "PACKING", "SHIPPED", "OUTFORDELIVERY", "DELIVERED"]],
                    msg: "Type must be either (PLACED or PACKING or SHIPPED or OUTFORDELIVERY or DELIVERED)"
                }
            }
        }
    })
};