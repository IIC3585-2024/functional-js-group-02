import express from 'express';
const app = express();

// Define the directory where your static files (including HTML) are located
app.use(express.static('public'));

// Start the server
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});