const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const pokemonBank = require("./pokemon");
const pokemonDetails = require("./pokemonList")
const morgan = (require('morgan')('dev'));
app.use(morgan);
app.use(express.static('assets'));
const port = 1337;

app.get('/', (req, res, next) => {
    const summary = pokemonBank.homepage()[0];
    res.send(`
        <html>
        <head>
        <link rel='stylesheet' href='/style.css'/>
        </head>
        <body>
        <nav>
        <a href='/' class='selected'>Home</a>
        <a href='/pokemon'>${summary.title}</a>
        </nav>
        <h1><ins>${summary.title}</ins></h1>
        <img src=${summary.image} alt="Picture-Of-Pokemon">
        <div>
        <p id="summary">
        ${summary.content}
        </p>
        </div>
        </body>
        </html>
         `)
});
app.get('/pokemon', (req, res, next) => {
    res.send(`
    <html>
    <head>
    <link rel='stylesheet' href='/style.css'/>
    </head>
    <body>
    <nav>
    <a href='/'>Home</a>
    <a href='/pokemon' class='selected'>Pokemon</a>
    </nav>
    <h1>Pokemon</h1>
    <ul>
    <li><a href='/pokemon/1' id=charmander>Charmander</a></li>
    <li><a href='/pokemon/3' id=squirtle>Squirtle</a></li>
    <li><a href='/pokemon/5' id=bulbasaur>Bulbasaur</a></li>
    </ul>
    </body>
    </html>
    `);
});
app.get('/pokemon/:id', (req, res, next) => {
    const pokemon = pokemonBank.find(req.params.id);
    res.send(pokemonDetails(pokemon));
});

app.listen(port, () => {
    console.log(`You are being heard on port ${port}`);
})


