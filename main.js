const API_KEY = `O6gDOjX0GLmJOBMyTWDoj5RMeMw3Y0LEovT0oWvF`;

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const animalContainer = document.querySelector(".card-section");

let savedAnimals = [];
let nextId = 0;

async function getAnimal() { 
    const query = searchInput.value.trim();
    console.log("Searching for:", query);
    
    if (!query) {
        showError("Please enter an animal name first");
    }

    clearError();
    animalContainer.innerHTML = "";

    try {
        const response = await fetch(
            `https://api.api-ninjas.com/v1/animals?name=${encodeURIComponent(query)}`, 
            {
                method: "GET",
                headers: {"X-Api-Key": API_KEY}
        })

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json();

        if (!data || data.length === 0) {
            showError(`No results found for "${query}". Try a different name`);
            return;
        }

        const exactMatch = data.find(a => a.name.toLowerCase() === query.toLowerCase());

        const result = exactMatch || data[0];

        setTimeout(() => {
            renderAnimal(result);
        }, 1000);

    } catch (error) {
        console.error("Error fetching your animal:", error);
        showError("Something went wrong. Please try again.");
    }
}

searchBtn.addEventListener("submit", (e) => {
    e.preventDefault();
});

function renderAnimal(animal) {
    const name = animal.name || "Unknown";

    const habitat = animal.characteristics?.habitat || "N/A";
    const diet = animal.characteristics?.diet || "N/A";
    const group = animal.characteristics?.group || "N/A";
    const lifespan = animal.characteristics?.lifespan || "N/A";

    const kingdom = animal.taxonomy?.kingdom || "N/A";
    const phylum = animal.taxonomy?.phylum || "N/A";
    const className = animal.taxonomy?.className || "N/A";
    const order = animal.taxonomy?.order || "N/A";
    const family = animal.taxonomy?.family || "N/A";
    const genus = animal.taxonomy?.genus || "N/A";
    const scientificName = animal.taxonomy?.scientificName || "N/A";

    const locationItems = (animal.locations || [])
    .map((loc, i) => `
        <div class="loc${i}">
            <div class="location${i}">${i}</div>
            <div class="location-name">${loc}</div>
        </div>
    `).join("");

    const container = document.createElement("div");

    container.innerHTML = `
       <div class="animal-name-section">
           <div class="animal-name">${name}</div>
       </div>

       <div class="card-container">
           <div class="characteristics">
               <div class="title">
                   <div class="characteristics2">Characteristics</div>
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
                    <div class="group2">Group</div>
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
                ${locationItems}
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
    `;

    animalContainer.style.display = "flex";
    animalContainer.appendChild(container);
}

function showError(message) {
    let error1 = document.getElementById("search-error");

    if (!error1) {
        error1 = document.createElement("p");
        error1.id = "search-error";
        error1.style.p = `
            font-family: var(--paragraphs-font-family);
            font-size: var(--paragraphs-font-size);
            color: #c0392b;
            margin-top: 6px;
        `;

        const wrapper = document.querySelector(".search-wrapper");
        wrapper.insertAdjacentElement("afterend", error1);
    }

    error1.textContent = message;
}

function clearError() {
    const error1 = document.querySelector(".search-error");
    if (error1) error1.textContent = "";
}

searchBtn.addEventListener("submit", () => {
    getAnimal();
});

searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") getAnimal();
});
