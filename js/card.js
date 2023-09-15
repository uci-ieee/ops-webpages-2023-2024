

function createCard() {
    // title of the card
    const title = document.currentScript.getAttribute('title');
    
    // date at which 
    const date = document.currentScript.getAttribute('date');

    // link/src for image
    const image = document.currentScript.getAttribute('image');

    // link that this card links to, likely an external page or another page
    const link = document.currentScript.getAttribute('link');

    document.write(`
    <div class="col">
        <div class="card p-3">
            <a href="${link}" >
                <img class="card-img-top" src="${image}" alt="${title}">
            </a>
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                    ${date}
                </h6>
                <a href="${link}" class="card-link">See More</a>
            </div>
        </div>
    </div>
    `);
}

// run the card creation code
createCard();