import express from 'express'
import router from './routes'
import 'reflect-metadata'
const app = express()
import './database/connect'

app.use(express.json())
app.use(router)

app.listen(3000, ( ) => console.log('[SERVIDOR] INCIADO NA PORTA 3000'))

