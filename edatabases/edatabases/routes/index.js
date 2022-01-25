const express = require('express')
const router = express.Router()

router.use(printRoutes)
// route.use(ErrorHandles)

router.use('/users', require('./users/users.Route'))

/** @description prints route to the console */
function printRoutes(req, res, next) {
    console.log(`************************`);
    console.log(`NEW REQUEST : ${req.method} ${req.originalUrl}`);
    console.log(req.body);
    console.log(`************************`);
    next();
}


// /** @description prints route to the console */
// function ErrorHandles(err, req, res, next) {
//     console.log(`************************`);
//     console.log('Error:', err.errors);
//     console.log(`************************`);
//     next();
// }

module.exports = router