const express= require('express')
const path = require('path')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/views', function(req,res){
    res.render('index')
})


app.listen(port, function(){
    console.log(`server is running on ${port}`)
})