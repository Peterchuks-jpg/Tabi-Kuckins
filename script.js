/* ===========================
   TABI KUCKINS SCRIPT
=========================== */

// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});r

// Navbar background on scroll

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 50){

        navbar.style.background = "#4A1F77";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

    }else{

        navbar.style.background = "#5E2B97";
        navbar.style.boxShadow = "none";

    }

});

// Fade in animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

sections.forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(40px)";

    section.style.transition=".8s";

    observer.observe(section);

});

// Reservation Form

const form = document.querySelector("form");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you! Your reservation request has been received. We'll contact you shortly.");

form.reset();

});

}
