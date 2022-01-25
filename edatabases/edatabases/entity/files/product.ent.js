const { Product, Activity } = require('../models')
const { Op } = require('sequelize');
module.exports = {
    addProduct: async (payload) => {
        let save_products = await Product.create({
            name: payload.name,
            description: payload.description,
            price: payload.price,
            filetype: payload.filetype,
            filename: payload.filename,
            url: payload.url,
            filesize: payload.filesize,
        })
        if (save_products) {
            return { success: true, data: save_products }
        } else {
            return { success: false }
        }
    },
    getProducts: async (params) => {
        if (!params.created_sort) params.created_sort = 'DESC'
        let products = await Product.findAll({
            where: { name: { [Op.like]: '%' + params.search + '%' }, isDeleted: 0 },
            order: [
                ['createdAt', params.created_sort]
            ],
            offset: ((params.page - 1) * parseInt(params.limit)),
            limit: parseInt(params.limit),
        })

        if (products) {
            return { success: true, data: products, total: await Product.count({ where: { isDeleted: 0 } }) }
        } else {
            return { success: false }
        }
    },
    getProductByProdId: async (prodid) => {
        let products = await Product.findOne({ where: { id: prodid, isDeleted: 0 } })
        if (products) {
            return { success: true, data: products }
        } else {
            return { success: false }
        }
    },
    searchProduct: async (params) => {
        if (!params.created_sort) params.created_sort = 'DESC';
        let products = await Product.findAll({
            where: { name: { [Op.like]: '%' + params.search + '%' }, isDeleted: 0 },
            order: [
                ['createdAt', params.created_sort]
            ],
            offset: ((params.page - 1) * parseInt(params.limit)),
            limit: parseInt(params.limit),
        })
        if (products) {
            return { success: true, data: products }
        } else {
            return { success: false }
        }
    },
    findProduct: async (pid) => {
        let products = await Product.findOne({ where: { id: pid, isDeleted: 0 } })
        if (products) {
            return { success: true, data: products }
        } else {
            return { success: false }
        }
    },
    deleteProducts: async (prodid) => {
        let products = await Product.update({ isDeleted: 1 }, { where: { id: prodid } })
        if (products[0] != 0) {
            return { success: true, data: products[0] }
        } else {
            return { success: false }
        }
    },
    updateProduct: async (payload) => {
        let products = await Product.update({
            name: payload.name,
            description: payload.description,
            price: payload.price
        },
            {
                where: { id: payload.prodid, isDeleted: 0 }
            }
        )
        if (products[0] != 0) {
            return { success: true, data: products }
        } else {
            return { success: false }
        }
    }
}