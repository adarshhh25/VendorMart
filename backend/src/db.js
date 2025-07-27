import mongoose from 'mongoose';


function mongoConnect(URI){
    mongoose.connect(URI)
    .then(() => console.log("Conected to MongoDB atlas.."))
    .catch((err) => console.log("Error Connecting Mongo: ", err))
}

export default mongoConnect;