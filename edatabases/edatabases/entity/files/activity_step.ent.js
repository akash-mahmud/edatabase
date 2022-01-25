const { Activity_step } = require('../models')
const { Activity } = require('../models')
module.exports = {
    createActivityStep: async (payload) => {
        let saveActivityStep = await Activity_step.create({
            actid: payload.actid,
            steps: payload.steps
        })
        if (saveActivityStep) {
            return { success: true, data: saveActivityStep }
        } else {
            return { success: false }
        }
    },
    getActivityStep: async (actid) => {
        let activity_steps = await Activity_step.findAll({
            order: [
                ['id', 'ASC'],
            ],
            where: { actid: actid, isDeleted: 0 }
        })
        if (activity_steps) {
            return { success: true, data: activity_steps }
        } else {
            return { success: false }
        }
    },
    getActivityStepData: async (stepid) => {
        let activity_steps = await Activity_step.findOne({
            where: { id: stepid, isDeleted: 0 }
        })
        if (activity_steps) {
            return { success: true, data: activity_steps }
        } else {
            return { success: false }
        }
    },
    updateActivityStep: async (payload) => {
        let updateActivityStep = await Activity_step.update({
            steps: payload.steps
        }, {
            where: { id: payload.stepid }
        })
        if (updateActivityStep[0] != 0) {
            return { success: true, data: updateActivityStep }
        } else {
            return { success: false }
        }
    },
    deleteActivityStep: async (stepid) => {
        let deleteActivityStep = await Activity_step.destroy({ where: { id: stepid } })
        if (deleteActivityStep) {
            return { success: true, data: deleteActivityStep }
        } else {
            return { success: false }
        }
    }
}