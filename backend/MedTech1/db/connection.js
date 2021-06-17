const mongoose = require("mongoose")

const connect = async () => 
{
    await mongoose.connect(
        "mongodb+srv://admin:password1admin@medtech.jzdf5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
}
    

        console.log(connect)
        
module.exports = { connect }