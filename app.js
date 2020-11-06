const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const pokemonBank = require("./pokemon");
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
    `);
    const pokemons = pokemon.list();
    console.log(pokemons);
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
app.get('/pokemon/1', (req, res, next) => {
    res.send(`
    <html>
    <head>
    <link rel='stylesheet' href='/style.css'/>
    </head>
    <body>
    <nav>
    <a href='/'>Home</a>
    <a href='/pokemon'>Pokemon</a>
    </nav>
    <h1>Charmander</h1>
    <div id=charmander>
    <h2>Charmander</h2>
    <p>
    <img src="http://www.animalhi.com/thumbnails/detail/20121026/pokemon%20simple%20background%20charmander%20white%20background%201920x1080%20wallpaper_www.animalhi.com_66.jpg" alt="charmander-pic">
    Charmander is a small, bipedal, dinosaur-like Pokémon. Most of its body is colored orange, while its underbelly is a light yellow color. Charmander, 
    along with all of its evolved forms, has a flame that is constantly burning on the end of its tail.
    </p>
    </div>
    <a href='/pokemon/3' id=to_squirtle> Go to Squirtle </a>
    </body>
    </html>
    `);
});
app.get('/pokemon/3', (req, res, next) => {
    res.send(`
    <html>
    <head>
    <link rel='stylesheet' href='/style.css'/>
    </head>
    <body>
    <nav>
    <a href='/'>Home</a>
    <a href='/pokemon'>Pokemon</a>
    </nav>
    <h1>Squirtle</h1>
    <div id=squirtle>
    <h2>Squirtle</h2>
    <p>
    <img src="https://i.pinimg.com/originals/d2/b1/fb/d2b1fbf639b488115cf926977a9b846e.jpg" alt="squirtle-pic">
    Squirtle is a tiny turtle pokémon with large eyes and chubby cheeks, capable of moving either on two feet or on all fours. 
    Their skin is a light blue, and they possess a long, curled tail.
    </p>
    </div>
    <a href='/pokemon/1' id=to_charmander> Go to Charmander </a>
    <a href='/pokemon/5' id=to_bulbasaur> Go to Bulbasaur </a>
    </body>
    </html>
    `);
});
app.get('/pokemon/5', (req, res, next) => {
    res.send(`
    <html>
    <head>
    <link rel='stylesheet' href='/style.css'/>
    </head>
    <body>
    <nav>
    <a href='/'>Home</a>
    <a href='/pokemon'>Pokemon</a>
    </nav>
    <h1>Bulbasaur</h1>
    <div id=bulbasaur>
    <h2>Bulbasaur</h2>
    <p>
    <img src="https://i.pinimg.com/originals/34/9e/2a/349e2a4d065dcc55a417ac6f0528a5cf.jpg" alt="bulbasaur-pic">
    "Bulbasaur is a cute Pokémon born with a large seed firmly affixed to its back. The seed grows in size as the Pokémon does."
    </p>
    </div>
    <a href='/pokemon/3' style="float:left"id=to_squirtle> Go to Squirtle </a>
    </body>
    </html>
    `);
});

app.listen(port, () => {
    console.log(`You are being heard on port ${port}`);
})


