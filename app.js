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
    res.send(`
        <html>
        <head>
        <link rel='stylesheet' href='/style.css'/>
        </head>
        <body>
        <nav>
        <a href='/' class='selected'>Home</a>
        <a href='/pokemon'>Pokemon</a>
        </nav>
        <h1><ins>Pokemon</ins></h1>
        <img src="https://images.nintendolife.com/8a8767bcfcc05/you-gotta-start-somewhere.original.jpg" alt="Picture-Of-Pokemon">
        <div>
        <p id="summary">
        Many Pokemon exist in the vast world of Pokemon. Many young Pokemon trainers
        do not get to experience seeing all of the Pokemon in the Pokemon World.
        Charmander, Squirtle, and Bulbasaur are amongst the three starters in the 
        Kantou region, and amongst the three, Charmander is the most popular. Fire types 
        are just the coolest pokemon, and the only time a pokemon is cooler than Charmander
        is when they are wearing sunglasses. Alright, that's enough text for you folks,
        if you are done reading this, go to sleep. If I have any spelling or grammar
        errors in this summary, it's because I am writing it late at night.
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


