const express = require("express");
const router = express.Router();
const categoriesCtrl = require('../controller/categories');
const subCategoriesCtrl = require('../controller/subCategories');
const sub_subCategoriesCtrl = require('../controller/sub_subCategories');
const productsCtrl = require('../controller/products');
const { upload } = require("../helper/imageUploader");
//Categories routes
router.get('/categories', categoriesCtrl.getAllCategories);
router.post('/categories', categoriesCtrl.createCategory);
router.put('/categories/:id', categoriesCtrl.updateCategory);
router.delete('/categories/:id', categoriesCtrl.deleteCategory);
//subCategories routes
router.post('/sub-categories', subCategoriesCtrl.createSubCategory);
router.get('/sub-categories/:id', subCategoriesCtrl.getAllSubCategories);
router.put('/sub-categories/:id', subCategoriesCtrl.updateSubCategory);
router.delete('/sub-categories/:id', subCategoriesCtrl.deleteSubCategory);
//sub-subCategories routes
router.post('/sub-sub-categories', sub_subCategoriesCtrl.createsub_SubCategory);
router.get('/sub-sub-categories/:id', sub_subCategoriesCtrl.getAllsub_SubCategories);
router.put('/sub-sub-categories/:id', sub_subCategoriesCtrl.updatesub_SubCategory);
router.delete('/sub-sub-categories/:id', sub_subCategoriesCtrl.deletesub_SubCategory);
//Products routes
router.post('/products', productsCtrl.createProduct);
router.post('/products/image', upload.single("image"), productsCtrl.addProductImages);
router.get('/products', productsCtrl.getAllProducts);
router.get('/products/:id', productsCtrl.getProductsByid);
router.delete('/products/:id', productsCtrl.deleteProduct);
router.put('/products/:id', productsCtrl.updateProduct);
//Related Products routes
router.put('/products/:id', productsCtrl.updateProduct);


module.exports = router