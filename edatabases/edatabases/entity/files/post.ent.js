const { Post } = require('../models')
const { Likes, User } = require('../models')
module.exports = {
    createPost: async (payload) => {
        let savePost = await Post.create({
            userid: payload.userid,
            title: payload.title,
            subtitle: payload.subtitle,
            body: payload.body,
            mintype: payload.mintype,
            filename: payload.filename,
            filesize: payload.filesize,
            url: payload.url
        })
        if (savePost) {
            return { success: true, data: savePost }
        } else {
            return { success: false }
        }
    },
    getPostByUserid: async (userid) => {
        let posts = await Post.findAll({
            order: [
                ['id', 'DESC'],
            ],
            where: {
                userid: userid,
                status: 1,
                isDeleted: 0
            }
        })
        if (posts) {
            return { success: true, data: posts }
        } else {
            return { success: false }
        }
    },
    blockPostByPostId: async (postid) => {
        let blockPost = await Post.update({ status: 2 }, { where: { id: postid, status: 1, isDeleted: 0 } })
        if (blockPost[0] != 0) {
            return { success: true, data: blockPost[0] }
        } else {
            return { success: false }
        }
    },
    unblockPostByPostId: async (postid) => {
        let blockPost = await Post.update({ status: 1 }, { where: { id: postid, status: 2, isDeleted: 0 } })
        if (blockPost[0] != 0) {
            return { success: true, data: blockPost[0] }
        } else {
            return { success: false }
        }
    },
    getPosts: async () => {
        let posts = await Post.findAll({
            order: [
                ['id', 'DESC'],
            ],
            include: [{
                model: User
            }],
            where: { isDeleted: 0, status: 1 }
        })
        if (posts) {
            return { success: true, data: posts }
        } else {
            return { success: false }
        }
    },
    getPost: async (postid) => {
        let posts = await Post.findOne({
            where: { id: postid, isDeleted: 0, status: 1 },
            include: [
                {
                    model: User,
                    require: false
                }
            ]
        })
        if (posts) {
            return { success: true, data: posts }
        } else {
            return { success: false }
        }
    },
    getAllPosts: async () => {
        let posts = await Post.findAll({
            order: [
                ['id', 'DESC'],
            ],
            include: [
                {
                    model: User,
                    require: false
                }
            ],
            where: { isDeleted: 0, status: 1 }
        })
        if (posts) {
            return { success: true, data: posts }
        } else {
            return { success: false }
        }
    },
    getPostByPostId: async (postid) => {
        let posts = await Post.findOne({ where: { id: postid, status: 1, isDeleted: 0 } })
        if (posts) {
            return { success: true, data: posts }
        } else {
            return { success: false }
        }
    },
    getPostByPostIdAndUserId: async (postid, userid) => {
        let posts = await Post.findOne({ where: { id: postid, userid: userid, status: 1, isDeleted: 0 } })
        if (posts) {
            return { success: true, data: posts }
        } else {
            return { success: false }
        }
    },
    updatePost: async (payload) => {
        let updatePost = await Post.update({
            title: payload.title,
            subtitle: payload.subtitle,
            body: payload.body
        }, {
            where: { id: payload.postid, status: 1, isDeleted: 0 }
        })
        if (updatePost[0] != 0) {
            return { success: true, data: updatePost }
        } else {
            return { success: false }
        }
    },
    deletePost: async (postid) => {
        let deletePost = await Post.update({ isDeleted: 1 },
            { where: { id: postid, isDeleted: 0, status: 1 } })
        if (deletePost[0] != 0) {
            return { success: true, data: deletePost[0] }
        } else {
            return { success: false }
        }
    }
}