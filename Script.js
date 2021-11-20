let toggleNavStatus = false;

let getSidebar = document.querySelector(".nav-sidebar");
let getSidebarUl = document.querySelector(".nav-sidebar ul");
let getSidebarHome = document.querySelector(".nav-sidebar ul li a");

const NavOpen = function () {
    getSidebar.style.visibility ="visible";
    getSidebarUl.style.visibility = "visible";
    getSidebarHome.style.visibility = "visible";
    getSidebar.style.width = "272px";
    getSidebarHome.style.opacity = "0.5";
    toggleNavStatus = true;
}

const NavClosed = function () {
    getSidebar.style.visibility ="hidden";
    getSidebarUl.style.visibility = "hidden";
    getSidebarHome.style.visibility = "hidden";
    getSidebar.style.width = "60px";
    getSidebarHome.style.opacity = "0";
    toggleNavStatus = false;
}

let toggleNav = function () {
    if (toggleNavStatus === false) {
        NavOpen ();
} else if (toggleNavStatus === true) {
        NavClosed ();
    }
}   

const backgroundHome = document.querySelector(".color-home");
const backgroundRed = document.querySelector(".color-red");
const backgroundOrange = document.querySelector(".color-orange");
const backgroundPurple = document.querySelector(".color-purple");
const backgroundGreen = document.querySelector(".color-green");

backgroundHome.addEventListener("click", function() {
    document.body.className = "background-home";
    NavClosed();
});

backgroundRed.addEventListener("click", function() {
    document.body.className = "background-red";
    NavClosed();
});

backgroundOrange.addEventListener("click", function() {
    document.body.className = "background-orange";
    NavClosed();
});

backgroundPurple.addEventListener("click", function() {
    document.body.className = "background-purple";
    NavClosed();
});

backgroundGreen.addEventListener("click", function() {
    document.body.className = "background-green";
    NavClosed();
});
