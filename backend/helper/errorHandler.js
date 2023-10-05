const errorHandler = (err, req, res, next) => {
    let customError = err;
    if (err.statusCode) return res.status(err.statusCode).send({ message: err.message })
    console.log(customError);
    res.status(500).send({ message: "Could not complete your request" });
}
module.exports = {
    errorHandler
}