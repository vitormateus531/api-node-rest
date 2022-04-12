const express = require('express');
const jwt = require('../../helpers/jwtHelper');
const mysql = require('../../core/dbMysql');
const postgres = require('../../core/dbPostgree');
const router = express.Router();


router.post('/', express.json(), (req,res) => {
    
    let password = req.body.password;
    let name = req.body.name;
    let workplace = req.body.workplace;

    if((password == '' || password == undefined) || (name == '' || name == undefined) || (workplace == '' || workplace == undefined) ){
        res.status(405).send({message:'Todos os campos precisam estar preenchidos.'});
    }

    try{
        (async () => {
            let data = {name : name,password: password};
            switch(workplace){
                case 'macapa':
                     const verifyMacapa = await mysql.verifyIfExistsUsers(data);
                     if(verifyMacapa[0].countUser > 0){
                        let generate = jwt.generateToken(name,password,workplace);
                        let promise = Promise.resolve(generate);
                        promise.then(function(token) {
                            res.status(201).send({message: 'usuario logado!', token});
                        });
                     }else{
                            res.status(401).send({message: 'usuario ou senha inválidos'});
                     }
                    break;
                case 'varejao':
                      const verifyVarejao = await postgres.verifyIfExistsUsers(data);
                      if(parseInt(verifyVarejao[0].countuser) > 0){
                        let generate = jwt.generateToken(name,password,workplace);
                        let promise = Promise.resolve(generate);
                        promise.then(function(token) {
                            res.status(201).send({message: 'usuario logado!', token});
                        });
                     }else{
                            res.status(401).send({message: 'usuario ou senha inválidos'});
                     }
                    break;
                default:
                    res.status(401).send({message: 'workplace não existente'});
            }
        })();
        
    }catch(e){
        res.status(500).send({message: e});
    }

});

module.exports = router;