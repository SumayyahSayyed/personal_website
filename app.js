document.addEventListener("click", (e) => {
    let navElement = document.querySelector(".nav-element");

    let targetElement = e.target;

    let isClickInsideDropdown = navElement.contains(targetElement);

    if (!isClickInsideDropdown) {
        dropdownMenu.classList.add("hide");
    }

})

let hamburgerIcon = document.getElementById("hamburger-icon");
let dropdownMenu = document.getElementById("dropdown-menu");

hamburgerIcon.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hide");
})