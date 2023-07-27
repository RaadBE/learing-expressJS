import express from 'express';

const testrouter = express.Router();





testrouter.get('/path',(req,res) =>{
   
     res.send('alohaa')

})


export default testrouter;