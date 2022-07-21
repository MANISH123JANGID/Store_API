const express= require('express');
const app = express();
const port= process.env.PORT || 3000;
const env= require('dotenv');
const notfound= require('./middlewares/not_found');
const errorhandler= require('./middlewares/errorhandler');
const connectdb= require('./db/connectdb');
const createCustomError= require('./errors/error');
const { ConnectionPoolClosedEvent } = require('mongodb');
require('express-async-errors');
const router=require('./routes/products');
env.config();

// middlewares setup for the application 

app.use(express.json());

// routes 
app.use('/api/v1/products',router);
app.use(notfound);
app.use(errorhandler);
app.get('/',(req, res) => {
    res.send('THIS IS A SERVER ON PORT 3000');
    res.end();
})

const start= async () => {
   try{
        const connected= await connectdb(process.env.MONGO_URI);
        if(!connected) {
            console.log(`There was an error connecting to the database`);
        }
        app.listen(port,()=>{
            console.log(`Listening on port ${port}`);
        });
   }catch(error){
         console.log(error);
    }
}
start()