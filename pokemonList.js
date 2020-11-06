const html = require("html-template-tag");

module.exports = pokemon => html `
    <html>
    <head>
    <link rel='stylesheet' href='/style.css'/>
    </head>
    <body>
    <nav>
    <a href='/'>Home</a>
    <a href='/pokemon'>Pokemon</a>
    </nav>
    <h1>${pokemon.title}</h1>
    <div id=${pokemon.name}>
    <h2>${pokemon.title}</h2>
    <p>
    <img src=${pokemon.image} alt="pokemon-pic">
    ${pokemon.content}
    </p>
    </div>
    </body>
    </html>
    `;
