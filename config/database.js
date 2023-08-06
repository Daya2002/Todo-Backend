const mongoose = require('mongoose')

require('dotenv').config();//give process.env object


const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log('db connection is succesfull'))
    .catch((error)=>{
        console.log('error in db connection');
        console.error(error.message);
        process.exit(1)
    })
}

module.exports = dbConnect;