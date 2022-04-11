const express = require('express');
const router = express.Router();


router.get('/', (req,res,next) =>{
    res.status(200).send({
        message: 'Usando get do node'
    });
});

router.post('/', (req,res,next) =>{
    res.status(201).send({
        message: 'Usando post do node'
    });
});

module.exports = router;