/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */
const header = document.querySelector(".page__header");
const nav = document.querySelector(".navbar__menu");
const navList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll('section');
const sectionCount = sections.length;
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

// create an array of the documents sections to use as the limit for the functions
const SectionArray = [];

// function NavArray(numberOfSections) {


//     for (x = 1; x !== numberOfSections + 1; x++) {

//         SectionArray.push("Section " + x);
//     };
// };

// create a bunch of li and add the html section + # to it
function makeLi(numberOfSections) {
    for (x = 1; x !== numberOfSections + 1; x++) {
        let navItem = document.createElement("li");
        navItem.textContent = "Section " + x;
        navList.appendChild(navItem);

    }
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// create nav bar



// build the nav

// NavArray(sectionCount);
makeLi(sectionCount);



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active