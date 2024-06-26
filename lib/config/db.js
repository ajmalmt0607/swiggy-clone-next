import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Mongo Connection succesfull");
    } catch (error) {
        throw new Error("Error in connecting to mongodb");
    }
};

export default connect;
