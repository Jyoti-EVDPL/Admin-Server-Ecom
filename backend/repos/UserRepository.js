//DATABASE LAYER
//insted of reepeting model everywhere we declared it here
//IMP:no error handling will be done here also in controller
const fs = require("fs");
const db = require("../model/index")

const User = db.customers;
const fOtps = db.customers;
const uImage = db.customers;
const EmailTemp = db.customers;
const ConfigTbl = db.customers;
const LocationTbl = db.customers;
const role_table = db.customers;
const claim_table = db.customers;
const module_table = db.customers;
const User_Role = db.customers;
const Role_Claims = db.customers;
const ProductsTbl = db.customers;
const orderAddressTbl = db.customers;
//Protected Routes
const DeliAddress = db.delivery_address;


//-------------------PROTECTED ROUTES-----------------------------------
//User Delivery Address Route
const DeliveryAddView = async (data) => {
    return DeliAddress.findAll({ where: { customer_id: data } });
};
const DeliveryAddAdd = async (data) => {
    return DeliAddress.create(data);
};
const DeliveryAddEdit = async (data) => {
    return User.create({
        full_name: data.fullname,
        username: data.username,
        email_id: data.emailid,
        phnumber: data.phnumber,
        DOB: data.DOB,
        country: data.country,
        state: data.state,
        city: data.city,
        pincode: data.pincode,
        password: data.password,
    });
};
const DeliveryAddDelete = async (data) => {
    return User.create({
        full_name: data.fullname,
        username: data.username,
        email_id: data.emailid,
        phnumber: data.phnumber,
        DOB: data.DOB,
        country: data.country,
        state: data.state,
        city: data.city,
        pincode: data.pincode,
        password: data.password,
    });
};

//User Profile Route
//-------------------------END------------------------------------------

//for signup
const SignUp = async (data) => {
    return User.create({
        full_name: data.fullname,
        username: data.username,
        email_id: data.emailid,
        phnumber: data.phnumber,
        DOB: data.DOB,
        country: data.country,
        state: data.state,
        city: data.city,
        pincode: data.pincode,
        password: data.password,
    });
};

//for login
const SignIn = async (data) => {
    return User.findOne({ where: { username: data.username } });
};

const SignUp2 = async (fullname, username, emailid, phnumber, DOB, country, state, city, pincode, password) => {
    await User.create({
        full_name: fullname,
        username: username,
        email_id: emailid,
        phnumber: phnumber,
        DOB: DOB,
        country: country,
        state: state,
        city: city,
        pincode: pincode,
        password: password,
    });
};
// let username = req.body.username;
// let fullName = req.body.fullName;
// let emailid = req.body.emailid;
// let password;

// await bcrypt.hash(req.body.password, 10).then(function (hash) {
//     password = hash;
// });
// const data = await User.create({
//     full_name: fullName,
//     user_name: username,
//     password: password,
//     email_id: emailid,
// });
// message = "Data added successfully"

//User Profile View:
const Profile = async (username) => {
    console.log(username)

    // const data = await User.findOne({
    // }, {
    //     where: { username },
    //     attributes: { include: ["full_name", "email_id", "phnumber", "DOB", "country", "state", "city", "pincode", "profile_image"] },
    // });
    const data = await User.findOne({ where: { username: username } });

    // console.log(data.dataValues);
    // const data2 = data.dataValues;
    // console.log(data2.full_name)
    // const data3 = data2.full_name
    // const data4 = data2.email_id
    // const data5 = data2.phnumber
    // const data6 = data2.full_name
    // const data7 = data2.full_name
    // const data8 = data2.full_name

    return data.dataValues;
};

const UpdProf = async (fullname, emailid, phnumber, DOB, country, state, city, pincode) => {
    // await User()
    // await bcrypt.hash(password, 10).then(function (hash) {
    //     password = hash;
    // console.log(hash);
    // console.log(password);
    // console.log(phnumber);
    // });
    const username = "amitpatra"
    await User.update({
        full_name: fullname,
        email_id: emailid,
        phnumber: phnumber,
        DOB: DOB,
        country: country,
        state: state,
        city: city,
        pincode: pincode
    }, { where: { username } });
};

const UpdProfPIC = async (username, file) => {
    await uImage.create({
        username: username,
        type: file.mimetype,
        name: file.filename,
        data: fs.readFileSync("resources/uploads/" + file.filename
        ),
    }).then((image) => {
        fs.writeFileSync("resources/tmp/" + image.name,
            image.data
        );
    });
    return true;
};

const DelProf = async (param) => {
    const username = "Evan.Pouros"
    // await User.destroy({
    //     full_name,
    //     email_id,
    //     phnumber,
    //     DOB,
    //     country,
    //     state,
    //     city,
    //     pincode
    // }, { where: { username: param } });
    await User.destroy({ where: { username: param } });
};

const DelUser = async (param) => {
    await User.destroy({ where: { username: param } });
};

const AddUse = async (username, hash_password) => {
    await User.create({
        username: username,
        password: hash_password
    });
};

