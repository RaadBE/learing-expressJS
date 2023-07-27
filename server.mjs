import express from 'express';
import dishR from './dishesRouter/dish.mjs';
import testro from './test.mjs';
import dotenv from 'dotenv';
import inffo from './views/info/infoo.mjs';
dotenv.config();
const app = express();


app.set('view engine', 'ejs');


// app.use(express.json()); // for parsing application/json
// app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// app.get('/help/info', (req,res)=>{
//     res.send('louis')
// });// app.use('/raadkey/:name',dishR);
app.use('/help',inffo); //the start of the url is always from here and the router is the contuine of the url

app.use('/', dishR);// app.use('/raadkey/:name',dishR);  


const PORT = 3000
app.listen(PORT, () => console.log(`Server started: http://localhost:${PORT}/`))
 