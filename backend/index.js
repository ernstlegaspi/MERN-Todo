import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

const app = express()

dotenv.config()

app.use(cors())
app.use(express.json({ limit: '30mb' }))
app.use(express.urlencoded({ limit: '30mb' }))

const PORT = process.env.PORT || 2217

mongoose.connect(process.env.DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
	.then(() => app.listen(PORT, () => console.log(`Server is running in port: ${PORT}`)))
	.catch(error => console.log(`Can not connect to mongodb ${error}`))
