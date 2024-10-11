const userModel = require('../models/note.model');

class AuthenticationServices {
    static async storeUserData(email, password) {
        return await userModel.save({ email, password });
    }
}

module.exports = AuthenticationServices