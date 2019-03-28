const menuTag = document.querySelector("div.site-header__toggle");
const closeTag = document.querySelector("div.navigation__toggle-close");
const navTag = document.querySelector("div.site-header__navigation");
const bodyTag = document.querySelector("body");

// Opens the navigation and sets body schroll to none.
menuTag.addEventListener("click", function () {
    navTag.style.display = "block";
    if (navTag.style.display = "block") {
        bodyTag.style.overflow = "hidden";
    }
});

//close's the navigation and allows user to schroll. 
closeTag.addEventListener("click", function () {
    navTag.style.display = "none";
    if (navTag.style.display = "none") {
        bodyTag.style.overflow = "scroll";
    }
});
