let fauna = JSON.parse(localStorage.getItem("animal")) || [];

const animal = data[0];

const name = animal.name;
const taxonomy = animal?.taxonomy || {};
const locations = animal?.locations || [];
const characteristics = animal?.characteristics || {};

const habitat = animal.characteristics?.habitat;
const diet = animal.characteristics?.diet;
const group = animal.characteristics?.group;
const lifeSpan = animal.characteristics?.lifespan;