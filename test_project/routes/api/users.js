const express = require('express');
const router = express.Router();
// const uuid = require("@types/uuid");
let users = require("../../data");

// get all users
router.get('/', (req, res) => {
    res.send(users);
});

// get user by id
router.get('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));
    if(found)
        res.json(users.filter(user => user.id === parseInt(req.params.id)));
    res.status(404).send('Not Found');
});

// add user
router.post('/',(req, res) => {
    const newUser = {
        // id: uuid.v4(),
        id: req.body.id,
        name: req.body.name,
        email: req.body.email
    };

    if(!newUser.name || !newUser.email)
        res.status(404).send('Bad request');

    users.push(newUser);
    res.json(users);
});

// update a detail of user
router.put('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));
    if(found)
        res.json(users.filter(user => user.id === parseInt(req.params.id)));
    res.status(404).send('Not Found');
})

module.exports = router;