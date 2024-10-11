const AuthenticationServices = require('../services/authentication.services');

//function to sign up
exports.signup = async (req, res) => {
    try {
        const { email, password } = req.body;

        let user = await AuthenticationServices.storeUserData(email, password);

        if(!user){
            return res.status(400).json({
                success: false,
                message: 'Error creating account'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Account created successfully'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}