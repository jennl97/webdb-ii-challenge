const express = require('express');

const db = require('../data/dbConfig');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    db('cars')
    .then(car => {
        res.status(200).json(car)
    })
    .catch(err => {
        res.status(500).json({
            message: 'Houston, we have an issue with the database'
        })
    })
})

server.post('/', (req,res) => {
    const body = req.body;
    db('cars').insert(body)
    .then(car => {
        res.status(200).json(car)
    })
    .catch(err => {
        res.status(500).json({
            message: "Yeah, no, that didn't work"
        })
    })
})

module.exports = server;