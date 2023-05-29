require('dotenv').config()
const express = require('express')
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mainRouter = require("./src/routes/routes");
const cors = require("cors")

const app = express()

app.use(cors({optionsSuccessStatus: 200}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

// adding router
app.use(mainRouter)

const PORT = 5000
async function startApp() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
        const listener =  app.listen(PORT, () => console.log(`App started at port ${listener.address().port}`))
    } catch (e) {
        console.log(e)
    }
}

startApp();
