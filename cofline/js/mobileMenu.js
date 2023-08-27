let Menu = document.getElementById("mobile-menu").style
let myBody = document.getElementById("hidden").style

function showMenu() {
    myBody.visibility = "none"
    myBody.overflowY = "hidden"
    Menu.display = "block"

}

function hideMenu() {
    Menu.display = "none"
    myBody.visibility = "visible"
    myBody.overflowY = "scroll"
}