const { Completed_activity, User, Activity, Product } = require('../models')
const { Op } = require("sequelize");
module.exports = {
    createCompletedActivity: async (payload) => {
        let saveCompletedActivity = await Completed_activity.create({
            userid: payload.userid,
            prodid: payload.prodid,
            actid: payload.actid,
            mintype: payload.mintype,
            filename: payload.filename,
            filesize: payload.filesize,
            url: payload.url,
        })
        if (saveCompletedActivity) {
            return { success: true, data: saveCompletedActivity }
        } else {
            return { success: false }
        }
    },
    getCompletedActivity: async () => {
        let completed_activity = await Completed_activity.findAll({
            order: [
                ['id', 'DESC'],
            ],
            include: [{
                model: User,
            }, {
                model: Product,
            }, {
                model: Activity,
            }],
            where: { isDeleted: 0 }
        })
        if (completed_activity) {
            return { success: true, data: completed_activity }
        } else {
            return { success: false }
        }
    },
    getCompletedActivityByUserid: async (userid) => {
        let completed_activity = await Completed_activity.findAll({
            order: [
                ['id', 'DESC'],
            ],
            include: [{
                model: Product,
            }, {
                model: Activity,
            }],
            where: { userid: userid }
        })
        if (completed_activity) {
            return { success: true, data: completed_activity }
        } else {
            return { success: false }
        }
    },
    findCompletedActivity: async (userid, actid) => {
        let completed_activity = await Completed_activity.findOne({ where: { [Op.and]: [{ userid: userid }, { actid: actid }] } })
        if (completed_activity) {
            return { success: true, data: completed_activity }
        } else {
            return { success: false }
        }
    },
    updateCompletedActivity: async (payload) => {
        let updateCompletedActivity = await Completed_activity.update({
            mintype: payload.mintype,
            filename: payload.filename,
            filesize: payload.filesize,
            url: payload.url
        }, {
            where: { id: payload.cmpid }
        })
        if (updateCompletedActivity[0] != 0) {
            return { success: true, data: updateCompletedActivity }
        } else {
            return { success: false }
        }
    },
    deleteCompletedActivity: async (cmpid) => {
        let deleteCompletedActivity = await Completed_activity.destroy({ where: { id: cmpid } })
        if (deleteCompletedActivity) {
            return { success: true, data: deleteCompletedActivity }
        } else {
            return { success: false }
        }
    }
}