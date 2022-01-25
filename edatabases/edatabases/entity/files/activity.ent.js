const { Activity } = require('../models')
const { Product } = require('../models')
const { Op } = require("sequelize");
module.exports = {
    addActivity: async (payload) => {
        let save_activity = await Activity.create({
            productid: payload.productid,
            title: payload.title,
            description: payload.description,
            filetype: payload.filetype,
            filename: payload.filename,
            url: payload.url,
            filesize: payload.filesize,
        })
        if (save_activity) {
            return { success: true, data: save_activity }
        } else {
            return { success: false }
        }
    },
    getActivityByProductId: async (pid) => {
        let activitys = await Activity.findAll({
            order: [
                ['id', 'DESC'],
            ],
            where: { productid: pid, isDeleted: 0 }
        })
        if (activitys) {
            return { success: true, data: activitys }
        } else {
            return { success: false }
        }
    },
    getActivitys: async () => {
        let activitys = await Activity.findAll({
            order: [
                ['id', 'DESC'],
            ],
            where: { isDeleted: 0 }
        })
        if (activitys) {
            return { success: true, data: activitys }
        } else {
            return { success: false }
        }
    },
    get_activity: async (actid) => {
        let activitys = await Activity.findOne({ where: { id: actid, isDeleted: 0 } })
        if (activitys) {
            return { success: true, data: activitys }
        } else {
            return { success: false }
        }
    },
    getActivity: async (pid) => {
        let activity = await Activity.findOne({ where: { productid: pid, isDeleted: 0 } })
        if (activity) {
            return { success: true, data: activity }
        } else {
            return { success: false }
        }
    },
    updateActivity: async (payload) => {
        let activitys = await Activity.update({
            title: payload.title,
            details: JSON.stringify(payload.details),
            description: payload.description
        },
            {
                where: { id: payload.aid, isDeleted: 0 }
            }
        )
        if (activitys[0] != 0) {
            return { success: true, data: activitys }
        } else {
            return { success: false }
        }
    },
    deleteActivity: async (aid) => {
        let activitys = await Activity.destroy({ where: { id: aid, isDeleted: 0 } })
        if (activitys) {
            return { success: true, data: activitys }
        } else {
            return { success: false }
        }
    },
    countActivity: async (pid) => {
        let activityCount = await Activity.count({
            where: { productid: pid, isDeleted: 0, isDeleted: 0 }
        })
        if (activityCount) {
            return { success: true, data: activityCount }
        } else {
            return { success: false }
        }
    },
    findActivity: async (actid) => {
        let findActivity = await Activity.findOne({
            where: { id: actid, isDeleted: 0 }
        })
        if (findActivity) {
            return { success: true, data: findActivity }
        } else {
            return { success: false }
        }
    },
    findActivityByActIdAndProdId: async (actid, prodid) => {
        let findActivity = await Activity.findOne({ where: { isDeleted: 0, [Op.and]: [{ id: actid }, { productid: prodid }] } })
        if (findActivity) {
            return { success: true, data: findActivity }
        } else {
            return { success: false }
        }
    },
    countUpdateActivity: async (pid, no_activity) => {
        let activityCount = await Activity.update({ no_activity: no_activity }, { where: { productid: pid, isDeleted: 0 } })
        if (activityCount) {
            return { success: true, data: activityCount }
        } else {
            return { success: false }
        }
    }
}