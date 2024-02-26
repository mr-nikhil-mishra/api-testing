import dotenv from "dotenv"
dotenv.config()
import express from "express"

import translateRouter from "./routes/translate.route.js"


const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/api/v1", translateRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`)
})