/*** Define Global Variables* */

// header section
const header = document.querySelector(".page__header");
// nav menu
const nav = document.querySelector(".navbar__menu");
// navigation ul
const navList = document.querySelector("#navbar__list");
// looks for all sections and creates an array
const sections = document.querySelectorAll('section');
// count of sections (4)
const sectionCount = sections.length;



// Start Helper Functions

// checks if element is in viewport

function isInViewport(element) {

    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );

};



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// nav bar


// create a bunch of li and add the html section + # to it
function makeLi(numberOfSections) {
    for (let x = 1; x !== numberOfSections + 1; x++) {
        let navItem = document.createElement("li");
        navItem.innerHTML = "<a " + "id = nav_item_" + x + " class = 'pizza'> Section " + x + " </a";
        navList.appendChild(navItem);
        navItem.addEventListener("click", function () {
            sections[x - 1].scrollIntoView({
                behavior: 'smooth'
            })
        })
    }
}





// Add class 'active' to section when near top of viewport

function setActiveClass() {
    for (let y = 0; y < sectionCount; y++) {
        if (isInViewport(sections[y])) {
            sections[y].classList.add("your-active-class");
        } else {

            sections[y].classList.remove("your-active-class");
        };

    }
}



// Scroll to anchor ID using scrollTO event




/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
makeLi(sectionCount);


// Scroll to section on link click

// Set sections as active

document.addEventListener('scroll', function () {

    setActiveClass()

});