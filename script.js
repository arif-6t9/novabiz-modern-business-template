/* =====================================================
   NovaBiz V2
   JavaScript
===================================================== */

"use strict";


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navigation =
    document.getElementById("navigation");


if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

        navigation.classList.toggle("active");

        const isOpen =
            navigation.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });


    navigation
        .querySelectorAll("a")
        .forEach((link) => {

            link.addEventListener("click", () => {

                navigation.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

}


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");

const formStatus =
    document.getElementById("formStatus");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const submitButton =
                contactForm.querySelector(
                    'button[type="submit"]'
                );


            if (!submitButton) {
                return;
            }


            const originalText =
                submitButton.textContent;


            submitButton.disabled = true;

            submitButton.textContent =
                "Sending...";


            if (formStatus) {

                formStatus.textContent =
                    "Sending your message...";

                formStatus.className =
                    "form-status is-sending";

            }


            try {

                const formData =
                    new FormData(contactForm);


                const response =
                    await fetch(
                        contactForm.action,
                        {
                            method: "POST",
                            body: formData,
                            headers: {
                                "Accept":
                                    "application/json"
                            }
                        }
                    );


                if (!response.ok) {

                    throw new Error(
                        "Form submission failed."
                    );

                }


                if (formStatus) {

                    formStatus.textContent =
                        "Thank you! Your message has been sent successfully.";

                    formStatus.className =
                        "form-status is-success";

                }


                contactForm.reset();


            } catch (error) {

                console.error(
                    "Contact form error:",
                    error
                );


                if (formStatus) {

                    formStatus.textContent =
                        "Sorry, your message could not be sent. Please try again.";

                    formStatus.className =
                        "form-status is-error";

                }

            } finally {

                submitButton.disabled = false;

                submitButton.textContent =
                    originalText;

            }

        }
    );

}


/* =====================================================
   HEADER SCROLL EFFECT
===================================================== */

const header =
    document.querySelector(".site-header");


window.addEventListener("scroll", () => {

    if (!header) {
        return;
    }


    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 8px 30px rgba(20,30,60,.06)";

    } else {

        header.style.boxShadow =
            "none";

    }

});


/* =====================================================
   CURRENT YEAR
===================================================== */

const currentYear =
    new Date().getFullYear();


document
    .querySelectorAll(".current-year")
    .forEach((element) => {

        element.textContent =
            currentYear;

    });