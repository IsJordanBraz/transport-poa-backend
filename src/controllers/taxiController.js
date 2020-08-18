const express = require('express');
const fs = require('fs');
const os = require('os');
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        fs.readFile('dataTaxi.txt','utf8', (err, data) => {
            if (err) throw err;            
            return res.send({ data });
        });          
        
    } catch(err){
        return res.status(400).send({ erro: 'Falha ao carregar log de taxi'});
    }
    
});

router.post('/', async (req, res) => {
    const { nome } = req.body;
    const { lat } = req.body;
    const { lng } = req.body;
    
    try{
        const timestamp = Date.now();
        const date = new Date(timestamp).toUTCString();
        let sendToFile = nome+"#"+lat+"#"+lng+"#"+date;
        fs.appendFile('dataTaxi.txt', sendToFile + os.EOL, function (err) {
            if (err) throw err;
          })       
        return res.status(200).send({ ok: 'tudocerto'});
    } catch(err){
        return res.status(400).send({ erro: 'Falha ao criar log de taxi'});
    }
});


module.exports = app => app.use('/taxi', router);