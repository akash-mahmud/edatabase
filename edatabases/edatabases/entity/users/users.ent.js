const models = require('../../models')

module.exports = {
    isRegister: async (payload) => {
        let isExist = await models.User.findOne({ where: { phone: payload.phone } })
        if (!isExist) {
            let isResult = await models.User.create(payload)
            if (isResult) {
                payload.otp = '121212';
                let isOtpResult = await models.Otp.create(payload)
                if (isOtpResult) {
                    return { success: true, code: 201, message: 'successfully sent otp', data: isOtpResult }
                } else {
                    return { success: false, code: 400, message: 'something went wrong' }
                }
            } else {
                return { success: false, code: 400, message: 'something went wrong' }
            }
        } else {
            let isExist = await models.User.findOne({ where: { phone: payload.phone, isVerified: 1 } })
            if (!isExist) {
                payload.otp = '121212';
                let isOtpResult = await models.Otp.create(payload)
                if (isOtpResult) {
                    return { success: true, code: 201, message: 'successfully sent otp', data: isOtpResult }
                } else {
                    return { success: false, code: 400, message: 'something went wrong' }
                }
            } else {
                return { success: false, code: 400, message: 'Record allready exists' }
            }
        }
    },
    verifyAccount: async (payload) => {
        let isExist = await models.User.findOne({ where: { phone: payload.phone } })
        if (isExist) {
            let isExists = await models.Otp.findOne({ where: { phone: payload.phone, otp: payload.code, isVerified: 0 } })
            if (isExists) {
                const isUpdated = await models.Otp.update({ isVerified: 1 }, { where: { phone: payload.phone, isVerified: 0 } })
                const isUpdated1 = await models.User.update({ isVerified: 1 }, { where: { phone: payload.phone, isVerified: 0 } })
                if (isUpdated[0] != 0 && isUpdated1[0] != 0) {
                    return { success: true, code: 200, message: 'verified', data: isExist }
                } else {
                    return { success: false, code: 404, message: 'Record not found ' }
                }
            } else {
                return { success: false, code: 404, message: 'Otp Not Found' }
            }
        } else {
            return { success: false, code: 404, message: 'Record not found!!!' }
        }
    },
    registerDetail: async (payload) => {
        let ids = payload.userid
        delete payload.userid;
        console.log(payload)
        let isUpdateUser = await models.User.update(payload, { where: { id: ids } })
        if (isUpdateUser[0] != 0) {
            return { success: true, code: 200, message: 'success', data: isUpdateUser[0] }
        } else {
            return { success: false, code: 404, message: 'Record not found ' }
        }
    },
    company_detail: async (payload) => {
        let result = await models.CompanyDetail.bulkCreate(payload)
        if (result) {
            return { success: true, code: 201, message: 'success', data: result }
        } else {
            return { success: false, code: 404, message: 'Record not found ' }
        }
    },
    add_project: async (payload) => {
        let result = await models.ProjectDetail.bulkCreate(payload)
        if (result) {
            return { success: true, code: 201, message: 'success', data: result }
        } else {
            return { success: false, code: 404, message: 'Record not found ' }
        }
    },
    getAllUsers: async () => {
        let isUsers = await models.User.findAll({ where: { isDeleted: null } })
        if (isUsers) {
            return { success: true, code: 200, message: 'success', data: isUsers }
        } else {
            return { success: false, code: 404, message: 'Record not found ' }
        }
    },
    getAllCompaniesByUserId: async (userId) => {
        let isUsers = await models.CompanyDetail.findAll({ where: { userId: userId, isDeleted: null } })
        if (isUsers) {
            return { success: true, code: 200, message: 'success', data: isUsers }
        } else {
            return { success: false, code: 404, message: 'Record not found ' }
        }
    },
    uploadPhotos: async (userid, images) => {
        let isUpdateUser = await models.User.update({
            photos: images.join('|')
        }, { where: { id: userid } })
        if (isUpdateUser[0] != 0) {
            return { success: true, code: 200, message: 'success', data: isUpdateUser[0] }
        } else {
            return { success: false, code: 404, message: 'Record not found ' }
        }
    },
    addStates: async (payload) => {
        let result = await models.States.create(payload)
        if (result) {
            return { success: true, code: 201, message: 'success', data: result }
        } else {
            return { success: false, code: 404, message: 'Record not found ' }
        }
    },
    getStates: async (countryId) => {
        let result = await models.States.findAll({ where: { countryId: countryId, isDeleted: null } })
        if (result) {
            return { success: true, code: 201, message: 'success', data: result }
        } else {
            return { success: false, code: 404, message: 'Record not found ' }
        }
    },
    addStatesByCities: async (payload) => {
        let result = await models.Cities.create(payload)
        if (result) {
            return { success: true, code: 201, message: 'success', data: result }
        } else {
            return { success: false, code: 404, message: 'Record not found ' }
        }
    },
    getStatesByCities: async (stateId) => {
        let result = await models.Cities.findAll({ where: { stateId: stateId, isDeleted: null } })
        if (result) {
            return { success: true, code: 201, message: 'success', data: result }
        } else {
            return { success: false, code: 404, message: 'Record not found ' }
        }
    },
}
