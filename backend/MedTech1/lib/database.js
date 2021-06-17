const MongoClient = require("mongodb").MongoClient;

let cachedDb = null;

export const connectToDatabase = async () => {
    if (cachedDb){
        console.log("Use existing connection");
        return Promise.resolve(cachedDb);
    }
    else{
        return MongoClient.connect("mongodb+srv://admin:password1admin@medtech.jzdf5.mongodb.net/myFirstDatabase", {
            native_parser : true,
            useUnifiedTopology : true,
        })
        .then((client)=>{
            let db= client.db("medtech");
            console.log("New Database Connection");
            cachedDb = db;
            return cachedDb;
        })
        .catch((error)=>{
            console.log(error);
        })
    }
};