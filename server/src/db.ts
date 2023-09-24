import mongoose from "mongoose";

// Create connection between App and mongo DB
const connectToStorage = async () => {
    try {
        // ToDo:: Add mongo DB connection string
        const connection = await mongoose.connect('');
        if (!connection) { 
            throw Error('DB bridge failure');
        }
        console.log('AppSuccess: Connected to DB');
        
    } catch (error) {
        console.log(`AppError: DB failure ${error}`);
    }
} 
export default connectToStorage;