const express = require('express');
const jwt = require('../helpers/jwtHelper');
const model = require('../core/model');
const router = express.Router();


router.post('/', express.json(), (req,res) => {
    
    if(!req.headers.authorization){
        res.status(401).send({message: 'não autorizado'});
    }

    let validation = jwt.verifyToken(req.headers.authorization.replace('Bearer ',''));
    let promise = Promise.resolve(validation);
    
    promise.then(function(decoded) {
        switch(decoded){
            case 'token inválido':
                res.status(401).send({message: decoded});
                break;
            default:
                let contacts = req.body.contacts;
                if(decoded.workplace === 'macapa'){  
                    contacts.map((element) => {
                        var number = element.cellphone.match(/(\d{2})(\d{2})(\d{5})(\d{4})/);
                        number = "+" + number[1] + " (" + number[2] + ") " + number[3]+"-"+number[4];
                        let data = {name: element.name.toUpperCase(), cellphone: number,workplace: decoded.workplace};
                        model.insertContact(data);
                    });
                }else{
                    contacts.map((element) => {
                        let data = {name: element.name, cellphone: element.cellphone,workplace: decoded.workplace};
                        model.insertContact(data);
                    });
                }
                res.status(200).send({message: 'contatos cadastrados com sucesso.'});
        }
    });
     
});


module.exports = router;