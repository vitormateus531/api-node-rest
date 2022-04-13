const express = require('express');
const jwt = require('../helpers/jwtHelper');
const model = require('../core/model');
const router = express.Router();


router.get('/', express.json(), (req,res) => {

    if(!req.headers.authorization){
        res.status(401).send({message: 'não autorizado'});
        return;
    }
    
    (async () => {    
        let validation = jwt.verifyToken(req.headers.authorization.replace('Bearer ',''));
        let promise = Promise.resolve(validation);
        let decoded = await promise.then(function(decoded) {
            switch(decoded){
                case 'token inválido':
                    res.status(401).send({message: decoded});
                    break;
                default:
                    return decoded;
            }
        });
        let list = await model.contacts(decoded.workplace);
        res.status(200).send({list});
    })();

});


module.exports = router;