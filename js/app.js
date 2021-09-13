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
const navList = document.querySelector(".navbar__list");
const sections = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */




/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// console.log(sections.childElementCount);

function buildNav(sectionCount) {

    for (x = 1; x !== sectionCount + 1; x++) {
        console.log("section " + x);
    };
};

// build the nav

buildNav(sections.length);


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