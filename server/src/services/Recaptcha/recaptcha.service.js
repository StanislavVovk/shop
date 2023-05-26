const {post} = require("axios");
require('dotenv').config()
class RecaptchaService {
    async verify(token) {
        try {

           return await post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${token}`)
        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = RecaptchaService
