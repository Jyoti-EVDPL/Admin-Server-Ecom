const express = require("express");
const validator = require('express-joi-validation').createValidator({})
const router = express.Router();
const multer = require("multer");

const passport = require("passport");
require("../helper/JwtStragey")(passport);

const authSchema = require("../validations/authenticationSchema");
const ctrl = require("./../controller/AuthController");
const User = require("../model/UserModel")
// const Role_Claims = require("../model/role_claims");


const claimsData = {
    emailtemplate: ["emailtemplate_view", "emailtemplate_edit", "emailtemplate_add", "emailtemplate_delete"],
    userlist: ["userlist_view", "userlist_edit", "userlist_add", "userlist_delete"],
    configuration: ["configuration_view", "configuration_edit", "configuration_add", "configuration_delete"],
    blog: ["blog_view", "blog_edit", "blog_add", "blog_delete"]
}
const claimsData2 = ["emailtemplate_view", "emailtemplate_edit", "emailtemplate_add", "emailtemplate_delete",
    "userlist_view", "userlist_edit", "userlist_add", "userlist_delete",
    "configuration_view", "configuration_edit", "configuration_add", "configuration_delete",
    "blog_view", "blog_edit", "blog_add", "blog_delete"]

const UserClaims = async (data) => {
    if (data == null)
        // return null;
        console.log("null data")
    else if (data.role_id == 1) {
        console.log("else if in claim list")
        console.log(claimsData2)
        return claimsData2;
    } 
    // else {
    //     const role_name = await Role_Claims.findAll({  raw: true,where: { role_id: data.role_id } })
    //     const array2 = ['emailtemplate_add', 'emailtemplate_delete', 'emailtemplate_view', 'configuration_view'];
    //     const array = [];
    //     // const er3344 = JSON.stringify(role_name)
    //     // for (const i = 0; i < role_name.length;i++){
    //     //     array.push(role_name[i].roleclaim_name)
    //     // }
    //     role_name.map((em)=>{
    //         return array.push(em.roleclaim_name)
    //     })
    //     console.log(array)
    //     // const rid = role_name[1]
    //     // console.log(rid.roleclaim_name)
    //     // role_name.forEach(role_name => {
    //     //     const array = [];
    //     //     const data1 = role_name.dataValues.roleclaim_name;
    //         //     const array2 = ['emailtemplate_add','emailtemplate_delete','emailtemplate_view'];
    //         //     array[array.length] = data;
    //         //     // console.log(data)
    //         // return data1;
    //     // });
    //     // console.log(role_name.datavalues.roleclaim_name);
    //     return array;
    // }
    // console.log(data.role_id)
};

module.exports = {
    UserClaims,
};