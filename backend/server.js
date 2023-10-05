require('dotenv').config();
const path = require('path'); //For Static Serve
const express = require("express");
require("colors"); //For Change Color
const bodyParser = require('body-parser');
const Razorpay = require('razorpay');
var instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY, key_secret: process.env.RAZORPAY_API_SECRET,
});
module.exports = instance;
const router = require('./routes/routes');
const authrouter = require('./routes/authRoutes');
const productsAndCtegories = require('./routes/productsAndCtegories');
const { errorHandler } = require('./helper/errorHandler');
const cors = require('cors');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'images'))); //for Image Static Serve
app.use(express.static(path.join(__dirname, 'resources'))); //for Image Static Serve
//All Routes:
app.use(router);//Regutar Routes
app.use("/auth", authrouter);//Protected Routes
app.use("/products-categories", productsAndCtegories);//For Product & Categories Routes
app.use(errorHandler);


app
    .get('/', (req, res) => {
        res.send('server is running..')
    })
    .listen(process.env.PORT, () => {
        console.log("successfully connected to the server..")
        console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.yellow.bold);
    })

app.get('/api/getkey', (req, res) => {
    res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
});