const SavedAddressViewUser = async (username) => {
    const data = await User.findAll({ where: { isAdmin: false } });
    return data;
};
//----------------------------------------------------------------------------------------------------------------------------------------------
//COMPLETE ADMIN PAGE---------------------------------------------------------------------------------------------------------------------------COMPLETE ADMIN PAGE
//..//User Management
//User List
const ViewUser = async (username) => {
    const data = await User.findAll({ where: { isAdmin: false } });
    return data;
};
//----------------------------------------------------------------------------------------------->
//..//Role Management
//Role List
const ViewRole = async (username) => {
    const data = await role_table.findAll({});
    return data;
};
//Role List
const ViewClaim = async (role_id) => {
    const data = await Role_Claims.findAll({
        where: { role_id: role_id },
        // include: {
        //     model: Role_Claims,
        //     attributes: ["roleclaim_name"]
        // },
    });
    const data1 = data.dataValues;
    console.log(data1)
    return data;
};
//Role Add(OLD METHOD)
// const AddRole = async (role_name, role_isactive, role_desc, claim) => {
//     const data = await role_table.create({
//         role_name: role_name,
//         role_isactive: role_isactive,
//         role_desc: role_desc,
//     });
//     if (data.dataValues.role_id) {
//         for (let i = 0; i < claim.length; i++) {
//             await role_table.create({
//                 role_id: data.dataValues.role_id,
//                 roleclaim_name: claim[i].name,
//             })
//         }
//     }
//     console.log(data);
//     return data;
// };
//Role Add NEW METHOD
const AddRole = async (role_name, role_isactive, role_desc, claim) => {
    const data = await role_table.create({
        role_name: role_name,
        role_isactive: role_isactive,
        role_desc: role_desc,
    });
    if (data) {
        const roleclaim = claim.map(el => {
            return {
                role_id: data.dataValues.role_id,
                roleclaim_name: el,
            }
        })
        console.log(roleclaim)
        const data2 = await Role_Claims.bulkCreate(roleclaim)
        return data2;
    } else {
        console.log("no data set in role claim data")
    }
};
//Role Add NEW METHOD
const EditRole = async (role_id, role_name, role_isactive, role_desc, claim) => {
    const data = await role_table.update({
        role_name: role_name,
        role_isactive: role_isactive,
        role_desc: role_desc
    },
        { where: { role_id: role_id } }
    );
    if (data) {
        const data2 = await Role_Claims.destroy({ where: { role_id: role_id } })
        if (data !== null) {
            const roleclaim = claim.map(el => {
                return {
                    role_id: role_id,
                    roleclaim_name: el,
                }
            })
            console.log(roleclaim)
            const data3 = await Role_Claims.bulkCreate(roleclaim)
            return data3;
        } else {
            console.log("no data set in role claim data")
        }
    } else return false;

};
//To Delete Role
const DeleteRole = async (username, role_id) => {
    const user_db = await User.findOne(
        { where: { username: username } }
    );
    console.log(user_db.dataValues.isAdmin)
    console.log(role_id)
    if (user_db.dataValues.isAdmin) {
        const data2 = await Role_Claims.destroy({ where: { role_id: role_id } })
        if (data2 != null) {
            const data1 = await role_table.destroy({ where: { role_id: role_id } });
            if (data1 != null) {
                console.log(data2)
                console.log(data1)
                return true;
            }
            return false;
        }
        return false;
    }
    return false;
};
//----------------------------------------------------------------------------------------------->
// For 2FA Store OTP process
const SendOtp2FA = async (username, otp) => {
    const data = await User.findOne({ where: { username: username } });
    if (data) {
        await fOtps.create({
            username: username,
            otp: otp,
            user_id: data.id,
            for_twoFA: true,
        })
        return data.dataValues;
    }
};
// For 2FA Verify OTP process
const VErifyOtp2FA = async (username, otp) => {
    console.log("First Line")
    const fiveMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);//only data saved within five minute taken(as of now changed to 10 minutes)
    const { Op } = require("sequelize");
    console.log(username)

    const data = await fOtps.findOne({
        where: {
            // user_id: username,
            for_twoFA: {
                [Op.eq]: true
            },
            isUsed: {
                [Op.eq]: false
            },
            timestamp: {
                [Op.gt]: fiveMinutesAgo
            },
            username: {
                [Op.eq]: username
            },
        },
        order: [['timestamp', 'DESC']]
    });
    console.log(data.dataValues.otp);
    console.log(data.dataValues.id)
    console.log("Last Line")
    //for table destruction
    if (data.dataValues.otp == otp) {
        console.log("Successfully")
        await fOtps.update({
            isUsed: true
        }, {
            where: {
                id: data.dataValues.id
            }
        })
        await fOtps.destroy({
            where: {
                for_twoFA: {
                    [Op.eq]: true
                },
                // isUsed: {
                //     [Op.eq]: true
                // },
                timestamp: {
                    [Op.lt]: fiveMinutesAgo
                },
                username: {
                    [Op.eq]: username
                },
            },
        })
    }
    else {
        console.log("Failure")
    }

    // if (data) {
    //     await fOtps.update({
    //         isUsed: 'TRUE',
    //     })
    // }
    // return data.dataValues.otp;
};
//----------------------------------------------------------------------------------------------->
//Forgot Password
const ForgPass = async (username, otp) => {
    const data = await User.findOne({ where: { username: username } });
    if (data) {
        await fOtps.create({
            username: username,
            otp: otp,
            user_id: data.id,
            for_fpass: true,
        })
    }
    return data.dataValues.email_id;
};

