const { isCelebrateError } = require('celebrate')
module.exports = {
    /**
     * 
     * @param {*} req
     * Invalid Routes Handles 
     * 
     */
    invalidRoute(req, res, next) {
        res.status(404).json({
            success: false,
            message: 'Route Not Found!!!'
        })
    },

    /**
     * 
     * @param {*} req
     * Invalid Routes Handles 
     * 
     */
    errorHandler(error, req, res, next) {
        if (error.name === 'ErrorsMongoError') {
            res.status(500).json({
                success: false,
                message: 'Error :' + error.message
            })
        } else {
            res.status(500).json({
                success: false,
                message: 'Error :' + error.message
            })
        }
    }
}