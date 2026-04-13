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
    <div class="card-section">
       <div class="animal-name-section">
           <div class="animal-name">Cheetah</div>
       </div>
       <div class="card-container">
           <div class="characteristics">
               <div class="title">
                   <div class="characteristics2">Characteristics</div>
               </div>
                <div class="habitat">
                    <div class="habitat2">Habitat</div>
                    <div class="habitat-name-grasslands">habitat-name grasslands</div>
                </div>
                <div class="diet">
                    <div class="diet2">Diet</div>
                    <div class="carnivore">Carnivore</div>
                </div>
                <div class="group">
                    <div class="group-name">Group</div>
                    <div class="diet-name">diet-name</div>
                </div>
                <div class="lifespan">
                    <div class="lifespan2">Lifespan</div>
                    <div class="lifespantxt">10 - 15 years</div>
                </div>
            </div>
            <div class="locations">
                <div class="title2">
                    <div class="locations2">Locations</div>
                </div>
                <div class="loc0">
                    <div class="location0">0</div>
                    <div class="location-name">location-name</div>
                </div>
            </div>
            <div class="taxonomy">
                <div class="title">
                    <div class="taxonomy2">Taxonomy</div>
                </div>
                <div class="kingdom">
                    <div class="kingdom2">Kingdom</div>
                    <div class="kingdom-name">Animalia</div>
                </div>
                <div class="phylum">
                    <div class="phylum2">Phylum</div>
                    <div class="phylum-name">Chordata</div>
                </div>
                <div class="class">
                    <div class="class2">Class</div>
                    <div class="class-name">Mammalia</div>
                </div>
                <div class="order">
                    <div class="order2">Order</div>
                    <div class="order-name">Carnivora</div>
                </div>
                <div class="family">
                    <div class="family2">Family</div>
                    <div class="family-name">Felidae</div>
                </div>
                <div class="genus">
                    <div class="genus2">Genus</div>
                    <div class="genus-name">Acinonyx</div>
                </div>
                <div class="scientific-name">
                    <div class="scientific-name2">Scientific name</div>
                    <div class="scientific-name3">Acinonyx jupatus</div>
                </div>
            </div>
        </div>
    </div>
    `;

    animal.appendChild(container);
}


btn.addEventListener("click", () => {
    getAnimal();
    renderAnimal();
});
