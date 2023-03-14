const navigation = document.querySelector(".navigation");
const hamburger = document.querySelector(".hamburger");

function addActive() {
    navigation.classList.toggle("navigation-active")
}

hamburger.addEventListener("click", addActive);