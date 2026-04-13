const API_key = "O6gDOjX0GLmJOBMyTWDoj5RMeMw3Y0LEovT0oWvF";

const animals = ["lion", "cat", "dog", "tiger", "elephant",];

const btn = document.querySelector(".discover-btn");
const animalContainer = document.querySelector(".animal-result");


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

        setTimeout(() => {
            renderAnimal(data[0]);
        }, 800);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
    } catch (error) {
        console.error("Error fetching your animal:", error);
    }
}


function renderAnimal(animal) {
    const name = animal.name || " ";
    const taxonomy = animal.taxonomy || {};
    const locations = animal.locations?.join(", ") || [];
    const characteristics = animal.characteristics || {};

    const habitat = animal.characteristics.habitat || " ";
    const diet = animal.characteristics.diet || " ";
    const group = animal.characteristics.group || " ";
    const lifespan = animal.characteristics.lifespan || " ";

    let taxonomyItems = "";

    for (let key in animal.taxonomy) {
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

    const container = document.createElement("section");

    container.innerHTML = `
        <div class="card-info">
            <h2>${name}</h2>

            <div class="info taxonomy">
                <h3>Taxonomy</h3>

                ${taxonomyItems}
            </div>

            <div class="info location">
                <h3>Locations</h3>

                ${locations}
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

    animal.appendChild(container);
}


btn.addEventListener("click", () => {
    getAnimal();
    renderAnimal();
});
