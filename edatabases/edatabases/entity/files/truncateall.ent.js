const { Product_mapping, Product, User, Invoice, Otp, Settings, Activity_step, Activity, Banner, Comment, Likes, Post, Student, Completed_activity } = require('../models')
module.exports = {
    trancate_records: async () => {
        let tr1 = await Product_mapping.destroy({ truncate: true, cascade: false })
        let tr2 = await Product.destroy({ truncate: true, cascade: false })
        let tr3 = await User.destroy({ truncate: true, cascade: false })
        let tr4 = await Invoice.destroy({ truncate: true, cascade: false })
        let tr5 = await Otp.destroy({ truncate: true, cascade: false })
        let tr6 = await Settings.destroy({ truncate: true, cascade: false })
        let tr7 = await Settings.destroy({ truncate: true, cascade: false })
        let tr8 = await Activity.destroy({ truncate: true, cascade: false })
        let tr9 = await Activity_step.destroy({ truncate: true, cascade: false })
        let tr10 = await Banner.destroy({ truncate: true, cascade: false })
        let tr11 = await Comment.destroy({ truncate: true, cascade: false })
        let tr12 = await Likes.destroy({ truncate: true, cascade: false })
        let tr13 = await Post.destroy({ truncate: true, cascade: false })
        let tr14 = await Student.destroy({ truncate: true, cascade: false })
        let tr15 = await Completed_activity.destroy({ truncate: true, cascade: false })
        if (tr1 === 0) {
            return { success: true, data: tr1 }
        } else {
            return { success: false }
        }
    }
}