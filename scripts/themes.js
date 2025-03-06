
/* togle style swithcer */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
//hide style switcher on scroll

//brisanje izbora na skrol
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

//boje teme
const izborTeme= document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    izborTeme.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })
}


// light i dark tema

const danNoc = document.querySelector(".day-night");
danNoc.addEventListener("click", () => {
    danNoc.querySelector("i").classList.toggle("fa-sun");
    danNoc.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        danNoc.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        danNoc.querySelector("i").classList.add("fa-moon");
    }
})
