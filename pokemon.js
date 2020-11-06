const data = [
    { 
        id : 1, title : "Charmander", name : "charmander", image : "http://www.animalhi.com/thumbnails/detail/20121026/pokemon%20simple%20background%20charmander%20white%20background%201920x1080%20wallpaper_www.animalhi.com_66.jpg", 
        content : "Charmander is a small, bipedal, dinosaur-like Pokémon. Most of its body is colored orange, while its underbelly is a light yellow color. Charmander, along with all of its evolved forms, has a flame that is constantly burning on the end of its tail." 
    },
    {
         id : 3, title : "Squirtle", name : "squirtle", image : "https://i.pinimg.com/originals/d2/b1/fb/d2b1fbf639b488115cf926977a9b846e.jpg",
         content : "Squirtle is a tiny turtle pokémon with large eyes and chubby cheeks, capable of moving either on two feet or on all fours. Their skin is a light blue, and they possess a long, curled tail."
    },
    {
         id : 5, title : "Bulbasaur", name : "bulbasaur", image : "https://i.pinimg.com/originals/34/9e/2a/349e2a4d065dcc55a417ac6f0528a5cf.jpg",
         content : "Bulbasaur is a cute Pokémon born with a large seed firmly affixed to its back. The seed grows in size as the Pokémon does." 
    }
];


const list = () => {
    return [...data]
};

const find = (id) => {
    const pokemon = data.find(pokemon => pokemon.id === +id);
    
    return {...pokemon};
}

module.exports = { list: list, find: find };