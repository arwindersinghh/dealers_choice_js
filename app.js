const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
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
    </body>
    </html>
    `);
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
    <h2>Pokemon</h2>
    <ul>
    <li><a href='/pokemon/1' style ="color:darkred">Charmander</a></li>
    <li><a href='/pokemon/3' style ="color:blue">Squirtle</a></li>
    <li><a href='/pokemon/5' style ="color:green">Bulbasaur</a></li>
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
    <h1>Pokemon</h1>
    <h2 style="color:darkred">Charmander</h2>
    <p style ="color:darkred">
    <img src="http://www.animalhi.com/thumbnails/detail/20121026/pokemon%20simple%20background%20charmander%20white%20background%201920x1080%20wallpaper_www.animalhi.com_66.jpg" alt="charmander-pic">
    Charmander is a small, bipedal, dinosaur-like Pokémon. Most of its body is colored orange, while its underbelly is a light yellow color. Charmander, 
    along with all of its evolved forms, has a flame that is constantly burning on the end of its tail.
    </p>
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
    <h1>Pokemon</h1>
    <h2 style="color:blue">Squirtle</h2>
    <p style ="color:blue">
    <img src="https://i.pinimg.com/originals/d2/b1/fb/d2b1fbf639b488115cf926977a9b846e.jpg" alt="squirtle-pic">
    Squirtle is a tiny turtle pokémon with large eyes and chubby cheeks, capable of moving either on two feet or on all fours. 
    Their skin is a light blue, and they possess a long, curled tail.
    </p>
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
    <h1>Pokemon</h1>
    <h2 style="color:green">Bulbasaur</h2>
    <p style ="color:green">
    <img src="https://i.pinimg.com/originals/34/9e/2a/349e2a4d065dcc55a417ac6f0528a5cf.jpg" alt="bulbasaur-pic">
    "Bulbasaur is a cute Pokémon born with a large seed firmly affixed to its back. The seed grows in size as the Pokémon does."
    </p>
    </body>
    </html>
    `);
});

app.listen(port, () => {
    console.log(`You are being heard on port ${port}`);
})


