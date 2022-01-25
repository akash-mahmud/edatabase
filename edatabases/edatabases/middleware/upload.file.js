const multer = require('multer')
const path = require('path')

var storage1 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/photos')
    },
    filename: function (req, file, cb) {
        cb(null, 'photos' + '-' + Date.now() + path.extname(file.originalname))
    }
})

module.exports = {
    upload: multer({ storage: storage1 })
}