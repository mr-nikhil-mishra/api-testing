import express from "express"
import { translateController } from "../controllers/translate.controller.js"

const translateRouter = express.Router()

translateRouter.post("/translate", translateController)


export default translateRouter