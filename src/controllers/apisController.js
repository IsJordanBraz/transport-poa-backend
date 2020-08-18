const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', async (req, res) => {
    const url="http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=o";
    try{
        axios.get(url).then(response => {        
            let resultado = response.data;  
            return res.status(200).json({ resultado });          
        })
        .catch(error => {
            return res.status(400).send({ erro: 'Falha ao carregar Linhas'});
        });        
    } catch(err){
        return res.status(400).send({ erro: 'Falha ao carregar Linhas'});
    }    
});

router.get('/:onibusID', async (req, res) => {    
    const url="http://www.poatransporte.com.br/php/facades/process.php?a=il&p="+req.params.onibusID+"";    
    try{
        axios.get(url).then(response => {        
            let resultado = response.data;  
            return res.status(200).json({ resultado });          
        })
        .catch(error => {
            return res.status(400).send({ erro: 'Falha ao carregar itinerarios'});
        });        
    } catch(err){
        return res.status(400).send({ erro: 'Falha ao carregar itinerarios'});
    }    
});

module.exports = app => app.use('/api', router);