// const VerifyOTP = async (data) => {
//     const data = await User.update(
//         { password: data.newpassword},
//         { where: { username: username } }
//     );
//     await fOtps.create({
//         user_id: data.id,
//         otp: otp
//     })
//     return data.dataValues.email_id;
// };

const ResetPass = async (data) => {
    const dbOtp = await fOtps.findOne(
        { otp: otp },
        { where: { user_id: username } }
    );
    if (data.otp == dbOtp.otp) {
        const data1 = await User.update(
            { password: data.newpassword },
            { where: { username: username } }
        );
        await fOtps.update({
            isUsed: 'TRUE',
        })
    }
    return data.dataValues.email_id;
};

//-------------------------------------------------------------------------------------------
//To Add Template
const AddETemp = async (name, title, description) => {
    const data = await EmailTemp.create({
        templatename: name,
        title: title,
        body: description
    });
    return data;
};
//To View Template
const ViewETemp = async (name, title, description) => {
    const data = await EmailTemp.findAll({
    });
    // console.log(data.dataValues)
    // console.log("hello")
    return data;
};
//To Delete Template
const DeleETemp = async (username, id) => {
    const user_db = await User.findOne(
        { where: { username: username } }
    );
    if (user_db.dataValues.isAdmin) {
        const data1 = await EmailTemp.destroy(
            { where: { id: id } }
        );
        return true;
    } else {
        return false;
    }
};

//-------------------------------------------------------------------------------------------
//To Add Config
const AddEConfig = async (name, title, description) => {
    const data = await ConfigTbl.create({
        configname: name,
        title: title,
        description: description
    });
    return data;
};
//To View Config
const ViewEConfig = async (name, title, description) => {
    const data = await ConfigTbl.findAll({
    });
    // console.log(data.dataValues)
    // console.log("hello")
    return data;
};
//To Update Config
const UpdateEConfig = async (name, title, description, config_id) => {
    const data = await ConfigTbl.update({
        configname: name,
        title: title,
        description: description
    }, { where: { config_id: config_id } });
    if (data) {
        return true;
    } else {
        return false;
    }
};
//To Delete Config
const DeleEConfig = async (username, config_id) => {
    const user_db = await User.findOne(
        { where: { username: username } }
    );
    console.log(user_db.dataValues)
    console.log(config_id)
    if (user_db.dataValues.isAdmin) {
        const data1 = await ConfigTbl.destroy(
            { where: { config_id: config_id } }
        );
        return true;
    } else {
        return false;
    }
};

//---------------------------------------------------------------------------------------
//User Location Data
const AddELoc = async (businessName, businessWebsite, city, continent, country, countryCode, ipName, ipType, isp, lat, lon, org, query, region, status) => {
    const data = await LocationTbl.create({
        businessName: businessName,
        businessWebsite: businessWebsite,
        city: city,
        continent: continent,
        country: country,
        countryCode: countryCode,
        ipName: ipName,
        ipType: ipType,
        isp: isp,
        lat: lat,
        lon: lon,
        org: org,
        query: query,
        region: region,
        status: status
    });
    return data;
};
//---------------------------------------------------------------------------------------

//this is used to update password later
// const UpdtPass = async (username) => {
//     const data = await User.findOne({ where: { username: username } });
//     return data;
// };

//---------------------------------------------------------------------------------------
//PRODUCTS LIST
const ViewProducts = async (username) => {
    const data = await ProductsTbl.findAll({});
    return data;
};

module.exports = {
    //-------------------PROTECTED ROUTES-----------------------------------
    DeliveryAddView,
    DeliveryAddAdd,
    DeliveryAddEdit,
    DeliveryAddDelete,
    //User Profile Route
    //-------------------------END------------------------------------------
    //-------------------------END------------------------------------------
    SignIn,
    SignUp,
    Profile,
    UpdProf,
    UpdProfPIC,
    //----------------------------------------------------------------------------------------------------------------------------------------------
    //COMPLETE ADMIN PAGE
    //..//User Management
    ViewUser,
    DelProf,
    DelUser,
    AddUse,

    SavedAddressViewUser,
    //..//Role Management
    ViewRole,
    ViewClaim,
    AddRole,
    EditRole,
    DeleteRole,

    SendOtp2FA,
    VErifyOtp2FA,
    ForgPass,
    // VerifyOTP,
    ResetPass,
    AddETemp,
    ViewETemp,
    DeleETemp,
    AddEConfig,
    ViewEConfig,
    UpdateEConfig,
    DeleEConfig,
    //----------------------------------------------------------------
    AddELoc,
    //----------------------------------------------------------------
    //Products
    ViewProducts,
}