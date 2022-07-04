const express = require('express');

const app =express();

app.use((req, res, next) => {
console.log('Requete reçue !');
next();
});

app.use((req, res, next) => {
    res.status(201);
    next();
});

app.use((req, res, next) => {
    res.json({ message: 'Votre réquete a bien été reçue !'});
    next();
});

app.use((req, res) => {
    console.log('Réponse envoyé avec succes !');
});

module.exports = app;

