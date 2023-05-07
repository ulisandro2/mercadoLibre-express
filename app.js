const express = require('express');
const app = express();
const path = require('path')

app.listen (process.env.PORT || 3000, function(){
    console.log('Servidor corriendo');
 });
 
 
 let publicPath = path.resolve(__dirname,'./public');
 app.use(express.static(publicPath));
 
 
 let homePath = path.resolve(__dirname,'./views/home.html');
 
 app.get('/',function(req,res){
    res.sendFile(homePath);
 });