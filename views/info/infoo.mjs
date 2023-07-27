import express from 'express';

const routerInfo = express.Router();





routerInfo.get('/info',(req,res) =>{
	res.render('info/info.ejs');
	
})

routerInfo

export default routerInfo;