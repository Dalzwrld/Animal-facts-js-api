let fauna = JSON.parse(localStorage.getItem("animal")) || [];

const API_key = "O6gDOjX0GLmJOBMyTWDoj5RMeMw3Y0LEovT0oWvF";

const animals = ["lion", "cat", "dog", "tiger", "elephant",];

const btn = document.querySelector(".discover-btn");

const animal = document.querySelector(".animal");

btn.addEventListener("click", async () => {
    saveToLocalStorage();
    getAnimal();
    renderAnimal();
});


async function getAnimal() {
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

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
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

    setTimeout(() => {
        fetch("https://api-ninjas.com/api/animals").then(response => response.json()).then(data => {
            const animal = data[0];

            const taxonomy = {
                kingdom: data.kingdom,
                phylum: data.phylum,
                class: data.class,
                order: data.order,
                family: data.family,
                genus: data.genus,
                scientific_name: data.scientific_name
            };

            const characteristics = {
                habitat: data.habitat,
                diet: data.diet,
                group: data.group,
                lifespan: data.lifespan,
            };
        })
    })

    const card = document.createElement("section");

    card.innerHTML = `
        <img src="${imgUrl}" alt="${name}">

        <div class="card-info">
            <h2>${name}</h2>

            <div class="info taxonomy">
                <h3>Taxonomy</h3>

                ${taxonomyItems}
            </div>

            <div class="info location">
                <h3>Locations</h3>

                ${locationTxt}
            </div>

            <div class="info characteristics">
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
        </div>
    `;

    animal.appendChild(card);
}


function changeLabel(text) {
    return text.split("_").map(word => word[0].toUpperCase + word.slice(1)).join(" ");
}

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

function saveToLocalStorage() {
    localStorage.setItem("animal", JSON.stringify(fauna));
}
