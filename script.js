/* ==========================================
   WRITER PORTFOLIO JAVASCRIPT
   ========================================== */


/* ==========================================
   FOOTER YEAR
   ========================================== */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}



/* ==========================================
   MOBILE NAVIGATION
   ========================================== */

const menuButton = document.getElementById("menu-btn");

const nav = document.getElementById("nav");


if (menuButton && nav) {

    menuButton.addEventListener("click", function () {

        nav.classList.toggle("open");

    });


    // Close menu after clicking a link

    const navLinks = nav.querySelectorAll("a");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            nav.classList.remove("open");

        });

    });

}



/* ==========================================
   SCROLL REVEAL ANIMATION
   ========================================== */

const revealElements = document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(

    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {

        threshold: 0.12

    }

);


revealElements.forEach(function (element) {

    observer.observe(element);

});



/* ==========================================
   CUSTOM CURSOR
   ========================================== */

// Create cursor

const cursor = document.createElement("div");

cursor.classList.add("cursor");

document.body.appendChild(cursor);


// Only activate on devices with a mouse

if (window.matchMedia("(pointer: fine)").matches) {


    document.addEventListener("mousemove", function (event) {

        cursor.style.left = event.clientX + "px";

        cursor.style.top = event.clientY + "px";

    });


    const interactiveElements = document.querySelectorAll(

        "a, button, .work-card, .service, .skills span"

    );


    interactiveElements.forEach(function (element) {

        element.addEventListener("mouseenter", function () {

            cursor.classList.add("active");

        });


        element.addEventListener("mouseleave", function () {

            cursor.classList.remove("active");

        });

    });

}