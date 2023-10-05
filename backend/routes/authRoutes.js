const express = require("express");
const validator = require('express-joi-validation').createValidator({})
const router = express.Router();

const passport = require("passport");
require("../helper/JwtStragey")(passport);

const authSchema = require('../validations/authenticationSchema');
const ctrl = require('../controller/AuthController');
const { upload } = require("../helper/imageUploader");
const checkoutCtrl = require('../controller/paymentController');
const createOrderCtrl = require('../controller/orderController');
const relatedProdCtrl = require('../controller/relatedProdController');


//Authentication Routes
router.post("/signup2", validator.query(authSchema.SignUpSchema), ctrl.SignUp);
router.post('/signup', validator.body(authSchema.SignUpSchema2), ctrl.SignUp);
router.post('/login', validator.body(authSchema.SignInSchema), ctrl.SignIn);
//forgotPassword Routes
router.post("/forgotpassword", validator.body(authSchema.ResetPassSchema), ctrl.ForgotPassword);//done with React
router.post("/submitpassword", validator.body(authSchema.SubmtOtpPassSchema),//done with React
    passport.authenticate("jwt", { session: false }), ctrl.SubmitPassword);
//2FA routes
router.post("/twoFAverified", passport.authenticate("jwt", { session: false }));
router.post("/login/twoFAgenerateOTP", validator.query(authSchema.SignIn2FASchema), ctrl.SignIn2FAgen);
router.post("/login/twoFAsubmitOTP", validator.query(authSchema.SignIn2FASchema), ctrl.SignIn2FAsub);
router.post("/login/twoFAgenerateOTP", ctrl.SignIn2FAgen);
router.post("/login/twoFAsubmitOTP", ctrl.SignIn2FAsub);
//Home page
router.get("/home", ctrl.Homepage);
router.post("/home/profile", ctrl.Profile);
// router.post("/home/profile/updateprofilepic", upload, ctrl.UploadProfilePic);
router.post("/home/SavedAddressView", ctrl.SavedAddressView);
router.post("/home/SavedAddressAdd", ctrl.SavedAddressAdd);
router.post("/home/SavedAddressEdit", ctrl.SavedAddressEdit);
router.post("/home/SavedAddressDelete", ctrl.SavedAddressDelete);
// router.post("/home/profile/updateprofilepic", upload.array("profile_pic",5), ctrl.UploadProfilePic);
// router.post("/home/profile/updateprofilepic", upload.none(), ctrl.UploadProfilePic);
// router.post("/home/profile/photo", upload, ctrl.ProfilePic);
router.patch("/home/updateprofile", validator.body(authSchema.UpdateSchema), ctrl.UpdateProfile);
router.delete("/home/deleteprofile", ctrl.DeleteProf);

//-------------------PROTECTED ROUTES-----------------------------------
//Payments Gateway routes
router.post('/checkout', checkoutCtrl.checkout);//For creating the order
router.post('/paymentverification', checkoutCtrl.paymentVerification);
router.post('/demopaymentverification', checkoutCtrl.demopaymentVerification);
router.post('/confirmorder', checkoutCtrl.democreateorder);
// After Payment OR Before Payment ORDER    -:APIs:-------------------------------->
router.post('/allorders', createOrderCtrl.getAllorder);              // FOR ALL ORDER
router.post('/allorders/:id', createOrderCtrl.singleorder);          // FOR ALL ORDER
router.post('/codorder', createOrderCtrl.codCreateorder);           // FOR COD
router.post('/prepaidorder', createOrderCtrl.prepaidCreateorder);   // FOR PREPAID
router.post('/postmanorder', createOrderCtrl.postmancreateorder);   // POSTMAN TESTS ONLY
router.post('/democreateorder', createOrderCtrl.democreateorder);   // DEMO ONLY
router.post('/createorder', createOrderCtrl.democreateorder);       // FOR DEMO ONLY
router.get('/vieweorder', checkoutCtrl.democreateorder);            // For View All Orders
router.post('/editorder', checkoutCtrl.democreateorder);            // For Updation
router.post('/vieweorder', checkoutCtrl.democreateorder);           // For 
router.post('/vieweorder', checkoutCtrl.democreateorder);           // FOR VIEW PRODUCTS ONLY 
router.post('/productdetails/:id', relatedProdCtrl.reelatedProducts);// FOR VIEW RELATED PRODUCT ONLY --
router.post('/relatedproducts/:id', relatedProdCtrl.reelatedProducts);// FOR VIEW SINGLE PRODUCT ONLY --
//User Delivery Address Route
router.get('/deliveryaddress/:username', passport.authenticate("jwt", { session: false }),
    (req, res, next) => {
        // req.userdata = res.req.user;
        next();
    }, ctrl.DeliveryAddView);
router.post('/deliveryaddress', passport.authenticate("jwt", { session: false }),
    (req, res, next) => {
        // req.userdata = res.req.user;
        next();
    }, ctrl.DeliveryAddAdd);
// router.post('/deliveryaddress', ctrl.DeliveryAddEdit);
// router.post('/deliveryaddress', ctrl.DeliveryAddDelete);
//User Profile Route
router.get('/profile', ctrl.Profile);
router.post('/profile', ctrl.Profile);
router.put('/profileimage', ctrl.Profile);
router.delete('/profileimage', ctrl.Profile);
//Product Reviews
router.get('/review:id', ctrl.Profile);
router.post('/review:id', ctrl.Profile);
router.put('/review:id', ctrl.Profile);
router.delete('/review:id', ctrl.Profile);
// //User Profile Routes
// router.get('/profile', categoriesCtrl.getAllCategories);
// router.post('/profile', categoriesCtrl.createCategory);
// router.put('/profileimage', categoriesCtrl.updateCategory);
// router.delete('/profileimage', categoriesCtrl.deleteCategory);

module.exports = router