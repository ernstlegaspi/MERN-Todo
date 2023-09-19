import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import routes from './routes/routes.js'

const app = express()

dotenv.config()

app.use(cookieParser())
app.use(cors())
app.use(express.json({ extended: true, limit: '30mb' }))
app.use(express.urlencoded({ extended: true, limit: '30mb' }))

const PORT = process.env.PORT || 2217

app.use('/auth', routes)

mongoose.connect(process.env.DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
	.then(() => app.listen(PORT, () => console.log(`Server is running in port: ${PORT}`)))
	.catch(error => console.log(`Can not connect to mongodb ${error}`))
