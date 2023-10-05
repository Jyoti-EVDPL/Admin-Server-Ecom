module.exports = (sequelize, DataTypes) => {
    return sequelize.define("delivery_addresses", {
        deliveryaddress_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Mobile: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        AlternateMobile: {
            type: DataTypes.STRING,
        },
        Pincode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        State: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        City: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        AddressLine1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        AddressLine2: {
            type: DataTypes.STRING,
        },
        Landmark: {
            type: DataTypes.STRING,
        },
        Type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: {
                    args: [["WORK", "HOME"]],
                    msg: "Type must be either WORK or HOME"
                }
            }
            //Home or Office
        },
        DefaultAddress: {
            type: DataTypes.BOOLEAN,
            //Home or Office
        },
        customerId: {
            field: "customer_id",
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null
        }
    })

};
// firstname: user.firstname,
// lastname: user.lastname,
// MobNo: user.MobNo,
// AddressLine1: user.AddressLine1,
// AddressLine2: user.AddressLine2,
// Country: user.Country,
// City: user.City,
// State: user.State,
// ZIPcode: user.ZIPcode,
// Landmark: user.Landmark,