require('dotenv').config()

const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8080

const connectDB = require('./config/db')

connectDB()

const logRoutes = require('./routes/logRoutes')

const { createEngine } = require('jsx-view-engine')

app.set('view engine', 'jsx')
app.engine('jsx', createEngine())

app.use(express.urlencoded({ extended: true }))

app.use('/logs', logRoutes)



app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})