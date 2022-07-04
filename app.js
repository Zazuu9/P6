const express = require('express');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.post('/api/stuff', (req, res, next) => {
console.log(req.body);
res.status(201).json({
    message: 'Objet créé !'
    });
});

app.get('/api/stuff', (req, res, next) =>{
    const stuff = [
        {
            _id: 'oeihfzeoi',
            title: 'Mon premier objet',
            description: 'Les infos de mon premier objet',
            imageUrl: 'https://atlas-content-cdn.pixelsquid.com/assets_v2/245/2452423176773178782/jpeg-600/G03.jpg?modifiedAt=1',
            price: 4900,
            userId: 'qsomihvqios',
        },
        {
            _id: 'oeihfzeoihi',
            title: 'Mon deuxième objet',
            description: 'Les infos de mon deuxième objet',
            imageUrl: 'https://www.esdorado.com/3821-large_default/consoles-xbox-serie-x-de-microsoft.jpg',
            price: 2900,
            userId: 'qsomihvqios',
        },
    ];
    res.status(200).json(stuff);
});

module.exports = app;

