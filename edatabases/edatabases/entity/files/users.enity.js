const models = require('../models')
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
module.exports = {
    create_admin: async () => {
        const hashedPassword = await bcrypt.hash('123456', 10);
        let saveCheck = await models.Admin.create({
            name: 'Admin',
            email: 'admin@gmail.com',
            password: hashedPassword,
            mobile: '8888888888'
        });
        if (saveCheck) {
            return { success: true, data: saveCheck }
        } else {
            return { success: false }
        }
    },
    create_user: async (payload) => {
        const hashedPassword = await bcrypt.hash('123456', 10);
        let saveCheck = await models.User.create({
            password: hashedPassword,
            mobile: payload.mobile
        }, {
            attributes: {
                exclude: ['password']
            }
        });
        if (saveCheck) {
            return { success: true, data: saveCheck }
        } else {
            return { success: false, error: 'Something Went Wrong ' }
        }
    },
    findByMobile: async (mobile_no) => {
        const user = await models.User.findOne({
            where: { mobile: mobile_no, isDeleted: 0 },
            attributes: {
                exclude: ['password']
            }
        });
        if (user) {
            return { success: true, data: user }
        } else {
            return { success: false }
        }
    },
    get_users: async (params) => {
        console.log(params)
        console.log(params.created_sort)
        if (!params.created_sort) params.created_sort = 'DESC'
        const users = await models.User.findAll({
            where: {
                fname: { [Op.like]: '%' + params.search + '%' }
            },
            order: [
                ['createdAt', params.created_sort]
            ],
            attributes: {
                exclude: ['password']
            },
            offset: ((params.page - 1) * parseInt(params.limit)),
            limit: parseInt(params.limit),
        })
        if (users) {
            return { success: true, total: await models.User.count({ where: { isDeleted: 0 } }), data: users }
        } else {
            return { success: false }
        }
    },
    get_users_details: async () => {
        const users = await models.User.findAll({
            order: [
                ['id', 'DESC'],
            ],
            attributes: {
                exclude: ['password']
            },
            where: { isDeleted: 0 }
        })
        if (users) {
            return { success: true, data: users }
        } else {
            return { success: false }
        }
    },

    getCountProduct: async (userid) => {
        const countProd = await models.Product_mapping.count({ where: { userid: userid, isDeleted: 0 } })
        console.log(countProd)
        if (countProd) {
            return { success: true, data: countProd }
        } else {
            return { success: false, data: 0 }
        }
    },
    getCountCmpltedAct: async (userid) => {
        const countProd = await models.Completed_activity.count({ where: { userid: userid, isDeleted: 0 } })
        console.log(countProd)
        if (countProd) {
            return { success: true, data: countProd }
        } else {
            return { success: false, data: 0 }
        }
    },


    findUser: async (userid) => {
        const user = await models.User.findOne({
            where: { id: userid, isDeleted: 0 },
            attributes: {
                exclude: ['password']
            }
        });
        if (user) {
            return { success: true, data: user }
        } else {
            return { success: false }
        }
    },
    findUserByPhone: async (phone) => {
        const isExits = await models.User.findOne({
            where: { mobile: phone },
            attributes: {
                exclude: ['password']
            }
        });
        if (isExits) {
            const isExitStatus = await models.User.findOne({
                where: { mobile: phone, isDeleted: 1 },
                attributes: {
                    exclude: ['password']
                }
            });
            if (!isExitStatus) {
                return { success: true, active: 0, data: isExitStatus }
            } else {
                return { success: true, active: 1, data: isExitStatus }
            }
        } else {
            return { success: false }
        }
    },

    updateUser: async (updatesVal) => {
        const update = await models.User.update({ fname: updatesVal.fname, lname: updatesVal.lname, email: updatesVal.email }, { where: { id: updatesVal.userid, isDeleted: 0 } })
        console.log('updated value', update)
        if (update[0] != 0) {
            return { success: true, data: update }
        } else {
            return { success: false }
        }
    },
    update_User: async (userId, payload) => {
        const update = await models.User.update(
            payload,
            { where: { id: userId, isDeleted: 0 } })
        if (update[0] != 0) {
            return { success: true, data: update }
        } else {
            return { success: false }
        }
    },
    updateUserImages: async (payload) => {
        const update = await models.User.update({
            mintype: payload.mimetype,
            filename: payload.filename,
            url: payload.url,
            filesize: payload.filesize,
        }, { where: { id: payload.userid, isDeleted: 0 } })
        if (update[0] != 0) {
            return { success: true, data: update }
        } else {
            return { success: false }
        }
    },
    deleteUser: async (userid) => {
        const isDeleted = await models.User.update({
            isDeleted: 1
        }, { where: { id: userid, isDeleted: 0 } })
        if (isDeleted[0] != 0) {
            return { success: true, data: isDeleted[0] }
        } else {
            return { success: false }
        }
    },
    activeUser: async (userid) => {
        const isDeleted = await models.User.update({
            isDeleted: 0
        }, { where: { id: userid, isDeleted: 1 } })
        if (isDeleted[0] != 0) {
            return { success: true, data: isDeleted[0] }
        } else {
            return { success: false }
        }
    },
    updateRegToken: async (userid, payload) => {
        let isExists = await models.FcmRegToken.findOne({ where: { userid: userid, isDeleted: 0 } })
        if (!isExists) {
            let isSave = await models.FcmRegToken.create({
                userid: userid,
                payload: payload.reg_token
            })
            if (isSave) {
                const isVersionUpdate = await models.User.update({
                    version: payload.version
                }, { where: { id: userid, isDeleted: 0 } })
                if (isVersionUpdate[0] != 0) {
                    return { success: true, data: isSave }
                } else {
                    return { success: false, error: 'Error 1' }
                }
            } else {
                return { success: false, error: 'Error 2' }
            }
        } else {
            const isUpdated = await models.FcmRegToken.update({
                reg_token: payload.reg_token
            }, { where: { userid: 1, isDeleted: 0 } })

            // console.log('Is UPDATED => ', isUpdated)

            if (isUpdated[0] != 0) {
                const isVersionUpdate = await models.User.update({
                    version: payload.version
                },
                    {
                        where: { id: userid, isDeleted: 0 }
                    })

                if (isVersionUpdate[0] != 0) {
                    return { success: true, data: isUpdated[0] }
                } else {
                    return { success: false, error: 'Error 3' }
                }
            } else {
                return { success: false, error: 'Error 4' }
            }
        }
    },
    generate_otp: async (payload) => {
        console.log(payload)
        let genOtp = await models.Otp.create({
            otp: payload.otp,
            mobile: payload.mobile
        })
        if (genOtp) {
            return { success: true, data: genOtp }
        } else {
            return { success: false }
        }
    },
    verify_otp: async (payload) => {
        let verifyOtp = await models.Otp.findOne({
            where: {
                id: payload.ID,
                otp: payload.OTP
            }
        })
        if (verifyOtp) {
            return { success: true, data: verifyOtp }
        } else {
            return { success: false }
        }
    }
}