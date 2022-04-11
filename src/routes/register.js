const express = require('express');
const jwt = require('../helpers/jwtHelper');
const router = express.Router();


router.post('/', express.json(), (req,res) => {
    
    let password = req.body.password;
    let name = req.body.name;
    let workplace = req.body.workplace;

    let generate = jwt.generateToken(name,password,workplace);
    let promise = Promise.resolve(generate);
    promise.then(function(token) {
        res.status(201).send({token});
    });
    
});

module.exports = router;