import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const mongoURI = 'mongodb://localhost:27017/geo_market';
        await mongoose.connect(mongoURI);
        console.log('MongoDB Connected Successfully!');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        // Exit process with failure
        process.exit(1);
    }
};

export default connectDB;