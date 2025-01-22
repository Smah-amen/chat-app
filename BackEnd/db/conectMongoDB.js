import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
         await mongoose.connect(process.env.MONGO_DB_URL)
        console.log(`MongoDB connected`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
       
    }
};


export default connectMongoDB;