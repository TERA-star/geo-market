import express from 'express';
import connectDB from './config/db';
import path from 'path';
import usersRoute from './routes/api/users';
import authRoute from './routes/api/auth';
// import profileRoute from './routes/api/profile';

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/users', usersRoute);
app.use('/api/auth', authRoute);
// app.use('/api/profile', profileRoute);


// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(process.cwd(), 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));