const express=require('express')

const app=express();

app.get('/',(req,res)=>{
    res.send(`<h2>My Node App</h2>`)
})

const PORT=5000;
app.listen(5000,()=>{
    console.log(`Server Listening at ${PORT}`);
})