const { Product_mapping, Product, Activity } = require('../models')
const { Op } = require("sequelize");
module.exports = {
    add_product_mapping: async (payload) => {
        let save_prod_map = await Product_mapping.create({
            userid: payload.userid,
            productid: payload.productid
        })
        if (save_prod_map) {
            return { success: true, data: save_prod_map }
        } else {
            return { success: false }
        }
    },
    find_all_productMapping: async (userid, params) => {
        if (!params.created_sort) params.created_sort = 'DESC'
        let prod_map = await Product_mapping.findAll({
            order: [
                ['createdAt', params.created_sort]
            ],
            include: [
                {
                    model: Product,
                    required: false
                }
            ],
            offset: ((params.page - 1) * parseInt(params.limit)),
            limit: parseInt(params.limit),
            where: { userid: userid, isDeleted: 0 }
        })
        if (prod_map) {
            return { success: true, total: await Product_mapping.count({ where: { userid: userid, isDeleted: 0 } }), data: prod_map }
        } else {
            return { success: false }
        }
    },
    find_product: async (pid) => {
        let product = await Product.findOne({ where: { id: pid } })
        if (product) {
            return { success: true, data: product }
        } else {
            return { success: false }
        }
    },

    delete_product_map: async (pid) => {
        let productMap = await Product_mapping.destroy({ where: { id: pid } })
        if (productMap) {
            return { success: true, data: productMap }
        } else {
            return { success: false }
        }
    },
    find_product_map: async (userid, pid) => {
        let product = await Product_mapping.findOne({ where: { [Op.and]: [{ userid: userid }, { productid: pid }] } })
        if (product) {
            return { success: true, data: product }
        } else {
            return { success: false }
        }
    },
    find_product_record: async (userid) => {
        let product = await Product_mapping.findAll({
            order: [
                ['id', 'DESC'],
            ],
            where: { userid: userid },
            include: [{
                model: Product,
            }]
        })
        if (product) {
            return { success: true, data: product }
        } else {
            return { success: false }
        }
    },
    search_product_record: async (userid) => {
        let product = await Product_mapping.findAll({
            order: [
                ['id', 'DESC'],
            ],
            include: [{
                model: Product,
            },
            {
                model: Activity,
            }]
        })
        if (product) {
            return { success: true, data: product }
        } else {
            return { success: false }
        }
    },
    demo_product_record: async () => {
        let product = await Product_mapping.destroy({ truncate: true, cascade: false })
        if (product) {
            return { success: true, data: product }
        } else {
            return { success: false }
        }
    }
}