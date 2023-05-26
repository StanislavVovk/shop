const {Recaptcha} = require("../../services/services");

class RecaptchaController {
    async verify (req, res) {
        try {
            const verifyResult = Recaptcha.verify(req.body.token)
            return res.status(200).json({
                success:true,
                message: "Token successfully verified",
                verification_info: verifyResult.data
            });
        } catch (e) {
            return res.status(500).json({
                success:false,
                message: "Error verifying token"
            })
        }
    }
}

module.exports = RecaptchaController
