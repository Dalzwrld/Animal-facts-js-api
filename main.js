const API_key = "O6gDOjX0GLmJOBMyTWDoj5RMeMw3Y0LEovT0oWvF";
const animal = "";

let fauna = JSON.parse(localStorage.getItem("animal")) || [];

async function displayAnimal() {
    const endpoint = `https://api.api-ninjas.com/v1/animals?name=`;

    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            
        }
    } catch (error) {
        
    }
}


const name = animal.name;
const taxonomy = animal?.taxonomy || {};
const locations = animal?.locations || [];
const characteristics = animal?.characteristics || {};

const habitat = animal.characteristics?.habitat;
const diet = animal.characteristics?.diet;
const group = animal.characteristics?.group;
const lifeSpan = animal.characteristics?.lifespan;

const animals = ["lion", "cat", "dog", "tiger", "elephant",]