const { Post, User, Comment } = require('../models')
const { Sequelize } = require('sequelize')
module.exports = {
    createComment: async (payload) => {
        let saveComment = await Comment.create({
            postid: payload.postid,
            userid: payload.userid,
            comments: payload.comments
        })
        if (saveComment) {
            let updatePost = await Post.update({ comments: Sequelize.literal('comments + 1') }, { where: { id: payload.postid, isDeleted: 0, status: 1 } })
            if (updatePost[0] != 0) {
                return { success: true, data: saveComment }
            } else {
                return { success: false }
            }
        } else {
            return { success: false }
        }
    },
    getComments: async (params) => {
        if (!params.created_sort) params.created_sort = 'DESC'
        let comments = await Comment.findAll({
            order: [
                ['createdAt', params.created_sort]
            ],
            include: [{
                model: User,
                require: false
            }, {
                model: Post,
                require: false
            }],
            offset: ((params.page - 1) * parseInt(params.limit)),
            limit: parseInt(params.limit),
            where: { isDeleted: 0 }
        })
        if (comments) {
            return { success: true, total: await Comment.count({ where: { isDeleted: 0 } }), data: comments }
        } else {
            return { success: false }
        }
    },
    getCommentsByPostId: async (postid, params) => {
        if (!params.created_sort) params.created_sort = 'DESC'
        let comments = await Comment.findAll({
            order: [
                ['createdAt', params.created_sort]
            ],
            include: [{
                model: User,
                require: false
            }, {
                model: Post,
                require: false
            }],
            offset: ((params.page - 1) * parseInt(params.limit)),
            limit: parseInt(params.limit),
            where: { postid: postid, isDeleted: 0 }
        })
        if (comments) {
            return { success: true, total: await Comment.count({ where: { isDeleted: 0 } }), data: comments }
        } else {
            return { success: false }
        }
    },
    updateComment: async (payload) => {
        let updateComment = await Comment.update({
            comments: payload.comments
        }, {
            where: { id: payload.cid, isDeleted: 0 }
        })
        if (updateComment[0] != 0) {
            return { success: true, data: updateComment }
        } else {
            return { success: false }
        }
    },
    deleteComment: async (cid) => {
        let deleteComment = await Comment.update({ isDeleted: 1 }, { where: { id: cid, isDeleted: 0 } })
        if (deleteComment[0] != 0) {
            return { success: true, data: deleteComment[0] }
        } else {
            return { success: false }
        }
    }
}