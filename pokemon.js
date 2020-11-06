const data = [
    { id : 1, title : "Charmander", name : "charmander", image : "http://www.animalhi.com/thumbnails/detail/20121026/pokemon%20simple%20background%20charmander%20white%20background%201920x1080%20wallpaper_www.animalhi.com_66.jpg", 
    content : "Charmander is a small, bipedal, dinosaur-like Pokémon. Most of its body is colored orange, while its underbelly is a light yellow color. Charmander, along with all of its evolved forms, has a flame that is constantly burning on the end of its tail." },
    { id : 3, title : "Squirtle", name : "squirtle", image : "",},
    { id : 5, }
];


const list = () => {
    return [...data]
};

const find = (id) => {
    const pokemon = data.find(pokemon => pokemon.id === +id);
    
    return {...pokemon};
}

module.exports = { list: list, find: find };