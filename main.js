let fauna = JSON.parse(localStorage.getItem("animal")) || [];

const API_key = "O6gDOjX0GLmJOBMyTWDoj5RMeMw3Y0LEovT0oWvF";

const animals = ["lion", "cat", "dog", "tiger", "elephant",];

const btn = document.querySelector(".discover-btn");

btn.addEventListener("click", displayAnimal);

async function displayAnimal() {
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)]

    const endpoint = `https://api.api-ninjas.com/v1/animals?name={randomAnimal}`;

    try {
        const response = await fetch(endpoint, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const animal = data[0];
    } catch (error) {
        console.error("Error fetching your animal:", error);
        document.querySelector().textContent = "Unable to retrieve animal right now."
    }
}

const name = animal.name || " ";
const taxonomy = animal.taxonomy || {};
const locations = animal.locations || [];
const characteristics = animal.characteristics || {};

const habitat = animal.characteristics.habitat || " ";
const diet = animal.characteristics.diet || " ";
const group = animal.characteristics.group || " ";
const lifespan = animal.characteristics.lifespan || " ";

let taxonomyItems = "";
for (let key in taxonomy) {
    function normalCase() {
        const item = item.toLowerCase("").split;
    }
}