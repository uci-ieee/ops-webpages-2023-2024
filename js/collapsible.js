/** A webpage collapsible component
 * @example <script src="./js/collapsible.js" title="Click to Reveal Answer" content="290Ω"></script>
 */
function createCollapsible() {

    // title: what is seen at the top of the collapsible
    const title = document.currentScript.getAttribute('title');
    // content: what is seen inside the collapsible
    // could be HTML
    const content = document.currentScript.getAttribute('content');

    // a collapsible needs to point to a unique id for the bootstrap collapsible function. Dynamically generate an id based on the collapsible title and contents, hoping that it's unique across the page.
    // testing every collapsible is highly recommended when utilizing a collapsible component

    const collapsibleID = generateCollapsibleID(title, content);
        
    // check to see if the collapsible built will have a unique ID
    const isUniqueID = checkIfUniqueID(collapsibleID);

    if (!isUniqueID) {
        // note: if an collapsible ID is not unique, then when one collapsible is toggled, all collapsibles with the same ID are also toggled, I believe 
        // notify in the console of an error
        console.error(`Collapsible with title: "${title}" and contents: "${content}" is the same across another collapsible in this page. Modify the title or contents to make the ID "${collapsibleID}" unique.`);
    }

    const accordionItemID = `${collapsibleID}1`


    // utilize the bootstrap accordion component as an easy to implement collapsible
    document.write(`
    <div class="accordion mb-3 mt-3" id="${collapsibleID}">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#${accordionItemID}" aria-expanded="true" aria-controls="${accordionItemID}">
                    ${title}
                </button>
            </h2>
            <div id="${accordionItemID}" class="accordion-collapse collapse" data-bs-parent="#${collapsibleID}">
                <div class="accordion-body">
                    ${content}
                </div>
            </div>
        </div>
    </div>
    `);
}

// TODO: find a more clever way to generate unique IDs for the collapsible component?
/**
 * 
 * generate a valid string that can be used 
 * @param {string} title 
 * @param {string} content 
 * @returns {string}
 */
function generateCollapsibleID(title, content) {
    /* a valid HTML ID:
        1. must start with a letter
        2. can have letters (a-z, A-Z), digits (0-9), hyphens (-), and underscores (_)
        3. **must be unique in the HTML document**
    */
    
    // concatenate the title and content together as the base id
    const baseID = `${title}-${content}`;
    
    // test the length
    if (baseID.length == 0) {
        // notify error and give this collapsible a dummy ID and hope it works
        const dummyID = "dummy_collapsible_id";
        console.error(`Title and content of collapsible is blank. Giving the collapsible a dummy id: ${dummyID}`);
        return dummyID;
    }
    
    // utilize some regex to replace all characters that are not letters, digits, hyphens, or underscores with underscores
    let cleaned = baseID.replace(/[^a-zA-Z0-9-_]/g, '_');

    // if the id starts with a number
    if (!isNaN(cleaned[0])) {
        // add an underscore in the front
        cleaned = `_${cleaned}`;
    }

    return cleaned;
}

/**
 * queries the document for an element with the stated id, returning true if it's unique and
 * @param {string} id 
 * @returns {boolean}
 */
function checkIfUniqueID(id) {
    return document.getElementById(id) ? false : true;
}

// run the collapsible code
createCollapsible();