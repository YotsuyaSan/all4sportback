var express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../config/database');

let batimentRouter = require('./routes/batiment.routes.js')
    moduleRouter = require('./routes/module.routes.js')
    rangeeRouter = require('./routes/rangee.routes.js')
    sectionRouter = require('./routes/section.routes.js')
    etagereRouter = require('./routes/etagere.routes.js')
    produitRouter = require('./routes/produit.routes.js')
    
    userRouter = require('./routes/user.routes.js')
const app = express();

db.database.sync().then(() => {
    console.log('look la db')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))


app.use(cors())
app.use('/batiment', batimentRouter)
 app.use('/module', moduleRouter)
app.use('/rangee', rangeeRouter)
app.use('/section', sectionRouter)
app.use('/etagere', etagereRouter)
app.use('/produit', produitRouter) 
app.listen(3000, () => console.log('Express => Rdy'));