import mongoose from 'mongoose'

let isconnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log('MONGODB_URL not found');
    if(isconnected) return console.log('Already connected to MongoDB');

    try {
        await mongoose.connect(process.env.MONGODB_URL)

        isconnected = true;

        console.log("connected to mongodb")
    } catch (error) {
        console.log(error)
    }
}