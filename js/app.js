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
// footer text
const footerText = document.querySelector(".footer_text");



// Start Helper Functions

// checks if element is in viewport

function isInViewport(element) {
    // passes te element's position to a variable
    const elementSize = element.getBoundingClientRect();
    return (
        elementSize.top >= 0 &&
        elementSize.left >= 0 &&
        elementSize.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        elementSize.right <= (window.innerWidth || document.documentElement.clientWidth)
    );

};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */



// nav bar

// create a bunch of lis and add a scroll event listener
function makeLi(numberOfSections) {



    for (let x = 0; x !== numberOfSections; x++) {
        // using fragments is faster since it is not added to the DOM
        var fragment = document.createDocumentFragment();
        let navItem = document.createElement("li");
        navItem.innerHTML = "<a " + "id = nav_item_" + x + " class = 'nav_item'>" + sections[x].querySelector("h2").innerText + " </a";
        fragment.appendChild(navItem);
        navList.appendChild(fragment);

        // Scroll to anchor ID using scrollTO event
        navItem.addEventListener("click", function () {
            sections[x].scrollIntoView({
                behavior: 'smooth'
            })
        })
    }
}


// Add class 'active' to section and navbar item when near top of viewport

function setActiveClass() {
    for (let y = 0; y < sectionCount; y++) {
        if (isInViewport(sections[y])) {
            sections[y].classList.add("your-active-class");
            document.getElementById("nav_item_" + y).classList.add("nav_item_in_viewport");


        } else {
            sections[y].classList.remove("your-active-class");
            document.getElementById("nav_item_" + y).classList.remove("nav_item_in_viewport");
        };

    }
}

function ScrolltoTop(element) {
    element.addEventListener("click", function () {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    })
}


/**
 * End Main Functions
 * Begin Events
 * 
 */


// Build menu 
makeLi(sectionCount);

// Scroll to section on link click

// this was added when the nav item is created

// Set sections as active

document.addEventListener('scroll', function () {

    setActiveClass()

});

// add an event listener for footer text

ScrolltoTop(footerText);