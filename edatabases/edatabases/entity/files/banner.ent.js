const { Banner } = require('../models')
module.exports = {
    createBanner: async (payload) => {
        let saveBanner = await Banner.create({
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
    getBanners: async () => {
        let banners = await Banner.findAll({
            order: [
                ['id', 'DESC'],
            ],
            where: { isDeleted: 0 }
        })
        if (banners) {
            return { success: true, data: banners }
        } else {
            return { success: false }
        }
    },
    updateBanner: async (payload) => {
        let updateBanner = await Banner.update({
            title: payload.title,
            mintype: payload.mintype,
            filename: payload.filename,
            filesize: payload.filesize
        }, {
            where: { id: payload.bannerid, isDeleted: 0 }
        })
        if (updateBanner[0] != 0) {
            return { success: true, data: updateBanner }
        } else {
            return { success: false }
        }
    },
    deleteBanner: async (bannerid) => {
        let deleteBanner = await Banner.destroy({ where: { id: bannerid, isDeleted: 0 } })
        if (deleteBanner) {
            return { success: true, data: deleteBanner }
        } else {
            return { success: false }
        }
    }
}