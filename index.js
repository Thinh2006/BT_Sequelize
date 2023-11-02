import express from 'express'
import cors from 'cors'
import resRoutes from './src/routes/restaurantRoute.js'

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api",resRoutes)

app.listen(8080)