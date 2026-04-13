const API_key = "O6gDOjX0GLmJOBMyTWDoj5RMeMw3Y0LEovT0oWvF";

const animals = ["lion", "cat", "dog", "tiger", "elephant",];

const btn = document.querySelector(".discover-btn");
const animalContainer = document.querySelector(".card-section");

const randomAnimal = animals[Math.floor(Math.random() * animals.length)];

const endpoint = `https://api.api-ninjas.com/v1/animals`;

async function getAnimal() {
    try {
        fetch(endpoint, {
            method: "GET",
            headers: {
                "X-Api-Key": "API_key",
            }
        })
        .then(() => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
        })

        const data = await response.json();

        setTimeout(() => {
            renderAnimal(data[0]);
        }, 800);
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

    const kingdom = animal.characteristics.kingdom || " ";
    const phylum = animal.characteristics.phylum || " ";
    const className = animal.characteristics.className || " ";
    const order = animal.characteristics.order || " ";
    const family = animal.characteristics.family || " ";
    const genus = animal.characteristics.genus || " ";
    const scientificName = animal.characteristics.scientificName || " ";

    const container = document.createElement("section");

    container.innerHTML = `
    <section class="card-section">
       <div class="animal-name-section">
           <div class="animal-name">${name}</div>
       </div>

       <div class="card-container">
           <div class="characteristics">
               <div class="title">
                   <div class="characteristics2">${characteristics}</div>
               </div>

                <div class="habitat">
                    <div class="habitat2">Habitat</div>
                    <div class="habitat-name">${habitat}</div>
                </div>

                <div class="diet">
                    <div class="diet2">Diet</div>
                    <div class="diet-name">${diet}</div>
                </div>

                <div class="group">
                    <div class="group-name">Group</div>
                    <div class="group-name">${group}</div>
                </div>

                <div class="lifespan">
                    <div class="lifespan2">Lifespan</div>
                    <div class="lifespantxt">${lifespan}</div>
                </div>
            </div>

            <div class="locations">
                <div class="title2">
                    <div class="locations2">Locations</div>
                </div>

                <div class="loc0">
                    <div class="location0">0</div>
                    <div class="location-name">${locations}</div>
                </div>
            </div>

            <div class="taxonomy">
                <div class="title">
                    <div class="taxonomy2">Taxonomy</div>
                </div>

                <div class="kingdom">
                    <div class="kingdom2">Kingdom</div>
                    <div class="kingdom-name"><i>${kingdom}</i></div>
                </div>

                <div class="phylum">
                    <div class="phylum2">Phylum</div>
                    <div class="phylum-name"><i>${phylum}</i></div>
                </div>

                <div class="class">
                    <div class="class2">Class</div>
                    <div class="class-name"><i>${className}</i></div>
                </div>

                <div class="order">
                    <div class="order2">Order</div>
                    <div class="order-name"><i>${order}</i></div>
                </div>

                <div class="family">
                    <div class="family2">Family</div>
                    <div class="family-name"><i>${family}</i></div>
                </div>

                <div class="genus">
                    <div class="genus2">Genus</div>
                    <div class="genus-name"><i>${genus}</i></div>
                </div>

                <div class="scientific-name">
                    <div class="scientific-name2">Scientific name</div>
                    <div class="scientific-name3"><i>${scientificName}</i></div>
                </div>
            </div>
        </div>
    </section>
    `;

    animal.appendChild(container);
}


btn.addEventListener("click", () => {
    getAnimal();
    renderAnimal();
});
