const { usersEnt } = require('../../entity/index')
const { signAccessToken } = require('../../helpers/authValidator')

module.exports = {
    async isRegister(req, res, next) {
        try {
            let payload = req.body
            let result = await usersEnt.isRegister(payload)
            if (result.success) {
                res.status(result.code).json({
                    success: result.success,
                    message: result.message,
                    user: result.data
                })
            } else {
                res.status(result.code).json({
                    success: result.success,
                    message: result.message
                })
            }
        } catch (error) {
            next(error)
        }
    },
    async verifyAccount(req, res, next) {
        try {
            let payload = req.body
            let result = await usersEnt.verifyAccount(payload)
            if (result.success) {
                // let accessToken = await signAccessToken(result.data.id)
                res.status(result.code).json({
                    success: result.success,
                    message: result.message,
                    data: {
                        id: result.data.id,
                        phone: result.data.phone
                    },
                    // accessToken:accessToken
                })
            } else {
                res.status(result.code).json({
                    success: result.success,
                    message: result.message
                })
            }
        } catch (error) {
            next(error)
        }
    },
    async registerDetail(req, res, next) {
        try {
            let payload = req.body
            let result = await usersEnt.registerDetail(payload)
            if (result.success) {
                res.status(result.code).json({
                    success: result.success,
                    message: result.message,
                    user: result.data
                })
            } else {
                res.status(result.code).json({
                    success: result.success,
                    message: result.message
                })
            }
        } catch (error) {
            next(error)
        }
    },
    async company_detail(req, res, next) {
        try {
            let payload = req.body
            let records = []
            for (let i = 0; i < payload.cname.length; i++) {
                records.push({
                    userId: payload.userid,
                    cname: payload.cname[i]
                })
            }
            let result = await usersEnt.company_detail(records)
            if (result.success) {
                res.status(result.code).json({
                    success: result.success,
                    message: result.message,
                    user: result.data
                })
            } else {
                res.status(result.code).json({
                    success: result.success,
                    message: result.message
                })
            }
        } catch (error) {
            next(error)
        }
    },
    async add_project(req, res, next) {
        try {
            let payload = req.body
            let records = []
            for (let i = 0; i < payload.data.length; i++) {
                for (let j = 0; j < payload.data[i].items.length; j++) {
                    records.push({
                        userId:payload.userid,
                        compId:payload.data[i].compId,
                        projname:payload.data[i].items[j]
                    })
                }
            }
            console.log(records)
            let result = await usersEnt.add_project(records)
            if (result.success) {
                res.status(result.code).json({
                    success: result.success,
                    message: result.message,
                    data: result.data
                })
            } else {
                res.status(result.code).json({
                    success: result.success,
                    message: result.message
                })
            }
        } catch (error) {
            next(error)
        }
    },
    async getAllUsers(req, res, next) {
        try {
            let payload = req.body
            let result = await usersEnt.getAllUsers(payload)
            if (result.success) {
                res.status(result.code).json({
                    success: result.success,
                    message: result.message,
                    user: result.data
                })
            } else {
                res.status(result.code).json({
                    success: result.success,
                    message: result.message
                })
            }
        } catch (error) {
            next(error)
        }
    },

    async getCompiesByUserID(req, res, next) {
        try {
            let userId = req.params.userId
            let result = await usersEnt.getAllCompaniesByUserId(userId)
            if (result.success) {
                res.status(result.code).json({
                    success: result.success,
                    message: result.message,
                    data: result.data
                })
            } else {
                res.status(result.code).json({
                    success: result.success,
                    message: result.message
                })
            }
        } catch (error) {
            next(error)
        }
    },
    async uploadPhotos(req, res, next) {
        try {
            let userid = req.body.userid
            let images = []
            for (let i = 0; i < req.files.length; i++) {
                images.push(`/${req.files[i].destination}/${req.files[i].filename}`)
            }
            let result = await usersEnt.uploadPhotos(userid, images)
            if (result.success) {
                res.status(result.code).json({
                    success: result.success,
                    message: result.message,
                    user: result.data
                })
            } else {
                res.status(result.code).json({
                    success: result.success,
                    message: result.message
                })
            }
        } catch (error) {
            next(error)
        }
    },
    async addStates(req, res, next) {
        try {
            let payload = req.body
            payload.countryId = req.params.countryId
            let result = await usersEnt.addStates(payload)
            if (result.success) {
                res.status(result.code).json({
                    success: result.success,
                    message: result.message,
                    data: result.data
                })
            } else {
                res.status(result.code).json({
                    success: result.success,
                    message: result.message
                })
            }
        } catch (error) {
            next(error)
        }
    },
    async getStates(req, res, next) {
        try {
            let countryId = req.params.countryId
            let result = await usersEnt.getStates(countryId)
            if (result.success) {
                res.status(result.code).json({
                    success: result.success,
                    message: result.message,
                    data: result.data
                })
            } else {
                res.status(result.code).json({
                    success: result.success,
                    message: result.message
                })
            }
        } catch (error) {
            next(error)
        }
    },
    async addStatesByCities(req, res, next) {
        try {
            let payload = req.body
            payload.stateId = req.params.stateId
            let result = await usersEnt.addStatesByCities(payload)
            if (result.success) {
                res.status(result.code).json({
                    success: result.success,
                    message: result.message,
                    data: result.data
                })
            } else {
                res.status(result.code).json({
                    success: result.success,
                    message: result.message
                })
            }
        } catch (error) {
            next(error)
        }
    },
    async getStatesByCities(req, res, next) {
        try {
            let stateId = req.params.stateId
            let result = await usersEnt.getStatesByCities(stateId)
            if (result.success) {
                res.status(result.code).json({
                    success: result.success,
                    message: result.message,
                    data: result.data
                })
            } else {
                res.status(result.code).json({
                    success: result.success,
                    message: result.message
                })
            }
        } catch (error) {
            next(error)
        }
    }
}
