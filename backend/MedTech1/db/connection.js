const mongoose = require("mongoose")

const connect = async () => 
{
    try{
        await mongoose.connect(
            "mongodb+srv://admin:password1admin@medtech.jzdf5.mongodb.net/medtech?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true
            })

            //mongoose.set('​debug', true)
    }
    catch(error)
    {
        console.log(error)
    }

    

};
        
module.exports = { connect };