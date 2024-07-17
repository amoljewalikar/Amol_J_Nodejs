const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // set to true if using HTTPS
}));

app.get('/', (req, res) => {
    if (req.session.views) {
        console.log(req.session.views++);
        req.session.views++;
        res.send(`Number of views: ${req.session.views}`);
    } else {
        req.session.views = 1;
        res.send('Welcome to the session demo. Refresh page!');
    }
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
