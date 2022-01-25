const { Invoice, User } = require('../models')
const { Op } = require('sequelize')
module.exports = {
    add_invoice: async (payload) => {
        let save_invoice = await Invoice.create({
            userId: payload.userid,
            invoice: payload.invoice
        })
        if (save_invoice) {
            return { success: true, data: save_invoice }
        } else {
            return { success: false }
        }
    },
    find_all_invoices: async (params) => {
        if (!params.created_sort) params.created_sort = 'DESC'
        let status;
        if (params.status === '') {
            status = { [Op.or]: [{ isDeleted: 0 }, { status: 1 }, { status: 2 }] }
        } else {
            status = { isDeleted: 0, status: params.status }
        }

        console.log(status)
        let invoices = await Invoice.findAll({
            order: [
                ['createdAt', params.created_sort]
            ],
            include: [{
                model: User,
            }],
            offset: ((params.page - 1) * parseInt(params.limit)),
            limit: parseInt(params.limit),
            where: status
        })
        if (invoices) {
            return { success: true, total: await Invoice.count({ where: { isDeleted: 0 } }), data: invoices }
        } else {
            return { success: false }
        }
    },
    find_all_invoices_by_userid: async (userid, params) => {
        if (!params.created_sort) params.created_sort = 'DESC'
        let status;
        if (params.status === '') {
            status = { [Op.or]: [{ isDeleted: 0 }, { status: 1 }, { status: 2 }], userid: userid }
        } else {
            status = { isDeleted: 0, status: params.status, userid: userid }
        }

        console.log(status)
        let invoices = await Invoice.findAll({
            order: [
                ['createdAt', params.created_sort]
            ],
            include: [{
                model: User,
            }],
            offset: ((params.page - 1) * parseInt(params.limit)),
            limit: parseInt(params.limit),
            where: status
        })
        if (invoices) {
            return { success: true, total: await Invoice.count({ where: { isDeleted: 0, userid: userid } }), data: invoices }
        } else {
            return { success: false }
        }
    },
    updateInvoice: async (invoiceid) => {
        let invoices = await Invoice.update({ status: 2 }, { where: { id: invoiceid, isDeleted: 0, status: 1 } })
        if (invoices[0] != 0) {
            return { success: true, data: invoices[0] }
        } else {
            return { success: false }
        }
    }
}