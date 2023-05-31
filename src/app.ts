import express, { Application } from 'express'
import cors from 'cors'

const app: Application = express()

const port = process.env.PORT || 5000;

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res, next) => {
    res.send('Love')
})

export default app;