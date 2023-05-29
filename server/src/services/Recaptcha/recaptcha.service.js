const {post} = require("axios");
require('dotenv').config()
class RecaptchaService {
    async verify(token) {
           return await post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${token}`)
               .then(res => res.data)
               .catch(error => {
                   throw new Error(error)
               })
    }
}

module.exports = RecaptchaService
