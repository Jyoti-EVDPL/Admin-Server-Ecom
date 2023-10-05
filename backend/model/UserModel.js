module.exports = (sequelize, DataTypes) => {
  return sequelize.define("customers", {
    customer_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    full_name: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "column"
    },
    email_id: {
      type: DataTypes.STRING,
      unique: "column"
    },
    phnumber: {
      type: DataTypes.STRING,
      unique: "column"
    },
    DOB: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    pincode: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    enabled2FA: {
      type: DataTypes.BOOLEAN,
      // allowNull: false,
    },
  })
};

// const Otps = sequelize.define("Admin-OTP", {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//     allowNull: false,
//   },
//   user_id: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//   },
//   otp: {
//     type: Sequelize.STRING,
//   },
//   isUsed: {
//     type: Sequelize.BOOLEAN,
//     allowNull: false,
//   },
//   timestamp: {
//     type: Sequelize.DATE,
//     defaultValue: Sequelize.NOW
//   },

// }, {
//   timestamps: false
// }
// );

// const fOtps = sequelize.define("Admin-F-OTP", {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//     allowNull: false,
//   },
//   user_id: {
//     type: Sequelize.INTEGER,
//   },
//   otp: {
//     type: Sequelize.STRING,
//   },
//   isUsed: {
//     type: Sequelize.BOOLEAN,
//   },
//   timestamp: {
//     type: Sequelize.DATE,
//     defaultValue: Sequelize.NOW
//   },

// }, {
//   timestamps: false
// }
// );

// User.hasMany(Otps, {
//   foreignKey: 'user_id',
//   sourceKey: 'id'
// })

// Otps.belongsTo(User, {
//   foreignKey: 'user_id',
//   targetKey: 'id'
// })

// User.hasMany(fOtps, {
//   foreignKey: 'user_id',
//   sourceKey: 'id'
// })

// fOtps.belongsTo(User, {
//   foreignKey: 'user_id',
//   targetKey: 'id'
// })

// sequelize.sync({ alter: true });
// console.log("All models were synchronized successfully.");

// module.exports = User, Otps;