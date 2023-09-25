

function createCard() {
    // title of the card
    const title = document.currentScript.getAttribute('title');
    
    // date at which 
    const date = document.currentScript.getAttribute('date');

    // link/src for image
    const image = document.currentScript.getAttribute('image');

    // link that this card links to the slides
    const slides = document.currentScript.getAttribute('slides');

    // link that this card links to the video
    const video = document.currentScript.getAttribute('video');

    const content = document.currentScript.getAttribute('content');

    document.write(`
        <div class="card flex-card p-3 shadow">
            <img class="card-img-top" src="${image}" alt="${title}">
            <div class="card-body flex-card-body">
                <h5 class="card-title fixed-height">${title}</h5>
                <p class="card-text">
                    ${content}
                </p>
            </div>
            <h6 class="card-subtitle mb-2 text-muted">
                ${date}
            </h6>
            <div>
                <button class="btn card-btn px-3 mr-card ${slides && slides.length > 0 ? "btn-primary" : "btn-secondary disabled"}" onclick="window.location='${slides}';">Slides</button>
                <button class="btn card-btn px-3 ${video && video.length > 0 ? "btn-primary" : "btn-secondary disabled"}" onclick="window.location='${video}';">Video</button>
            </div>
        </div>
    `);
}

// run the card creation code
createCard();