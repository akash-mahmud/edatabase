const models = require('../models')
module.exports = {
    createAdmin: async (payload) => {
        let saveBanner = await models.Admin.create({
            title: payload.title,
            mintype: payload.mintype,
            filename: payload.filename,
            filesize: payload.filesize,
            url: payload.url,
        })
        if (saveBanner) {
            return { success: true, data: saveBanner }
        } else {
            return { success: false }
        }
    },
    loginAdmin: async (email) => {
        let checkByEmail = await models.Admin.findOne({ where: { email: email, isDeleted: 0 } })
        if (checkByEmail) {
            console.log(checkByEmail)
            return { success: true, data: checkByEmail }
        } else {
            return { success: false }
        }
    }
}