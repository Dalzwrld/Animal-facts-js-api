let fauna = JSON.parse(localStorage.getItem("animal")) || [];

const animal = data[0];

const name = animal.name;
const taxonomy = animal?.taxonomy || [];