const API_key = "O6gDOjX0GLmJOBMyTWDoj5RMeMw3Y0LEovT0oWvF";
const animal = "";

let fauna = JSON.parse(localStorage.getItem("animal")) || [];




const name = animal.name;
const taxonomy = animal?.taxonomy || {};
const locations = animal?.locations || [];
const characteristics = animal?.characteristics || {};

const habitat = animal.characteristics?.habitat;
const diet = animal.characteristics?.diet;
const group = animal.characteristics?.group;
const lifeSpan = animal.characteristics?.lifespan;

const animals = ["lion", "cat", "dog", "tiger", "elephant",]