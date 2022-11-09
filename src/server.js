const express = require('express');
const app = express();

const mongoose = require('mongoose');

const noteRouter = require('./routes/Notes');


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const uri = "mongodb+srv://abhisheksharma:Abhishek%40123@cluster0.pfxkldx.mongodb.net/notesdb";
// connect DB
mongoose.connect(uri,{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    
}).then(()=>{

    app.get('/', (req, res)=>{
       const respone = ({ message: "API Works!"});
       res.json(respone);
    });

   
   app.use("/notes", noteRouter);
});





const PORT = process.env.PORT || 9000;
app.listen(PORT, ()=>console.log("Server started at  PORT: " + PORT));