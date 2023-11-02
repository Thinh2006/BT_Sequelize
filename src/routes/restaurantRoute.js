import express from 'express'
import { getLikeRes, getLikeUsers, getRateRes, getRateUsers, likeRes, orderFood, rateRes, unlikeRes } from '../controllers/restaurantController.js'

const resRoutes = express.Router()
resRoutes.post("/likeRes", likeRes)
resRoutes.put("/unlikeRes", unlikeRes)
resRoutes.get("/getlikeUsers", getLikeUsers)
resRoutes.get("/getlikeRes", getLikeRes)
resRoutes.post("/rateRes", rateRes)
resRoutes.get("/getRateRes", getRateRes)
resRoutes.get("/getRateUsers", getRateUsers)
resRoutes.post("/orderFood", orderFood)

export default resRoutes