/* =====================================================
   NovaBiz V2
   JavaScript
===================================================== */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

        navigation.classList.toggle("active");

    });


    navigation.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("active");

        });

    });

}


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert(
            "Thank you! Your message has been submitted."
        );

        contactForm.reset();

    });

}


/* ================= HEADER SCROLL EFFECT ================= */

const header =
    document.querySelector(".site-header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 8px 30px rgba(20,30,60,.06)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* ================= CURRENT YEAR ================= */

const year = new Date().getFullYear();

document.querySelectorAll(".current-year")
    .forEach(element => {

        element.textContent = year;

    });