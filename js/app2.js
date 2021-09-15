const header = document.querySelector(".page__header");
const nav = document.querySelector(".navbar__menu");
const navList = document.querySelector("#navbar__list");
// looks for all sections
const sections = document.querySelectorAll('section');
// count of sections
const sectionCount = sections.length;



// create a bunch of li and add the html section + # to it
function makeLi(numberOfSections) {
    for (x = 1; x !== numberOfSections + 1; x++) {
        let navItem = document.createElement("li");
        navItem.innerHTML = "<a " + "id = nav_item_" + x + " href='#section" + x + "'> Section " + x + " </a";
        navList.appendChild(navItem);
    }
}



// NavArray(sectionCount);
makeLi(sectionCount);

// event listner for each section

function activeSection(sectionNumber) {
    console.log("activated");
}

function inactiveSection(sectionNumber) {
    console.log("inactivated");
}


// add event listeners to sections

function addEventListeners(numberOfSections) {

    for (x = 0; x !== numberOfSections; x++) {
        sections[x].addEventListener("mouseenter", activeSection);
        sections[x].addEventListener("mouseleave", inactiveSection);
    };
}


addEventListeners(sectionCount);