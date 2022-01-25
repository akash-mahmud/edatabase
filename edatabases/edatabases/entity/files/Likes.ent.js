const { Likes } = require('../models')
const { Post } = require('../models')
const { Sequelize, Op } = require('sequelize')
module.exports = {
    createLikes: async (payload) => {
        let saveLikes = await Likes.create({
            postid: payload.postid,
            userid: payload.userid
        })
        if (saveLikes) {
            return { success: true, data: saveLikes }
        } else {
            return { success: false }
        }
    },
    giveLikes: async (userid, postid) => {
        let getLike = await Likes.findOne({ where: { postid: postid, userid: userid, isDeleted: 0 } })
        if (getLike) {
            let giveLikes = await Likes.update({ flag: 1, status: 2 }, { where: { postid: postid, userid: userid, isDeleted: 0 } })
            if (giveLikes[0] != 0) {
                return { success: true, data: getLike }
            } else {
                return { success: false }
            }
        } else {
            return { success: false }
        }
    },
    disLikes: async (userid, postid) => {
        let getLike = await Likes.findOne({ where: { postid: postid, userid: userid, isDeleted: 0 } })
        if (getLike) {
            let giveLikes = await Likes.update({ flag: 2, status: 2 }, { where: { postid: postid, userid: userid } })
            if (giveLikes[0] != 0) {
                return { success: true, data: getLike }
            } else {
                return { success: false }
            }
        } else {
            return { success: false }
        }
    },
    getLikes: async () => {
        let likes = await Likes.findAll({
            order: [
                ['id', 'DESC'],
            ],
            where: { isDeleted: 0 }
        })
        if (likes) {
            return { success: true, data: likes }
        } else {
            return { success: false }
        }
    },
    findLike: async (likesid) => {
        let likes = await Likes.findOne({ where: { id: likesid, isDeleted: 0 } })
        if (likes) {
            return { success: true, data: likes }
        } else {
            return { success: false }
        }
    },
    findLike: async (postid) => {
        let likes = await Likes.findOne({ where: { postid: postid, isDeleted: 0 } })
        if (likes) {
            return { success: true, data: likes }
        } else {
            return { success: false }
        }
    },
    findLikeByPostidAndUserid: async (userid, postid) => {
        let likes = await Likes.findOne({ where: { isDeleted: 0, [Op.and]: [{ userid: userid }, { postid: postid }] } })
        if (likes) {
            return { success: true, data: likes }
        } else {
            return { success: false }
        }
    },
    updateLikes: async (payload) => {
        let update = await Likes.update({
            like: 0
        }, {
            where: { id: payload.likesid, isDeleted: 0 }
        })
        if (update[0] != 0) {
            let updatePost = await Post.update({ like: Sequelize.literal('like - 1') },
                { where: { id: payload.postid, isDeleted: 0, status: 1 } })
            if (updatePost[0] != 0) {
                return { success: true, data: update }
            } else {
                return { success: false }
            }
        } else {
            return { success: false }
        }
    },
    deleteLikes: async (likesid) => {
        let deleteLikes = await Likes.update({ isDeleted: 1 },
            { where: { id: likesid, isDeleted: 0 } })
        if (deleteLikes[0] != 0) {
            return { success: true, data: deleteLikes[0] }
        } else {
            return { success: false }
        }
    }
}