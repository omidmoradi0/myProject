let coffeeShop = document.getElementById("coffeeshop").style
let mySite = document.getElementById("hidden").style
let left;

function showBox() {
    coffeeShop.left = "40%"
    mySite.overflow = "hidden"
}

function hideBox() {
    coffeeShop.left = "80%"
    mySite.overflowY = "scroll"
}