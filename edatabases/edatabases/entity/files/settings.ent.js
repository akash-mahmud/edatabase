const { Settings } = require('../models')
module.exports = {
    addSettings: async (payload) => {
        let save_settings = await Settings.create({
            about_us: payload.about_us,
            contact_us: payload.contact_us,
            term_conditions: payload.term_conditions,
            privacy_policy: payload.privacy_policy,
        })
        if (save_settings) {
            return { success: true, data: save_settings }
        } else {
            return { success: false }
        }
    },

    /**
     * 
     * @param {About Us} payload 
     * @returns 
     */
    aboutSetting: async (payload) => {
        let save_about = await Settings.create({
            about_us: payload.about_us,
        })
        if (save_about) {
            return { success: true, data: save_about }
        } else {
            return { success: false }
        }
    },
    aboutUpdateSetting: async (payload) => {
        let update_about = await Settings.update({
            about_us: payload.about_us,
        }, { where: { id: 1 } })
        if (update_about[0] != 0) {
            return { success: true, data: update_about[0] }
        } else {
            return { success: false }
        }
    },

    /**
     * 
     * @param {contact_us} payload 
     * @returns 
     */
    contactSetting: async (payload) => {
        let save_contact = await Settings.create({
            contact_us: payload.contact_us
        })
        if (save_contact) {
            return { success: true, data: save_contact }
        } else {
            return { success: false }
        }
    },
    contactUpdateSetting: async (payload) => {
        let update_contact = await Settings.update({
            contact_us: payload.contact_us
        }, { where: { id: 1 } })
        if (update_contact[0] != 0) {
            return { success: true, data: update_contact[0] }
        } else {
            return { success: false }
        }
    },

    /**
     * 
     * @param {contact_us} payload 
     * @returns 
     */
    termConditionSetting: async (payload) => {
        let save_contact = await Settings.create({
            term_conditions: payload.term_conditions
        })
        if (save_contact) {
            return { success: true, data: save_contact }
        } else {
            return { success: false }
        }
    },
    termConditionUpdateSetting: async (payload) => {
        let update_contact = await Settings.update({
            term_conditions: payload.term_conditions
        }, { where: { id: 1 } })
        if (update_contact[0] != 0) {
            return { success: true, data: update_contact[0] }
        } else {
            return { success: false }
        }
    },

    /**
     * 
     * @param {contact_us} payload 
     * @returns 
     */
    privacyPoliySetting: async (payload) => {
        let save_contact = await Settings.create({
            privacy_policy: payload.privacy_policy
        })
        if (save_contact) {
            return { success: true, data: save_contact }
        } else {
            return { success: false }
        }
    },
    privacyPoliyUpdateSetting: async (payload) => {
        let update_contact = await Settings.update({
            privacy_policy: payload.privacy_policy
        }, { where: { id: 1 } })
        if (update_contact[0] != 0) {
            return { success: true, data: update_contact[0] }
        } else {
            return { success: false }
        }
    },



    getSettings: async () => {
        let settings = await Settings.findAll({
            order: [
                ['id', 'DESC'],
            ],
        })
        if (settings) {
            return { success: true, data: settings }
        } else {
            return { success: false }
        }
    },
    updateSettings: async (payload) => {
        let updateSetting = await Settings.update({
            about_us: payload.about_us,
            contact_us: payload.contact_us,
            term_conditions: payload.term_conditions,
            privacy_policy: payload.privacy_policy
        }, { where: { id: 1 } })
        if (updateSetting[0] != 0) {
            return { success: true, data: updateSetting[0] }
        } else {
            return { success: false }
        }
    }
}