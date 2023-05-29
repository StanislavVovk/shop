const {Recaptcha} = require("../../services/services");

class RecaptchaController {
    async verify(req, res) {

        return await Recaptcha.verify(req.body.token).then(response => {
            if (response.success) {
                return res.status(200).json({
                    success: true,
                    message: "Token successfully verified",
                });
            } else {
                return res.status(500).json({
                    success: false,
                    message: response['error-codes']
                })
            }
        }).catch(() => {
            return res.status(500).json({
                success: false,
                message: 'Invalid token'
            })
        })
    }
}

module.exports = RecaptchaController
