const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require("mongoose");

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// Router Imports
const homeRoutes = require('./routers/home');
const executeRoute = require('./routers/execute');
const problemRoutes = require('./routers/problems');

//connecting to database cluster.
mongoose.connect('mongodb+srv://prajyotb9:'+ process.env.MONGO_ATLAS_PASSWORD  +'@cluster0.j3dm6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

//creating app instance using express.
const app = express();

//Middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//it will handle all cors 
app.use(cors());

//using routes using router
app.use('/',homeRoutes);
app.use('/execute',executeRoute);
app.use('/problems',problemRoutes);

app.get('/:id',(req,res) => {
    res.send(`We are in /${req.params.id} directory`);
});

const PORT = process.env.PORT || 3002;
app.listen(PORT,() => {
    console.log(`listening to the server on Port ${PORT}`);   
});
