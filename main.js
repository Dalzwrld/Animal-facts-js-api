let fauna = JSON.parse(localStorage.getItem("animal")) || [];

const API_key = "O6gDOjX0GLmJOBMyTWDoj5RMeMw3Y0LEovT0oWvF";

const animals = ["lion", "cat", "dog", "tiger", "elephant",];

const btn = document.querySelector(".discover-btn");

const animal = document.querySelector(".animal");

btn.addEventListener("click", () => {
    saveToLocalStorage();
    displayAnimal();
});


async function displayAnimal() {
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];

    const endpoint = `https://api.api-ninjas.com/v1/animals?name=${randomAnimal}`;

    try {
        const response = await fetch(endpoint, {
            method: "GET",
            headers: {
                "X-API-KEY": API_key
            }
        });

        const data = await response.json();

        const animal = data[0];

        if (!animal.response.ok) {
            throw new Error(`HTTP error! Status: ${animal.response.status}`)
        }
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

function renderAnimal() {
    animal.innerHTML = "";

    const card = document.createElement("div");

    card.innerHTML = `
        <img src="${imgUrl}" alt="${name}">

        <div class="card-info">
            <h2>${name}</h2>

            <div class="taxonomy">
                <h3>Taxonomy</h3>

                ${taxonomyItems}
            </div>

            <div class="location">
                <h3>Locations</h3>

                ${locationTxt}
            </div>

            <div class="characteristics">
                <h3>Characteristics</h3>

                <table>
                    <tr>
                        <td>
                            <p>Habitat</p>
                        </td>
                        <td>
                            <p>${habitat}</p>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p>Diet</p>
                        </td>
                        <td>
                            <p>${diet}</p>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p>Group</p>
                        </td>
                        <td>
                            <p>${group}</p>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p>Lifespan</p>
                        </td>
                        <td>
                            <p>${lifespan}</p>
                        </td>
                    </tr>
                </table>
            </div>
            
            <button class="update" type="submit">
                <div class="btn-text">
                    Pick another one
                </div>
            </button
        </div>
    `;

    animal.appendChild(card);

    updateAnimal();
}


function changeLabel(text) {
    return text.split("_").map(word => word[0].toUpperCase + word.slice(1)).join(" ");
}

const taxonomyItems = "";
for(let key in taxonomy) {
    const label = formatLabel(key);
    taxonomyItems += `
        <table>
            <tr>
                <td>
                    <p>${label}</p>
                </td>
                <td>
                    <p>${taxonomy[key]}</p>
                </td>
            </tr>
        </table>
    `;
}


const locationTxt = locations.length > 0 ? locations.join(", ") : "Not available";

function updateAnimal(params) {
    
}

function saveToLocalStorage() {
    localStorage.setItem("animal", JSON.stringify(fauna));
}
