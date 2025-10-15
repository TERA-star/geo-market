import mongoose from 'mongoose';
import config from 'config';
// const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/geo_market');
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
};

export default connectDB;