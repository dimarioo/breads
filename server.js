const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')


require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => { console.log('connected to mongo: ', process.env.MONGO_URI) })
  
  

// MIDDLEWARE
app.use(express.static('public'))

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
// MIDDLEWARE
app.use(methodOverride('_method'))



app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.get('/',(req,res) => {
    res.send('Welcome to an Awesome App about Breads')
})

// breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// bakers 
const bakersController = require('./controllers/bakers_controller.js')
app.use('/bakers', bakersController)


app.listen(PORT, () => {
    console.log('listening on port', PORT);
})
// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })
  