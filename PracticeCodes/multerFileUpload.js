const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Set up storage engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Initialize upload variable with the storage configuration
const upload = multer({ storage: storage });

// Create uploads directory if it doesn't exist
const fs = require('fs');
const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Set up the route to handle file uploads
app.post('/upload', upload.single('myFile'), (req, res) => {
    if (req.file) {
        res.send(`File uploaded: ${req.file.filename}`);
    } else {
        res.send('File upload failed.');
    }
});
// To handle multiple file uploads, you can use upload.array() instead of upload.single():
app.post('/upload', upload.array('myFiles', 10), (req, res) => {
    if (req.files) {
        res.send(`Files uploaded: ${req.files.length}`);
    } else {
        res.send('File upload failed.');
    }
});


// Start the server
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
