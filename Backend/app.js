const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const cors = require('cors')
const cokieParser = require('cookie-parser')
const userRoutes = require('./routes/user.routes')
const captainRoutes = require('./routes/captain.routes')

const connectToMongoDB = require('./db/db')
connectToMongoDB()
const app = express()


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cokieParser())


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/users', userRoutes)
app.use('/captain', captainRoutes)




module.exports = app;